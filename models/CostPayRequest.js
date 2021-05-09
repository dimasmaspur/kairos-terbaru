
module.exports = (sequelize, DataTypes) => {
    const CostPayRequest = sequelize.define('CostPayRequest', {
        id_payrequest_cost: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_payrequest: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'PayRequestJo',
                key: 'id_payrequest'
            },
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
        tableName: 'payrequestCost'
    });
    return CostPayRequest;
}