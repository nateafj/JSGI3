// var run = exercise('running');
// console.log(run());
// var swim = exercise('swimming');
// console.log(swim())

// function exercise(x){
//     return () =>{
//         return 'todays exercise: ' + x;
//     };
// }

var run = exercise("running");
console.log(run()); // prints "Today's exercise: running"
var swim = exercise("swimming");
console.log(swim()); // prints "Today's exercise: swimming"

function exercise(x) {
  return () => {
    return "Today's excerise: " + x;
  };
}
