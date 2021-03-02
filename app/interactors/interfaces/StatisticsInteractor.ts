import Statistics from '../../entities/Statistics'

type StatisticsInteractor = (userId: string) => {
    getStatistics(): Promise<Statistics>
}

export default StatisticsInteractor
