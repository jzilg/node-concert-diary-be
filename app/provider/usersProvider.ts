import createClient from '../db/createClient'
import UsersProvider from './interfaces/UsersProvider'

const DB = 'concert-diary'
const COLLECTION = 'users'

const usersProvider: UsersProvider = {
    async getByUsername(username) {
        const client = createClient()

        try {
            await client.connect()
            const db = client.db(DB)
            const collection = db.collection(COLLECTION)
            const query = { username }

            const user = await collection.findOne(query)

            return user
        } finally {
            await client.close()
        }
    },
}

export default usersProvider
