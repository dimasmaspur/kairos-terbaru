module.exports = (sequelize, DataTypes) => {
    const JoData = sequelize.define('JoData', {
        id: {
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
        bl_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mbl_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        freight_type: {
            type: DataTypes.ENUM,
            values: ["prepaid", "collect"],
            defaultValue: "prepaid",
            allowNull: false
        },
        shipment_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
	freight_note: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shipper: {
            type: DataTypes.STRING,
            allowNull: false
        },
        consignee: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notify_party: {
            type: DataTypes.STRING,
            allowNull: false
        },
        agent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carriage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vessel: {
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
        loading: {
            type: DataTypes.STRING,
            allowNull: false
        },
        receipt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discharge: {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marks_and_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description_of_goods: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_package: {
            type: DataTypes.STRING,
            allowNull: false
        },
        option_qty: {
            type: DataTypes.ENUM,
            values: ["FCL", "LCL"],
            allowNull: false,
            defaultValue: "FCL"
        },
        no_container: {
            type: DataTypes.STRING,
            allowNull: false
        },
        qty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        seal_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        measurement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        net_weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gross_weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creator: {
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
        tableName: 'jo_data'
    });
    return JoData;
}
