import ConcertsControllerFactory from './interfaces/ConcertsController'

const concertsControllerFactory: ConcertsControllerFactory = (concertsInteractor) => ({
    index(request, response, next) {
        const { user } = response.locals

        concertsInteractor(user.id).getAllConcerts()
            .then((concerts) => {
                response.json(concerts)
            })
            .catch(next)
    },

    show(request, response, next) {
        const { user } = response.locals
        const { id } = request.params

        concertsInteractor(user.id).getConcert(id)
            .then((concert) => {
                response.json(concert)
            })
            .catch(next)
    },

    store(request, response, next) {
        const { user } = response.locals

        concertsInteractor(user.id).storeConcert(request.body)
            .then((storedConcert) => {
                response.status(201)
                response.json(storedConcert)
            })
            .catch(next)
    },

    update(request, response, next) {
        const { user } = response.locals
        const { id } = request.params

        concertsInteractor(user.id).updateConcert(id, request.body)
            .then((updatedConcert) => {
                response.json(updatedConcert)
            })
            .catch(next)
    },

    destroy(request, response, next) {
        const { user } = response.locals
        const { id } = request.params

        concertsInteractor(user.id).deleteConcert(id)
            .then(() => {
                response.status(204)
                response.send()
            })
            .catch(next)
    },
})

export default concertsControllerFactory
