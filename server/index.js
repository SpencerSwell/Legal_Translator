const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser =require('body-parser');
const { BasicStrategy } = require('passport-http');
const bcrypt = require('bcrypt');

const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'postgres',
        password:'Dev',
        database: 'LEGALTRANSLATOR'
    }
});

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));
app.use(bodyParser.json());
app.use(morgan('common'));

const strategy =new BasicStrategy(function(email,password){


});
passport.use(strategy);


app.get('/translate/:word', function(req,res) {
    console.log(req.params.word);
  knex
  .select('word_synoyms', 'definitions')
  .from('synoyms')
  .leftOuterJoin('legal_definitions', 'synoyms.word_id', 'legal_definitions.ids')
  .where('words', '=', req.params.word)    
  .then(synonyms => {
        console.log(synonyms);
        res.send(synonyms);
    })
});

function hashPassword(password){
    return bcrypt
    .hash(password, 10)
    .then(hash => hash);
}

app.post('/users',(req,res)=>{
  
 console.log(req.body.email+'request of post');
  const requiredFields=['email','password'];
  requiredFields.forEach(field =>{
    if (!(field in req.body)) {
        res.status(400).json({
          error: `Missing "${field}" in request body`
        });
      }
    });
  console.log(req.body.email+'request of post');
  knex('users').count('*')
    .where('email','=',req.body.email)
    .then(count => {
      let theCount = parseInt(count[0].count);
      if (theCount > 0) {
          return res.status(422).end();
        }
        else {
        return hashPassword(req.body.password)
    

    .then(hashPassword => {
        console.log(hashPassword);
      
      return knex('users').insert

        ({ email:req.body.email, password:hashPassword })
      
    })
    .then(now => {
        console.log(now);
      res.send('success');
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'Something went wrong'
        });
    });
}


});

});

app.post('/users/:email',passport.authenticate('basic', { session: false }), (req,res)=>{
const requiredFields=['email','password'];
  requiredFields.forEach(field =>{
    if (!(field in req.body)) {
        res.status(400).json({
          error: `Missing "${field}" in request body`
        });
      }
    });
  knex('users').insert(
  {'email':req.body.email,'password':req.body.password}
  )
  .then(_user=>{
    res.send("Success");
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({
      error: 'Something went wrong'
    });
 });
})

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
