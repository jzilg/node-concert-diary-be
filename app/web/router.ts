import { Router } from 'express'
import * as concertsController from './controllers/concertsController'
import * as festivalsController from './controllers/festivalsController'
import * as authController from './controllers/authController'
import notFoundController from './controllers/notFoundController'
import authMiddleware from './middleware/authMiddleware'
import statisticsController from './controllers/statisticsController'

const router = Router()

router.get('/', (request, response) => {
    response.send('up and running')
})

router.post('/login', authController.login)

router.get('/concerts', authMiddleware, concertsController.index)
router.get('/concerts/:id', authMiddleware, concertsController.show)
router.post('/concerts', authMiddleware, concertsController.store)
router.put('/concerts/:id', authMiddleware, concertsController.update)
router.delete('/concerts/:id', authMiddleware, concertsController.destroy)

router.get('/festivals', authMiddleware, festivalsController.index)
router.get('/festivals/:id', authMiddleware, festivalsController.show)
router.post('/festivals', authMiddleware, festivalsController.store)
router.put('/festivals/:id', authMiddleware, festivalsController.update)
router.delete('/festivals/:id', authMiddleware, festivalsController.destroy)

router.get('/statistics', authMiddleware, statisticsController)

router.use(notFoundController)

export default router
