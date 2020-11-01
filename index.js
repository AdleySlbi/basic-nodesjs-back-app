'use strict';
require('dotenv').config()

const Hapi = require('@hapi/hapi');
const fetch = require('node-fetch');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    // Ecran mes clients : récupérer tous les clients du conseiller
    server.route(require('./routes/sample-route').sampleRoute);

    await server.start();

    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();