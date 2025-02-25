const express = require('express');
const axios = require('axios');
const app = express();

// Steami API võtme ja URL-i muutujad
const STEAM_API_KEY = 'YOUR_STEAM_API_KEY'; // Asenda oma Steam API võtmega
const STEAM_REDIRECT_URL = 'http://localhost:3000/auth/steam/callback'; // Suunamine pärast sisselogimist

app.get('/auth/steam', (req, res) => {
  // Siin toimub autentimise suunamine Steami
  const steamLoginUrl = `https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.return_to=${STEAM_REDIRECT_URL}`;
  res.redirect(steamLoginUrl);
});

app.get('/auth/steam/callback', (req, res) => {
  const steamId = req.query['steamid']; // Oletame, et sa saad Steami ID

  if (steamId) {
    res.send(`Autentimine edukas! Steami ID: ${steamId}`);
  } else {
    res.send('Autentimine ebaõnnestus.');
  }
});

app.listen(3000, () => {
  console.log('Server kuulab porti 3000');
});
