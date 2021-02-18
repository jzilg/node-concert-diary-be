import User from '../../entities/User'
import PropsUnknown from '../../helper/PropsUnknown'

type UsersInteractor = {
    register(userData: PropsUnknown<User>): Promise<User>
    authenticate(userData: PropsUnknown<User>): Promise<string>
    getUserByToken(token: string): User | undefined
}

export default UsersInteractor
