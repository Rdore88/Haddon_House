function address(num){
  var input = document.createElement('input');
  input.type = "text";
  input.placeholder = "Full Address";
  input.name = "address" + num;
  return input
}

function landlord(num){
  var input = document.createElement('input');
  input.type = "text";
  input.placeholder = "Landlord/Property Management Co. Name";
  input.name = "landlord" + num;
  return input
}

function landlordPhonenumber(num){
  var input = document.createElement('input');
  input.type = "tel";
  input.pattern = "[0-9]{10}";
  input.placeholder = "Landlord/Property Management Co. Phonenumber";
  input.name = "landlordPhone" + num;
  return input
}

function rent(num){
  var input = document.createElement('input');
  input.type = "number";
  input.placeholder = "Monthly Rent";
  input.name = "rent" + num;
  return input
}

function roommates(num){
  var input = document.createElement('input');
  input.type = "text";
  input.placeholder = "Number of Roommates";
  input.name = "roommates" + num;
  return input
}

function lengthLived(num){
  var input = document.createElement('input');
  input.type = "text";
  input.placeholder = "How long did you live at this address?";
  input.name = "lengthLived" + num;
  return input
}

function addResidence(){
  var residence = document.querySelector('.residenceContainer')
  console.log(residence);
  var pastResidences = document.querySelectorAll('.residence')
  var num = pastResidences.length + 1
  var header = document.createElement('h3')
  header.textContent = "Residence " + num
  var div = document.createElement('div');
  div.className = "residence";
  div.appendChild(address(num));
  div.appendChild(landlord(num));
  div.appendChild(landlordPhonenumber(num));
  div.appendChild(rent(num));
  div.appendChild(roommates(num));
  div.appendChild(lengthLived(num));
  residence.appendChild(header);
  residence.appendChild(div);

}
