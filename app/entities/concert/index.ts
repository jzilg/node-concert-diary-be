import * as Yup from 'yup'
import uniqid from 'uniqid'
import createConcert from './createConcert'
import PropsUnknown from '../../helper/PropsUnknown'

export type Concert = {
    id: string
    date: string
    band: string
    supportBands: string[]
    location: string
    companions: string[]
}

export type ConcertData = Omit<PropsUnknown<Concert>, 'id'>

export default createConcert(Yup, uniqid)
