<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=remis_justshare;charset=utf8', "remis", "MZ8VxQafAC");
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $bdd->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>


