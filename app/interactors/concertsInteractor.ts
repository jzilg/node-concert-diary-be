import { ConcertsInteractorFactory } from './interfaces/ConcertsInteractor'

const concertsInteractorFactory: ConcertsInteractorFactory = (dependencies) => (userId) => {
    const { concertsProvider, createId } = dependencies
    const concertsOfUserProvider = concertsProvider(userId)

    return {
        getAllConcerts() {
            return concertsOfUserProvider.getAll()
        },

        getConcert(id) {
            return concertsOfUserProvider.getById(id)
        },

        storeConcert(concert) {
            return concertsOfUserProvider.add({
                ...concert,
                id: createId(),
            })
        },

        updateConcert(id, concert) {
            return concertsOfUserProvider.update(id, concert)
        },

        deleteConcert(id) {
            return concertsOfUserProvider.remove(id)
        },
    }
}

export default concertsInteractorFactory
