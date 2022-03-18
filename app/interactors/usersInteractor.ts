import { User } from '../entities'
import { UsersInteractorFactory } from './interfaces/UsersInteractor'
import RequestError from '../errors/RequestError'
import AuthorizationError from '../errors/AuthorizationError'

const usersInteractorFactory: UsersInteractorFactory = ({
    usersProvider,
    jwtLib,
    jwtSecret,
    bcrypt,
    registerToken,
    createId,
}) => ({
    async authenticate(login) {
        const storedUser = await usersProvider.getByUsername(login.username)

        if (storedUser === null) {
            throw new AuthorizationError('Unauthorized')
        }

        const match = await bcrypt.compare(login.password, storedUser.password)

        if (!match) {
            throw new AuthorizationError('Unauthorized')
        }

        const token = jwtLib.sign(storedUser, jwtSecret, {
            expiresIn: '30m',
        })

        return token
    },

    getUserByJwt(jwt) {
        if (!jwt) {
            return undefined
        }

        try {
            const user = jwtLib.verify(jwt, jwtSecret)

            return user as User
        } catch (error) {
            return undefined
        }
    },

    async register(register) {
        const { token, password, username } = register

        if (token !== registerToken) {
            throw new AuthorizationError('Incorrect token')
        }

        const userAlreadyExists = await usersProvider.getByUsername(username) !== null

        if (userAlreadyExists) {
            throw new RequestError('Username already exists')
        }

        const salt = await bcrypt.genSalt()
        const encryptedPassword = await bcrypt.hash(password, salt)

        await usersProvider.addNewUser({
            id: createId(),
            username,
            password: encryptedPassword,
        })
    },
})

export default usersInteractorFactory
