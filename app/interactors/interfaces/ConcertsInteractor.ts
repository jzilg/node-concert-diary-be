import { Concert } from '../../entities'
import ConcertsProvider from '../../provider/interfaces/ConcertsProvider'

type ConcertsInteractor = (userId: string) => ({
    getAllConcerts(): Promise<Concert[]>
    getConcert(id: string): Promise<Concert>
    storeConcert(concert: Concert): Promise<Concert>
    updateConcert(id: string, concertData: Concert): Promise<Concert>
    deleteConcert(id: string): Promise<void>
})

type Dependencies = {
    concertsProvider: ConcertsProvider
    createId: () => string
}

export type ConcertsInteractorFactory = (dependencies: Dependencies) => ConcertsInteractor

export default ConcertsInteractor
