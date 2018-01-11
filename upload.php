<?php

$fileToUpload = $_FILES['fileToUpload'];
$fichier = basename($_FILES['fileToUpload']['name']);
$key =  md5(uniqid(rand(), true));
$folderName = $key.'.zip'; //Créer un identifiant difficile à deviner
$folderPath = 'upload/'.$folderName;
$fileName = ($_FILES['fileToUpload']['name']);
$filePath = 'upload/'.$fileName;
$fileSize = filesize($_FILES['fileToUpload']['tmp_name']);
$maxsize = 3000000000;

if ($_FILES['fileToUpload']['size'] > $maxsize) $erreur = "Le fichier est trop gros"; // vérification taille du fichier

if ($_FILES['fileToUpload']['error'] > 0) $erreur = "Erreur lors du transfert";  // vérification bon déroulement du transfert

if(!isset($erreur)) //S'il n'y a pas d'erreur, on upload :
{
    //déplacement du fichier dans l'archive précédemment créée. 
    $resultat = move_uploaded_file($_FILES['fileToUpload']['tmp_name'],$filePath);

    // On ouvre un dossier archive
    $zip = new ZipArchive(); 
    if($zip->open('upload/'.$folderName, ZipArchive::CREATE) === true)
    {
        // Ajout du fichier.
        $zip->addFile($filePath);

        // Et on referme l’archive.
        $zip->close();

        unlink($filePath);

        // On envoie les infos dans la bdd
       include('bdd_upload.php');
       include('mail_dest.php');
       include('mail_exp.php');
    }
}
else {
    echo $erreur;
}

include('uploadview.php');
?>