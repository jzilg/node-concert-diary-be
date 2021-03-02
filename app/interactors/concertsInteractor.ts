import { createConcert } from '../entities/Concert'
import { ConcertsInteractorFactory } from './interfaces/ConcertsInteractor'

const concertsInteractorFactory: ConcertsInteractorFactory = (concertsProvider) => (userId) => {
    const concertsOfUserProvider = concertsProvider(userId)

    return {
        async getAllConcerts() {
            const concertsData = await concertsOfUserProvider.getAll()

            return concertsData.map(createConcert)
        },

        async getConcert(id) {
            const concertData = await concertsOfUserProvider.getById(id)

            return createConcert(concertData)
        },

        storeConcert(concertData) {
            const concert = createConcert(concertData)

            return concertsOfUserProvider.add(concert)
        },

        updateConcert(id, concertData) {
            const concert = createConcert(concertData)

            return concertsOfUserProvider.update(id, concert)
        },

        deleteConcert(id) {
            return concertsOfUserProvider.remove(id)
        },
    }
}

export default concertsInteractorFactory
