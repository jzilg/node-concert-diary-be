import * as concertsProvider from '../provider/concertsProvider'
import Concert, { createConcert } from '../entities/Concert'
import PropsUnknown from '../helper/PropsUnknown'

export async function getAllConcerts(): Promise<Concert[]> {
    const concertsData = await concertsProvider.getAll()

    return concertsData.map(createConcert)
}

export async function getConcert(id: Concert['id']): Promise<Concert> {
    const concertData = await concertsProvider.getById(id)

    return createConcert(concertData)
}

export function storeConcert(concertData: PropsUnknown<Concert>): Promise<Concert> {
    const concert = createConcert(concertData)

    return concertsProvider.add(concert)
}

export function updateConcert(id: Concert['id'], concertData: PropsUnknown<Concert>): Promise<Concert> {
    const concert = createConcert(concertData)

    return concertsProvider.update(id, concert)
}

export function deleteConcert(id: Concert['id']): Promise<void> {
    return concertsProvider.remove(id)
}
