import { Router } from 'express'
import ProvinsiCtrls from '../../controllers/ProvinsiCtrls'

const router = Router()

router.get('/provinsies', ProvinsiCtrls.find)
router.get('/provinsi/:id', ProvinsiCtrls.findOne)
router.post('/provinsi', ProvinsiCtrls.create)
router.patch('/provinsi/:id', ProvinsiCtrls.update)
router.delete('/provinsi/:id', ProvinsiCtrls.delete)


export default router