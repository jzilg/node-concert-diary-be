import Concert from '../../entities/Concert'
import PropsUnknown from '../../helper/PropsUnknown'
import ConcertsProvider from '../../provider/interfaces/ConcertsProvider'

type ConcertsInteractor = (userId: string) => ({
    getAllConcerts(): Promise<Concert[]>
    getConcert(id: string): Promise<Concert>
    storeConcert(concertData: PropsUnknown<Concert>): Promise<Concert>
    updateConcert(id: string, concertData: PropsUnknown<Concert>): Promise<Concert>
    deleteConcert(id: string): Promise<void>
})

export type ConcertsInteractorFactory = (concertsProvider: ConcertsProvider) => ConcertsInteractor

export default ConcertsInteractor
