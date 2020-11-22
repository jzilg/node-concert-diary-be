import { Handler } from 'express'
import Concert from '../entities/Concert'

const index: Handler = (request, response) => {
    const concerts: Concert[] = [
        { date: '03.07.2015', },
        { date: '15.06.2020', },
    ]

    return response.json(concerts)
}

export default {
    index,
}
