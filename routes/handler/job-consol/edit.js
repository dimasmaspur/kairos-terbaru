const Validator = require('fastest-validator');
const v = new Validator();
const { JobConsol } = require('../../../models');

module.exports = async (req, res, next) => {
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

    const data = {
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


    const id = req.params.id;
    const jobConsol = await JobConsol.findByPk(id);
    if (!jobConsol) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await jobConsol.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                joc_number: jobConsol.joc_number,
                type: data.type,
                no_bl: data.no_bl,
                no_mbl: data.no_mbl,
                vessel: data.vessel,
                carrier: data.carrier,
                no_container: data.no_container,
                type_container: data.type_container,
		qty_container: data.qty_container,
                creator: data.creator,              
  agent: data.agent,
                branch_office: data.branch_office,

                loading: data.loading,
                discharge: data.discharge,
                vessel: data.vessel,
                etd: data.etd,
                eta: data.eta,
                weight: data.weight,
                measurement: data.measurement,
                created_at: jobConsol.createdAt,
                updated_at: data.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
