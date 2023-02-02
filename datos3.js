function tarea()
{
	var name = document.getElementById("name");
	var email = document.getElementById("email") ;
	var message = document.getElementById("message");
	
	if (name.value == "")
	{	
		alert("escribir nombre completo");
	}
	else if (email.value =="")
	{
		alert("escribe correo actual");
	}
	else if (message.value =="")
	{
		alert("escriba una mesaje");
	}
	else
	{
		alert("datos salvos con exito");
	}
}