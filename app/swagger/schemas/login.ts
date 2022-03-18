import { SchemaObject } from 'openapi3-ts'

const login: SchemaObject = {
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
    },
    required: [
        'username',
        'password',
    ],
    example: {
        username: 'jdoe',
        password: 'abc123',
    },
}

export default login
