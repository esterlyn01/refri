-- MySQL dump 10.13  Distrib 5.7.17, for Win32 (AMD64)
--
-- Host: localhost    Database: refri
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asignarservicios`
--

DROP TABLE IF EXISTS `asignarservicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asignarservicios` (
  `ID_EQUIPO_SEVICIO` int(5) NOT NULL AUTO_INCREMENT,
  `EQUIPO_PLACA` varchar(25) DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `HORA` time DEFAULT NULL,
  `orden_servicio_idORDEN_SERVICIO` int(5) DEFAULT NULL,
  PRIMARY KEY (`ID_EQUIPO_SEVICIO`),
  KEY `fk_EQUIPO_has_SERVICIO_EQUIPO1` (`EQUIPO_PLACA`),
  KEY `fk_equipo_has_servicio_orden_servicio1_idx` (`orden_servicio_idORDEN_SERVICIO`),
  CONSTRAINT `fk_EQUIPO_has_SERVICIO_EQUIPO1` FOREIGN KEY (`EQUIPO_PLACA`) REFERENCES `equipo` (`PLACA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_equipo_has_servicio_orden_servicio1` FOREIGN KEY (`orden_servicio_idORDEN_SERVICIO`) REFERENCES `orden_servicio` (`idORDEN_SERVICIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignarservicios`
--

LOCK TABLES `asignarservicios` WRITE;
/*!40000 ALTER TABLE `asignarservicios` DISABLE KEYS */;
INSERT INTO `asignarservicios` VALUES (3,'1','2017-07-06','23:01:00',9),(4,'1','2017-07-06','23:01:00',9),(5,'1','2017-07-06','23:01:00',9);
/*!40000 ALTER TABLE `asignarservicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo`
--

DROP TABLE IF EXISTS `equipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipo` (
  `PLACA` varchar(25) NOT NULL,
  `TIPO_DE_AIRE_A` varchar(45) DEFAULT NULL,
  `CAPACIDAD_BTU` int(7) DEFAULT NULL,
  `UBICACION` varchar(45) DEFAULT NULL,
  `AMPERAJE` float DEFAULT NULL,
  `VOLTAJE` float DEFAULT NULL,
  `PRESION_ALTA` int(3) DEFAULT NULL,
  `PRESION_BAJA` int(3) DEFAULT NULL,
  `REFRIGERANTE` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`PLACA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES ('1','AIRE ACONDICIONADO',2,'CALI',2,3,3,3,'30'),('4','4',4,'4',4,4,4,0,NULL),('45','4',4,'4',4,4,4,0,NULL),('666','66',66,'66',66,66,66,66,'66'),('9','9',9,'9',9,9,9,9,'9');
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden_servicio`
--

DROP TABLE IF EXISTS `orden_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden_servicio` (
  `idORDEN_SERVICIO` int(5) NOT NULL AUTO_INCREMENT,
  `FECHE_ORDEN_SEVICIO` date DEFAULT NULL,
  `USUARIO_ID_USUARIO` int(5) DEFAULT NULL,
  `servicio_ID_SERVICIO` int(11) DEFAULT NULL,
  PRIMARY KEY (`idORDEN_SERVICIO`),
  KEY `fk_ORDEN_SERVICIO_USUARIO1` (`USUARIO_ID_USUARIO`),
  KEY `fk_orden_servicio_servicio1_idx` (`servicio_ID_SERVICIO`),
  CONSTRAINT `fk_ORDEN_SERVICIO_USUARIO1` FOREIGN KEY (`USUARIO_ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orden_servicio_servicio1` FOREIGN KEY (`servicio_ID_SERVICIO`) REFERENCES `servicio` (`ID_SERVICIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden_servicio`
--

LOCK TABLES `orden_servicio` WRITE;
/*!40000 ALTER TABLE `orden_servicio` DISABLE KEYS */;
INSERT INTO `orden_servicio` VALUES (1,'2017-04-12',1,6),(2,'2017-04-12',2,6),(4,'2017-04-17',1,0),(5,'2017-07-03',2,6),(6,'2017-07-04',1,1),(7,'2017-07-04',2,1),(8,'2017-07-07',1,1),(9,'2017-07-07',2,10),(10,'2017-07-07',1,10),(11,'2017-07-07',1,1),(12,'2017-07-07',1,1),(13,'2017-07-07',2,12),(14,'2017-07-07',2,12),(15,'2017-07-07',2,12);
/*!40000 ALTER TABLE `orden_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `ID_ROL` int(5) NOT NULL AUTO_INCREMENT,
  `ROL` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_ROL`),
  UNIQUE KEY `ROL_UNIQUE` (`ROL`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (11,'tecnico'),(13,'usuario');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `sele_listar_crearservio`
--

DROP TABLE IF EXISTS `sele_listar_crearservio`;
/*!50001 DROP VIEW IF EXISTS `sele_listar_crearservio`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `sele_listar_crearservio` AS SELECT 
 1 AS `ID_USUARIO`,
 1 AS `NOMBRE_USUARIO`,
 1 AS `CONTRASENA_USUARIO`,
 1 AS `DIRECCION`,
 1 AS `TELEFONO`,
 1 AS `TIPO_DOCUMENTO_ID_TIPO_DOCUMENTO`,
 1 AS `DOCUMENTO`,
 1 AS `ROL_ID_ROL`,
 1 AS `ID_SERVICIO`,
 1 AS `TIPO`,
 1 AS `DESCRIPCION`,
 1 AS `idORDEN_SERVICIO`,
 1 AS `FECHE_ORDEN_SEVICIO`,
 1 AS `USUARIO_ID_USUARIO`,
 1 AS `servicio_ID_SERVICIO`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio` (
  `ID_SERVICIO` int(11) NOT NULL AUTO_INCREMENT,
  `TIPO` varchar(45) NOT NULL,
  `DESCRIPCION` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`ID_SERVICIO`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (1,'LAVADO','LAVADO AQUIPO'),(6,'ENFUAGADO','ENFUAGADO EQUIPO'),(9,'MATENIMIENTO GENERAL','MATENIMIENTO GENERAL EQUIPO'),(10,'MANTENIMIENTO PROFUNDO','MANTENIMIENTO PROFUNDO EQUIPO'),(11,'prpr','vrv'),(12,'ui','iu'),(13,'pot','drg'),(14,'po','opp'),(15,'po','opp'),(16,'lk','kl'),(17,'po','po'),(18,'oi','po'),(19,'oi','po'),(20,'hh','hh'),(21,'mj','mj');
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_documento` (
  `ID_TIPO_DOCUMENTO` int(5) NOT NULL AUTO_INCREMENT,
  `TIPO_DOCUMENTO` varchar(3) NOT NULL,
  PRIMARY KEY (`ID_TIPO_DOCUMENTO`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
INSERT INTO `tipo_documento` VALUES (1,'Cc');
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `ID_USUARIO` int(5) NOT NULL AUTO_INCREMENT,
  `NOMBRE_USUARIO` varchar(45) NOT NULL,
  `CONTRASENA_USUARIO` varchar(45) NOT NULL,
  `DIRECCION` varchar(45) DEFAULT NULL,
  `TELEFONO` int(11) DEFAULT NULL,
  `TIPO_DOCUMENTO_ID_TIPO_DOCUMENTO` int(5) DEFAULT NULL,
  `DOCUMENTO` varchar(45) NOT NULL,
  `ROL_ID_ROL` int(5) DEFAULT NULL,
  PRIMARY KEY (`ID_USUARIO`),
  UNIQUE KEY `DOCUMENTO_UNIQUE` (`DOCUMENTO`),
  KEY `fk_USUARIO_TIPO_DOCUMENTO1` (`TIPO_DOCUMENTO_ID_TIPO_DOCUMENTO`),
  KEY `fk_USUARIO_ROL1` (`ROL_ID_ROL`),
  CONSTRAINT `fk_USUARIO_ROL1` FOREIGN KEY (`ROL_ID_ROL`) REFERENCES `rol` (`ID_ROL`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_USUARIO_TIPO_DOCUMENTO1` FOREIGN KEY (`TIPO_DOCUMENTO_ID_TIPO_DOCUMENTO`) REFERENCES `tipo_documento` (`ID_TIPO_DOCUMENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'amilio','22','CR 64',2147483647,1,'111',11),(2,'breiner','44','CR8',665,1,'548754',11),(3,'PEDRO','nose','(:',877,NULL,'877',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `sele_listar_crearservio`
--

/*!50001 DROP VIEW IF EXISTS `sele_listar_crearservio`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `sele_listar_crearservio` AS select `usuario`.`ID_USUARIO` AS `ID_USUARIO`,`usuario`.`NOMBRE_USUARIO` AS `NOMBRE_USUARIO`,`usuario`.`CONTRASENA_USUARIO` AS `CONTRASENA_USUARIO`,`usuario`.`DIRECCION` AS `DIRECCION`,`usuario`.`TELEFONO` AS `TELEFONO`,`usuario`.`TIPO_DOCUMENTO_ID_TIPO_DOCUMENTO` AS `TIPO_DOCUMENTO_ID_TIPO_DOCUMENTO`,`usuario`.`DOCUMENTO` AS `DOCUMENTO`,`usuario`.`ROL_ID_ROL` AS `ROL_ID_ROL`,`servicio`.`ID_SERVICIO` AS `ID_SERVICIO`,`servicio`.`TIPO` AS `TIPO`,`servicio`.`DESCRIPCION` AS `DESCRIPCION`,`orden_servicio`.`idORDEN_SERVICIO` AS `idORDEN_SERVICIO`,`orden_servicio`.`FECHE_ORDEN_SEVICIO` AS `FECHE_ORDEN_SEVICIO`,`orden_servicio`.`USUARIO_ID_USUARIO` AS `USUARIO_ID_USUARIO`,`orden_servicio`.`servicio_ID_SERVICIO` AS `servicio_ID_SERVICIO` from ((`usuario` join `servicio`) join `orden_servicio`) where ((`orden_servicio`.`USUARIO_ID_USUARIO` = `usuario`.`ID_USUARIO`) and (`orden_servicio`.`servicio_ID_SERVICIO` = `servicio`.`ID_SERVICIO`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-16  7:56:03
