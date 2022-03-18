import { SchemaObject } from 'openapi3-ts'

const error: SchemaObject = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'An Error occurred',
        },
        error: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                status: {
                    type: 'number',
                },
                path: {
                    type: 'string',
                },
                errors: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            path: {
                                type: 'string',
                            },
                            message: {
                                type: 'string',
                            },
                            errorCode: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
            example: {
                name: 'Bad request',
                status: 400,
                path: '/login',
                errors: [
                    {
                        path: '.body.username',
                        message: 'should have required property \'username\'',
                        errorCode: 'required.openapi.validation',
                    },
                ],
            },
        },
    },
    required: [
        'message',
        'error',
    ],
}

export default error
