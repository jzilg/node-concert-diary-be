import { Handler } from 'express'
import * as authInteractor from '../interactors/authInteractor'

// eslint-disable-next-line import/prefer-default-export
export const login: Handler = (request, response) => {
    const userData = {
        username: request.body.username,
        password: request.body.password,
    }

    const token = authInteractor.authenticate(userData)

    if (token === null) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    response.json(token)
}
