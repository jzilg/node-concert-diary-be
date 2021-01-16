import { Handler } from 'express'
import * as statisticsInteractor from '../interactors/statisticsInteractor'

const statisticsController: Handler = (request, response, next) => {
    statisticsInteractor.getStatistics()
        .then((statistics) => {
            response.json(statistics)
        })
        .catch(next)
}

export default statisticsController
