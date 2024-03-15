// function exampleVar() {
//     if (true) {
//       var x = 10;
//     }
//     console.log(x); // Outputs 10, var is accessible throughout the function
//   }
//   exampleVar();

// Use of let
function exampleLet() {
    if (true) {
      let y = 20;
    }
    console.log(y); // Error! y is not defined outside the block
  }
  exampleLet();
  