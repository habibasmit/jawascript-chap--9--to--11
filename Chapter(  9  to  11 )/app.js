// chapter 9 t0 11  
// USER INPUT & CONDITIONAL STATEMENT

// que no #01
// var cityName = prompt("Enter the city name");
// if (cityName === "Karachi") {
//      document.write("Welcome to the city of Light!");
// }

// que no #02
//  var userGender = prompt("Enter your gender");
// if (userGender === "Female") {
//      document.write("Good Morning Ma’am!");
//  }
//  else if (userGender === "Male") {
//      document.write("Good Morning, Sir!");
//  }
//  else {
//      print("Good Morning!");
//  }

// que no #03
//  var userGender = prompt("Enter the color of a Traffic signal?");
// if (userGender === "Red") {
//     document.write("Must stop");
// }
// else if (userGender === "Yellow") {
//     document.write("Ready to move");
// }
// else if (userGender === "Green"){  
//       document.write("Move now");
// }


// que no #04
//  var carFuel = +prompt("Enter the remaining quantity of fuel in your car (in Litres)");
// if (carFuel < 0.25) {
//     document.write("Please refill the fuel in your car..");
// }

// Question no #05
// a)
// var a = 4;
// if (++a === 5){
//     document.write("given condition for variable a is true");
// }

// b)
// var b = 82;
// if (b++ === 83){
// document.write("given condition for variable b is true");
// }

// c)
//  var c = 12;
//  if (c++ === 13){
//  document.write("condition 1 is true");
//  }
//  if (c === 13){
//  document.write("condition 2 is true");
// }
//  if (++c < 14){
//  document.write("condition 3 is true");
//  }
// if(c === 14){
// document.write("condition 4 is true");
// }


// // d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// document.write("The cost equals");
// }

// // e) 
// if (true){
//   document.write("True");
//   }
//   if (false){
//     document.write("False");
//     }

// // f)
//  if("car" < "cat"){
//   document.write("car is smaller than cat");
//   }


// que no #06
// var obtainedMarks=+prompt("Enter Obtained marks in three subjects:");
// var totalMarks=+prompt("Enter total Marks:");
// var Percentage=(obtainedMarks/totalMarks)*100;
// Percentage=Percentage.toFixed(2);

// document.write("Marksheet");
// document.write('total marks :' +totalMarks+'<br>');
// document.write('percentage :' +Percentage+ '<br>')

// var grade;
// var remarks;

//  if (Percentage >= 80){
//      grade = "A-One";
//     remarks = "Excellent!";
//  }
//  else if (Percentage >= 70){
//      grade = "A";
//      remarks = "Good";
//  }
//  else if (Percentage >= 60){
//      grade = "B";
//     remarks = "You need to improve";
//  }
//  else if (Percentage < 60){
//      grade = "Fail";
//      remarks = "Sorry";
//  }
// else{
//    document.write("invalid input" + "<br>")
// }
// document.write('grade :' +grade+ '<br>');
// document.write('remarks :' +remarks+  '<br>');

// --------------------------------question 6 end------------------------------------

// var subject1Marks = +prompt("Enter your Eglish marks");
// var subject2Marks = +prompt("Enter your math marks");
// var subject3Marks = +prompt("Enter your Science marks");
// var totalMarks = 300;
// let perc1 = subject1Marks * 100 /300;
// let perc2 = subject2Marks * 100 /300;
// let perc3 = subject3Marks * 100 /300;
//  document.write("MARK SHEET" );
//  document.write("Total Marks: " + totalMarks + " ");
// document.write("Marks Obtained: " + totalObtainedMarks + " ");
// document.write("Percentage: " + percentage + " ");
//  document.write("Grade: " + grade + " ");
//  document.write("<p>Remarks: " + remarks + " ");


// question no #07
// Guess game

// var secret = 7;
// var guess =+ prompt("Guess the number: \n Between 1-10")
// if (guess === secret ){
//     document.write("Bingo! is correct answer")
// }   
// //b
// if (++secret === guess){
//     document.write("Close enough to the correct answer")
// }else{
//     document.write("Sorry wrong guess")
// }

// questino no #08
// var num =+prompt("Enter num to check number is divisible by 3 or not");
// if (num % 3 === 0) {
//     document.write(num+ ' is Divisible by 3')
// }else{
//     document.write( num+ "  is not Divisible by 3")
// }

// Question no #09
// var num = +prompt("Enter number to check number is even or odd");
// if (num % 2 === 0){
//     confirm(num+ "  is even")
// }else{
//     confirm(num+ " is odd")
// }

//  question no #10
// var temperature = +prompt("Enter your city Temperature");
// if(temperature > 40){
//     document.write("IT ias to hot outsite")
// }else if( temperature > 30 ){
//     document.write("The weather Today is Normal ")
// }else if ( temperature > 20 ){
//     document.write(" Today's weather is cool.")
// }else  {
//     document.write(" OMG! TOday's weather is so cool.")
// }

// // Queastion no #11
// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var cal = prompt(" Chose your operation : \n + , - ,  * , % , /");
// if (cal === '+'){
//     confirm(firstNumber+secondNumber);
// }else if (cal === '-'){
//     confirm(firstNumber-secondNumber);
// }else if (cal === '*'){
//     confirm(firstNumber*secondNumber);
// }else if (cal === '/'){
//     confirm(firstNumber/secondNumber);
// }else{
//     confirm(firstNumber%secondNumber);
// }


// ===========================================================================================
// -----------------------------------  chapter end  -----------------------------------------
//   ===========================================================================================

