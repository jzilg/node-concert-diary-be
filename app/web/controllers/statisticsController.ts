import StatisticsController from './interfaces/StatisticsController'
import StatisticsInteractor from '../../interactors/interfaces/StatisticsInteractor'

const statisticsControllerFactory = (
    statisticsInteractor: StatisticsInteractor,
): StatisticsController => ({
    index(request, response, next) {
        statisticsInteractor.getStatistics()
            .then((statistics) => {
                response.json(statistics)
            })
            .catch(next)
    },
})

export default statisticsControllerFactory
