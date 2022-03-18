import FestivalsControllerFactory from './interfaces/FestivalsController'

const festivalsControllerFactory: FestivalsControllerFactory = (festivalsInteractor) => ({
    index(request, response, next) {
        const { user } = response.locals

        festivalsInteractor(user.id).getAllFestivals()
            .then((festivals) => {
                response.json(festivals)
            })
            .catch(next)
    },

    show(request, response, next) {
        const { user } = response.locals
        const { id } = request.params

        festivalsInteractor(user.id).getFestival(id)
            .then((festival) => {
                response.json(festival)
            })
            .catch(next)
    },

    store(request, response, next) {
        const { user } = response.locals

        festivalsInteractor(user.id).storeFestival(request.body)
            .then((storedFestival) => {
                response.status(201)
                response.json(storedFestival)
            })
            .catch(next)
    },

    update(request, response, next) {
        const { user } = response.locals
        const { id } = request.params

        festivalsInteractor(user.id).updateFestival(id, request.body)
            .then((updatedFestival) => {
                response.json(updatedFestival)
            })
            .catch(next)
    },

    destroy(request, response, next) {
        const { user } = response.locals
        const { id } = request.params

        festivalsInteractor(user.id).deleteFestival(id)
            .then(() => {
                response.status(204)
                response.send()
            })
            .catch(next)
    },
})

export default festivalsControllerFactory
