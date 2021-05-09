// const JoPayRequest = require("./JoPayRequest");

module.exports = (sequelize, DataTypes) => {
    const JobConsol = sequelize.define('JobConsol', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        joc_number: {
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
        no_bl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_mbl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vessel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carrier: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_container: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_container: {
            type: DataTypes.STRING,
            allowNull: false
        },
	qty_container: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creator: {
            type: DataTypes.STRING,
            allowNull: false
        },
   branch_office: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loading: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discharge: {
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        measurement: {
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
        tableName: 'job_consol'
    });

    return JobConsol;
}
