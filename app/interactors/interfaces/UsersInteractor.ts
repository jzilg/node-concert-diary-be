import {
    Jwt,
    Login,
    Register,
    User,
} from '../../entities'
import UsersProvider from '../../provider/interfaces/UsersProvider'
import JwtLib from '../../entities/JwtLib'
import Bcrypt from '../../entities/Bcrypt'

type UsersInteractor = {
    authenticate(login: Login): Promise<Jwt>
    getUserByJwt(jwt: Jwt): User | undefined
    register(register: Register): Promise<void>
}

type Dependencies = {
    usersProvider: UsersProvider
    jwtLib: JwtLib
    jwtSecret: string
    bcrypt: Bcrypt
    registerToken: string
    createId: () => string
}

export type UsersInteractorFactory = (dependencies: Dependencies) => UsersInteractor

export default UsersInteractor
