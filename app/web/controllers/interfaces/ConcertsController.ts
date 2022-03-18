import ResourcesController from './ResourcesController'
import ConcertsInteractor from '../../../interactors/interfaces/ConcertsInteractor'
import { Concert } from '../../../entities'

type ConcertsControllerFactory = (concertsInteractor: ConcertsInteractor) => (
    ResourcesController<Concert>
)

export default ConcertsControllerFactory
