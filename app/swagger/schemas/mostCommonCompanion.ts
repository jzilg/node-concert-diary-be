import { SchemaObject } from 'openapi3-ts'

const mostCommonCompanion: SchemaObject = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        concertCount: {
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
        'concertCount',
        'festivalCount',
        'totalCount',
    ],
    example: {
        name: 'John',
        concertCount: 1,
        festivalCount: 1,
        totalCount: 2,
    },
}

export default mostCommonCompanion
