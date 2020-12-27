import Concert from '../entities/Concert'
import createClient from '../db/createClient'

const DB = 'concert-diary'
const COLLECTION = 'concerts'

type ConcertsProvider = {
    getConcerts: () => Promise<Concert[]>
    getConcert: (id: Concert['id']) => Promise<Concert>
    storeConcert: (concert: Concert) => Promise<Concert>
    updateConcert: (id: string, concert: Concert) => Promise<Concert>
    deleteConcert: (id: Concert['id']) => Promise<void>
}

async function getConcerts()  {
    const client = createClient();
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)
    const cursor = collection.find()

    const concerts = await cursor.toArray()

    await client.close()

    return concerts
}

async function getConcert(id: Concert['id']): Promise<Concert>  {
    const client = createClient();
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)
    const query = { id }

    const concert = await collection.findOne(query)

    await client.close()

    return concert
}

async function storeConcert(concert: Concert) {
    const client = createClient()
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)

    await collection.insertOne(concert)

    await client.close()

    return concert
}

async function updateConcert(id: string, concert: Concert) {
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

async function deleteConcert(id: Concert['id']) {
    const client = createClient()
    await client.connect()
    const db = client.db(DB)
    const collection = db.collection(COLLECTION)
    const query = { id }

    await collection.deleteOne(query)

    await client.close()
}

const concertsProvider: ConcertsProvider = {
    getConcerts,
    getConcert,
    storeConcert,
    updateConcert,
    deleteConcert,
}

export default concertsProvider
