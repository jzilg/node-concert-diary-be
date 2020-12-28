import * as Yup from 'yup'
import PropsUnknown from '../../helper/PropsUnknown'
import createUser from './createUser'

export type User = {
    username: string
    password: string
}

export type UserData = PropsUnknown<User>

export default createUser(Yup)
