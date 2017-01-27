const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser =require('body-parser');
const bcrypt = require('bcryptjs');

const { BasicStrategy } = require('passport-http');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

//connect to database
const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'postgres',
        password:'Dev',
        database: 'LEGALTRANSLATOR'
    }
});

const app = express();

//Use the following middleware
app.use(express.static(process.env.CLIENT_PATH));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan('common'));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser( function( user, done) {
  done(null, user);
  
  //select the first user in the database that matches the id
  knex('users').where({id}).first()
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });

}); 

const strategy = new BasicStrategy(function(email, password, done){
//select username and password and then compare the password
 return knex.select('email','password').from('users').where('email',email)
        .then(function(results) {
          
        if (results.length > 0 && results[0].hasOwnProperty('password')) {
           
            return done(null, bcrypt.compareSync(password, results[0].password))
        }
          return done(null, false)
    });

});

passport.use(strategy);

app.get('/translate/:word', function(req,res) {
  knex.select('word_synoyms', 'definitions')
  .from('synoyms')
  .leftOuterJoin('legal_definitions', 'synoyms.word_id', 'legal_definitions.ids')
  .where('words', '=', req.params.word)    
  
  .then(synonyms => {
        res.send(synonyms);
    })
});

function hashPassword(password){
    return bcrypt
    .hash(password, 10)
    .then(hash => hash);
}

app.post('/login/:email',
  passport.authenticate('basic', {session: false}), function(req, res) {
    res.json(req.user);
});


app.post('/adduser', function (req,res) {
  const requiredFields=['email','password'];
  
  requiredFields.forEach(field =>{
    if (!(field in req.body)) {
        res.status(400).json({
          error: `Missing "${field}" in request body`
       });
      }
    });

  knex('users').count('*').where('email','=',req.body.email)
    .then(count => {
      
      let theCount = parseInt(count[0].count);
     
      if (theCount > 0) {
          return res.status(422).end();
        }
      
        else {
        return hashPassword(req.body.password)
        .then(hashPassword => {
          return knex('users').insert

          ({ email:req.body.email, password:hashPassword })
      
        })
    
    .then(now => {
      res.send('success');
    })
    
    .catch(err => {
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
