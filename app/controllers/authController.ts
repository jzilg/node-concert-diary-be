import { Handler } from 'express'
import * as authInteractor from '../interactors/authInteractor'

export const login: Handler = (request, response) => {
    const {
        username,
        password,
    } = request.body
    const userData = {
        username,
        password,
    }

    const token = authInteractor.authenticate(userData)

    if (token === null) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    response.json(token)
}
