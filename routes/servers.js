import {Router} from 'express'
import {getAll, create, remove, change_status} from '../controllers/servers.js'
const router = Router()

router.get('/api/server', getAll)

router.post('/api/server', create)

router.post('/api/server', change_status)

router.delete('/api/server/:id', remove)

export default router
