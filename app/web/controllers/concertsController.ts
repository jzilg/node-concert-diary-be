import ConcertsController from './interfaces/ConcertsController'
import ConcertsInteractor from '../../interactors/interfaces/ConcertsInteractor'

const concertsControllerFactory = (concertsInteractor: ConcertsInteractor): ConcertsController => ({
    index(request, response, next) {
        concertsInteractor.getAllConcerts()
            .then((concerts) => {
                response.json(concerts)
            })
            .catch(next)
    },

    show(request, response, next) {
        const { id } = request.params

        concertsInteractor.getConcert(id)
            .then((concert) => {
                response.json(concert)
            })
            .catch(next)
    },

    store(request, response, next) {
        const concertData = {
            band: request.body.band,
            supportBands: request.body.supportBands,
            location: request.body.location,
            date: request.body.date,
            companions: request.body.companions,
        }

        concertsInteractor.storeConcert(concertData)
            .then((storedConcert) => {
                response.status(201)
                response.json(storedConcert)
            })
            .catch(next)
    },

    update(request, response, next) {
        const { id } = request.params
        const concertData = {
            id: request.body.id,
            band: request.body.band,
            supportBands: request.body.supportBands,
            location: request.body.location,
            date: request.body.date,
            companions: request.body.companions,
        }

        concertsInteractor.updateConcert(id, concertData)
            .then((updatedConcert) => {
                response.json(updatedConcert)
            })
            .catch(next)
    },

    destroy(request, response, next) {
        const { id } = request.params

        concertsInteractor.deleteConcert(id)
            .then(() => {
                response.status(204)
                response.send()
            })
            .catch(next)
    },
})

export default concertsControllerFactory
