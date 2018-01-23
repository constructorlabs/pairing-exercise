const names = ['Alison', 'Katia', 'Alex', 'Ania', 'Debra', 'Alastair', 'Anisa', 'Mathilde', 'Josh', 'Scott'];

function getRandomNumber( max ){
  return Math.floor( Math.random() * max );
}

function getRandomPerson( names ){
  const randomIndex = getRandomNumber( names.length );
  return names.splice( randomIndex, 1 )[0];
}

function pairUp( names ){
  const output = [];

  const length = names.length;

  for( let i = 0; i < length; i += 2){

    const randomPair = [ getRandomPerson(names), getRandomPerson(names) ];

    output.push( randomPair );
  }

  return output;
}

console.log( pairUp(names) );
