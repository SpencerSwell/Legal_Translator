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