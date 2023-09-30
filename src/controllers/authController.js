import db from "../db.js"

const authController = {
    register: async (req, res) => {
        try {
            db.query(`
                INSERT INTO Users (email, name, password) VALUES ('nhatdev94@gmail.com', 'nhatdev94', 'Sam1234@')
                `)
            res.send('Create User Success')
        } catch (err) {
            res.send('Create User fail', err)
            return false
        }
    },
    signIn: async (req, res) => {
        res.send('Sign In')
    },
}

export default authController