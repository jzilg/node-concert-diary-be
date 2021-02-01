import { Handler } from 'express'
import { concertsInteractor } from '../interactors'

export const index: Handler = (request, response, next) => {
    concertsInteractor.getAllConcerts()
        .then((concerts) => {
            response.json(concerts)
        })
        .catch(next)
}

export const show: Handler = (request, response, next) => {
    const { id } = request.params

    concertsInteractor.getConcert(id)
        .then((concert) => {
            response.json(concert)
        })
        .catch(next)
}

export const store: Handler = (request, response, next) => {
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
}

export const update: Handler = (request, response, next) => {
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
}

export const destroy: Handler = (request, response, next) => {
    const { id } = request.params

    concertsInteractor.deleteConcert(id)
        .then(() => {
            response.status(204)
            response.send()
        })
        .catch(next)
}
