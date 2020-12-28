import * as yup from 'yup'
import { User, UserData } from './index'

const createUser = (validate: typeof yup) => (userData: UserData): User => {
    const schema = validate.object({
        username: validate
            .string()
            .min(1)
            .required(),
        password: validate
            .string()
            .min(6)
            .required()
    })

    const validatedUser = schema.validateSync(userData)

    return Object.freeze({
        ...validatedUser,
    })
}

export default createUser
