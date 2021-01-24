import { Handler } from 'express'
import * as festivalsInteractor from '../interactors/festivalsInteractor'

export const index: Handler = (request, response, next) => {
    festivalsInteractor.getAllFestivals()
        .then((festivals) => {
            response.json(festivals)
        })
        .catch(next)
}

export const show: Handler = (request, response, next) => {
    const { id } = request.params

    festivalsInteractor.getFestival(id)
        .then((festival) => {
            response.json(festival)
        })
        .catch(next)
}

export const store: Handler = (request, response, next) => {
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
}

export const update: Handler = (request, response, next) => {
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
}

export const destroy: Handler = (request, response, next) => {
    const { id } = request.params

    festivalsInteractor.deleteFestival(id)
        .then(() => {
            response.status(204)
            response.send()
        })
        .catch(next)
}
