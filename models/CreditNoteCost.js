
module.exports = (sequelize, DataTypes) => {
    const CreditNoteCost = sequelize.define('CreditNoteCost', {
        id_credit_cost: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_credit_note: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'JoCreditNote',
                key: 'id_credit_note'
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
        tableName: 'creditnote_cost'
    });
    return CreditNoteCost;
}