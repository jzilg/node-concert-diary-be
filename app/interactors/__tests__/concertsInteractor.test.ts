import concertsInteractorFactory from '../concertsInteractor'
import mockConcertsProvider from '../../provider/mocks/mockConcertsProvider'
import mockConcert from '../../entities/mocks/mockConcert'

describe('concertsInteractor', () => {
    const concertsInteractor = concertsInteractorFactory({
        concertsProvider: mockConcertsProvider,
        createId: () => '123abc',
    })('0')

    describe('storeConcert', () => {
        it('should return added concert', async () => {
            const concert = await concertsInteractor.storeConcert(mockConcert)

            expect(concert).toEqual(mockConcert)
        })
    })

    describe('getAllConcerts', () => {
        it('should return list of concerts', async () => {
            const concerts = await concertsInteractor.getAllConcerts()

            expect(concerts).toEqual([
                mockConcert,
            ])
        })
    })

    describe('getConcert', () => {
        it('should return concert with id', async () => {
            const concert = await concertsInteractor.getConcert(mockConcert.id as string)

            expect(concert).toEqual(mockConcert)
        })
    })

    describe('updateConcert', () => {
        it('should return updated concert', async () => {
            const updatedConcert = await concertsInteractor.updateConcert(
                mockConcert.id as string,
                {
                    ...mockConcert,
                    companions: [
                        'Leo',
                    ],
                },
            )

            expect(updatedConcert).toEqual({
                ...mockConcert,
                companions: [
                    'Leo',
                ],
            })
        })
    })

    describe('removeConcert', () => {
        it('should remove concert', async () => {
            await concertsInteractor.deleteConcert(mockConcert.id as string)

            const concert = await concertsInteractor.deleteConcert(mockConcert.id as string)

            expect(concert).toBe(undefined)
        })
    })
})
