const Validator = require('fastest-validator');
const v = new Validator();
const { JoCreditNote, JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        jo_number: 'string|empty:false',
        no_blanko: 'string|empty:false',
        agent_name: 'string|empty:false'
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
    // const checkJoNumber = await JoCreditNote.findOne({ where: { jo_number: req.body.jo_number } });
    // if (checkJoNumber) {
    //     return res.status(400).json({ status: 'error', message: 'JO Number already exists!' });
    // }
    // const noBlanko = await JoCreditNote.findOne({ where: { no_blanko: req.body.no_blanko } });
    // if (noBlanko) {
    //     return res.status(400).json({ status: 'error', message: 'no blanko already exists!' });
    // }

    const data = {
        jo_number: jo.jo_number,
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        agent_name: req.body.agent_name
    };

    try {
        const joCreditNote = await JoCreditNote.create(data);

        return res.json({
            status: "success",
            data: {
                id_credit_note: joCreditNote.id_credit_note,
                jo_number: joCreditNote.jo_number,
                no_blanko: joCreditNote.no_blanko,
                ppn_idr: joCreditNote.ppn_idr,
                ppn_usd: joCreditNote.ppn_usd,
                agent_name: joCreditNote.agent_name,
                created_at: joCreditNote.createdAt,
                updated_at: joCreditNote.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}
