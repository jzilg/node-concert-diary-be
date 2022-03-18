import { SchemaObject } from 'openapi3-ts'
import mostCommonCompanion from './mostCommonCompanion'
import mostSeenBand from './mostSeenBand'

const statistics: SchemaObject = {
    type: 'object',
    properties: {
        mostSeenBands: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/mostSeenBand',
            },
        },
        mostCommonCompanions: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/mostCommonCompanion',
            },
        },
        totalConcertsCount: {
            type: 'number',
        },
        totalFestivalsCount: {
            type: 'number',
        },
        totalBandsCount: {
            type: 'number',
        },
        totalLocationsCount: {
            type: 'number',
        },
    },
    required: [
        'mostSeenBands',
        'mostCommonCompanions',
        'totalConcertsCount',
        'totalFestivalsCount',
        'totalBandsCount',
        'totalLocationsCount',
    ],
    example: {
        mostSeenBands: [
            mostSeenBand.example,
        ],
        mostCommonCompanions: [
            mostCommonCompanion.example,
        ],
        totalConcertsCount: 1,
        totalFestivalsCount: 1,
        totalBandsCount: 1,
        totalLocationsCount: 1,
    },
}

export default statistics
