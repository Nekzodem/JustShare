<?php
	$key = $_SESSION['key'];
	$mail = 'noreply@justshare.com';
	$object = 'Vous avez reçu un fichier sur JustShare !';
	$to = $_POST['mail_destinataire'];
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	$message = $_POST['message'];
	$message = "Vous avez reçu un fichier à télécharger sur JustShare avec le message suivant : <br>" . $message . "<br> <a href='https://remis.promo-4.codeur.online/JustShare/download.php?key=$key'>Télécharger le fichier</a>";
	
	if (mail($to, $object, $message, $headers)) {
		echo " ";
	}
	else {
		echo "Le mail n'a pas été envoyé";
	}
?>