create table if not exists legal_translator (
    id serial primary key,
    word text not null,
    definition text not null
);


insert into legal_translator (word, definition) values ('Person', 'Legal person refers to a non-human entity that is treated as a person for limited legal purposes corporations');


insert into legal_translator (word, definition) values ('Test', 'Testing');