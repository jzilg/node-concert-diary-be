import ResourcesController from './ResourcesController'
import FestivalsInteractor from '../../../interactors/interfaces/FestivalsInteractor'

type FestivalsControllerFactory = (fetivalsInteractor: FestivalsInteractor) => ResourcesController

export default FestivalsControllerFactory
