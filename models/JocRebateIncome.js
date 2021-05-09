const JobOrder = require('./JobOrder');
module.exports = (sequelize, DataTypes) => {
    const JocRebateIncome = sequelize.define('JocRebateIncome', {
        id_rebate_income: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        joc_number: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'JobConsol',
                key: 'joc_number'
            },
        },
        agent_name: {
            type: DataTypes.STRING,
            allowNull: false
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
        tableName: 'joc_rebate_income'
    });
    return JocRebateIncome;
}