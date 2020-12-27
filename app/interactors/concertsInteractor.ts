import uniqid from 'uniqid'
import Concert from '../entities/Concert'
import * as concertsProvider from '../provider/concertsProvider'

export function getAllConcerts(): Promise<Concert[]> {
    return concertsProvider.getConcerts()
}

export function getConcert(id: Concert['id']): Promise<Concert> {
    return concertsProvider.getConcert(id)
}

export function storeConcert({
    band,
    supportBands,
    location,
    date,
    companions,
}: Omit<Concert, 'id'>): Promise<Concert> {
    const concert: Concert = {
        id: uniqid(),
        band,
        supportBands,
        date,
        location,
        companions,
    }

    return concertsProvider.storeConcert(concert)
}

export function updateConcert(id: Concert['id'], concert: Concert): Promise<Concert> {
    return concertsProvider.updateConcert(id, concert)
}

export function deleteConcert(id: Concert['id']): Promise<void> {
    return concertsProvider.deleteConcert(id)
}
