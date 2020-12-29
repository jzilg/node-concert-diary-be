import { Handler } from 'express'
import * as statisticsInteractor from '../interactors/statisticsInteractor'

const statisticsController: Handler = (request, response) => {
    statisticsInteractor.getStatistics()
        .then((statistics) => {
            response.json(statistics)
        })
        .catch((error) => {
            response.status(500)
            response.json(error)
        })
}

export default statisticsController
