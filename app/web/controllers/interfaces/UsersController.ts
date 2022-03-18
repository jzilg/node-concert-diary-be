import { RequestHandler } from 'express'
import { Jwt, Login, Register } from '../../../entities'

type UsersController = {
    login: RequestHandler<{}, Jwt, Login>
    register: RequestHandler<{}, void, Register>
}

export default UsersController
