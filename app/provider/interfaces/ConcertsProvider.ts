import Concert from '../../entities/Concert'
import PropsUnknown from '../../helper/PropsUnknown'

type ConcertsProvider = {
    getAll(): Promise<PropsUnknown<Concert>[]>
    getById(id: Concert['id']): Promise<PropsUnknown<Concert>>
    add(concert: Concert): Promise<Concert>
    update(id: Concert['id'], concert: Concert): Promise<Concert>
    remove(id: Concert['id']): Promise<void>
}

export default ConcertsProvider
