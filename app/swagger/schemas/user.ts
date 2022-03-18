import { SchemaObject } from 'openapi3-ts'

const user: SchemaObject = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        username: {
            type: 'string',
            minLength: 2,
        },
        password: {
            type: 'string',
            minLength: 6,
        },
    },
    required: [
        'id',
        'username',
        'password',
    ],
    example: {
        id: '0',
        username: 'jdoe',
        password: 'abc123',
    },
}

export default user
