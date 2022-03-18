import ResourcesController from './ResourcesController'
import FestivalsInteractor from '../../../interactors/interfaces/FestivalsInteractor'
import { Festival } from '../../../entities'

type FestivalsControllerFactory = (fetivalsInteractor: FestivalsInteractor) => (
    ResourcesController<Festival>
)

export default FestivalsControllerFactory
