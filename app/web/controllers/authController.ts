import AuthController from './interfaces/AuthController'
import AuthInteractor from '../../interactors/interfaces/AuthInteractor'

const authControllerFactory = (authInteractor: AuthInteractor): AuthController => ({
    login(request, response) {
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
    },
})

export default authControllerFactory
