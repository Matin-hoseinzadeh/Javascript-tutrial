// ---- EXERSICE 1 ----
let x = 0;
while (++x < 5) {
  alert(x);
}
for (let x = 0; ++x < 5;) alert(x);





// ---- EXERSICE 2 ----
let test1 = confirm(
  'Show even numbers in Alert'
);
if (test1) {
  for (let x = 2; x <= 10; x += 2) {
    alert(x);
  }
}