import User from '../../entities/User'

type UsersProvider = {
    getByUsername(username: string): User
}

export default UsersProvider
