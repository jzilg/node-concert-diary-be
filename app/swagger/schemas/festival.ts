import { SchemaObject } from 'openapi3-ts'

const festival: SchemaObject = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        date: {
            type: 'object',
            properties: {
                from: {
                    type: 'string',
                    pattern: '^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$',
                },
                until: {
                    type: 'string',
                    pattern: '^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$',
                },
            },
            required: [
                'from',
                'until',
            ],
        },
        name: {
            type: 'string',
            minLength: 1,
        },
        bands: {
            type: 'array',
            items: {
                type: 'string',
                minLength: 1,
            },
            uniqueItems: true,
        },
        companions: {
            type: 'array',
            items: {
                type: 'string',
                minLength: 1,
            },
            uniqueItems: true,
        },
    },
    required: [
        'id',
        'date',
        'name',
        'bands',
        'companions',
    ],
}

export default festival
