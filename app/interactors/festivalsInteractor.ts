import { createFestival } from '../entities/Festival'
import FestivalsProvider from '../provider/interfaces/FestivalsProvider'
import FestivalsInteractor from './interfaces/FestivalsInteractor'

const festivalsInteractorFactory = (festivalsProvider: FestivalsProvider): FestivalsInteractor => ({
    async getAllFestivals() {
        const festivalsData = await festivalsProvider.getAll()

        return festivalsData.map(createFestival)
    },

    async getFestival(id) {
        const festivalData = await festivalsProvider.getById(id)

        return createFestival(festivalData)
    },

    storeFestival(festivalData) {
        const festival = createFestival(festivalData)

        return festivalsProvider.add(festival)
    },

    updateFestival(id, festivalData) {
        const festival = createFestival(festivalData)

        return festivalsProvider.update(id, festival)
    },

    deleteFestival(id) {
        return festivalsProvider.remove(id)
    },
})

export default festivalsInteractorFactory
