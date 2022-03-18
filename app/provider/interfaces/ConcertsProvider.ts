import { Concert } from '../../entities'

type ConcertsProvider = (userId: string) => ({
    getAll(): Promise<Concert[]>
    getById(id: string): Promise<Concert>
    add(concert: Concert): Promise<Concert>
    update(id: string, concert: Concert): Promise<Concert>
    remove(id: string): Promise<void>
})

export default ConcertsProvider
