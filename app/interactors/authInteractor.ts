import { sign, verify } from 'jsonwebtoken'
import User from '../entities/User'
import authProvider from '../provider/authProvider'

const { SECRET } = process.env

export function authenticate(username: string, password: string): string | null {
    const user: User = {
        username,
        password,
    }

    const userIsAuthenticated = authProvider.authenticate(user)

    if (!userIsAuthenticated) {
        return null
    }

    return createToken(user)
}

export function createToken(user: User): string {
    const token = sign(user, SECRET as string, {
        expiresIn: '300s',
    })

    return token
}

export function verifyToken(token: string): boolean {
    if (!token) {
        return false
    }

    try {
        return typeof verify(token, SECRET as string) === 'object'
    } catch (error) {
        return false
    }
}

export default {
    authenticate,
    verifyToken,
}
