import Concert from '../../entities/Concert'
import PropsUnknown from '../../helper/PropsUnknown'

type ConcertsProvider = {
    getAll(): Promise<unknown[]>
    getById(id: string): Promise<unknown>
    add(concert: Concert): Promise<Concert>
    update(id: string, concert: Concert): Promise<Concert>
    remove(id: string): Promise<void>
}

export default ConcertsProvider
