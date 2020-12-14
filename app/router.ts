import { Router } from 'express'
import concertsController from './controllers/concertsController'
import authController from './controllers/authController'
import notFoundController from './controllers/notFoundController'
import authMiddleware from './middleware/authMiddleware'

const router = Router()

router.get('/', (request, response) => {
    response.send('up and running')
})

router.post('/login', authController.login)
router.get('/verify/:token', authController.verify)

router.get('/concerts', authMiddleware, concertsController.index)
router.get('/concerts/:id', authMiddleware, concertsController.show)
router.post('/concerts', authMiddleware, concertsController.store)
router.put('/concerts', authMiddleware, concertsController.update)
router.delete('/concerts', authMiddleware, concertsController.destroy)

router.use(notFoundController)

export default router
