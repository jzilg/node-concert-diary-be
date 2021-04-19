import Concert, { createConcert } from '../entities/Concert'
import Festival, { createFestival } from '../entities/Festival'
import MostSeenBand from '../entities/MostSeenBand'
import { StatisticsInteractorFactory } from './interfaces/StatisticsInteractor'
import MostCommonCompanion from '../entities/MostCommonCompanion'
import countDuplicates from './helpers/countDuplicates'

function calcMostSeenBands(concerts: Concert[], festivals: Festival[]): MostSeenBand[] {
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

    return Object.values(bands.reduce(toMostSeenBands, {}))
        .sort((x, y) => y.festivalCount - x.festivalCount)
        .sort((x, y) => y.mainCount - x.mainCount)
        .sort((x, y) => y.totalCount - x.totalCount)
}

function calcConcertsCount(concerts: Concert[]): number {
    return concerts.length
}

function calcFestivalsCount(festivals: Festival[]): number {
    return festivals.length
}

function calcBandsCount(concerts: Concert[], festivals: Festival[]): number {
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

function calcLocationsCount(concerts: Concert[]): number {
    const locations = new Set()

    concerts.forEach((concert) => {
        locations.add(concert.location)
    })

    return locations.size
}

function calcMostCommonCompanions(
    concerts: Concert[],
    festivals: Festival[],
): MostCommonCompanion[] {
    const concertCompanions = concerts.flatMap((concert) => concert.companions)
    const concertCompanionsCounts = countDuplicates(concertCompanions)
    const festivalCompanions = festivals.flatMap((festival) => festival.companions)
    const festivalCompanionsCounts = countDuplicates(festivalCompanions)
    const companions = [...new Set([
        ...concertCompanions,
        ...festivalCompanions,
    ])]

    return companions
        .map((companion) => ({
            name: companion,
            concertCount: concertCompanionsCounts[companion],
            festivalCount: festivalCompanionsCounts[companion],
            totalCount: (
                (concertCompanionsCounts[companion] ?? 0)
                + (festivalCompanionsCounts[companion] ?? 0)
            ),
        }))
        .sort((x, y) => y.totalCount - x.totalCount)
}

// eslint-disable-next-line max-len
const statisticsInteractorFactory: StatisticsInteractorFactory = (concertsProvider, festivalsProvider) => (userId) => ({
    async getStatistics() {
        const concertsData = await concertsProvider(userId).getAll()
        const concerts = concertsData.map(createConcert)
        const festivalsData = await festivalsProvider(userId).getAll()
        const festivals = festivalsData.map(createFestival)

        return {
            mostSeenBands: calcMostSeenBands(concerts, festivals),
            mostCommonCompanions: calcMostCommonCompanions(concerts, festivals),
            totalConcertsCount: calcConcertsCount(concerts),
            totalFestivalsCount: calcFestivalsCount(festivals),
            totalBandsCount: calcBandsCount(concerts, festivals),
            totalLocationsCount: calcLocationsCount(concerts),
        }
    },
})

export default statisticsInteractorFactory
