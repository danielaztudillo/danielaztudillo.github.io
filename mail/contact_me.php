<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Favor de completar los campos!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$budget = $_POST['budget'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'daniel.aztudillo@nevolut.com'; //analaura@barredaperez.com.mx Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Mensaje de contacto:  $name";
$email_body = "Recibiste un nuevo mensaje de contacto en barredaperez.com.\n\n"."Detalle:\n\nNombre: $name\n\nEmail: $email_address\n\nTelefono: $phone\n\nMensaje:\n$message\n\nPresupuesto: $budget";
$headers = "From: noreply@nevolut.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>