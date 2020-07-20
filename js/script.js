// var CC, YY, MM, DD, d, dayValue;
// var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
// var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
// function akan() {
//   var genders = getElementGender("gender");
//   if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
//      alert( "Provide a valid year of birth! eg 2019" );
//      document.myForm.year.focus() ;
//      return false;
//   }
//   else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) ||
//   document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
//      alert( "Provide your month of birth! between 1 and 12" );
//      document.myForm.month.focus() ;
//      return false;
//   }
//   else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) ||
//   document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
//      alert( "Provide a valid date that you were born in!" );
//      document.myForm.day.focus() ;
//      return false;
//   }
//   else if(genders[0].checked==false && genders[1].checked==false ) {
//       alert("You can only select male or female");
//       return false;
//   }
//   else{
//     return true ;
//   }
// }
// function calculateDayValue(){
//   year = document.getElementById("year").value;
//   CC = parseInt(year.substring(0,2));
//   YY = parseInt(year.substring(2,4));
//   MM = parseInt(document.getElementById("month").value);
//   DD = parseInt(document.getElementById("date").value);
//   d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
//   console.log(d);
//   return (Math.floor(d));
// }
// function getGender(){
//   var genders = document.getElementsByName("gender");
//   if(genders[0].checked == true){
//     var gender = "male";
//   }
//   else if(genders[1].checked == true){
//     var gender = "female";
//   }
//   else{
//     return false;
//   }
//   switch(gender){
//     case "male":
//       if (dayValue == 1){
//         alert("You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]+"!");
//       }
//       else if(dayValue == 2){
//         alert("You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]+"!");
//       }
//       else if(dayValue == 3){
//         alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]+"!");
//       }
//       else if(dayValue == 4){
//         alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]+"!");
//       }
//       else if(dayValue == 5){
//         alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]+"!");
//       }
//       else if(dayValue == 6){
//         alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]+"!");
//       }
//       else if(dayValue == -0){
//         alert("You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]+"!");
//       }
//     break;
//     case "female":
//       if (dayValue == 1){
//         alert("You were born on "+dayNames[0] + " and Your akan name is  " +femaleNames[0]+"!");
//       }
//       else if(dayValue == 2){
//         alert("You were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1]+"!");
//       }
//       else if(dayValue == 3){
//         alert("You were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2]+"!");
//       }
//       else if(dayValue == 4){
//         alert("You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3]+"!");
//       }
//       else if(dayValue == 5){
//         alert("You were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4]+"!");
//       }
//       else if(dayValue == 6){
//         alert("You were born on " +dayNames[5] + " and Your akan name is " + femaleNames[5]+"!");
//       }
//       else if(dayValue == -0){
//         alert("You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6]+"!");
//       }
//     break
//     default:
//   }
// }
// function findName(){
//   dayValue = calculateDayValue();
//   getGender();
// }



var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);
  if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
  }
}
//Calculate func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
}
//main caller func
 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");//Test chackDayOfWeek function
}
//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("pass");//Test the radio buttons
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:
                // console.console.log("Pass");//Test male case
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                  break;
              }
        break
        default:
        console.log("pass");
    }
}

