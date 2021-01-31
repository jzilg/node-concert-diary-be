import festivalsProvider from '../provider/festivalsProvider'
import Festival, { createFestival } from '../entities/Festival'
import PropsUnknown from '../helper/PropsUnknown'

export async function getAllFestivals(): Promise<Festival[]> {
    const festivalsData = await festivalsProvider.getAll()

    return festivalsData.map(createFestival)
}

export async function getFestival(id: Festival['id']): Promise<Festival> {
    const festivalData = await festivalsProvider.getById(id)

    return createFestival(festivalData)
}

export function storeFestival(festivalData: PropsUnknown<Festival>): Promise<Festival> {
    const festival = createFestival(festivalData)

    return festivalsProvider.add(festival)
}

export function updateFestival(id: Festival['id'], festivalData: PropsUnknown<Festival>): Promise<Festival> {
    const festival = createFestival(festivalData)

    return festivalsProvider.update(id, festival)
}

export function deleteFestival(id: Festival['id']): Promise<void> {
    return festivalsProvider.remove(id)
}
