import concertsControllerFactory from './concertsController'
import festivalsControllerFactory from './festivalsController'
import authControllerFactory from './authController'
import statisticsControllerFactory from './statisticsController'
import {
    authInteractor,
    concertsInteractor,
    festivalsInteractor,
    statisticsInteractor,
} from '../../interactors'

export const authController = authControllerFactory(authInteractor)
export const concertsController = concertsControllerFactory(concertsInteractor)
export const festivalsController = festivalsControllerFactory(festivalsInteractor)
export const statisticsController = statisticsControllerFactory(statisticsInteractor)
