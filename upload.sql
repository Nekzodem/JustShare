-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 08 Février 2018 à 15:56
-- Version du serveur :  10.1.26-MariaDB-0+deb9u1
-- Version de PHP :  7.0.19-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cynthiat_justShare`
--

-- --------------------------------------------------------

--
-- Structure de la table `upload`
--

CREATE TABLE `upload` (
  `ID` int(11) NOT NULL,
  `mail_expediteur` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mail_destinataire` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `message` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `folderPath` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `fileSize` int(11) NOT NULL,
  `finalName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `upload`
--

INSERT INTO `upload` (`ID`, `mail_expediteur`, `mail_destinataire`, `message`, `folderPath`, `fileSize`, `finalName`) VALUES
(58, 'remi.s@codeur.online', 'remi.s@codeur.online', 'jeanc', 'upload/46c0f1a0e39fd78abd769d315634131e.zip', 47780, '46c0f1a0e39fd78abd769d315634131e'),
(59, 'cynthiat@codeur.online', 'tirel.cynthia@gmail.com', 'demo', 'upload/e75aaff49a5c4100b18b888a0ad3f5c6.zip', 86659, 'e75aaff49a5c4100b18b888a0ad3f5c6'),
(60, 'cynthiat@codeur.online', 'cynthiat@codeur.online', 'Demo1', 'upload/e75aaff49a5c4100b18b888a0ad3f5c6.zip', 86659, 'e75aaff49a5c4100b18b888a0ad3f5c6'),
(61, 'cynthiat@codeur.online', 'cynthiat@codeur.online', 'demo2', 'upload/e8fc97aa894a61e38b698e6c9df9d20b.zip', 268039, 'e8fc97aa894a61e38b698e6c9df9d20b'),
(62, 'remi260995@live.fr', 'remi.s@codeur.online', 'ahahahaha', 'upload/5abe421c036b48855d17cda76f2ec5dc.zip', 47780, '5abe421c036b48855d17cda76f2ec5dc'),
(63, 'remi260995@live.fr', 'remi260995@live.fr', 'ahahahahahah', 'upload/35f0d18714b5ca2cb3e57269d266ed41.zip', 47780, '35f0d18714b5ca2cb3e57269d266ed41');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `upload`
--
ALTER TABLE `upload`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `upload`
--
ALTER TABLE `upload`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
