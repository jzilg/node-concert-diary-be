import { Handler } from 'express'
import * as authInteractor from '../interactors/authInteractor'

export const login: Handler = (request, response) => {
    const { username, password } = request.body
    const token = authInteractor.authenticate(username, password)

    if (token === null) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    response.json(token)
}
