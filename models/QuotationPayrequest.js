
module.exports = (sequelize, DataTypes) => {
    const QuotationPayrequest = sequelize.define('QuotationPayrequest', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quo_number: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Quotation',
                key: 'quo_number'
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
        amount_IDR: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        amount_USD: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        vendor: {
            type: DataTypes.STRING,
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
        tableName: 'quotation_payrequest'
    });


    return QuotationPayrequest;
}