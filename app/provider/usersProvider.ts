import UsersProvider from './interfaces/UsersProvider'

const usersProvider: UsersProvider = {
    getByUsername() {
        const { USERNAME, PASSWORD } = process.env

        return {
            username: USERNAME as string,
            password: PASSWORD as string,
        }
    },
}

export default usersProvider
