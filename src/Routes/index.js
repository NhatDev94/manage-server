import express from 'express'
import authRouter from './auth.js'
import spendRouter from './spend.js'
import db from '../db.js'
import categoryRouter from './category.js'

const router = express.Router()
router.use('/auth', authRouter)

router.use('/spend', spendRouter)

router.use('/category', categoryRouter)

router.use('/', (req, res) => {
    res.send('Home Page')
})










// DB
// Create Table
router.use('/create-table', (req, res) => {
    try {
        db.query(`
            CREATE TABLE Users (
                user_id INT AUTO_INCREMENT,
                email VARCHAR(100) UNIQUE,
                password VARCHAR(100),
                name VARCHAR(100),
                PRIMARY KEY (user_id)
            ) 
        `)
    } catch (error) {
        console.log('Create Table fail', err);
    }
    res.send('Create table success')
})

export default router