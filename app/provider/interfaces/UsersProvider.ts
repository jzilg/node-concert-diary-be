import User from '../../entities/User'

type UsersProvider = {
    getByUsername(username: string): Promise<User>
    addNewUser(user: User): Promise<void>
}

export default UsersProvider
