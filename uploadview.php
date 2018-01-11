<!doctype html>
    <html lang="fr">
        <head>
            <title>JustShare</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
                <div id="formulaire_contain">
                    <form action="upload.php" method="post" name="formulaire" onsubmit="return veriForm(this)" enctype="multipart/form-data">
                        <div id="ajoutez">
                            <!--<button id="fichiers" type="file"><img class="buttonenvoyer" src="images/ajouter.png"></button>
                            <label class="ajout" for="ajout">Ajoutez vos fichiers</label>-->
                            <input type="file" name="fileToUpload" id="fichiers">
                            <input type="hidden" name="MAX_FILE_SIZE" value="3000000000">
                        </div>
                        <div id="adresse">
                            <label for="courriel"></label>
                            <input id="destinataire" type="email" name="mail_destinataire" onblur="verifDestinataire(this)" placeholder="Adresse du destinataire"/>
                        </div>              
                        <div id="email">
                            <label for="courriel"></label>
                            <input id="mail" type="email" name="mail_expediteur" onblur="verifMail(this)" placeholder="Adresse de l'expéditeur"/>
                        </div>
                        <div id="message">
                            <label for="message"></label>
                            <textarea id="message1" name="message" placeholder="Message..."></textarea>                
                        </div>
                        <div id="button">
                            <label class="envoi" for="envoi">Envoyer</label>
                            <button id="envoyer" type="submit" value="envoyer"><img class="buttonenvoyer" src="images/envoyer.png"></button> 
                        </div>
                    </form>
                    <?php 
                    include ("connexion.php") ;
                    ?>
                </div>
            </section>
            <?php  if ($resultat) echo "<p class='transfert'>Transfert réussi</p>"; ?>
                <div class="bandeorange"></div>      
                <div class="container">   
                <footer>
                    <div class="foot">
                        <div id="copylogo">
                            <p>© <?php echo date('Y'); ?> </p>
                            <img class="share" src="images/logof.png" alt="logo">
                        </div>
                        <p>Mentions légales</p>
                        <img class="hieroglyphe" src="images/hieroglyphe.png" alt="hieroglyphe">
                    </div>    
                </footer>
            </div>  
           
        </body>
    </html>