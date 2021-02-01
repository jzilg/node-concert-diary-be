import User, { createUser } from '../entities/User'
import PropsUnknown from '../helper/PropsUnknown'
import AuthInteractor from './interfaces/AuthInteractor'
import AuthProvider from '../provider/interfaces/AuthProvider'
import Jwt from '../helper/Jwt'

const authInteractorFactory = (
    authProvider: AuthProvider,
    jwt: Jwt,
    secret: string,
): AuthInteractor => ({
    authenticate(userData: PropsUnknown<User>): string | null {
        const user = createUser(userData)
        const userIsAuthenticated = authProvider.authenticate(user)

        if (!userIsAuthenticated) {
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

export default authInteractorFactory
