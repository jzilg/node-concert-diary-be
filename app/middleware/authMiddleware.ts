import { Handler } from 'express'
import { authInteractor } from '../interactors'

const authMiddleware: Handler = (request, response, next) => {
    const isVerified = authInteractor.verifyToken(request.query.api_token as string)

    if (!isVerified) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    next()
}

export default authMiddleware
