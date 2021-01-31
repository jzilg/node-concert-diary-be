import createClient from '../db/createClient'
import FestivalsProvider from './interfaces/FestivalsProvider'

const DB = 'festival-diary'
const COLLECTION = 'festivals'

const festivalsProvider: FestivalsProvider = {
    async getAll() {
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
    },

    async getById(id) {
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
    },

    async add(festival) {
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
    },

    async update(id, festival) {
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
    },

    async remove(id) {
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
    },
}

export default festivalsProvider
