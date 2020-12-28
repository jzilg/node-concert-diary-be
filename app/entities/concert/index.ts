import * as yup from 'yup'
import uniqid from 'uniqid'
import createConcert from './createConcert'

export type Concert = {
    id?: string
    date: string
    band: string
    supportBands: string[]
    location: string
    companions: string[]
}

export default createConcert(yup, uniqid)
