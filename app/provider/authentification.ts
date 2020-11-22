import { sign, verify } from 'jsonwebtoken'
import User from '../entities/User'

const { SECRET } = process.env

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
