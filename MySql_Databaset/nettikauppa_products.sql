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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_name` varchar(100) NOT NULL,
  `prod_description` text,
  `prod_price` decimal(10,2) NOT NULL,
  `prod_quantity` int(11) NOT NULL,
  `prod_company` varchar(255) NOT NULL,
  `prod_category` varchar(100) NOT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Venum Contender Boxing Gloves - Grey','The Venum Contender Boxing Gloves are designed to withstand any powerful jab, cross, hook and uppercut.\n\nMade with 100% premium synthetic leather prolongs longer durability. The curved anatomical shape, offers great versatility and lasting comfort.\n\nThe Venum Contender boxing gloves’ multi-density foam padding absorbs shock with each strike you make. Large Velcro strap for enclosure ensures a secure fit and provides protection to minimize the risk of injury during training.\n\nWhether you are training, sparring, doing bag or mitt work, these Venum gloves are sure to direct you towards success.',45.00,100,'Venum','Boxing Gear'),(2,'Venum Contender Boxing Shoes - Black','Koe poikkeuksellinen vakaus ja tuki Venum Contender Boxing Shoes -kengissä. Nämä kevyet kengät on erityisesti suunniteltu nyrkkeilijöille, jotka haluavat kengät, joissa on ylivoimainen vakaus ja tuki. Ne sopivat täydellisesti matalan ja keskitason intensiteetin harjoitteluun. Anna kaikkesi kehässä ja kehitä taitojasi Venum Contender Boxing Shoes -kengän tuella.',100.00,100,'Venum','Boxing Gear'),(3,'Venum Challenger Mouthguard - Black','Wherever there is intense training comes the need for intense protection.\n\nOur Venum \"Challenger\" mouthguard is new and improved to provide you a perfect custom fit all while keeping you safe and making sure everything in your mouth stays in place.\n\nThe custom fit design helps prevent any injury and enhances your performance.\n\nThe lower rubber frame, absorbs the shock when you bite and diffuses it in the direction of your strongest teeth.\n\nMade with an advanced Nextfit gel frame for better comfort and added an exclusive breathing channel for a clear passageway of oxygen during training!\n\n',17.00,100,'Venum','Safety & Protection'),(4,'Everlast C3 Pro Competition Velcro Groin Protector','Everlast C3 Pro Competition Velcro Groin Protector - Flexible design offers increased mobility during competition. Dense, shock-absorbing C3 Foam padding and cup protects the groin, hips, and kidneys. Premium leather construction provides lasting durability and functionality. EverDri wicking lining repels excessive moisture during training for comfortable wear. Adjustable hook & loop rear closure for secure placement while training. \n',90.00,100,'Everlast','Safety & Protection'),(5,'Venum \"Challenger\" Standup Shinguards - Black','Standup Shinguard -säärisuojat on kehitetty tarjoamaan paras mahdollinen suoja sekä sinulle että vastustajallesi. Valmistettu kestävästä keinonahasta, topattu tiheällä vaahtomuovilla ja vahvistettu nilkkojen ja sääriluiden kohdalta. Silti suojat ovat äärimmäiset kevyet – tuntuu melkein siltä, kuin niitä ei olisikaan.\n',60.00,100,'Venum','Boxing Gear'),(6,'TITLE Boxing Super Speed Bags','Description',60.00,100,'Title Boxing','Training Equipment'),(7,'TITLE Classic Commander Heavy Bag 2.0','Description',70.00,100,'Title Boxing','Training Equipment'),(8,'Everlast Water Bottle','The Everlast Water Bottle is perfect for your next trip to the gym, featuring a easy grip section to the top along with a handy sports cap and a screw top lid for easy filling.',8.00,100,'Everlast','Accessories'),(9,'The Everlast Training Backpack','The Everlast Training Backpack is a hiking bag,it made of by 100% polyester ,and the bag size is 29*15.5*44cm , the bag crafted with adjustable shoulder straps and carry handles for a classic look. It features main zip fastening and additional pockets for maximum storage. complete with Everlast branding. Suitable for Climbing, camping, hiking, outdoor travel.Hand wash only.',50.00,100,'Everlast','Accessories'),(10,'Venum G-Fit Air Rashguard Longsleeve - Black','Venum G-Fit Air Rashguard Longsleeve - Optimaalista mukavuutta ja liikkuvuutta Jiu-Jitsuun, MMA:han ja voimaharjoitteluun. Vähentää loukkaantumisriskiä ja edistää lihasten palautumista.',56.00,100,'Venum','Apparel & Clothing'),(11,'Muay Thai Shorts Classic Venum - Black','Venum Classic Muay Thai Shorts on pakollinen hankinta kaikille thainyrkkeilijöille, jotka etsivät laadukkaita shortseja! Kevyet shortsit, näppärä kangas ja muotoilu, joka takaa mahtavan liikkumavapauden.',42.00,100,'Venum','Apparel & Clothing'),(12,'ProBox Heavy Duty Punching Bag','Durable punching bag for intense training.',100.00,50,'ProBox','Boxing Gear'),(13,'Boxing Hand Wraps - Black','Stretchable hand wraps to protect your hands.',15.00,100,'BoxFit','Boxing Gear'),(14,'Everlast Boxing Gloves (16oz)','Comfortable and protective boxing gloves for sparring.',80.00,75,'Everlast','Boxing Gear'),(15,'RDX Boxing Headgear','Full-face protection for sparring and training.',60.00,30,'RDX','Boxing Gear'),(16,'Punch Mitts Training Pads','High-quality mitts for focus pad training.',30.00,50,'RDX','Boxing Gear'),(17,'Mouth Guard for Boxing','Protect your teeth with this high-quality mouthguard.',20.00,200,'SafeBox','Safety & Protection'),(18,'Boxing Shin Guards','Protect your legs with these lightweight shin guards.',40.00,120,'ShinGuardPro','Safety & Protection'),(19,'Knee Pads for Sparring','Protect your legs with these lightweight shin guards.',26.00,80,'ProtectPro','Safety & Protection'),(20,'Boxing Elbow Guards','Protect your legs with these lightweight shin guards.',20.00,60,'GuardPro','Safety & Protection'),(21,'Hand Safety Wraps','Protect your legs with these lightweight shin guards.',13.00,150,'FightSafe','Safety & Protection'),(22,'Speed Rope Pro','Lightweight jump rope for speed training.',20.00,200,'SpeedFit','Training Equipment'),(23,'Adjustable Dumbbells (Pair)','Versatile adjustable dumbbells for various training exercises.',130.00,50,'FitGear','Training Equipment'),(24,'Battle Rope Set','Versatile adjustable dumbbells for various training exercises.',90.00,40,'RopeFit','Training Equipment'),(25,'Medicine Ball (10lbs)','Durable medicine ball for explosive strength training.',35.00,80,'MedBallPro','Training Equipment'),(26,'Resistance Bands Set','High-quality resistance bands for stretching and strength exercises.',25.00,100,'ResistPro','Training Equipment'),(27,'Boxing Gear Bag','Durable bag for storing your boxing equipment.',50.00,150,'BagPro','Accessories'),(28,'Adjustable Jump Rope','Customizable jump rope for various workout routines.',16.00,200,'JumpFit','Accessories'),(29,'Gym Towel (Boxing)','Soft, absorbent towel for your boxing workouts.',10.00,250,'FitTowel','Accessories'),(30,'Water Bottle (Plastic)','Reusable water bottle for staying hydrated.',13.00,300,'HydraBox','Accessories'),(31,'Boxing Tape (Roll)','Boxing tape for wrapping hands during training.',5.00,400,'TapePro','Accessories'),(32,'Boxing Training Shorts','Lightweight shorts for boxing training.',30.00,100,'FightWear','Apparel & Clothing'),(33,'Compression Shirt (Men\'s)','Compression shirt for enhanced muscle support.',35.00,150,'SportFit','Apparel & Clothing'),(34,'Boxing Hoodie (Black)','Comfortable hoodie for warming up and relaxation.',45.00,120,'BoxFit','Apparel & Clothing'),(35,'Sweatpants (Unisex)','Breathable tank top for active women.',40.00,180,'RelaxFit','Apparel & Clothing');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09 14:17:44
