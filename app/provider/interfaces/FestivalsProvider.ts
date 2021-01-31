import Festival from '../../entities/Festival'
import PropsUnknown from '../../helper/PropsUnknown'

type FestivalsProvider = {
    getAll(): Promise<PropsUnknown<Festival>[]>
    getById(id: Festival['id']): Promise<PropsUnknown<Festival>>
    add(festival: Festival): Promise<Festival>
    update(id: Festival['id'], festival: Festival): Promise<Festival>
    remove(id: Festival['id']): Promise<void>
}

export default FestivalsProvider
