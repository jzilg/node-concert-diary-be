import { createUser } from '../entities/User'
import UsersInteractor from './interfaces/UsersInteractor'
import UsersProvider from '../provider/interfaces/UsersProvider'
import Jwt from '../helper/Jwt'

const usersInteractorFactory = (
    usersProvider: UsersProvider,
    jwt: Jwt,
    secret: string,
): UsersInteractor => ({
    async register(userData) {
        const user = createUser(userData)

        return user
    },

    authenticate(userData) {
        const user = createUser(userData)
        const storedUserData = usersProvider.getByUsername(user.username)
        const storedUser = createUser(storedUserData)

        if (user.password !== storedUser.password) {
            return null
        }

        const token = jwt.sign(user, secret, {
            expiresIn: '30m',
        })

        return token
    },

    verifyToken(token: string): boolean {
        if (!token) {
            return false
        }

        try {
            return typeof jwt.verify(token, secret) === 'object'
        } catch (error) {
            return false
        }
    },
})

export default usersInteractorFactory
