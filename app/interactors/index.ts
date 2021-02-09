import jwt from 'jsonwebtoken'
import usersProvider from '../provider/usersProvider'
import concertsProvider from '../provider/concertsProvider'
import festivalsProvider from '../provider/festivalsProvider'
import usersInteractorFactory from './usersInteractor'
import concertsInteractorFactory from './concertsInteractor'
import festivalsInteractorFactory from './festivalsInteractor'
import statisticsInteractorFactory from './statisticsInteractor'

const { JWT_SECRET } = process.env

export const usersInteractor = usersInteractorFactory(usersProvider, jwt, JWT_SECRET as string)
export const concertsInteractor = concertsInteractorFactory(concertsProvider)
export const festivalsInteractor = festivalsInteractorFactory(festivalsProvider)
export const statisticsInteractor = statisticsInteractorFactory(concertsProvider, festivalsProvider)
