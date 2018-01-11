<?php
$finalName = $_GET['key'];
include ("connexion.php"); 

$reponse = $bdd->query('SELECT * FROM upload WHERE finalName = "'.$finalName.'"');
$donnees = $reponse->fetch(PDO::FETCH_ASSOC);
$message =  $donnees["message"];
$fileSize =  $donnees["fileSize"];
$path = $donnees["folderPath"];
include ("downloadview.php");
?>