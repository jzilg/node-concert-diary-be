import AuthProvider from './interfaces/AuthProvider'

const authProvider: AuthProvider = {
    authenticate(user) {
        const { USERNAME, PASSWORD } = process.env

        return USERNAME === user.username && PASSWORD === user.password
    },
}

export default authProvider
