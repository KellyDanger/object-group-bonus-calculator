$(document).ready(readyNow)
function readyNow(){
  console.log('jq');
  



const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let bonusPercentage = 0;
let bonus = 0;
let newEmployeeObject = {}

function arrayLoop(array){
  for(let i = 0; i < array.length; i++ ){
    console.log(array[i]);
  }//end for loop
}//end arrayLoop function
arrayLoop(employees);

function filter(employeeObject){
  //take employee object as argument
  //return new object with new key/value pairs
  bonusCalc(employeeObject);
  newEmployeeObject = {
    name: employeeObject.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: +employeeObject.annualSalary + Number(bonus),
    totalBonus: Math.round(Number(bonus))
  };
displayEmployees();
return newEmployeeObject;
}//end filter function

function bonusCalc(employeeObject){
  if(employeeObject.reviewRating <= 2){
    bonus = 0;
    bonusPercentage = 0;
  }
  else if(employeeObject.reviewRating === 3){
    bonus = employeeObject.annualSalary * .04;
    bonusPercentage = 4;
  }
  else if(employeeObject.reviewRating === 4){
    bonus = employeeObject.annualSalary * .06;
    bonusPercentage = 6;
  }
  else if(employeeObject.reviewRating === 5){
    bonus = employeeObject.annualSalary * .10;
    bonusPercentage = 10;
  }//end else if chain
  if(employeeObject.employeeNumber.length === 4){
    bonus += employeeObject.annualSalary * .05;
    bonusPercentage += 5;
  }//end if
  if(bonus > 0 && employeeObject.annualSalary > 65000){
    bonus -= employeeObject.annualSalary * .01;
    
  }//end if
}//end bonusCalc

function displayEmployees(){
  let el = $('#employeeInfo');
  el.empty();
  el.append(`Name: ${newEmployeeObject.name} <br> Bonus Percentage: ${newEmployeeObject.bonusPercentage}% <br> Total Compensation: $${newEmployeeObject.totalCompensation} <br> Total Bonus: $${newEmployeeObject.totalBonus}`);
}
displayEmployees()
console.log( employees );
console.log( filter (employees[0]))
//${newEmployeeObject}
}