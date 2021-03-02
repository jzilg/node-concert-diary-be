import Statistics from '../../entities/Statistics'
import ConcertsProvider from '../../provider/interfaces/ConcertsProvider'
import FestivalsProvider from '../../provider/interfaces/FestivalsProvider'

type StatisticsInteractor = (userId: string) => {
    getStatistics(): Promise<Statistics>
}

export type StatisticsInteractorFactory = (
    concertsProvider: ConcertsProvider,
    festivalsProvider: FestivalsProvider,
) => StatisticsInteractor

export default StatisticsInteractor
