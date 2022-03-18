import { PathItemObject } from 'openapi3-ts'
import unauthorized from './responses/unauthorized'

const user: Record<string, PathItemObject> = {
    '/login': {
        post: {
            tags: ['User'],
            summary: 'Authenticate',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/login',
                        },
                    },
                },
                required: true,
            },
            responses: {
                200: {
                    description: 'User successfully authenticated',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/jwt',
                            },
                        },
                    },
                },
                401: unauthorized,
            },
        },
    },
    '/register': {
        post: {
            tags: ['User'],
            summary: 'Register',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/register',
                        },
                    },
                },
                required: true,
            },
            responses: {
                204: {
                    description: 'User successfully registered',
                },
                400: {
                    description: 'User already exists',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/error',
                            },
                        },
                    },
                },
                401: {
                    description: 'Incorrect register token',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/error',
                            },
                        },
                    },
                },
            },
        },
    },
}

export default user
