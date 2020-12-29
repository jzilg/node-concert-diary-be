import { Handler } from 'express'
import * as festivalsInteractor from '../interactors/festivalsInteractor'

export const index: Handler = (request, response) => {
    festivalsInteractor.getAllFestivals()
        .then((festivals) => {
            response.json(festivals)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const show: Handler = (request, response) => {
    const { id } = request.params

    festivalsInteractor.getFestival(id)
        .then((festival) => {
            response.json(festival)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const store: Handler = (request, response) => {
    const festivalData = {
        bands: request.body.bands,
        name: request.body.name,
        date: request.body.date,
        companions: request.body.companions,
    }

    festivalsInteractor.storeFestival(festivalData)
        .then((storedFestival) => {
            response.json(storedFestival)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const update: Handler = (request, response) => {
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
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export const destroy: Handler = (request, response) => {
    const { id } = request.params

    festivalsInteractor.deleteFestival(id)
        .then(() => {
            response.json('Festival removed')
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}
