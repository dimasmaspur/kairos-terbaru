module.exports = (sequelize, DataTypes) => {
    const DataCost = sequelize.define('DataCost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cost_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM,
            values: ["refund", "not found"],
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values: ["active", "in-active"],
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
        tableName: 'data_cost'
    });
    return DataCost;
}