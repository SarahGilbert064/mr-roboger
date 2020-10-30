//business Logic//

const array = [1, 2, 3, 4, 5];
const beep ="Beep!";
const boop ="Boop!";
const wontYou ="Won't you be my neighbor?";



// tried to use for.Each method//

function mrRoboger(userInput) {
  let newArray =[];
  array.forEach(function(userInput) {
    newArray.push(userInput)
  }


// using for method//
//   for(let i = 0; i <= userInput; i += 1); {
//     newArray.push(i);
//   }
// }


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
