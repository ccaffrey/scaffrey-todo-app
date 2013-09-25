

function check(form)/*function to check userid & password*/
{
/*the following code checks whether the entered userid and password are matching*/
if(form.userid.value == "sean@email.com" && form.pswrd.value == "pass1word")
{
window.open('todolist.html')/*opens the target page while Id & password matches*/
}
else 
{
alert("Error Password or Username")/*displays error message*/
}
}

function myFunction(name,job)
{
alert("Welcome " + name + ", the " + job);
}

  function updateTxt()
  {  
    var field1 = document.getElementById('textfield').value;  
    var field2 = document.getElementById('select').options[document.getElementById('select').selectedIndex].value;  
    alert(field1+'&'+field2);

    }  

