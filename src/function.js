// ---- EXERSICE 1 ----
let age = prompt('enter age');
checkAge(age);

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}



// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }


//-- --EXERSICE 2-- --
let x = prompt('Enter value 1');
let y = prompt('Enter value 2');
min(x, y);

function min(x, y) {
  if (x <= y) {
    alert(x);
  } else {
    alert(y);
  }

}




//-- --EXERSICE 3-- --
let FirstValue = prompt("Enter value 1");
let SecondValue = prompt('Enter value 2');

pow(FirstValue, SecondValue);

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  console.log(result);
}