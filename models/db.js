const Sequelize = require ('sequelize');

// Conexão com banco de daos Mysql
  const sequelize = new Sequelize ('DATABASE','root','password',{
    host:"localhost",
    dialect: 'mysql',
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};