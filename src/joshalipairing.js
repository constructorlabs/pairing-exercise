function pairing(firstName){
  let pairs = [];
  let chosenNumbers = [];
  let interval= 500;
  function pickANumber (){
    let aNumber = Math.floor (Math.random() * firstName.length);
    while (chosenNumbers.includes(aNumber)){
      aNumber = Math.floor (Math.random() * firstName.length);
    }
    chosenNumbers.push(aNumber);
    return aNumber
  }

  while (pairs.length !== Math.floor(firstName.length/2)){
    let firstNumber = pickANumber();
    let secondNumber = pickANumber();
  // let firstNumber = Math.floor (Math.random() * firstName.length);
  // while (chosenNumbers.includes (firstNumber)){
  //   firstNumber = Math.floor (Math.random() * firstName.length);
  // }
  // let secondNumber = Math.floor (Math.random() * firstName.length);
  // while (firstNumber === secondNumber || chosenNumbers.includes(secondNumber)){
  //   secondNumber = Math.floor (Math.random() * firstName.length);
  // }
  //chosenNumbers.push (firstNumber, secondNumber);
    pairs.push ([firstName [firstNumber], firstName [secondNumber]]);
    setTimeout(funtion cb(){
      console.log([firstName [firstNumber], firstName [secondNumber]])
    }, interval)
    interval += 500;
  }

return pairs ;
}

const firstName = ["Josh", "Matilde", "Alex", "Andrew", "Deborah", "Scott", "Alison", "Katia", "Anisa","Ania"]

console.log(pairing(firstName));

######## Second edition ########

function pairing(firstName){
  let pairs = [];
  let chosenNumbers = [];
  let interval= 500;
  function pickANumber (){
    let aNumber = Math.floor (Math.random() * firstName.length);
    while (chosenNumbers.includes(aNumber)){
      aNumber = Math.floor (Math.random() * firstName.length);
    }
    chosenNumbers.push(aNumber);
    return aNumber
  }

  while (pairs.length !== Math.floor(firstName.length/2)){
    let firstNumber = pickANumber();
    let secondNumber = pickANumber();
  // let firstNumber = Math.floor (Math.random() * firstName.length);
  // while (chosenNumbers.includes (firstNumber)){
  //   firstNumber = Math.floor (Math.random() * firstName.length);
  // }
  // let secondNumber = Math.floor (Math.random() * firstName.length);
  // while (firstNumber === secondNumber || chosenNumbers.includes(secondNumber)){
  //   secondNumber = Math.floor (Math.random() * firstName.length);
  // }
  //chosenNumbers.push (firstNumber, secondNumber);
    pairs.push ([firstName [firstNumber], firstName [secondNumber]]);
    setTimeout(function cb(){
      console.log([firstName [firstNumber], firstName [secondNumber]])
    }, interval)
    interval += 500;
  }

setTimeout(function cb(){
      console.log(pairs)
    }, interval+500)
}

const firstName = ["Josh", "Matilde", "Alex", "Andrew", "Deborah", "Scott", "Alison", "Katia", "Anisa","Ania"]

pairing(firstName);
