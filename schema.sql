create table if not exists legal_definitions (
    id serial primary key,
    word text not null,
    definition text not null
);


insert into legal_definitions (word, definition) values ('PERSON', 'Legal person refers to a non-human entity that is treated as a person for limited legal purposes corporations');

insert into legal_definitions (word, definition) values ('CITIZEN', ' A person who by place of birth, nationality of one or both parents,
	 or by going through the naturalization process has sworn loyalty to a nation.');

insert into legal_definitions (word, definition) values ('ASSAULT', 'An assault is carried out by a threat of bodily harm
	 coupled with an apparent, present ability to cause the harm.');

insert into legal_definitions (word, definition) values ('HOUSE', 'A place for the habitation and dwelling of man.
	 This word has several significations, as it is applied to different things');

insert into legal_definitions (word, definition) values ('CORPORATION', ' an organization formed with state governmental approval
 to act as an artificial person to carry on business (or other activities),
  which can sue or be sued, and (unless it is non-profit) can issue shares
   of stock to raise funds with which to start a business or increase its capital.
    One benefit is that a corporations lack of liability for damages or debts is limited to
     its assets, so the shareholders and officers are protected from personal claims,
      unless they commit fraud.');


create table if not exists synonyms (

id serial primary key,
word_id integer references legal_definitions not null,
synonyms text not null 


);

insert into synonyms (word_id, synonyms) values (1,'Fellow, Individual, Mortal Body, Human Being');

insert into synonyms (word_id, synonyms) values (2,'Habitant, Resident, Denizen, inmate');

insert into synonyms (word_id, synonyms) values (3,'Aggression, Intrusion, Aggravated Assault, Battery');

insert into synonyms (word_id, synonyms) values (4,'Abode, Property, Residence, Domicile');

insert into synonyms (word_id, synonyms) values (5,'Company, Artifical Person, Legal Fiction , Business Trust');
