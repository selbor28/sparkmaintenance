
var selectedRow = null;
function onFormSubmit(e){
	event.preventDefault();
	var formData = readFormData();
	if(selectedRow === null) {
		insertHours(formData);
	}
	else{
	
	}
}
function readFormData(){
	var formData = {};
	const timeIn = new Date();
	const timeOut = new Date();
	return formData;


}

function insertHours(readFormData){
var table = document.getElementById("empHours");
var newRow = table.insertRow(table.length);
	var cell1 = newRow.insertCell(0);
		cell1.innerHtml = timeIn;
	var cell2 = newRow.insertCell(1);
		cell2.innerHtml = timeOut;
}
