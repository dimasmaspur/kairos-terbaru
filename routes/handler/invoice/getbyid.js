const { Invoice } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);

    if (!invoice) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            invoice
        }

    });
}