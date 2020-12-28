import { sign, verify } from 'jsonwebtoken'
import * as authProvider from '../provider/authProvider'
import createUser, { User, UserData } from '../entities/user'

const { SECRET } = process.env

export function authenticate(userData: UserData): string | null {
    const userIsAuthenticated = authProvider.authenticate(userData as User)

    if (!userIsAuthenticated) {
        return null
    }

    return createToken(userData as User)
}

function createToken(user: User): string {
    const token = sign(user, SECRET as string, {
        expiresIn: '30m',
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
