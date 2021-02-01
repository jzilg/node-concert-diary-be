import { createConcert } from '../entities/Concert'
import ConcertsProvider from '../provider/interfaces/ConcertsProvider'
import ConcertsInteractor from './interfaces/ConcertsInteractor'

const concertsInteractorFactory = (concertsProvider: ConcertsProvider): ConcertsInteractor => ({
    async getAllConcerts() {
        const concertsData = await concertsProvider.getAll()

        return concertsData.map(createConcert)
    },

    async getConcert(id) {
        const concertData = await concertsProvider.getById(id)

        return createConcert(concertData)
    },

    storeConcert(concertData) {
        const concert = createConcert(concertData)

        return concertsProvider.add(concert)
    },

    updateConcert(id, concertData) {
        const concert = createConcert(concertData)

        return concertsProvider.update(id, concert)
    },

    deleteConcert(id) {
        return concertsProvider.remove(id)
    },
})

export default concertsInteractorFactory
