import { Handler } from 'express'
import { verifyToken } from '../provider/authentification'

const authMiddleware: Handler = (request, response, next) => {
    const isVeryfied = verifyToken(request.query.token as string)

    if (!isVeryfied) {
        response.status(401)
        response.json('401: Unauthorized')
        return
    }

    next()
}

export default authMiddleware
