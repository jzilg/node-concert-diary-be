import { createUser } from '../entities/User'
import UsersInteractor from './interfaces/UsersInteractor'
import UsersProvider from '../provider/interfaces/UsersProvider'
import Jwt from '../helper/Jwt'
import Bcrypt from '../helper/Bcrypt'
import RequestError from '../errors/RequestError'

const usersInteractorFactory = (
    usersProvider: UsersProvider,
    jwt: Jwt,
    jwtSecret: string,
    bcrypt: Bcrypt,
    registerToken: string,
): UsersInteractor => ({
    async authenticate(userData) {
        const user = createUser(userData)
        const storedUserData = await usersProvider.getByUsername(user.username)
        const storedUser = createUser(storedUserData)

        const match = await bcrypt.compare(user.password, storedUser.password)

        if (!match) {
            throw new Error()
        }

        const token = jwt.sign(storedUser, jwtSecret, {
            expiresIn: '30m',
        })

        return token
    },

    getUserByToken(token) {
        if (!token) {
            return undefined
        }

        try {
            const userData = jwt.verify(token, jwtSecret)

            return createUser(userData)
        } catch (error) {
            return undefined
        }
    },

    async register(userData, token) {
        if (token !== registerToken) {
            throw new RequestError('Incorrect token')
        }

        const user = createUser(userData)
        const userAlreadyExists = await usersProvider.getByUsername(user.username) !== null

        if (userAlreadyExists) {
            throw new RequestError('User already exists')
        }

        const salt = await bcrypt.genSalt()
        const encryptedPassword = await bcrypt.hash(user.password, salt)

        await usersProvider.addNewUser({
            ...user,
            password: encryptedPassword,
        })
    },
})

export default usersInteractorFactory
