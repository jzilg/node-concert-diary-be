import { MongoClient } from 'mongodb'

const { DB_CLIENT } = process.env
const createClient = (): MongoClient => new MongoClient(`${DB_CLIENT}`)

export default createClient
