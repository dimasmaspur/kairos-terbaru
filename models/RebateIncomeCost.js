
module.exports = (sequelize, DataTypes) => {
    const RebateIncomeCost = sequelize.define('RebateIncomeCost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_rebate_income: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'JocRebateIncome',
                key: 'id_rebate_income'
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
        tableName: 'rebate_income_cost'
    });
    return RebateIncomeCost;
}