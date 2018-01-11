<?php
$fileToUpload = $_FILES['fileToUpload'];
$dossier = 'upload/'.$_FILES['fileToUpload']['name'];
$fichier = basename($_FILES['fileToUpload']['name']);
$taille_maxi = 3000000000;
$taille = filesize($_FILES['fileToUpload']['tmp_name']);
//Début des vérifications de taille du fichier
if($taille>$taille_maxi)
{
     $erreur = 'Le fichier est trop gros. La taille est limitée à 3 giga !';
}
if(!isset($erreur)) //S'il n'y a pas d'erreur, on upload
{
    //On formate le nom du fichier ici...
    $fichier = strtr($fichier, 
          'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ', 
          'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
    $fichier = preg_replace('/([^.a-z0-9]+)/i', '-', $fichier);
    
    // On ouvre un dossier archive
    $zip = new ZipArchive(); 
    if($zip->open('JustShare.zip', ZipArchive::CREATE) === true)
    {
        // Ajout du fichier.
        $zip->addFile($fichier);

        // Et on referme l’archive.
        $zip->close();

        include ("connexion.php"); 

        $requete = $bdd->prepare('INSERT INTO upload VALUES (:mail_expediteur, :mail_destinataire, :message)');
        $requete->execute(array(
        'mail_expediteur' => $_POST['mail_expediteur'],
        'mail_destinataire' => $_POST['mail_destinataire'],
        'message' => $_POST['message']));

        $requete->closeCursor();
    }
    else
    {
        echo 'Impossible d&#039;ouvrir &quot;JustShare.zip<br/>';
        // Traitement des erreurs avec un switch(), par exemple.
    }
}
else
{
     echo $erreur;
}
?>