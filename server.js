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

app.get('/produit/:nom/:stock', (req, res) => {
    console.log('Appel sur requête entrante /produit');
    var nom = req.params.nom;
    var stock = req.params.stock;
    console.log('Nom : ' + nom);
    console.log('Stock : ' + stock);
    res.json({ 'nom': nom, 'stock': stock });
    res.send('Méthode GET'); // termine le cycle
});

app.get('/redirect', (req, res) => {
    console.log('Appel sur requête entrante /redirect');
    res.redirect('/produit/ordinateur/10');
    res.send('Méthode GET'); // termine le cycle
});













