import { Handler } from 'express'
import authInteractor from '../interactors/authInteractor'

const authMiddleware: Handler = (request, response, next) => {
    const isVeryfied = authInteractor.verifyToken(request.query.api_token as string)

    if (!isVeryfied) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    next()
}

export default authMiddleware
