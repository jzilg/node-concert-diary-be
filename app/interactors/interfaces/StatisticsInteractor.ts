import { Statistics } from '../../entities'
import ConcertsProvider from '../../provider/interfaces/ConcertsProvider'
import FestivalsProvider from '../../provider/interfaces/FestivalsProvider'

type StatisticsInteractor = (userId: string) => {
    getStatistics(): Promise<Statistics>
}

type Dependencies = {
    concertsProvider: ConcertsProvider
    festivalsProvider: FestivalsProvider
}

export type StatisticsInteractorFactory = (dependencies: Dependencies) => StatisticsInteractor

export default StatisticsInteractor
