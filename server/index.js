const express = require('express');
const morgan = require('morgan');


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
app.use(morgan('common'));
  
app.get('/translate/:word', function(req,res) {
  knex.select('word_synoyms', 'definitions')
  .from('synoyms')
  .leftOuterJoin('legal_definitions', 'synoyms.word_id', 'legal_definitions.ids')
  .where('words', '=', req.params.word)    
  
  .then(synonyms => {
        res.send(synonyms);
    })
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
