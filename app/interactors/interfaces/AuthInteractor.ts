import PropsUnknown from '../../helper/PropsUnknown'
import User from '../../entities/User'

type AuthInteractor = {
    authenticate(userData: PropsUnknown<User>): string | null
    verifyToken(token: string): boolean
}

export default AuthInteractor
