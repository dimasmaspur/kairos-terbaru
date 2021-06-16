const Validator = require('fastest-validator');
const v = new Validator();
const { DataPartner } = require('../../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    const cekjwt = jwt.verify(token, 'KairosSCLEDO', function (err, decoded) {
        if (err) {
            return res.status(403).json({ message: err.message });
        }
        user = decoded;
        return user;
    })

    // res.send(cekjwt.name);

    // validasi formnya
    // const schema = {
    //     company_name: 'string|empty:false',
    //     type: 'string|empty:false',
    //     contact_person: 'string|empty:false',
    //     npwp: 'string|empty:false',
    //     address: 'string|empty:false',
    //     city: 'string|empty:false',
    //     country: 'string|empty:false',
    //     postal_code: 'string|empty:false',
    //     phone_number: 'string|empty:false',
    //     fax_number: 'string|empty:false',
    //     mobile_number: 'string|empty:false',
    //     email: 'email|empty:false',
    //     website: 'string|empty:false',
    //     status: 'string|empty:false'
    // }
    // const validate = v.validate(req.body, schema);
    // if (validate.length) {
    //     return res.status(400).json({
    //         status: 'error',
    //         message: validate
    //     });
    // }


    const data = {
        created_by: cekjwt.name,
        company_name: req.body.company_name,
        creator: req.body.creator,
        type: req.body.type,
        contact_person: req.body.contact_person,
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

    try {
        const dataPartner = await DataPartner.create(data);

        return res.json({
            status: "success",
            data: {
                id: dataPartner.id,
                created_by: dataPartner.created_by,
                company_name: dataPartner.company_name,
                creator: dataPartner.creator,
                type: dataPartner.type,
                contact_person: dataPartner.contact_person,
                npwp: dataPartner.npwp,
                address: dataPartner.address,
                city: dataPartner.city,
                country: dataPartner.country,
                postal_code: dataPartner.postal_code,
                phone_number: dataPartner.phone_number,
                fax_number: dataPartner.fax_number,
                mobile_number: dataPartner.mobile_number,
                email: dataPartner.email,
                website: dataPartner.website,
                status: dataPartner.status,
                created_at: dataPartner.createdAt,
                updated_at: dataPartner.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}
