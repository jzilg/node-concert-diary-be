import * as yup from 'yup'
import { User } from './index'
import PropsUnknown from '../../helper/PropsUnknown'

const createUser = (validate: typeof yup) => (userData: PropsUnknown<User>): User => {
    const schema = validate.object({
        username: validate
            .string()
            .min(2)
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
