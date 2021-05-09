module.exports = (sequelize, DataTypes) => {
    const DataBranch = sequelize.define('DataBranch', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch_office_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch_head: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
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
        tableName: 'data_branch'
    });
    return DataBranch;
}