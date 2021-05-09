const JobOrder = require('./JobOrder');
module.exports = (sequelize, DataTypes) => {
    const JoCreditNote = sequelize.define('JoCreditNote', {
        id_credit_note: {
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
        tableName: 'jo_credit_note'
    });
    return JoCreditNote;
}