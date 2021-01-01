import User from '../entities/User'

// eslint-disable-next-line import/prefer-default-export
export function authenticate(user: User): boolean {
    const { USERNAME, PASSWORD } = process.env

    return USERNAME === user.username && PASSWORD === user.password
}
