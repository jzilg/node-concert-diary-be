import User from '../entities/User'

function authenticate(user: User): boolean {
    const { USERNAME, PASSWORD } = process.env

    return USERNAME === user.username && PASSWORD === user.password
}

export default {
    authenticate,
}
