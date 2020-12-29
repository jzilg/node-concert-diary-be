import { Festival } from '../entities/festival'
import createClient from '../db/createClient'

const DB = 'concert-diary'
const COLLECTION = 'festivals'

export async function getFestivals(): Promise<Festival[]>  {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)
        const cursor = collection.find()

        const festivals = await cursor.toArray()

        return festivals
    } finally {
        await client.close()
    }
}

export async function getFestival(id: Festival['id']): Promise<Festival>  {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)
        const query = { id }

        const festival = await collection.findOne(query)

        return festival
    } finally {
        await client.close()
    }
}

export async function storeFestival(festival: Festival): Promise<Festival> {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)

        await collection.insertOne({ ...festival })

        return festival
    } finally {
        await client.close()
    }
}

export async function updateFestival(id: Festival['id'], festival: Festival): Promise<Festival> {
    const client = createClient()

    try {
        await client.connect()
        const db = client.db(DB)
        const collection = db.collection(COLLECTION)
        const query = { id }
        const document = {
            $set: festival,
        }

        await collection.updateOne(query, document)

        return festival
    } finally {
        await client.close()
    }
}

export async function deleteFestival(id: Festival['id']): Promise<void> {
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
