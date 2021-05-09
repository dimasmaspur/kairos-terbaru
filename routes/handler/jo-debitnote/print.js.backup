const { JoDebitNote, DebitNoteCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const joDebitNote = await JoDebitNote.findByPk(id);

    if (!joDebitNote) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const debitNoteCost = await DebitNoteCost.findAll({
        where: {
            id_debit_note: joDebitNote.id_debit_note
        }
    });

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            id_debit_note: joDebitNote.id,
            jo_number: joDebitNote.jo_number,
            agent_name: joDebitNote.agent_name,
            no_blanko: joDebitNote.no_blanko,
            ppn_idr: joDebitNote.ppn_idr,
            ppn_usd: joDebitNote.ppn_usd,
            created_at: joDebitNote.createdAt,
            updated_at: joDebitNote.updatedAt,
            debitNoteCost
        }

    });
}