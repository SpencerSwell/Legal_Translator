const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser =require('body-parser');
const { BasicStrategy } = require('passport-http');
const bcrypt = require('bcryptjs');
const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'thinkful',
        password:'thinkful',
        database: 'dictionary'
    }
});

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));
app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
  knex('users').where({id}).first()
    .then((user) => { done(null, user); })
    .catch((err) => { done(err,null); });

}); 
app.use(morgan('common'));




passport.use(new BasicStrategy(function(username, password, done) {
    return dream.knex('user').where('username', username).then(function(results) {
        if (results.length > 0 && results[0].hasOwnProperty('password')) {
            return done(null, dream.passwordHash.verify(password, results[0].password));
        }
        return done(null, false);
    });
}));



const strategy = new BasicStrategy(function(email,password,done){

 return knex.select('email','password').from('users').where('email',email).then(function(results) {
        if (results.length > 0 && results[0].hasOwnProperty('password')) {
            return done(null, true);
        }
        return done(null, false);
    });

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

app.get('/login',
  passport.authenticate('basic', {session: false}),
  function(req, res) {
    res.json(req.user);
});


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
