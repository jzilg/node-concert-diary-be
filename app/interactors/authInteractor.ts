import { sign, verify } from 'jsonwebtoken'
import authProvider from '../provider/authProvider'
import User, { createUser } from '../entities/User'
import PropsUnknown from '../helper/PropsUnknown'

const { JWT_SECRET } = process.env

function createToken(user: User): string {
    const token = sign(user, JWT_SECRET as string, {
        expiresIn: '30m',
    })

    return token
}

export function authenticate(userData: PropsUnknown<User>): string | null {
    const user = createUser(userData)
    const userIsAuthenticated = authProvider.authenticate(user)

    if (!userIsAuthenticated) {
        return null
    }

    return createToken(user)
}

export function verifyToken(token: string): boolean {
    if (!token) {
        return false
    }

    try {
        return typeof verify(token, JWT_SECRET as string) === 'object'
    } catch (error) {
        return false
    }
}
