import db from '../db.js'
import moment from 'moment'

const spendController = {
    getSpends: (req, res) => {
        const requestQuery = req.query
        const query = `SELECT * FROM Spends WHERE MONTH(date) = ${requestQuery.month} AND YEAR(date) = ${requestQuery.year} ORDER BY date ASC`
        db.query(query, (err, rows) => {
            if (err) {
                return false
            }
            const result = {}
            let income = 0
            let expense = 0
            rows.forEach(spend => {
                const time = moment(spend.date).format('YYYY-MM-DD')
                spend.date = moment(spend.date).format('YYYY-MM-DD')
                result[time] = result[time] ? [...result[time], spend] : [spend]
                if (spend.type === 'expense') {
                    expense = expense + Number(spend.amount)
                    return
                }
                income = income + Number(spend.amount)
            })

            res.send({
                data: result,
                income,
                expense
            })
        })
    },
    getSpend: (req, res) => {
        db.query(`SELECT * FROM Spends WHERE spend_id = ${req.body.user_id}`, (err, rows) => {
            if (err) {
                res.send('Get Spend Fail')
                return false
            }
            res.send({
                data: rows[0]
            })
        })
    },
    createSpend: async (req, res) => {
        const body = req.body
        console.log(body);
        db.query(`INSERT INTO Spends (date, category, amount, note) VALUES ('${body.date}', '${body.category}', '${body.amount}', '${body.note}')`, (err, rows) => {
            if (err) {
                res.send('Create Spend Fail')
                return false
            }
            res.send({
                data: 'Create Spend Success'
            })
        })
    },
    updateSpend: async (req, res) => {
        const body = req.body
        console.log(body);
        db.query(`UPDATE Spends SET date = '${body.date}', category = '${body.category}', amount = '${body.amount}', note = '${body.note}', type = '${body.type}' WHERE spend_id = ${body.spend_id}`, (err, rows) => {
            if (err) {
                console.log('Update spend fail', err);
                res.send('Update Spend Fail')
                return false
            }
            res.send({
                data: 'Update Spend Success'
            })
        })
    },
    deleteSpend: async (req, res) => {
        const body = req.body
        db.query(`DELETE FROM Spends WHERE spend_id = ${body.spend_id}`, (err, rows) => {
            if (err) {
                console.log('Delete spend fail', err);
                res.send('Delete Spend Fail')
                return false
            }
            res.send({
                data: 'Delete Spend Success'
            })
        })
    },
}

export default spendController