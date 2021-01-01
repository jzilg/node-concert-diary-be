import * as yup from 'yup'
import uniqid from 'uniqid'
import PropsUnknown from '../helper/PropsUnknown'

export type Concert = {
    id?: string
    date: string
    band: string
    supportBands: string[]
    location: string
    companions: string[]
}

export const createConcertFactory = (
    validate: typeof yup,
    createId: () => string,
) => (concertData: PropsUnknown<Concert>): Concert => {
    const schema = validate.object({
        id: validate
            .string()
            .default(createId()),
        band: validate
            .string()
            .min(1)
            .required(),
        date: validate
            .string()
            .min(1)
            .required(),
        location: validate
            .string()
            .min(1)
            .required(),
        supportBands: validate
            .array(validate
                .string()
                .required())
            .required(),
        companions: validate
            .array(validate
                .string()
                .required())
            .required(),
    })

    const validatedConcertData = schema.validateSync(concertData)

    return Object.freeze({
        ...validatedConcertData,
    })
}

export const createConcert = createConcertFactory(yup, uniqid)

export default Concert
