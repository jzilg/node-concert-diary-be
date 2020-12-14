import uniqid from 'uniqid'
import Concert from '../entities/Concert'
import concertsProvider from '../provider/concertsProvider'

function getAllConcerts(): Promise<Concert[]> {
    return concertsProvider.getConcerts()
}

function getConcert(id: Concert['id']): Promise<Concert> {
    return concertsProvider.getConcert(id)
}

function storeConcert(date: string): Promise<Concert> {
    const concert: Concert = {
        id: uniqid(),
        date,
    }

    return concertsProvider.storeConcert(concert)
}

function updateConcert(concert: Concert): Promise<Concert> {
    return concertsProvider.updateConcert(concert)
}

function deleteConcert(id: Concert['id']): Promise<void> {
    return concertsProvider.deleteConcert(id)
}

export default {
    getAllConcerts,
    getConcert,
    storeConcert,
    updateConcert,
    deleteConcert,
}
