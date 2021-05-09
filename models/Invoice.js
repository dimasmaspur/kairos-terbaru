const JobOrder = require('./JobOrder');
module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define('Invoice', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        jo_number: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'JobOrder',
                key: 'jo_number'
            },
        },
        kode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        invoice_to: {
            type: DataTypes.STRING,
            allowNull: false
        },
 	item_cost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_blanko: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ppn_idr: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        ppn_usd: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        biaya_materai: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'data_invoice'
    });
    return Invoice;
}
