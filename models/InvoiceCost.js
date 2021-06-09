const JobOrder = require('./JobOrder');
module.exports = (sequelize, DataTypes) => {
    const InvoiceCost = sequelize.define('InvoiceCost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_invoice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Invoice',
                key: 'id_invoice'
            },
        },
        kode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        item_cost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flag_ppn: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: false
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
        tableName: 'invoice_cost'
    });
    return InvoiceCost;
}