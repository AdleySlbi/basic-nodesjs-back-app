const joi = require('joi');
const db = require('../config/database')

exports.sampleRoute = {
    method: 'GET', 
    path: '/',
    handler: (req, h) => {
        return db.select('*').from('users').then(result => {
            return h.response({
                statusCode: 200,
                message: 'OK',
                errors: null,
                data: {
                    data: result
                }
            }).code(200);
        })
        .catch(err => {
            console.log(err)
            return h.response({
                statusCode: 500,
                message: 'Bad request',
                errors : [
                    {message: "Failed to connect to database"}
                ],
                data: null
            }).code(500);
        });
    }
}