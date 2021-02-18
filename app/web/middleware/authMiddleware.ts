import { Handler } from 'express'
import { usersInteractor } from '../../interactors'

const authMiddleware: Handler = (request, response, next) => {
    const user = usersInteractor.getUserByToken(request.query.api_token as string)

    if (!user) {
        response.status(401)
        response.json('Unauthorized')
        return
    }

    response.locals.user = user

    next()
}

export default authMiddleware
