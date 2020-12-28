import { User } from '../entities/user'

export function authenticate(user: User): boolean {
    const { USERNAME, PASSWORD } = process.env

    return USERNAME === user.username && PASSWORD === user.password
}
