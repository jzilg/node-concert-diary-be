import Festival from '../../entities/Festival'
import PropsUnknown from '../../helper/PropsUnknown'

type FestivalsProvider = {
    getAll(): Promise<unknown[]>
    getById(id: string): Promise<unknown>
    add(festival: Festival): Promise<Festival>
    update(id: string, festival: Festival): Promise<Festival>
    remove(id: string): Promise<void>
}

export default FestivalsProvider
