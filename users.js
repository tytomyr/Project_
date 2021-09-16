const express = require('express');
const users = express();
const json = require('./usersList.json')
const cors = require('cors');
users.use(cors());

users.get('/',cors(), (req,res)=> {
    res.send(json);
});

users.listen(3000) ;