import { createUser } from '../entities/User'
import UsersInteractor from './interfaces/UsersInteractor'
import UsersProvider from '../provider/interfaces/UsersProvider'
import Jwt from '../helper/Jwt'
import Bcrypt from '../helper/Bcrypt'

const usersInteractorFactory = (
    usersProvider: UsersProvider,
    jwt: Jwt,
    jwtSecret: string,
    bcrypt: Bcrypt,
): UsersInteractor => ({
    async register(userData) {
        const user = createUser(userData)

        return user
    },

    async authenticate(userData) {
        const user = createUser(userData)
        const storedUserData = await usersProvider.getByUsername(user.username)
        const storedUser = createUser(storedUserData)

        const match = await bcrypt.compare(user.password, storedUser.password)

        if (!match) {
            throw new Error()
        }

        const token = jwt.sign(user, jwtSecret, {
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
})

export default usersInteractorFactory
