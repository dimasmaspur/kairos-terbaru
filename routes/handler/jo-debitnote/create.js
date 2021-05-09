const Validator = require('fastest-validator');
const v = new Validator();
const { JoDebitNote, JobOrder } = require('../../../models');

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
    // const checkJoNumber = await JoDebitNote.findOne({ where: { jo_number: req.body.jo_number } });
    // if (checkJoNumber) {
    //     return res.status(400).json({ status: 'error', message: 'JO Number already exists!' });
    // }
    // const noBlanko = await JoDebitNote.findOne({ where: { no_blanko: req.body.no_blanko } });
    // if (noBlanko) {
    //     return res.status(400).json({ status: 'error', message: 'no blanko already exists!' });
    // }

    const data = {
        jo_number: jo.jo_number,
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        agent_name: req.body.agent_name,
        note: req.body.note
    };

    try {
        const joDebitNote = await JoDebitNote.create(data);

        return res.json({
            status: "success",
            data: {
                id_debit_note: joDebitNote.id_debit_note,
                jo_number: joDebitNote.jo_number,
                no_blanko: joDebitNote.no_blanko,
                ppn_idr: joDebitNote.ppn_idr,
                ppn_usd: joDebitNote.ppn_usd,
                agent_name: joDebitNote.agent_name,
                note: joDebitNote.note,
                created_at: joDebitNote.createdAt,
                updated_at: joDebitNote.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

