import * as yup from 'yup'
import uniqid from 'uniqid'
import Yup from '../helper/Yup'
import dateRegEx from '../helper/dateRegEx'

export type Concert = {
    id?: string
    date: string
    band: string
    supportBands: string[]
    location: string
    companions: string[]
}

export const createConcertFactory = (
    validate: Yup,
    createId: () => string,
) => (concertData: unknown): Concert => {
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
            .matches(dateRegEx)
            .required(),
        location: validate
            .string()
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
    }).noUnknown()

    const validatedConcertData = schema.validateSync(concertData)

    return Object.freeze({
        ...validatedConcertData,
    })
}

export const createConcert = createConcertFactory(yup, uniqid)

export default Concert
