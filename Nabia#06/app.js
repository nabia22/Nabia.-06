// ********** Chapter # 21 to 25 **********
// Task # 01 

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName + " " + lastName
// alert("Your Full Name is:" + " " + fullName)


// Task # 02
// var mobile = prompt("Enter your favourite mobile phone model")
// var length = prompt("Enter length of mobile")
// document.write("My favourite phone is:" + mobile + "<br>")
// document.write("Length of string:" + length)



// var mob = "Samsung Galaxy S6 Edge Plus"
// var length = "28"
// document.write("My favourite phone is:" + " " + mob + "<br>")
// document.write("Length of string:" + " " + length)


// Task # 03

// var word = "Pakistani"
// document.write("String:" + " " + word + "<br>")
// document.write("Index of 'n':" + " "  + word.indexOf("n"))


// Task # 04

// var a = "Hello World"
// document.write("String:" + " "+ a + "<br>")
// document.write("Last index of 'l' : " + " " + a.lastIndexOf("l"))

// Task # 05

// var a = "Pakistani"
// document.write("String:" + " " + a + "<br>")
// document.write("Character at index 3:" + " " + a.charAt(3))


// Task # 06

// var firstName = "Nabia"
// var lastName = "Shahab"
// var fullName = firstName + " " + lastName
// alert("Your Full Name is:" + " " + fullName)


// Task # 07

// var word = "Hyderabad"
// var word1 = word.replace("Hyder","Islam")
// document.write("City:" + " " + word + "<br>")
// document.write("After repalcement:" + " " + word1)


// Task # 08

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var message1 = message.replace(/and/g,"&")
// document.write(message1)


// Task # 09

// var number = "472"
// document.write("Value:" + " " + number + "<br>")
// document.write("Type:" + " " + "String" + "<br>")
// document.write("Value:" + " " + number + "<br>")
// document.write("Type:" + " " + "number")


//Task # 10

// var input = prompt("Enter user input")
// document.write("User input:" + " " + input + "<br>")
// document.write("Upper case:" + " " + input.toUpperCase()) 


// Task # 11

// var input = prompt("Enter user input")
// var firstChar = input.slice(0,1)
// firstChar = firstChar.toUpperCase()
// var otherChar = input.slice(1)
// otherChar = otherChar.toLowerCase()
// var input1 = firstChar + otherChar
// document.write("User input:" + " " + input + "<br>")
// document.write("Title case:" +" " +input1)


// Task # 12

// var num = 35.36
// var num1 = num.toString().replace(".","")
// alert("Number:" + " " + num + "\n" + "Result:" + " " +num1)


// Task # 14

// var items = ["Cake","Apple pie","Cookie","Chips","Patties"]
// var search = prompt("Enter search items")
// if(items.indexOf(search) !==-1){
//     alert("Yes" + " " + search + " " + "is available in our bakery")
// }else{
//     alert("We are sorry." + " " + search + " " + "is not available in our bakery") 
// }


//Task # 15

// var password = prompt("Enter password \n It should contains alphabets and numbers \n It should not start with a number \n It must at least 6 characters long")
// document.write("Enter password: " + password)


// Task # 16

// var university = "ihcaraK ytisrevinU"
// var split = university.split("")
// for(i=university.length-1; i>=0; i--){
//     document.write(university[i]+"<br>")
// }



// Task # 17

// var input = "Pakistan"
// var lastChar = input.slice(-1)
// document.write("User input:" + " " + input + "<br>")
// document.write("Last character of input:" + " " + lastChar)


// Task # 18

// var text = "The quick brown fox jumps over the lazy dog"
// // var word = text.count("the")
// document.write(text.count("the"))






// ********** Chapter # 26 to 30 **********
// Task # 01

// var number = prompt("Enter your positive integer","3.45214")
// var round1 = Math.round(number)
// var round2 = Math.floor(number)
// var round3 = Math.ceil(number)
// document.write("Number:" + " " + number +"<br>")
// document.write("Round off value:" + " " + round1 + "<br>")
// document.write("Floor value:" + " " + round2 + "<br>")
// document.write("Ceil value:" + " " +round3)


// Task # 02

// var number = prompt("Enter negative floating point number","-2.673")
// var round1 = Math.round(number)
// var round2 = Math.floor(number)
// var round3 = Math.ceil(number)
// document.write("Number:" + " " + number + "<br>" + "Round off value:" + " " + round1 + "<br>" + "Floor value:" +" " + round2 + "<br>" + "Ceil value:" + " " + round3 )



// Task # 03

