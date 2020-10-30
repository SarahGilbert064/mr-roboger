//business Logic//

function mrRoboger(inputNumber) {
  const array = [0, 1, 2, 3, 4, 5];
  let newArray = [];
  
  array.forEach(function(number) {
    // alert(inputNumber);

    if (inputNumber.includes(1)) {
      newArray.push("Beep!");
    } else if (inputNumber.includes(2)) {
      newArray.push("Boop!");
    } else if (inputNumber.includes(3)) {
      newArray.push("Won't you be my neightbor?");
    } else {
      newArray.push(array);
    }
  });
};


//UI Logic//

$(document).ready(function() {
  $("input#number").submit(function(event) {
    event.preventDefault();

    const inputString = $("input#number").val();
    const inputNumber = parseInt(inputString);

      $("#result").show();
      $("#outputNumber").text(result);

  });
});
