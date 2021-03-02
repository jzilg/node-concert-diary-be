import createClient from '../db/createClient'
import FestivalsProvider from './interfaces/FestivalsProvider'

const DB = 'concert-diary'
const COLLECTION = 'festivals'

const fetivalsProvider: FestivalsProvider = (userId) => {
    const collectionName = `${COLLECTION}-${userId}`

    return {
        async getAll() {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)
                const cursor = collection.find()

                const fetivals = await cursor.toArray()

                return fetivals
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

                const fetival = await collection.findOne(query)

                return fetival
            } finally {
                await client.close()
            }
        },

        async add(fetival) {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)

                await collection.insertOne({ ...fetival })

                return fetival
            } finally {
                await client.close()
            }
        },

        async update(id, fetival) {
            const client = createClient()

            try {
                await client.connect()
                const db = client.db(DB)
                const collection = db.collection(collectionName)
                const query = { id }
                const document = {
                    $set: fetival,
                }

                await collection.updateOne(query, document)

                return fetival
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

export default fetivalsProvider
