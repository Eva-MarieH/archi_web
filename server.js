const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

app.listen(3211, function() {
    console.log('Server listening on port 3211');
});

const options = {
    key: fs.readFileSync('key.pem'), // lecture clé privée et certificat
    cert: fs.readFileSync('cert.pem')
};
// lancement du serveur https avec clé et certificat associé
const server = https.createServer(options, app).listen(3212, () => {
    console.log('HTTPS => listening on 3212');
});

var __dirname = '/nfs/data01/data/uapv25/uapv2502990/public_html/archi_web/appTest/';

app.use(express.static(__dirname + 'dist/app-test/browser/'));

app.get('/', (req, res) => {
    console.log('Appel sur requête entrante /');
    res.sendFile('index.html');
    //res.send('Méthode GET'); // termine le cycle
});













