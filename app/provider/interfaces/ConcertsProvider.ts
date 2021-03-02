import Concert from '../../entities/Concert'

type ConcertsProvider = (userId: string) => ({
    getAll(): Promise<unknown[]>
    getById(id: string): Promise<unknown>
    add(concert: Concert): Promise<Concert>
    update(id: string, concert: Concert): Promise<Concert>
    remove(id: string): Promise<void>
})

export default ConcertsProvider
