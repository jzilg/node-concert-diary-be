import jwt from 'jsonwebtoken'
import authProvider from '../provider/authProvider'
import concertsProvider from '../provider/concertsProvider'
import festivalsProvider from '../provider/festivalsProvider'
import authInteractorFactory from './authInteractor'
import concertsInteractorFactory from './concertsInteractor'
import festivalsInteractorFactory from './festivalsInteractor'
import statisticsInteractorFactory from './statisticsInteractor'

const { JWT_SECRET } = process.env

export const authInteractor = authInteractorFactory(authProvider, jwt, JWT_SECRET as string)
export const concertsInteractor = concertsInteractorFactory(concertsProvider)
export const festivalsInteractor = festivalsInteractorFactory(festivalsProvider)
export const statisticsInteractor = statisticsInteractorFactory(concertsProvider, festivalsProvider)
