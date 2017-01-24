
const express = require('express');
const morgan = require('morgan');
const knex = require('knex')({
    client: 'pg',
    connection: {
        database: 'LEGALTRANSLATOR'
    },
});

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));


app.get('/translate/:word', function(req,res) {
console.log(req.params.word);

knex.select('Words', 'Definitions').from('legal_definitions').then(Words => {
    console.log(Words);
});
 res.status(200).send("success");
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
