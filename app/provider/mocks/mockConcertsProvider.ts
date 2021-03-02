import ConcertsProvider from '../interfaces/ConcertsProvider'
import Concert from '../../entities/Concert'
import PropsUnknown from '../../helper/PropsUnknown'

const storage: Set<Concert> = new Set()

const mockConcertsProvider: ConcertsProvider = (userId) => ({
    async getAll() {
        return Array.from(storage)
    },

    async add(concert) {
        storage.add(concert)

        return concert
    },

    async getById(id) {
        return Array.from(storage).find((concert) => concert.id === id) as PropsUnknown<Concert>
    },

    async update(id, concertToUpdate) {
        const concertToRemove = Array.from(storage).find(
            (concert) => concert.id === id,
        )

        storage.delete(concertToRemove as Concert)
        storage.add(concertToUpdate)

        return concertToUpdate
    },

    async remove(id) {
        const concertToRemove = Array.from(storage).find(
            (concert) => concert.id === id,
        )

        storage.delete(concertToRemove as Concert)
    },
})

export default mockConcertsProvider
