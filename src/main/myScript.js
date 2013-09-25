

function check(form)/*function to check userid & password*/
{
/*the following code checks whether the entered userid and password are matching*/
if(form.userid.value == "sean@email.com" && form.pswrd.value == "pass1word")
{
window.open('http://www.seancaffrey.vacau.com/')/*opens the target page while Id & password matches*/
}
else 
{
alert("Error Password or Username")/*displays error message*/
}
}

