import { Handler } from 'express'
import { usersInteractor } from '../../interactors'

const authMiddleware: Handler = (request, response, next) => {
    const token = request.headers.authorization?.replace('Bearer ', '') ?? ''
    const user = usersInteractor.getUserByToken(token)

    if (user === undefined) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    response.locals.user = user

    next()
}

export default authMiddleware
