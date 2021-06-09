const Validator = require('fastest-validator');
const v = new Validator();
const { JocConsol, JobConsol } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        joc_number: 'string|empty:false',
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
        no_quantity: 'string|empty:false',
        qty: 'string|empty:false',
        seal_number: 'string|empty:false',
        measurement: 'string|empty:false',
        net_weight: 'string|empty:false',
        gross_weight: 'string|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }


    const jo = await JobConsol.findOne({ where: { joc_number: req.body.joc_number } });

    if (!jo) {
        return res.status(404).json({ status: 'error', message: 'JOC Number not found' });
    }
    // const joData = await JocConsol.findOne({ where: { joc_number: req.body.joc_number } });

    // if (joData) {
    //     return res.status(404).json({ status: 'error', message: 'This JO already exists!' });
    // }
    // const checkJoNumber = await jocConsol.findOne({ where: { joc_number: req.body.joc_number } });
    // if (checkJoNumber) {
    //     return res.status(400).json({ status: 'error', message: 'JOC Number already exists!' });
    // }

    const data = {
        joc_number: jo.joc_number,
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
        no_quantity: req.body.no_quantity,
        qty: req.body.qty,
        seal_number: req.body.seal_number,
        type: req.body.type,
        measurement: req.body.measurement,
        net_weight: req.body.net_weight,
        gross_weight: req.body.gross_weight,
        jo_number: req.body.jo_number,
        customer_name: req.body.customer_name,
        destination: req.body.destination,
        gross_profit_idr: req.body.gross_profit_idr,
        gross_profit_usd: req.body.gross_profit_usd
    };

    try {
        const jocConsol = await JocConsol.create(data);

        return res.json({
            status: "success",
            data: {
                id: jocConsol.id,
                joc_number: jocConsol.joc_number,
                bl_number: jocConsol.bl_number,
                mbl_number: jocConsol.mbl_number,
                freight_type: jocConsol.freight_type,
                shipment_number: jocConsol.shipment_number,
                consignee: jocConsol.consignee,
                notify_party: jocConsol.notify_party,
                agent: jocConsol.agent,
                carriage: jocConsol.carriage,
                vessel: jocConsol.vessel,
                ETD: jocConsol.ETD,
                ETA: jocConsol.ETA,
                loading: jocConsol.loading,
                receipt: jocConsol.receipt,
                discharge: jocConsol.discharge,
                delivery: jocConsol.delivery,
                marks_and_number: jocConsol.marks_and_number,
                description_of_goods: jocConsol.description_of_goods,
                quantity: jocConsol.quantity,
                type_package: jocConsol.type_package,
                option_qty: jocConsol.option_qty,
                no_quantity: jocConsol.no_quantity,
                qty: jocConsol.qty,
                seal_number: jocConsol.seal_number,
                type: jocConsol.type,
                measurement: jocConsol.measurement,
                net_weight: jocConsol.net_weight,
                gross_weight: jocConsol.gross_weight,
                jo_number: jocConsol.jo_number,
                customer_name: jocConsol.customer_name,
                destination: jocConsol.destination,
                gross_profit_idr: jocConsol.gross_profit_idr,
                gross_profit_usd: jocConsol.gross_profit_usd,
                created_at: jocConsol.createdAt,
                updated_at: jocConsol.updatedAt

            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}
