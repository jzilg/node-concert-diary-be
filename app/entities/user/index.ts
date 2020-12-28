import * as yup from 'yup'
import createUser from './createUser'

export type User = {
    username: string
    password: string
}

export default createUser(yup)
