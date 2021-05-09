const { JocConsol } = require('../../../models');
module.exports = async (req, res) => {

    const jocConsol = await JocConsol.findAll();
    if (!jocConsol) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: jocConsol
    });
}