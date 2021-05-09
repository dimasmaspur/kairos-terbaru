// const JoPayRequest = require("./JoPayRequest");

module.exports = (sequelize, DataTypes) => {
    const JobOrder = sequelize.define('JobOrder', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        jo_number: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM,
            values: ["import", "export"],
            allowNull: false,
            defaultValue: "import"
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quo_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        terms_payment: {
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
        tableName: 'job_order'
    });

    return JobOrder;
}