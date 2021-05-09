const { JobConsol } = require('../../../models');
module.exports = async (req, res) => {
    const jobConsol = await JobConsol.findAll();
    if (!jobConsol) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: jobConsol
    });


}