const Validator = require('fastest-validator');
const v = new Validator();
const { JobConsol } = require('../../../models');

module.exports = async (req, res, next) => {
    // validasi formnya
    const schema = {
        type: 'string|empty:false',
        no_bl: 'string|empty:false',
        no_mbl: 'string|empty:false',
        vessel: 'string|empty:false',
        carrier: 'string|empty:false',
        no_container: 'string|empty:false',
        type_container: 'string|empty:false',
        creator: 'string|empty:false',
        agent: 'string|empty:false',
        loading: 'string|empty:false',
        discharge: 'string|empty:false',
        weight: 'string|empty:false',
        measurement: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }
    const y = new Date();
    joc = `JOC${y.getFullYear()}${y.getMinutes()}${y.getSeconds()}`;


    const data = {
        joc_number: joc,
        type: req.body.type,
        no_bl: req.body.no_bl,
        no_mbl: req.body.no_mbl,
        vessel: req.body.vessel,
        carrier: req.body.carrier,
        no_container: req.body.no_container,
        type_container: req.body.type_container,
	  qty_container: req.body.qty_container,
	        branch_office: req.body.branch_office,

        creator: req.body.creator,
        agent: req.body.agent,
        loading: req.body.loading,
        discharge: req.body.discharge,
        vessel: req.body.vessel,
        ETD: req.body.etd,
        ETA: req.body.eta,
        quantity: req.body.quantity,
        weight: req.body.weight,
        measurement: req.body.measurement
    };

    try {
        const jobConsol = await JobConsol.create(data);

        return res.json({
            status: "success",
            data: {
                id: jobConsol.id,
                joc_number: jobConsol.joc_number,
                type: jobConsol.type,
                no_bl: jobConsol.no_bl,
                no_mbl: jobConsol.no_mbl,
                vessel: jobConsol.vessel,
                carrier: jobConsol.carrier,
                no_container: jobConsol.no_container,
                type_container: jobConsol.type_container,
 qty_container: jobConsol.qty_container,
                branch_office: jobConsol.branch_office,

                creator: jobConsol.creator,
                agent: jobConsol.agent,
                loading: jobConsol.loading,
                discharge: jobConsol.discharge,
                vessel: jobConsol.vessel,
                etd: jobConsol.etd,
                eta: jobConsol.eta,
                weight: jobConsol.weight,
                measurement: jobConsol.measurement,
                created_at: jobConsol.createdAt,
                updated_at: jobConsol.updatedAt

            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}
