import db from '../db.js'

const formatStringToNumber = (string) => {
    if (typeof string !== 'string') return string
    let result = string
    result = result.replace(/,/g, '')
    result = Number(result)
    return result
}

const configController = {
    getCategory: (req, res) => {
        db.query(`SELECT * FROM Categorys`, (err, rows) => {
            if (err) {
                console.log('Get Category fail', err);
                return false
            }
            res.send({
                data: rows
            })
        })
    },
    createCategoryItem: (req, res) => {
        db.query(`INSERT INTO Categorys (name, amount_limit) VALUES ('${req.body.name}', '${formatStringToNumber(req.body.amount_limit) || 0}')`, (err, rows) => {
            if (err) {
                console.log('Create Category Item Fail', err);
                return false
            }
            res.send({
                data: rows
            })
        })
    },
    updateCategoryItem: (req, res) => {
        db.query(`Update Categorys SET name = '${req.body.name}', amount_limit = '${formatStringToNumber(req.body.amount_limit)}' WHERE category_id = '${formatStringToNumber(req.body.category_id)}'`, (err, rows) => {
            if (err) {
                console.log('Update Category Item Fail', err);
                return false
            }
            res.send({
                data: rows
            })
        })
    },
    deleteCategoryItem: (req, res) => {
        db.query(`DELETE FROM Categorys WHERE category_id = ${req.body.category_id}`, (err, rows) => {
            if (err) {
                console.log('Delete Category Item Fail', err);
                return false
            }
            res.send({
                data: rows
            })
        })
    },
}

export default configController