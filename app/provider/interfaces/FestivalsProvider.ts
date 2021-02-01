import Festival from '../../entities/Festival'
import PropsUnknown from '../../helper/PropsUnknown'

type FestivalsProvider = {
    getAll(): Promise<PropsUnknown<Festival>[]>
    getById(id: string): Promise<PropsUnknown<Festival>>
    add(festival: Festival): Promise<Festival>
    update(id: string, festival: Festival): Promise<Festival>
    remove(id: string): Promise<void>
}

export default FestivalsProvider
