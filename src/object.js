// ---- EXERSICE 1 ----
const user = {};
//add
user.name = 'John';
user.surname = 'Smith';
//change
user.name = 'Pete';
//delete
delete user.name;






// ---- EXERSICE 2 ----
let schedule = {};
isEmpty(schedule);

function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    alert(true);
  } else {
    alert(false);
  }
}


// ---- EXERSICE 3 ----
let sumVal = 0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

Object.keys(salaries).forEach((key) => {
  sumVal = salaries[key] + sumVal;
});

salaries.sum = sumVal;


// ---- EXERSICE 4  ----
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
multiplyNumeric(menu)

function multiplyNumeric(menu) {
  Object.keys(menu).forEach((key) => {
    if (typeof menu[key] === 'number') {
      menu[key] = menu[key] * 2;
    }
  });
}