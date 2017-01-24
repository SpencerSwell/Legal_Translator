create table if not exists Legal_definitions (
ids serial primary key,
Words text NOT NULL,
Definitions text NOT NULL

);

    

    insert into Legal_definitions  (Words, Definitions)
values ('Corporation', 'an organization formed with state governmental approval
 to act as an artificial person to carry on business (or other activities),
  which can sue or be sued, and (unless it is non-profit) can issue shares
   of stock to raise funds with which to start a business or increase its capital.
    One benefit is that a corporations lack of liability for damages or debts is limited to
     its assets, so the shareholders and officers are protected from personal claims,
      unless they commit fraud.'), 

	('Person','1) a human being. 
      2) a corporation treated as having the rights and obligations of a person.
       Counties and cities can be treated as a person in the same manner as a corporation.
        However, corporations, counties and cities cannot have the emotions of humans
         such as malice, and therefore are not liable for punitive damages' ),

	('House', 'A place for the habitation and dwelling of man.
	 This word has several significations, as it is applied to different things'),

	('Citizen', ' A person who by place of birth, nationality of one or both parents,
	 or by going through the naturalization process has sworn loyalty to a nation.')