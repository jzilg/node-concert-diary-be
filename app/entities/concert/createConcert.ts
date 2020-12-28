import * as yup from 'yup'
import { Concert, ConcertData } from './index'

const createConcert = (validate: typeof yup, createId: () => string) => (concertData: ConcertData): Concert => {
    const schema = validate.object({
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
                .required()
            )
            .required(),
        companions: validate
            .array(validate
                .string()
                .required()
            )
            .required(),
    })

    const validatedConcertData = schema.validateSync(concertData)

    return Object.freeze({
        id: createId(),
        ...validatedConcertData,
    })
}

export default createConcert
