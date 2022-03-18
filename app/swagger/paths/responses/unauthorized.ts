import { ResponsesObject } from 'openapi3-ts'

const unauthorized: ResponsesObject = {
    description: 'User is not authorized',
    content: {
        'application/json': {
            schema: {
                $ref: '#/components/schemas/error',
            },
        },
    },
}

export default unauthorized
