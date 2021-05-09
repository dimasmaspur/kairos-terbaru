const JobOrder = require('./JobOrder');
module.exports = (sequelize, DataTypes) => {
    const PayRequestJo = sequelize.define('PayRequestJo', {
        id_payrequest: {
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
        no_blanko: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ppn_idr: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        ppn_usd: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        vendor_name: {
            type: DataTypes.STRING,
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
        tableName: 'payrequest_jo'
    });


    return PayRequestJo;
}