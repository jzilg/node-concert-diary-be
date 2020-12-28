import * as yup from 'yup'
import { Concert } from './index'
import PropsUnknown from '../../helper/PropsUnknown'

const createConcert = (validate: typeof yup, createId: () => string) => (concertData: PropsUnknown<Concert>): Concert => {
    const schema = validate.object({
        id: validate
            .string()
            .required()
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
        ...validatedConcertData,
    })
}

export default createConcert
