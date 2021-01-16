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
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const update: Handler = (request, response) => {
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
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const destroy: Handler = (request, response) => {
    const { id } = request.params

    concertsInteractor.deleteConcert(id)
        .then(() => {
            response.status(204)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}
