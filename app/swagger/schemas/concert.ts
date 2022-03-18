import { SchemaObject } from 'openapi3-ts'

const concert: SchemaObject = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        date: {
            type: 'string',
            pattern: '^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$',
        },
        band: {
            type: 'string',
            minLength: 1,
        },
        supportBands: {
            type: 'array',
            items: {
                type: 'string',
                minLength: 1,
            },
            uniqueItems: true,
        },
        location: {
            type: 'string',
            minLength: 1,
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
        'band',
        'supportBands',
        'location',
        'companions',
    ],
    example: {
        id: '0',
        band: 'The Cure',
        companions: [
            'John',
        ],
        date: '2001-01-01',
        location: 'C-Halle',
        supportBands: [
            'New Order',
        ],
    },
}

export default concert
