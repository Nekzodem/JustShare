<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=cynthiat_justShare;charset=utf8', "cynthiat", "0ePENHkKNd");
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $bdd->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>


