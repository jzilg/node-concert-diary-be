import * as yup from 'yup'
import uniqid from 'uniqid'
import Yup from '../helper/Yup'

type User = {
    id?: string
    username: string
    password: string
}

export const createUserFactory = (
    validate: Yup,
    createId: () => string,
) => (userData: unknown): User => {
    const schema = validate.object({
        id: validate
            .string()
            .default(createId()),
        username: validate
            .string()
            .min(2)
            .required(),
        password: validate
            .string()
            .min(6)
            .required(),
    })

    const validatedUser = schema.validateSync(userData)

    return Object.freeze(validatedUser)
}

export const createUser = createUserFactory(yup, uniqid)

export default User
