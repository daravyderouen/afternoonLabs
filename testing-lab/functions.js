module.exports = {
   returnTwo: () =>{
       return 2
   },
   greeting: (name) => {
       return "Hello ${name}"
   },
   add: (num1, num2) => {
       return num1 +num2
   },

   subtract: (num1, num2) => {
       return num2 - num1
   },

   multiply: (num1, num2) => {
       return num1 * num2
   },

   divide: (num2, num1) => {
       return parseInt(num2) / parseInt(num1)
   }
   //went back in to add parseInt(num2) / parseInt(num1) so that strings can be converted to numbers and it passed. In order for the other functions to do that they need parseInt() in their returns in functions.js!!!!
}
