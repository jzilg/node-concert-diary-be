import UsersController from './interfaces/UsersController'
import UsersInteractor from '../../interactors/interfaces/UsersInteractor'

const usersControllerFactory = (authInteractor: UsersInteractor): UsersController => ({
    login(request, response) {
        const userData = {
            username: request.body.username,
            password: request.body.password,
        }

        authInteractor.authenticate(userData)
            .then((token) => {
                response.json(token)
            })
            .catch(() => {
                response.status(401)
                response.json('Unauthorized')
            })
    },
})

export default usersControllerFactory
