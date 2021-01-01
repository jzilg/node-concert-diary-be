import * as concertsProvider from '../provider/concertsProvider'
import createConcert, { Concert } from '../entities/concert'
import PropsUnknown from '../helper/PropsUnknown'

export async function getAllConcerts(): Promise<Concert[]> {
    const concertsData = await concertsProvider.getConcerts()

    return concertsData.map(createConcert)
}

export async function getConcert(id: Concert['id']): Promise<Concert> {
    const concertData = await concertsProvider.getConcert(id)

    return createConcert(concertData)
}

export function storeConcert(concertData: PropsUnknown<Concert>): Promise<Concert> {
    const concert = createConcert(concertData)

    return concertsProvider.storeConcert(concert)
}

export function updateConcert(id: Concert['id'], concertData: PropsUnknown<Concert>): Promise<Concert> {
    const concert = createConcert(concertData)

    return concertsProvider.updateConcert(id, concert)
}

export function deleteConcert(id: Concert['id']): Promise<void> {
    return concertsProvider.deleteConcert(id)
}
