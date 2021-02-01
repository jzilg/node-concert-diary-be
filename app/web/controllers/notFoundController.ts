import { Handler } from 'express'

const notFoundController: Handler = (request, response) => {
    response.status(404)
    response.json('Not Found')
}

export default notFoundController
