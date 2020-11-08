//business Logic//


function mrRobo(num) {
  let array = [];
  for(let i = 1; i <= num; i++) {
    if(i.toString().includes("3")) {
      array.push ("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      array.push ("Boop!");
    } else if (i.toString().includes("1")) {
      array.push ("Beep!");
    } else {
      array.push(i);
    }
  }
};  



// let newArry = numbers.map(function(number)

  //must have return statemenet or .map will not work//



// $(document).ready(function() {
//   $("form#mrRoboger").submit(function(event) {
//     event.preventDefault();

//     const inputString = $("input#number").val();
//     const inputNumber = parseInt(inputString);

//     mrRoboger(inputNumber);
    
//       $("#result").show();
//       $("#outputNumber").text(result);

//   });
// });
