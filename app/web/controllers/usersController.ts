import UsersController from './interfaces/UsersController'
import UsersInteractor from '../../interactors/interfaces/UsersInteractor'

const usersControllerFactory = (usersInteractor: UsersInteractor): UsersController => ({
    login(request, response) {
        const userData = {
            username: request.body.username,
            password: request.body.password,
        }

        usersInteractor.authenticate(userData)
            .then((token) => {
                response.json(token)
            })
            .catch(() => {
                response.status(401)
                response.json('Unauthorized')
            })
    },

    register(request, response, next) {
        const { token } = request.body
        const userData = {
            username: request.body.username,
            password: request.body.password,
        }

        usersInteractor.register(userData, token)
            .then(() => {
                response.status(204)
                response.send()
            })
            .catch(next)
    },
})

export default usersControllerFactory
