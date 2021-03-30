import { Handler } from 'express'

type UsersController = {
    login: Handler
    register: Handler
}

export default UsersController
