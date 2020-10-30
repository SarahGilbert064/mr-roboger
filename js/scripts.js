//business Logic//


let mrRoboger = function (inputNumber) {
  // const array = [0, 1, 2, 3, 4, 5];
  let newArray = [];
  for (let i = 0; index <=inputNumber; i += 1) {

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
  };
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
