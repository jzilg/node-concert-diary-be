import Concert from '../entities/Concert'
import createClient from '../db/createClient'

const DB = 'concert-diary'
const COLLECTION = 'concerts'

export async function getConcerts(): Promise<Concert[]>  {
    const client = createClient();
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)
    const cursor = collection.find()

    const concerts = await cursor.toArray()

    await client.close()

    return concerts
}

export async function getConcert(id: Concert['id']): Promise<Concert>  {
    const client = createClient();
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)
    const query = { id }

    const concert = await collection.findOne(query)

    await client.close()

    return concert
}

export async function storeConcert(concert: Concert): Promise<Concert> {
    const client = createClient()
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)

    await collection.insertOne(concert)

    await client.close()

    return concert
}

export async function updateConcert(id: string, concert: Concert): Promise<Concert> {
    const client = createClient()
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)
    const query = { id }
    const document = {
        $set: concert,
    }

    await collection.updateOne(query, document)

    await client.close()

    return concert
}

export async function deleteConcert(id: Concert['id']): Promise<void> {
    const client = createClient()
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)
    const query = { id }

    await collection.deleteOne(query)

    await client.close()
}
