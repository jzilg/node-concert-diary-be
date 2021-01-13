import { MongoClient } from 'mongodb'

const {
    DB_CLIENT,
    DB_AUTH_SOURCE,
    DB_AUTH_USER,
    DB_AUTH_PASSWORD,
} = process.env

const createClient = (): MongoClient => new MongoClient(DB_CLIENT as string, {
    authSource: DB_AUTH_SOURCE as string,
    auth: {
        user: DB_AUTH_USER as string,
        password: DB_AUTH_PASSWORD as string,
    },
})

export default createClient
