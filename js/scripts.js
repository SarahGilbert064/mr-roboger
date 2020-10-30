//business Logic//
  // const array = [0, 1, 2, 3, 4, 5];



function mrRoboger(userInput) {
  let userInputStr = parseInt(userInputStr);
  let newArray =[];
  for (let i = 0; i <= userInput; i += 1); {
    newArray.push(i.toString());
  }
}





// let mrRoboger = function (inputNumber) {
//   let newArray = [];
//   for (let i = 0; index <=inputNumber; i += 1) {
//     inputNumber.push(i.toString());
//   };

//     if (inputNumber.includes(1)) {
//       newArray.push("Beep!");
//     } else if (inputNumber.includes(2)) {
//       newArray.push("Boop!");
//     } else if (inputNumber.includes(3)) {
//       newArray.push("Won't you be my neightbor?");
//     } else {
//       newArray.push(array);
//     }
//   };
// };

  
//User Interface Logic//

$(document).ready(function() {
  $("input#number").submit(function(event) {
    event.preventDefault();

    const inputString = $("input#number").val();
    const inputNumber = parseInt(inputString);

      $("#result").show();
      $("#outputNumber").text(result);

  });
});
