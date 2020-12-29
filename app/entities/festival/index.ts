import * as yup from 'yup'
import uniqid from 'uniqid'
import createFestival from './createFestival'

export type Festival = {
    id?: string
    date: {
        from: string
        until: string
    }
    name: string
    bands: string[]
    companions: string[]
}

export default createFestival(yup, uniqid)
