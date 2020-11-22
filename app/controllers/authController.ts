import { Handler } from 'express'
import User from '../entities/User'
import { createToken, verifyToken } from '../provider/authentification'

const login: Handler = (request, response) => {
    const user: User = { name: 'Johannes' }
    const token = createToken(user)

    response.json(token)
}

const verify: Handler = (request, response) => {
    const isVeryfied = verifyToken(request.params.token)

    response.send(isVeryfied)
}

export default {
    login,
    verify,
}
