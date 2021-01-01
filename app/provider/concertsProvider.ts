import { Concert } from '../entities/concert'
import createClient from '../db/createClient'
import PropsUnknown from '../helper/PropsUnknown'

const DB = 'concert-diary'
const COLLECTION = 'concerts'

export async function getConcerts(): Promise<PropsUnknown<Concert>[]> {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)
        const cursor = collection.find()

        const concerts = await cursor.toArray()

        return concerts
    } finally {
        await client.close()
    }
}

export async function getConcert(id: Concert['id']): Promise<PropsUnknown<Concert>> {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)
        const query = { id }

        const concert = await collection.findOne(query)

        return concert
    } finally {
        await client.close()
    }
}

export async function storeConcert(concert: Concert): Promise<Concert> {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)

        await collection.insertOne({ ...concert })

        return concert
    } finally {
        await client.close()
    }
}

export async function updateConcert(id: Concert['id'], concert: Concert): Promise<Concert> {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)
        const query = { id }
        const document = {
            $set: concert,
        }

        await collection.updateOne(query, document)

        return concert
    } finally {
        await client.close()
    }
}

export async function deleteConcert(id: Concert['id']): Promise<void> {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)
        const query = { id }

        await collection.deleteOne(query)
    } finally {
        await client.close()
    }
}
