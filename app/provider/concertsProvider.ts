import createClient from '../db/createClient'
import ConcertsProvider from './interfaces/ConcertsProvider'

const DB = 'concert-diary'
const COLLECTION = 'concerts'

const concertsProvider: ConcertsProvider = (userId) => {
    const collectionName = `${COLLECTION}-${userId}`

    return {
        async getAll() {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)
                const cursor = collection.find()

                const concerts = await cursor.toArray()

                return concerts
            } finally {
                await client.close()
            }
        },

        async getById(id) {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)
                const query = { id }

                const concert = await collection.findOne(query)

                return concert
            } finally {
                await client.close()
            }
        },

        async add(concert) {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)

                await collection.insertOne({ ...concert })

                return concert
            } finally {
                await client.close()
            }
        },

        async update(id, concert) {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)
                const query = { id }
                const document = {
                    $set: concert,
                }

                await collection.updateOne(query, document)

                return concert
            } finally {
                await client.close()
            }
        },

        async remove(id) {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)
                const query = { id }

                await collection.deleteOne(query)
            } finally {
                await client.close()
            }
        },
    }
}

export default concertsProvider
