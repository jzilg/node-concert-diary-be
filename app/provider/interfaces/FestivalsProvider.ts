import Festival from '../../entities/Festival'

type FestivalsProvider = (userId: string) => ({
    getAll(): Promise<unknown[]>
    getById(id: string): Promise<unknown>
    add(fetival: Festival): Promise<Festival>
    update(id: string, fetival: Festival): Promise<Festival>
    remove(id: string): Promise<void>
})

export default FestivalsProvider
