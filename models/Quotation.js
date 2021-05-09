// const JoPayRequest = require("./JoPayRequest");

module.exports = (sequelize, DataTypes) => {
    const Quotation = sequelize.define('Quotation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quo_number: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        expires_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        terms_payment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM,
            values: ["import", "export"],
            allowNull: false,
            defaultValue: "export"
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ETD: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ETA: {
            type: DataTypes.DATE,
            allowNull: false
        },
        kurs: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        destination_origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        consol: {
            type: DataTypes.ENUM,
            values: ["consol", "coloud"],
            allowNull: false,
            defaultValue: "consol"
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        creator: {
            type: DataTypes.STRING,
            allowNull: true
        },
        branch_office: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agen_rate: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        special_rate: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        LSS: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        others: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        CFS: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Mechanic: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ocean_freight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deskripsi_header: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deskripsi_footer: {
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
        tableName: 'quotation'
    });

    return Quotation;
}