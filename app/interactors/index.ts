import jwtLib from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import uniqid from 'uniqid'
import usersProvider from '../provider/usersProvider'
import concertsProvider from '../provider/concertsProvider'
import festivalsProvider from '../provider/festivalsProvider'
import usersInteractorFactory from './usersInteractor'
import concertsInteractorFactory from './concertsInteractor'
import festivalsInteractorFactory from './festivalsInteractor'
import statisticsInteractorFactory from './statisticsInteractor'

const jwtSecret = process.env.JWT_SECRET as string
const registerToken = process.env.REGISTER_TOKEN as string

export const usersInteractor = usersInteractorFactory({
    usersProvider,
    jwtLib,
    jwtSecret,
    bcrypt,
    registerToken,
    createId: uniqid,
})

export const concertsInteractor = concertsInteractorFactory({
    concertsProvider,
    createId: uniqid,
})

export const festivalsInteractor = festivalsInteractorFactory({
    festivalsProvider,
    createId: uniqid,
})

export const statisticsInteractor = statisticsInteractorFactory({
    concertsProvider,
    festivalsProvider,
})
