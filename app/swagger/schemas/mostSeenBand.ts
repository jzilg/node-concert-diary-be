import { SchemaObject } from 'openapi3-ts'

const mostSeenBand: SchemaObject = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        mainCount: {
            type: 'number',
        },
        supportCount: {
            type: 'number',
        },
        festivalCount: {
            type: 'number',
        },
        totalCount: {
            type: 'number',
        },
    },
    required: [
        'name',
        'mainCount',
        'supportCount',
        'festivalCount',
        'totalCount',
    ],
    example: {
        name: 'Queen',
        mainCount: 1,
        supportCount: 1,
        festivalCount: 1,
        totalCount: 3,
    },
}

export default mostSeenBand
