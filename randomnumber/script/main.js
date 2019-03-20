function getNumber(){
  var random = this.getRandom();

  var sum = this.getSumNumber(random);

  var avarage = this.getAvarage(sum, random);

  var multiplication = this.getMultiplication(random);

  document.getElementById('random-number').innerHTML = random.join(', ');

  document.getElementById('sum').innerHTML = sum;

  document.getElementById('avarage').innerHTML = avarage;

  document.getElementById('multiplication').innerHTML = multiplication;

}

function getRandom(){

  var random = [];

  for (let index = 0; index < 5; index++) {
    
    random[index] = Math.floor(Math.random() * 100) + 1;
    
  }

  return random;

}

function getSumNumber(number){

  var sum = number.reduce(sum);

  function sum(total, value) {

    return total + value;
    
  }

  return sum;

}

function getAvarage(sum, number){

  return sum/number.length;

}

function getMultiplication(number){
  
  var result = number.reduce(multiplication);

  function multiplication(total, value) {

    return total * value;
    
  }

  return result;
}