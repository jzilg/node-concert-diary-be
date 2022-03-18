import { Router } from 'express'
import { serve, setup } from 'swagger-ui-express'
import {
    usersController,
    concertsController,
    festivalsController,
    statisticsController,
} from './controllers'
import notFoundController from './controllers/notFoundController'
import authMiddleware from './middleware/authMiddleware'
import swaggerDocument from '../swagger/swagger.json'
import routes from './routes'

const router = Router()

router.get(routes.root, (request, response) => {
    response.json('up and running')
})

router.get(routes.apiDocsJson, (request, response) => {
    response.json(swaggerDocument)
})

router.use(routes.apiDocs, serve, setup(swaggerDocument))

router.post(routes.login, usersController.login)
router.post(routes.register, usersController.register)

router.get(routes.concerts, authMiddleware, concertsController.index)
router.get(`${routes.concerts}/:id`, authMiddleware, concertsController.show)
router.post(routes.concerts, authMiddleware, concertsController.store)
router.put(`${routes.concerts}/:id`, authMiddleware, concertsController.update)
router.delete(`${routes.concerts}/:id`, authMiddleware, concertsController.destroy)

router.get(routes.festivals, authMiddleware, festivalsController.index)
router.get(`${routes.festivals}/:id`, authMiddleware, festivalsController.show)
router.post(routes.festivals, authMiddleware, festivalsController.store)
router.put(`${routes.festivals}/:id`, authMiddleware, festivalsController.update)
router.delete(`${routes.festivals}/:id`, authMiddleware, festivalsController.destroy)

router.get(routes.statistics, authMiddleware, statisticsController.index)

router.use(notFoundController)

export default router
