import User from '../../entities/User'
import PropsUnknown from '../../helper/PropsUnknown'

type UsersInteractor = {
    register(userData: PropsUnknown<User>): Promise<User>
    authenticate(userData: PropsUnknown<User>): Promise<string>
    verifyToken(token: string): boolean
}

export default UsersInteractor
