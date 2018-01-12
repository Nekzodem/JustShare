<!doctype html>
    <html lang="fr">
        <head>
            <title>JustShare</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <!-- <link rel="stylesheet" type="text/css" href="style.css">
            <link rel="stylesheet" media="screen and (max-width: 640px)" href="resolution.css"> -->
            <link rel="stylesheet" type="text/css" href="style2.css">
        </head>
        <body>
            <div class="animation">
                <img src="images/fleche.png" id="fleche" alt="fleche de gauche">
                <img src="images/flecheb.png" id="flecheb" alt="fleche de droite">
            </div>    

                <section id="transfer">
                    <div id="imagetexte">
                        <div class="logo">
                            <a href="https://cynthiat.promo-4.codeur.online/JustShare/JustShare/"><img class="just" src="images/logo.png" alt="logo"/></a>                  
                        </div>
                        <div class="mode">
                            <p>
                                Merci d'utiliser notre service !
                                Nous sommes à votre entière disposition pour toutes éventualités.
                                Ex: "Si par la plus grande des maladresses vous venez par erreur d'envoyer des photos compromettantes à votre destinataire." 
                                Veuillez nous contacter et nous analyserons votre requête ainsi que vos fichiers avec le plus grand soin.
                            </p>
                        </div>
                    </div>
                    <div id="formulaire_contain_bis">
                    <?php
                    echo  "<a href='$path'>Télécharger le fichier</a>" ;
                    echo  "<p> Taille du fichier : <br> $fileSize octets</p>" ;
                    echo  "<p>Message : <br> $message</p>" ;
                    include ("connexion.php") ;
                    ?>
                </div>
            </section>
            <?php include ('footer.php')?>








