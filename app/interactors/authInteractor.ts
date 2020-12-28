import { sign, verify } from 'jsonwebtoken'
import * as authProvider from '../provider/authProvider'
import createUser, { User } from '../entities/user'
import PropsUnknown from '../helper/PropsUnknown'

const { SECRET } = process.env

export function authenticate(userData: PropsUnknown<User>): string | null {
    const user = createUser(userData)
    const userIsAuthenticated = authProvider.authenticate(user)

    if (!userIsAuthenticated) {
        return null
    }

    return createToken(user)
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
