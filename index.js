const express = require('express');
const cors = require('cors');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: 'https://harshan-dev-92.com/api',
  issuerBaseURL: 'https://dev-oc4r10h8h01y4zn6.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

app.use(cors());
// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.json({message:"This is the secure endpoint"});
});

app.listen(port);

console.log('Running on port ', port);