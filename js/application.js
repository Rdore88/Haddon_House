function address(num){
  var input = document.createElement('input');
  input.type = "text"
  input.placeholder = "Full Address"
  return input
}



function addResidence(){
  var residence = document.querySelector('.residenceContainer')
  console.log(residence);
  var pastResidences = document.querySelectorAll('.residence')
  var num = pastResidences.length + 1
  console.log(num);
  var div = document.createElement('div');
  div.className = "residence";
  div.appendChild(address(num));
  residence.appendChild(div);

}
