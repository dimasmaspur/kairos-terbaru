const Validator = require('fastest-validator');
const v = new Validator();
const { JoDebitNote } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
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

    const data = {
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        agent_name: req.body.agent_name,
        note: req.body.note
    };


    const id = req.params.id;
    const joDebitNote = await JoDebitNote.findByPk(id);
    if (!joDebitNote) {
        return res.status(404).json({ status: 'error', message: 'id debit note not found' });
    }
    const selector = {
        where: { id_debit_note: id }
    };

    try {
        await JoDebitNote.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id_debit_note: id,
                jo_number: joDebitNote.jo_number,
                no_blanko: data.no_blanko,
                ppn_idr: data.ppn_idr,
                ppn_usd: data.ppn_usd,
                agent_name: data.agent_name,
                note: data.note,
                created_at: joDebitNote.createdAt,
                updated_at: joDebitNote.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
