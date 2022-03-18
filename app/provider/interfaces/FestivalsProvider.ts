import { Festival } from '../../entities'

type FestivalsProvider = (userId: string) => ({
    getAll(): Promise<Festival[]>
    getById(id: string): Promise<Festival>
    add(fetival: Festival): Promise<Festival>
    update(id: string, fetival: Festival): Promise<Festival>
    remove(id: string): Promise<void>
})

export default FestivalsProvider
