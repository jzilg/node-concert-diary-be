import Festival from '../../entities/Festival'
import PropsUnknown from '../../helper/PropsUnknown'
import FestivalsProvider from '../../provider/interfaces/FestivalsProvider'

type FestivalsInteractor = (userId: string) => ({
    getAllFestivals(): Promise<Festival[]>
    getFestival(id: string): Promise<Festival>
    storeFestival(festivalData: PropsUnknown<Festival>): Promise<Festival>
    updateFestival(id: string, festivalData: PropsUnknown<Festival>): Promise<Festival>
    deleteFestival(id: string): Promise<void>
})

// eslint-disable-next-line max-len
export type FestivalsInteractorFactory = (festivalsProvider: FestivalsProvider) => FestivalsInteractor

export default FestivalsInteractor
