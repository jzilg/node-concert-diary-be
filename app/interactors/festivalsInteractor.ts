import * as festivalsProvider from '../provider/festivalsProvider'
import Festival, { createFestival } from '../entities/Festival'
import PropsUnknown from '../helper/PropsUnknown'

export function getAllFestivals(): Promise<Festival[]> {
    return festivalsProvider.getAll()
}

export function getFestival(id: Festival['id']): Promise<Festival> {
    return festivalsProvider.getById(id)
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
