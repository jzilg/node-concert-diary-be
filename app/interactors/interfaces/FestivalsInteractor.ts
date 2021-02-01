import Festival from '../../entities/Festival'
import PropsUnknown from '../../helper/PropsUnknown'

type FestivalsInteractor = {
    getAllFestivals(): Promise<Festival[]>
    getFestival(id: string): Promise<Festival>
    storeFestival(festivalData: PropsUnknown<Festival>): Promise<Festival>
    updateFestival(id: string, festivalData: PropsUnknown<Festival>): Promise<Festival>
    deleteFestival(id: string): Promise<void>
}

export default FestivalsInteractor
