const Validator = require('fastest-validator');
const v = new Validator();
const { DataPartner } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        company_name: 'string|empty:false',
        type: 'string|empty:false',
        contact_person: 'string|empty:false',
        npwp: 'string|empty:false',
        address: 'string|empty:false',
        city: 'string|empty:false',
        country: 'string|empty:false',
        postal_code: 'string|empty:false',
        phone_number: 'string|empty:false',
        fax_number: 'string|empty:false',
        mobile_number: 'string|empty:false',
        email: 'email|empty:false',
        website: 'string|empty:false',
        status: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        company_name: req.body.company_name,
        type: req.body.type,
        contact_person: req.body.contact_person,
        creator: req.body.creator,
        npwp: req.body.npwp,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        postal_code: req.body.postal_code,
        phone_number: req.body.phone_number,
        fax_number: req.body.fax_number,
        mobile_number: req.body.mobile_number,
        email: req.body.email,
        website: req.body.website,
        status: req.body.status
    };


    const id = req.params.id;
    const dataPartner = await DataPartner.findByPk(id);
    if (!dataPartner) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await DataPartner.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                created_by: dataPartner.created_by,
                company_name: data.company_name,
                creator: data.creator,
                type: data.type,
                contact_person: data.contact_person,
                npwp: data.npwp,
                address: data.address,
                city: data.city,
                country: data.country,
                postal_code: data.postal_code,
                phone_number: data.phone_number,
                fax_number: data.fax_number,
                mobile_number: data.mobile_number,
                email: data.email,
                website: data.website,
                status: data.status,
                created_at: data.createdAt,
                updated_at: data.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}