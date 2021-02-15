import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import usersProvider from '../provider/usersProvider'
import concertsProvider from '../provider/concertsProvider'
import festivalsProvider from '../provider/festivalsProvider'
import usersInteractorFactory from './usersInteractor'
import concertsInteractorFactory from './concertsInteractor'
import festivalsInteractorFactory from './festivalsInteractor'
import statisticsInteractorFactory from './statisticsInteractor'

const jwtSecret = process.env.JWT_SECRET as string

export const usersInteractor = usersInteractorFactory(usersProvider, jwt, jwtSecret, bcrypt)
export const concertsInteractor = concertsInteractorFactory(concertsProvider)
export const festivalsInteractor = festivalsInteractorFactory(festivalsProvider)
export const statisticsInteractor = statisticsInteractorFactory(concertsProvider, festivalsProvider)
