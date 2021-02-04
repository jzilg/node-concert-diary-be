import FestivalsController from './interfaces/FestivalsController'
import FestivalsInteractor from '../../interactors/interfaces/FestivalsInteractor'

const festivalsControllerFactory = (
    festivalsInteractor: FestivalsInteractor,
): FestivalsController => ({
    index(request, response, next) {
        festivalsInteractor.getAllFestivals()
            .then((festivals) => {
                response.json(festivals)
            })
            .catch(next)
    },

    show(request, response, next) {
        const { id } = request.params

        festivalsInteractor.getFestival(id)
            .then((festival) => {
                response.json(festival)
            })
            .catch(next)
    },

    store(request, response, next) {
        const festivalData = {
            bands: request.body.bands,
            name: request.body.name,
            date: request.body.date,
            companions: request.body.companions,
        }

        festivalsInteractor.storeFestival(festivalData)
            .then((storedFestival) => {
                response.status(201)
                response.json(storedFestival)
            })
            .catch(next)
    },

    update(request, response, next) {
        const { id } = request.params
        const festivalData = {
            id: request.body.id,
            bands: request.body.bands,
            name: request.body.name,
            date: request.body.date,
            companions: request.body.companions,
        }

        festivalsInteractor.updateFestival(id, festivalData)
            .then((updatedFestival) => {
                response.json(updatedFestival)
            })
            .catch(next)
    },

    destroy(request, response, next) {
        const { id } = request.params

        festivalsInteractor.deleteFestival(id)
            .then(() => {
                response.status(204)
                response.send()
            })
            .catch(next)
    },
})

export default festivalsControllerFactory
