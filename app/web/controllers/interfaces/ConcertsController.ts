import ResourcesController from './ResourcesController'
import ConcertsInteractor from '../../../interactors/interfaces/ConcertsInteractor'

type ConcertsControllerFactory = (concertsInteractor: ConcertsInteractor) => ResourcesController

export default ConcertsControllerFactory
