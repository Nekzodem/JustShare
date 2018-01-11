<?php
	$mail = 'noreply@justshare.com';
	$object = 'Confirmation d\'envoi';
	$to = $_POST['mail_expediteur'];
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	$message = "Votre fichier a bien été envoyé au destinataire !"; 
	
	if (mail($to, $object, $message, $headers)) {
		echo " ";
	}
	else {
		echo "Le mail n'a pas été envoyé";
	}
?>