const Sequelize= require('sequelize')
//definir ocjeto sequelize de conexion:
const sequelize= new Sequelize(
    'devcamps',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql'
    }
)
module.exports = sequelize