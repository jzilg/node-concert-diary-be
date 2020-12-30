import * as concertsProvider from '../provider/concertsProvider'
import * as festivalsProvider from '../provider/festivalsProvider'
import { Concert } from '../entities/concert'
import { Festival } from '../entities/festival'

type MostSeenBand = {
    name: string
    mainCount: number
    supportCount: number
    festivalCount: number
    totalCount: number
}

type Statistics = {
    mostSeenBands: MostSeenBand[]
    totalConcertsCount: number
    totalFestivalsCount: number
    totalBandsCount: number
    totalLocationsCount: number
}

function getMostSeenBands(concerts: Concert[], festivals: Festival[]): MostSeenBand[] {
    type Band = {
        name: string
        type: 'main' | 'support' | 'festival'
    }

    const bandsFromConcerts: Band[] = concerts.reduce((accumulator, concert) => {
        const mainBand: Band = {
            name: concert.band,
            type: 'main',
        }
        const supportBands: Band[] = concert.supportBands.map((band) => ({
            name: band,
            type: 'support',
        }))

        return [
            ...accumulator,
            ...supportBands,
            mainBand,
        ]
    }, [] as Band[])

    const bandsFromFestivals: Band[] = festivals.reduce((accumulator, festival) => {
        const bands: Band[] = festival.bands.map((band) => ({
            name: band,
            type: 'festival',
        }))

        return [
            ...accumulator,
            ...bands,
        ]
    }, [] as Band[])

    const bands = [
        ...bandsFromConcerts,
        ...bandsFromFestivals,
    ]

    const toMostSeenBands = (accumulator: Record<MostSeenBand['name'], MostSeenBand>, band: Band): Record<MostSeenBand['name'], MostSeenBand> => {
        const mainCount = band.type === 'main' ? 1 : 0
        const supportCount = band.type === 'support' ? 1 : 0
        const festivalCount = band.type === 'festival' ? 1 : 0
        const totalCount = 1

        const multipleEntry = accumulator[band.name]

        const mostSeenBand: MostSeenBand = (multipleEntry) ? {
            ...multipleEntry,
            mainCount: multipleEntry.mainCount + mainCount,
            supportCount: multipleEntry.supportCount + supportCount,
            festivalCount: multipleEntry.festivalCount + festivalCount,
            totalCount: multipleEntry.totalCount + totalCount,
        } : {
            name: band.name,
            mainCount,
            supportCount,
            festivalCount,
            totalCount,
        }

        return {
            ...accumulator,
            [band.name]: mostSeenBand,
        }
    }

    const byMainCount = (band0: MostSeenBand, band1: MostSeenBand): number => (
        band1.mainCount - band0.mainCount
    )
    const byFestivalCount = (band0: MostSeenBand, band1: MostSeenBand): number => (
        band1.festivalCount - band0.festivalCount
    )
    const byTotalCount = (band0: MostSeenBand, band1: MostSeenBand): number => (
        band1.totalCount - band0.totalCount
    )

    const mostSeenBands = Object.values(bands.reduce(toMostSeenBands, {}))
        .sort(byFestivalCount)
        .sort(byMainCount)
        .sort(byTotalCount)

    return mostSeenBands
}

function getConcertsCount(concerts: Concert[]): number {
    return concerts.length
}

function getFestivalsCount(festivals: Festival[]): number {
    return festivals.length
}

function getBandsCount(concerts: Concert[], festivals: Festival[]): number {
    const bands = new Set()

    concerts.forEach((concert) => {
        bands.add(concert.band)
        concert.supportBands.forEach((supportBand) => {
            bands.add(supportBand)
        })
    })

    festivals.forEach((festival) => {
        festival.bands.forEach((supportBand) => {
            bands.add(supportBand)
        })
    })

    return bands.size
}

function getLocationsCount(concerts: Concert[]): number {
    const locations = new Set()

    concerts.forEach((concert) => {
        locations.add(concert.location)
    })

    return locations.size
}

// eslint-disable-next-line import/prefer-default-export
export async function getStatistics(): Promise<Statistics> {
    const concerts = await concertsProvider.getConcerts()
    const festivals = await festivalsProvider.getFestivals()

    return {
        mostSeenBands: getMostSeenBands(concerts, festivals),
        totalConcertsCount: getConcertsCount(concerts),
        totalFestivalsCount: getFestivalsCount(festivals),
        totalBandsCount: getBandsCount(concerts, festivals),
        totalLocationsCount: getLocationsCount(concerts),
    }
}