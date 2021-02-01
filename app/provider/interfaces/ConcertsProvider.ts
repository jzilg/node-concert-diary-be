import Concert from '../../entities/Concert'
import PropsUnknown from '../../helper/PropsUnknown'

type ConcertsProvider = {
    getAll(): Promise<PropsUnknown<Concert>[]>
    getById(id: string): Promise<PropsUnknown<Concert>>
    add(concert: Concert): Promise<Concert>
    update(id: string, concert: Concert): Promise<Concert>
    remove(id: string): Promise<void>
}

export default ConcertsProvider
