import { Handler } from 'express'
import concertsInteractor from '../interactors/concertsInteractor'

const index: Handler = (request, response) => {
    concertsInteractor.getAllConcerts()
        .then((concerts) => {
            response.json(concerts)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

const show: Handler = (request, response) => {
    const { id } = request.params

    concertsInteractor.getConcert(id)
        .then((concert) => {
            response.json(concert)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

const store: Handler = (request, response) => {
    const { date } = request.body

    concertsInteractor.storeConcert(date)
        .then((storedConcert) => {
            response.json(storedConcert)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

const update: Handler = (request, response) => {
    const concert = {
        ...request.body,
    }

    concertsInteractor.updateConcert(concert)
        .then((updatedConcert) => {
            response.json(updatedConcert)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

const destroy: Handler = (request, response) => {
    const { id } = request.body

    concertsInteractor.deleteConcert(id)
        .then(() => {
            response.json('Concert removed')
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export default {
    index,
    show,
    store,
    update,
    destroy,
}
