import { FestivalsInteractorFactory } from './interfaces/FestivalsInteractor'

const festivalsInteractorFactory: FestivalsInteractorFactory = (dependencies) => (userId) => {
    const { festivalsProvider, createId } = dependencies
    const festivalsOfUserProvider = festivalsProvider(userId)

    return {
        getAllFestivals() {
            return festivalsOfUserProvider.getAll()
        },

        getFestival(id) {
            return festivalsOfUserProvider.getById(id)
        },

        storeFestival(festival) {
            return festivalsOfUserProvider.add({
                ...festival,
                id: createId(),
            })
        },

        updateFestival(id, festival) {
            return festivalsOfUserProvider.update(id, festival)
        },

        deleteFestival(id) {
            return festivalsOfUserProvider.remove(id)
        },
    }
}

export default festivalsInteractorFactory
