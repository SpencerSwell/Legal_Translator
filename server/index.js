


const express = require('express');
const morgan = require('morgan');
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


app.get('/translate/:word', function(req,res) {

knex.select('definitions').from('legal_definitions').where({words:req.params.word}).then(word => {
    console.log(word);
    res.send(word);
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
