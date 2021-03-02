import { createFestival } from '../entities/Festival'
import { FestivalsInteractorFactory } from './interfaces/FestivalsInteractor'

const festivalsInteractorFactory: FestivalsInteractorFactory = (festivalsProvider) => (userId) => {
    const festivalsOfUserProvider = festivalsProvider(userId)

    return {
        async getAllFestivals() {
            const festivalsData = await festivalsOfUserProvider.getAll()

            return festivalsData.map(createFestival)
        },

        async getFestival(id) {
            const festivalData = await festivalsOfUserProvider.getById(id)

            return createFestival(festivalData)
        },

        storeFestival(festivalData) {
            const festival = createFestival(festivalData)

            return festivalsOfUserProvider.add(festival)
        },

        updateFestival(id, festivalData) {
            const festival = createFestival(festivalData)

            return festivalsOfUserProvider.update(id, festival)
        },

        deleteFestival(id) {
            return festivalsOfUserProvider.remove(id)
        },
    }
}

export default festivalsInteractorFactory
