import Concert from '../../entities/Concert'
import PropsUnknown from '../../helper/PropsUnknown'

type ConcertsInteractor = {
    getAllConcerts(): Promise<Concert[]>
    getConcert(id: string): Promise<Concert>
    storeConcert(concertData: PropsUnknown<Concert>): Promise<Concert>
    updateConcert(id: string, concertData: PropsUnknown<Concert>): Promise<Concert>
    deleteConcert(id: string): Promise<void>
}

export default ConcertsInteractor
