var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // TODO: Update this constant
// every publisher has many authors, every author has many publishers, you can not save all their relationships
// on one side, the optimal solution is to have a relationshop table

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// Publisher only has one unique genre, thus it is sufficient to simply have the genre's ID on the publisher's table

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// same as publisher x author schema
