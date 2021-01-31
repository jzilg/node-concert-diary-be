import User from '../../entities/User'

type AuthProvider = {
    authenticate(user: User): boolean
}

export default AuthProvider
