-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nettikauppa
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_address` varchar(50) NOT NULL,
  `user_postalcode` varchar(5) NOT NULL,
  `user_delivery_area` varchar(50) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `unique_user_email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Paavo Björkbacka','paavo.bjorkbacka@gmail.com','salasana','Isoäidintie 8','96900','Saarenkylä','2024-11-27 08:16:49'),(2,'Nimi Sukunimi','tessti@gmail.com','testi salasana','katu 8','96800','Nivavaara','2024-11-27 08:17:55'),(3,'Laura Virtanen','laura.virtanen@example.com','secure123','Mallikatu 10','00100','Helsinki','2024-11-27 08:34:47'),(4,'Jari Kivimäki','jari.kivimaki@example.com','password456','Rantatie 5','33540','Tampere','2024-11-27 08:34:47'),(5,'Emilia Niemi','emilia.niemi@example.com','emilia789','Metsätie 22','90500','Oulu','2024-11-27 08:34:47'),(6,'Test User','test@example.com','password123','Test Address','12345','Test Area','2024-12-02 08:21:46'),(7,'User1','User1@gmail.com','User1','User1','96900','Rovaniemi','2024-12-02 08:34:18'),(8,'User2','User2@gmail.com','User2','User2','96900','Rovaniemi','2024-12-02 08:36:42'),(9,'User3','User3@gmail.com','User3','User3','96900','Rovaniemi','2024-12-02 10:47:11'),(10,'User4','User4@gmail.com','User4','User4','96900','Rovaniemi','2024-12-02 10:54:18'),(11,'User5','User5@gmail.com','User5','User5','96900','Rovaniemi','2024-12-05 06:08:40'),(12,'kslerbi','ksbrli@gmail.com','aaa','aaa','55555','Rovaniemi','2024-12-05 07:31:46');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-05  9:54:12
