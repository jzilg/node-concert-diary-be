import { Handler } from 'express'
import { statisticsInteractor } from '../../interactors'

const statisticsController: Handler = (request, response, next) => {
    statisticsInteractor.getStatistics()
        .then((statistics) => {
            response.json(statistics)
        })
        .catch(next)
}

export default statisticsController
