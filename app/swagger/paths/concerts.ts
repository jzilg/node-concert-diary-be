import { PathItemObject } from 'openapi3-ts'
import unauthorized from './responses/unauthorized'
import security from './security'

const concerts: Record<string, PathItemObject> = {
    '/concerts': {
        get: {
            tags: ['Concerts'],
            summary: 'Load all concerts',
            responses: {
                200: {
                    description: 'Concert list successfully loaded',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    $ref: '#/components/schemas/concert',
                                },
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
        post: {
            tags: ['Concerts'],
            summary: 'Save new concert',
            responses: {
                201: {
                    description: 'Concert successfully saved',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/concert',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
    },
    '/concerts/{concertId}': {
        parameters: [
            {
                name: 'concertId',
                required: true,
                in: 'path',
                example: '0',
                schema: {
                    type: 'string',
                },
            },
        ],
        get: {
            tags: ['Concerts'],
            summary: 'Load concert by id',
            responses: {
                200: {
                    description: 'Concert successfully loaded',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/concert',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
        put: {
            tags: ['Concerts'],
            summary: 'Update concert by id',
            responses: {
                200: {
                    description: 'Concert successfully updated',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/concert',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
        delete: {
            tags: ['Concerts'],
            summary: 'Delete concert by id',
            responses: {
                204: {
                    description: 'Concert successfully deleted',
                },
                401: unauthorized,
            },
            security,
        },
    },
}

export default concerts
