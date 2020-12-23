import { Handler } from 'express'
import authInteractor from '../interactors/authInteractor'

const login: Handler = (request, response) => {
    const { username, password } = request.body
    const token = authInteractor.authenticate(username, password)

    if (token === null) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    response.json(token)
}

const verify: Handler = (request, response) => {
    const isVeryfied = authInteractor.verifyToken(request.params.token)

    response.send(isVeryfied)
}

export default {
    login,
    verify,
}
