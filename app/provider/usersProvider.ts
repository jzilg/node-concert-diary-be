import UsersProvider from './interfaces/UsersProvider'

const usersProvider: UsersProvider = {
    authenticate(user) {
        const { USERNAME, PASSWORD } = process.env

        return USERNAME === user.username && PASSWORD === user.password
    },
}

export default usersProvider
