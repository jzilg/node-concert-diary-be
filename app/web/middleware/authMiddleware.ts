import { Handler } from 'express'
import { usersInteractor } from '../../interactors'
import AuthorizationError from '../../errors/AuthorizationError'

const authMiddleware: Handler = (request, response, next) => {
    const jwt = request.headers.authorization?.replace('Bearer ', '') ?? ''
    const user = usersInteractor.getUserByJwt(jwt)

    if (user === undefined) {
        throw new AuthorizationError('Unauthorized')
    }

    response.locals.user = user

    next()
}

export default authMiddleware
