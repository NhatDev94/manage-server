import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import router from './Routes/index.js'
import db from './db.js'


const PORT = 1994
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router)

db.connect((err, result) => {
    if (err) {
        console.log('Ket noi database that bai', err);
        return
    }
    if (result) {
        console.log('Ket noi database thanh cong');
        return
    }
})

app.listen(PORT, () => {
    console.log('Server running in port: ' + PORT);
})