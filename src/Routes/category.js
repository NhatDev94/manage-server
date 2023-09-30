import express from 'express'
import configController from '../controllers/configController.js'

const categoryRouter = express.Router()

categoryRouter.use('/getAll', configController.getCategory)

categoryRouter.use('/create', configController.createCategoryItem)

categoryRouter.use('/update', configController.updateCategoryItem)

categoryRouter.use('/delete', configController.deleteCategoryItem)

export default categoryRouter