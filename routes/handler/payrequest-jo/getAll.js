const { PayRequestJo } = require('../../../models');
module.exports = async (req, res) => {

    const joNumber = req.query.jo_number


    const payRequestJo = await PayRequestJo.findAll({
        where: {
            jo_number: joNumber
        }
    });
    if (!payRequestJo) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }


    return res.json({
        status: 'success',
        data: payRequestJo
    });

}
