import UsersController from './interfaces/UsersController'
import UsersInteractor from '../../interactors/interfaces/UsersInteractor'

const usersControllerFactory = (authInteractor: UsersInteractor): UsersController => ({
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

export default usersControllerFactory
