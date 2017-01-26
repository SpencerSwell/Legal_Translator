create table if not exists legal_translator (
    id serial primary key,
    word text not null,
    definition text not null
);


insert into legal_translator (word, definition) values ('Person', 'Legal person refers to a non-human entity that is treated as a person for limited legal purposes corporations');


insert into legal_translator (word, definition) values ('Test', 'Testing');


create table  if not exists users (
  id serial primary key,
  email text not null,
  password text not null

);

insert into users(email,password) values('ABC','test');


/*Query to get the count of users from table
select count(*) from users where email='ABC';*/


insert into users(email,password) values();


	




-- 	app.post('/users',(req,res)=>{
  
--  console.log(req.body.email+'request of post');
--   const requiredFields=['email','password'];
--   requiredFields.forEach(field =>{
--     if (!(field in req.body)) {
--         res.status(400).json({
--           error: `Missing "${field}" in request body`
--        });
--       }
--     });
--   console.log(req.body.email+'request of post');
--   knex('users').count('*')
--     .where('email','=',req.body.email)
--     .then(count => {
--       let theCount = parseInt(count[0].count);
--       if (theCount > 0) {
--           return res.status(422).end();
--         }
--         else {
--         return hashPassword(req.body.password)
    

--    .then(hashPassword => {
--         console.log(hashPassword);
      
--       return knex('users').insert

--        ({ email:req.body.email, password:hashPassword })
      
--     })
--     .then(now => {
--         console.log(now);
--       res.send('success');
--     })
--     .catch(err => {
--         console.error(err);
--         res.status(500).json({
--           error: 'Something went wrong'
--         });
--     });
-- }


-- });

-- });