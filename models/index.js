'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db["JobOrder"].belongsTo(db["PayRequestJo"], { foreignKey: 'jo_number' });
db["PayRequestJo"].hasOne(db["JobOrder"], { foreignKey: 'jo_number' });
// job order
db["JobOrder"].hasOne(db["JoData"], { foreignKey: 'jo_number' });
db["JoData"].belongsTo(db["JobOrder"], { foreignKey: 'jo_number' });

db["JobOrder"].hasOne(db["JoDebitNote"], { foreignKey: 'jo_number' });
db["JoDebitNote"].belongsTo(db["JobOrder"], { foreignKey: 'jo_number' });

db["JobOrder"].hasOne(db["JoCreditNote"], { foreignKey: 'jo_number' });
db["JoCreditNote"].belongsTo(db["JobOrder"], { foreignKey: 'jo_number' });

db["JobOrder"].hasOne(db["PayRequestJo"], { foreignKey: 'jo_number' });
db["PayRequestJo"].belongsTo(db["JobOrder"], { foreignKey: 'jo_number' });

db["JobOrder"].hasOne(db["Invoice"], { foreignKey: 'jo_number' });
db["Invoice"].belongsTo(db["JobOrder"], { foreignKey: 'jo_number' });

//db["JobOrder"].hasOne(db["InvoiceCost"], { foreignKey: 'jo_number' });
//db["InvoiceCost"].belongsTo(db["JobOrder"], { foreignKey: 'jo_number' });

db["JoDebitNote"].hasMany(db["DebitNoteCost"], { foreignKey: 'id_debit_note' });
db["DebitNoteCost"].belongsTo(db["JoDebitNote"], { foreignKey: 'id_debit_note' });

db["JoCreditNote"].hasMany(db["CreditNoteCost"], { foreignKey: 'id_credit_note' });
db["CreditNoteCost"].belongsTo(db["JoCreditNote"], { foreignKey: 'id_credit_note' });

db["PayRequestJo"].hasMany(db["CostPayRequest"], { foreignKey: 'id_payrequest' });
db["CostPayRequest"].belongsTo(db["PayRequestJo"], { foreignKey: 'id_payrequest' });

db["Invoice"].hasMany(db["InvoiceCost"], { foreignKey: 'id_invoice' });
db["InvoiceCost"].belongsTo(db["Invoice"], { foreignKey: 'id_invoice' });

db["DebitNoteCost"].hasMany(db["DebitNoteCost"], { foreignKey: 'id_debit_note' });
db["CreditNoteCost"].hasMany(db["CreditNoteCost"], { foreignKey: 'id_credit_note' });
db["CostPayRequest"].hasMany(db["CostPayRequest"], { foreignKey: 'id_payrequest' });
db["InvoiceCost"].hasMany(db["InvoiceCost"], { foreignKey: 'id_invoice' });


// job consol

db["JobConsol"].hasOne(db["JocConsol"], { foreignKey: 'joc_number' });
db["JocConsol"].belongsTo(db["JobConsol"], { foreignKey: 'joc_number' });

db["JobConsol"].hasMany(db["JocRebateIncome"], { foreignKey: 'joc_number' });
db["JocRebateIncome"].belongsTo(db["JobConsol"], { foreignKey: 'joc_number' });

db["JobConsol"].hasMany(db["JocRebateExpense"], { foreignKey: 'joc_number' });
db["JocRebateExpense"].belongsTo(db["JobConsol"], { foreignKey: 'joc_number' });

db["JobConsol"].hasMany(db["JocPayRequest"], { foreignKey: 'joc_number' });
db["JocPayRequest"].belongsTo(db["JobConsol"], { foreignKey: 'joc_number' });

// relasi cost

db["JocRebateIncome"].hasMany(db["RebateIncomeCost"], { foreignKey: 'id_rebate_income' });
db["RebateIncomeCost"].belongsTo(db["JocRebateIncome"], { foreignKey: 'id_rebate_income' });

db["JocRebateExpense"].hasMany(db["RebateExpenseCost"], { foreignKey: 'id_rebate_expense' });
db["RebateExpenseCost"].belongsTo(db["JocRebateExpense"], { foreignKey: 'id_rebate_expense' });

db["JocPayRequest"].hasMany(db["JocPayRequestCost"], { foreignKey: 'id_payrequest' });
db["JocPayRequestCost"].belongsTo(db["JocPayRequest"], { foreignKey: 'id_payrequest' });



module.exports = db;
