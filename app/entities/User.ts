import * as yup from 'yup'
import PropsUnknown from '../helper/PropsUnknown'

type User = {
    username: string
    password: string
}

export const createUserFactory = (validate: typeof yup) => (userData: PropsUnknown<User>): User => {
    const schema = validate.object({
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

    return Object.freeze({
        ...validatedUser,
    })
}

export const createUser = createUserFactory(yup)

export default User
