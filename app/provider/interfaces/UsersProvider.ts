import User from '../../entities/User'

type UsersProvider = {
    authenticate(user: User): boolean
}

export default UsersProvider
