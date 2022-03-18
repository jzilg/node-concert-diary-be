import { SchemaObject } from 'openapi3-ts'

const register: SchemaObject = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 2,
        },
        password: {
            type: 'string',
            minLength: 6,
        },
        token: {
            type: 'string',
        },
    },
    required: [
        'username',
        'password',
        'token',
    ],
    example: {
        username: 'jdoe',
        password: 'abc123',
        token: 'qweasd',
    },
}

export default register