// var num = "-4"
// var absolute = Math.abs(num)
// alert("The absolute value of -4 is" + " " + absolute)

// And

// var num = "5"
// var absolute = Math.abs(num)
// alert("The absolute value of 5 is" + " " + absolute)


// Task # 04

// var dice = Math.random()*7
// var floor = Math.floor(dice)
// document.write("random dice value:" + " " + floor)


//Task # 05

// var user1 =  "Heads"
// var user2 = "Tails"
// var toss = Math.random()*2
// var coin = Math.floor(toss)
// if(coin === 0){
//     document.write("2" + "<br>" + "random coin value:" + " " + user1)
// }else{
//     document.write("1" + "<br>" +  "random coin value:" + " " + user2)
// }

// Task # 06

// var num = Math.random()*100
// var round = Math.round(num)
// alert("Random number between 1 and 100:" + " " +  round)



// Task # 08

// var num = prompt("Enter a number between 1 to 10")
// var num1 = Math.random()*10
// var floor = Math.floor(num1)
// if(floor == num){
//     alert("Congrats"  + " " + num)
// }
// else{
//     alert("Try agin" + " " + num)
// }



// ********** Chapter # 31 to 34 **********

// Task # 01

// var a = new Date()
// document.write(a)


// Task # 02

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// alert("Current month:" + " " +  n)


// Task # 03

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is" + " " + nameOfToday)


// Task # 13

// var dob = new Date(prompt("Enter your date of birth","Jan 1,1970"))
// var dobmilli = dob.getTime()
// var today = new Date()
// var todaymilli = today.getTime()
// var diff = todaymilli - dobmilli
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("Your age is " + " " + accuage + "<br>")
// document.write("Your birth year is" + " " + dob)


// Task # 14

// var custName = prompt("Enter customer name")
// var currMonth = prompt("Enter current month")
// var NoOfUnits = prompt("Enter number of units")
// var chargesPerUnit = "40"
// var netAmountpayable = chargesPerUnit * NoOfUnits
// var latePaymentSurcharge = "400"  
// var grossAmountPayable = netAmountpayable + latePaymentSurcharge
// document.write("<h1>K-Electric Bill</h1>" + " <br> ")
// document.write("Cutomer Name:" + " " + "<strong>" +  custName + "</strong>" + " <br> ")
// document.write("Month:" + " " + "<strong>" + currMonth + "</strong>" + " <br> ")
// document.write("Number of units:" + " " +  "<strong>" + NoOfUnits +  "</strong>" + " <br> ")
// document.write("Charges per unit:" +  "<strong>" + chargesPerUnit +  "</strong>" + " <br> " + "<br>")
// document.write("Net Amount Payable(within Due Date):" + " " +  "<strong>" + netAmountpayable +  "</strong>" + "<br>")
// document.write("Late Payment Surcharge:" + " " +  "<strong>" + latePaymentSurcharge +  "</strong>" +  "<br>")
// document.write("Gross Amount Payable(after Due Date):" + " " +  "<strong>" + grossAmountPayable +  "</strong>" )




// ********** Chapter # 35 to 38 **********
// Task # 01

// var a = new Date()
// alert(a)


// Task # 02

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName + " " + lastName
// alert("Your Full Name is:" + " " + fullName)



// Task # 03

// var a = +prompt("Enter first number")
// var b = +prompt("Enter your second number")
// var c = a + b 
// alert("Sum of two numbers is : " + " " + c)



// Task # 04

// var num1 = prompt("Enter first number")
// var sign = prompt("Enter your operator")
// var num2 = prompt("Enter second number")
// document.write(num1 + sign + num2)
// if(sign === "+"){
//     alert((+num1) + (+num2))
// }
// else if(sign === "-"){
//     alert(num1 - num2)
// }
// else if(sign === "*"){
//     alert(num1 * num2)
// }
// else if(sign === "/"){
//     alert(num1 / num2)
// }
// else if(sign === "%"){
//     alert(num1 / num2 *100 + "%")
// }


// Task # 05

// var a = prompt("Enter a number")
// var b = a*a
// alert("Square of" + " " + a + " " + "is :" + " " + b)


// Task # 06

// var input = prompt("Enter the number to get factorial of: ");
// var result = input;
// for(var i=1;i < input;i++){
//   result = i * result;
// }
// alert("The factoraial of " + " " + input + " " + "is :" + " " + result);


// Task # 11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));


// Task # 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word ('Web Development Tutorial'));


// Task # 13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count( 'JSResourceS.com', 'o'));







