function check(form)/* function to check userid & password */
{
	// Parameters to send to the server
	var params = "username="+form.userid.value+"&password="+form.pswrd.value;
	
	// Send the login request to the server
	var httprequest = new XMLHttpRequest();
	httprequest.open("POST","request/login?cache="+(Math.random()*1000000),false);
	httprequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httprequest.setRequestHeader("Content-length", params.length);
	httprequest.send(params);
	
	// Get the server's response
	var serverResponse = httprequest.responseText;
	
	// Do this to get rid of any whitespace characters
	String.prototype.trim(serverResponse);
	
	// Display to list page if login successful. Expecting 'login-ok' to indicate successful login
	if(serverResponse == 'login-ok'){
		window.open('todolist.html');
	}
	else {
		alert("Error Password or Username");
	}
}

function myFunction(name, job) {
	alert("Welcome " + name + ", the " + job);
}

function updateTxt() {
	var field1 = document.getElementById('textfield').value;
	var field2 = document.getElementById('select').options[document
			.getElementById('select').selectedIndex].value;
	alert(field1 + '&' + field2);

}