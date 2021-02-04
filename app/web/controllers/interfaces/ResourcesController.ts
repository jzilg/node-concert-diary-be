import { Handler } from 'express'

type ResourcesController = {
    index: Handler
    show: Handler
    store: Handler
    update: Handler
    destroy: Handler
}

export default ResourcesController
