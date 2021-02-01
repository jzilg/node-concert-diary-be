import Statistics from '../../entities/Statistics'

type StatisticsInteractor = {
    getStatistics(): Promise<Statistics>
}

export default StatisticsInteractor
