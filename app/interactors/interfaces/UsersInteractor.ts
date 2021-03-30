import User from '../../entities/User'
import PropsUnknown from '../../helper/PropsUnknown'

type UsersInteractor = {
    authenticate(userData: PropsUnknown<User>): Promise<string>
    getUserByToken(token: string): User | undefined
    register(userData: PropsUnknown<User>, token: string): Promise<void>
}

export default UsersInteractor
