import User from '../../entities/User'

type UsersProvider = {
    getByUsername(username: string): Promise<User>
}

export default UsersProvider
