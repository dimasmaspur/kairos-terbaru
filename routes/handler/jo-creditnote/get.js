const { JoCreditNote, CreditNoteCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const joCreditNote = await JoCreditNote.findByPk(id);

    if (!joCreditNote) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const creditNoteCost = await CreditNoteCost.findAll({
        where: {
            id_credit_note: joCreditNote.id_credit_note
        }
    });

    // res.send({ joCreditNote });
    return res.json({
        status: 'success',
        data: {
            id_credit_note: joCreditNote.id,
            jo_number: joCreditNote.jo_number,
            agent_name: joCreditNote.agent_name,
            no_blanko: joCreditNote.no_blanko,
            ppn_idr: joCreditNote.ppn_idr,
            ppn_usd: joCreditNote.ppn_usd,
            created_at: joCreditNote.createdAt,
            updated_at: joCreditNote.updatedAt,
            creditNoteCost
        }

    });
}