import { PathItemObject } from 'openapi3-ts'
import unauthorized from './responses/unauthorized'
import security from './security'

const festivals: Record<string, PathItemObject> = {
    '/festivals': {
        get: {
            tags: ['Festivals'],
            summary: 'Load all festivals',
            responses: {
                200: {
                    description: 'Festival list successfully loaded',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    $ref: '#/components/schemas/festival',
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
            tags: ['Festivals'],
            summary: 'Save new festival',
            responses: {
                201: {
                    description: 'Festival successfully saved',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/festival',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
    },
    '/festivals/{festivalId}': {
        parameters: [
            {
                name: 'festivalId',
                required: true,
                in: 'path',
                example: '0',
                schema: {
                    type: 'string',
                },
            },
        ],
        get: {
            tags: ['Festivals'],
            summary: 'Load festival by id',
            responses: {
                200: {
                    description: 'Festival successfully loaded',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/festival',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
        put: {
            tags: ['Festivals'],
            summary: 'Update festival by id',
            responses: {
                200: {
                    description: 'Festival successfully updated',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/festival',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
        delete: {
            tags: ['Festivals'],
            summary: 'Delete festival by id',
            responses: {
                204: {
                    description: 'Festival successfully deleted',
                },
                401: unauthorized,
            },
            security,
        },
    },
}

export default festivals
