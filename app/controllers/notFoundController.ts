import { Handler } from "express"

const notFoundController: Handler = (request, response) => {
    response.status(404)
    response.json('404: Resource Not Found')
}

export default notFoundController
