import { RequestHandler } from 'express'

type ResourcesController<Entity = {}> = {
    index: RequestHandler<{}, Entity[]>
    show: RequestHandler<{ id: string }, Entity>
    store: RequestHandler<{}, Entity, Entity>
    update: RequestHandler<{ id: string }, Entity, Entity>
    destroy: RequestHandler<{ id: string }>
}

export default ResourcesController
