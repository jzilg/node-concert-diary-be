import { Handler } from 'express'
import * as concertsInteractor from '../interactors/concertsInteractor'

export const index: Handler = (request, response) => {
    concertsInteractor.getAllConcerts()
        .then((concerts) => {
            response.json(concerts)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const show: Handler = (request, response) => {
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

export const store: Handler = (request, response) => {
    const {
        band,
        supportBands,
        location,
        date,
        companions,
    } = request.body

    concertsInteractor.storeConcert({
        band,
        supportBands,
        location,
        date,
        companions,
    })
        .then((storedConcert) => {
            response.json(storedConcert)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const update: Handler = (request, response) => {
    const { id } = request.params
    const concert = {
        ...request.body,
    }

    concertsInteractor.updateConcert(id, concert)
        .then((updatedConcert) => {
            response.json(updatedConcert)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const destroy: Handler = (request, response) => {
    const { id } = request.params

    concertsInteractor.deleteConcert(id)
        .then(() => {
            response.json('Concert removed')
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}
