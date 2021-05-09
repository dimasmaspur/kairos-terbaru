const Validator = require('fastest-validator');
const v = new Validator();
const { JoData } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        bl_number: 'string|empty:false',
        mbl_number: 'string|empty:false',
        freight_type: 'string|empty:false',
        shipment_number: 'string|empty:false',
        consignee: 'string|empty:false',
        notify_party: 'string|empty:false',
        agent: 'string|empty:false',
        carriage: 'string|empty:false',
        vessel: 'string|empty:false',
        receipt: 'string|empty:false',
        discharge: 'string|empty:false',
        delivery: 'string|empty:false',
        marks_and_number: 'string|empty:false',
        description_of_goods: 'string|empty:false',
        quantity: 'string|empty:false',
        type_package: 'string|empty:false',
        option_qty: 'string|empty:false',
        no_container: 'string|empty:false',
        qty: 'string|empty:false',
        seal_number: 'string|empty:false',
        measurement: 'string|empty:false',
        net_weight: 'string|empty:false',
        gross_weight: 'string|empty:false',
        marketing: 'string|empty:true',
        creator: 'string|empty:true',
	freight_note: 'string|empty:false',
        shipper: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        bl_number: req.body.bl_number,
        mbl_number: req.body.mbl_number,
        freight_type: req.body.freight_type,
        shipment_number: req.body.shipment_number,
        consignee: req.body.consignee,
        notify_party: req.body.notify_party,
        agent: req.body.agent,
        carriage: req.body.carriage,
        vessel: req.body.vessel,
        ETD: req.body.ETD,
        ETA: req.body.ETA,
        loading: req.body.loading,
        receipt: req.body.receipt,
        discharge: req.body.discharge,
        delivery: req.body.delivery,
        marks_and_number: req.body.marks_and_number,
        description_of_goods: req.body.description_of_goods,
        quantity: req.body.quantity,
        type_package: req.body.type_package,
        option_qty: req.body.option_qty,
        no_container: req.body.no_container,
        qty: req.body.qty,
        seal_number: req.body.seal_number,
        type: req.body.type,
        measurement: req.body.measurement,
        net_weight: req.body.net_weight,
        gross_weight: req.body.gross_weight,
        marketing: req.body.marketing,
        creator: req.body.creator,
	freight_note: req.body.freight_note,
        shipper: req.body.shipper
    };


    const id = req.params.id;
    const joData = await JoData.findByPk(id);
    if (!joData) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await joData.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                jo_number: joData.jo_number,
                bl_number: data.bl_number,
                mbl_number: data.mbl_number,
                freight_type: data.freight_type,
                shipment_number: data.shipment_number,
                consignee: data.consignee,
                notify_party: data.notify_party,
                agent: data.agent,
                carriage: data.carriage,
                vessel: data.vessel,
                ETD: data.ETD,
                ETA: data.ETA,
                loading: data.loading,
                receipt: data.receipt,
                discharge: data.discharge,
                delivery: data.delivery,
                marks_and_number: data.marks_and_number,
                description_of_goods: data.description_of_goods,
                quantity: data.quantity,
                type_package: data.type_package,
                option_qty: data.option_qty,
                no_container: data.no_container,
                qty: data.qty,
                seal_number: data.seal_number,
                type: data.type,
                measurement: data.measurement,
                net_weight: data.net_weight,
                gross_weight: data.gross_weight,
                marketing: data.marketing,
                creator: data.creator,
		freight_note: data.freight_note,
                shipper: data.shipper,
                created_at: joData.createdAt,
                updated_at: joData.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
