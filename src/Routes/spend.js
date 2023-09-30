import express from 'express'
import spendController from '../controllers/spendController.js'

const spendRouter = express.Router()

spendRouter.use('/getAll', spendController.getSpends)
spendRouter.use('/getById', spendController.getSpend)
spendRouter.post('/create', spendController.createSpend)
spendRouter.put('/update', spendController.updateSpend)
spendRouter.post('/delete', spendController.deleteSpend)


export default spendRouter