import mysql from 'mysql'

// const DATABASE_URL='mysql://00t1csdax3kbbsxcfq3l:pscale_pw_kbawycNajZn8WMuQv2ucR633YPhy0jCavpbV2qOPgpl@aws.connect.psdb.cloud/manage?ssl={"rejectUnauthorized":true}'

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'manage'
})

export default db