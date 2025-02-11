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

app.get('/', (req, res) => {
    console.log('Appel sur requête entrante /');
    res.sendFile('/home/nas-wks01/users/uapv2502990/Donnees_itinerantes_depuis_serveur_pedagogique/public_html/archi_web/appTest/dist/app-test/browser');
    //res.send('Méthode GET'); // termine le cycle
});













