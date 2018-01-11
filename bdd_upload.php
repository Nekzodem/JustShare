<?php
//Transfert des données dans la bdd
include ("connexion.php"); 

$requete = $bdd->prepare('INSERT INTO upload (mail_expediteur, mail_destinataire, message, folderPath, fileSize, finalName) VALUES (:mail_expediteur, :mail_destinataire, :message, :folderPath, :fileSize, :finalName)');
$requete->execute(array(
'mail_expediteur' => $_POST['mail_expediteur'],
'mail_destinataire' => $_POST['mail_destinataire'],
'message' => $_POST['message'],
'folderPath' => $folderPath,
'fileSize' => $fileSize,
'finalName' => $key));
$requete->closeCursor();

?>