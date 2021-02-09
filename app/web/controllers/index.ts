import concertsControllerFactory from './concertsController'
import festivalsControllerFactory from './festivalsController'
import usersControllerFactory from './usersController'
import statisticsControllerFactory from './statisticsController'
import {
    usersInteractor,
    concertsInteractor,
    festivalsInteractor,
    statisticsInteractor,
} from '../../interactors'

export const usersController = usersControllerFactory(usersInteractor)
export const concertsController = concertsControllerFactory(concertsInteractor)
export const festivalsController = festivalsControllerFactory(festivalsInteractor)
export const statisticsController = statisticsControllerFactory(statisticsInteractor)
