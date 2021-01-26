import * as yup from 'yup'
import uniqid from 'uniqid'
import PropsUnknown from '../helper/PropsUnknown'

type Festival = {
    id?: string
    date: {
        from: string
        until: string
    }
    name: string
    bands: string[]
    companions: string[]
}

export const createFestivalFactory = (
    validate: typeof yup,
    createId: () => string,
) => (festivalData: PropsUnknown<Festival>): Festival => {
    const schema = validate.object({
        id: validate
            .string()
            .default(createId()),
        date: validate
            .object({
                from: validate
                    .string()
                    .matches(/^[0-3][0-9].[0-1][0-9].[0-9]{4}$/)
                    .required(),
                until: validate
                    .string()
                    .matches(/^[0-3][0-9].[0-1][0-9].[0-9]{4}$/)
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

export const createFestival = createFestivalFactory(yup, uniqid)

export default Festival
