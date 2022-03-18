import UsersController from './interfaces/UsersController'
import UsersInteractor from '../../interactors/interfaces/UsersInteractor'

const usersControllerFactory = (usersInteractor: UsersInteractor): UsersController => ({
    login(request, response, next) {
        usersInteractor.authenticate(request.body)
            .then((token) => {
                response.json(token)
            })
            .catch(next)
    },

    register(request, response, next) {
        usersInteractor.register(request.body)
            .then(() => {
                response.status(204)
                response.send()
            })
            .catch(next)
    },
})

export default usersControllerFactory
