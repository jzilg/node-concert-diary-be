import * as yup from 'yup'
import { Festival } from './index'
import PropsUnknown from '../../helper/PropsUnknown'

const createFestival = (
    validate: typeof yup,
    createId: () => string,
) => (festivalData: PropsUnknown<Festival>): Festival => {
    const schema = validate.object({
        id: validate
            .string()
            .required()
            .default(createId()),
        date: validate
            .object({
                from: validate
                    .string()
                    .min(1)
                    .required(),
                until: validate
                    .string()
                    .min(1)
                    .required(),
            }),
        name: validate
            .string()
            .min(1)
            .required(),
        bands: validate
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

    const validatedFestivalData = schema.validateSync(festivalData)

    return Object.freeze({
        ...validatedFestivalData,
    })
}

export default createFestival
