//business Logic//

let inputString = $("input#number").val();
let inputNumber = parseInt(inputString);





function mrRoboger(inputNumber) {
  
  for(let i = 0; i <= inputNumber.length; i += 1) {
    
    alert(inputNumber);

  }
}







//UI Logic//

$(document).ready(function() {
  $("input#number").submit(function(event) {
    event.preventDefault();

  });
});
