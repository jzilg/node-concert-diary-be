import { PathItemObject } from 'openapi3-ts'
import unauthorized from './responses/unauthorized'
import security from './security'

const statistics: Record<string, PathItemObject> = {
    '/statistics': {
        get: {
            tags: ['Statistics'],
            summary: 'Loads all statistics',
            responses: {
                200: {
                    description: 'Statistics successfully loaded',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/statistics',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
            security,
        },
    },
}

export default statistics
