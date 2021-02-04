import { Router } from 'express'
import {
    authController,
    concertsController,
    festivalsController,
    statisticsController,
} from './controllers'
import notFoundController from './controllers/notFoundController'
import authMiddleware from './middleware/authMiddleware'

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

router.get('/statistics', authMiddleware, statisticsController.index)

router.use(notFoundController)

export default router
