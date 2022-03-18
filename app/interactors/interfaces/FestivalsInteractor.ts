import { Festival } from '../../entities'
import FestivalsProvider from '../../provider/interfaces/FestivalsProvider'

type FestivalsInteractor = (userId: string) => ({
    getAllFestivals(): Promise<Festival[]>
    getFestival(id: string): Promise<Festival>
    storeFestival(festival: Festival): Promise<Festival>
    updateFestival(id: string, festivalData: Festival): Promise<Festival>
    deleteFestival(id: string): Promise<void>
})

type Dependencies = {
    festivalsProvider: FestivalsProvider
    createId: () => string
}

export type FestivalsInteractorFactory = (dependencies: Dependencies) => FestivalsInteractor

export default FestivalsInteractor
