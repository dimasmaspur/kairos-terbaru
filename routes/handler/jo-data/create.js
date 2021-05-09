const Validator = require('fastest-validator');
const v = new Validator();
const { JoData, JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        jo_number: 'string|empty:false',
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
        marketing:'string|empty:true',
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


    const jo = await JobOrder.findOne({ where: { jo_number: req.body.jo_number } });

    if (!jo) {
        return res.status(404).json({ status: 'error', message: 'JO Number not found' });
    }
    const checkJoNumber = await JoData.findOne({ where: { jo_number: req.body.jo_number } });
    if (checkJoNumber) {
        return res.status(400).json({ status: 'error', message: 'JO Number already exists!' });
    }

    const data = {
        jo_number: jo.jo_number,
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

    try {
        const joData = await JoData.create(data);

        return res.json({
            status: "success",
            data: {
                id: joData.id,
                jo_number: joData.jo_number,
                bl_number: joData.bl_number,
                mbl_number: joData.mbl_number,
                freight_type: joData.freight_type,
                shipment_number: joData.shipment_number,
                consignee: joData.consignee,
                notify_party: joData.notify_party,
                agent: joData.agent,
                carriage: joData.carriage,
                vessel: joData.vessel,
                ETD: joData.ETD,
                ETA: joData.ETA,
                loading: joData.loading,
                receipt: joData.receipt,
                discharge: joData.discharge,
                delivery: joData.delivery,
                marks_and_number: joData.marks_and_number,
                description_of_goods: joData.description_of_goods,
                quantity: joData.quantity,
                type_package: joData.type_package,
                option_qty: joData.option_qty,
                no_container: joData.no_container,
                qty: joData.qty,
                seal_number: joData.seal_number,
                type: joData.type,
                measurement: joData.measurement,
                net_weight: joData.net_weight,
                gross_weight: joData.gross_weight,
                marketing: joData.marketing,
                creator: joData.creator,
		freight_note: joData.freight_note,
                shipper: joData.shipper,
                created_at: joData.createdAt,
                updated_at: joData.updatedAt

            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}
