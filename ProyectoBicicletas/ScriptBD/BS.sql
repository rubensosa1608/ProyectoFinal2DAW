
/*Creacion de base de datos.*/
CREATE DATABASE IF NOT EXISTS `CarrerasBicicletas`;
USE `CarrerasBicicletas`;

/*Creacion de tablas.*/
CREATE TABLE IF NOT EXISTS `Usuario` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Nombre` varchar(255) NOT NULL,
    `Contraseña` varchar(255) NOT NULL,
    `Email` varchar(255) NOT NULL,
    `Telefono` int(9) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Token` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Id_Usuario` int NOT NULL,
    `Token` varchar(255) NOT NULL,
    `Fecha_creacion` date NOT NULL,
    `Fecha_expiracion` date NOT NULL,
    FOREIGN KEY (`Id_Usuario`) REFERENCES `Usuario`(`Id`)
);

CREATE TABLE IF NOT EXISTS `Evento` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Nombre_evento` varchar(255) NOT NULL,
    `Descripcion` varchar(255) NOT NULL,
    `Fecha_inicio` date NOT NULL
);

CREATE TABLE IF NOT EXISTS `Categoria_Carrera` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Nombre` varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Carrera` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Id_Categoria_Carrera` int NOT NULL,
    `Id_Evento` int NOT NULL,
    `Nombre` varchar(255) NOT NULL,
    `Fecha_inicio` date NOT NULL,
    `Ubicacion` varchar(255) NOT NULL,
    FOREIGN KEY (`Id_Categoria_Carrera`) REFERENCES `Categoria_Carrera`(`Id`),
    FOREIGN KEY (`Id_Evento`) REFERENCES `Evento`(`Id`)
);

CREATE TABLE IF NOT EXISTS `Categoria_Bicicleta` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Nombre` varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Bicicleta` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Id_Categoria_Bicicleta` int NOT NULL,
    `Marca` varchar(255) NOT NULL,
    `Modelo` varchar(255) NOT NULL,
    `Color` varchar(255) NOT NULL,
    FOREIGN KEY (`Id_Categoria_Bicicleta`) REFERENCES `Categoria_bicicleta`(`Id`)
);

CREATE TABLE IF NOT EXISTS `Participante` (
    `Id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Id_Bicicleta` int NOT NULL,
    `Nombre` varchar(255) NOT NULL,
    `Apellidos` varchar(255) NOT NULL,
    `Email` varchar(255) NOT NULL,
    `Fecha_nac` date NOT NULL
);

CREATE TABLE IF NOT EXISTS `Participa` (
    `Id_Carrera` int NOT NULL,
    `Id_Participante` int NOT NULL,
     PRIMARY KEY (`Id_Carrera`, `Id_Participante`)
);


/*Insercion de datos a la base de datos.*/
INSERT IGNORE INTO `Usuario` (`Id`,`Nombre`, `Contraseña`, `Email`, `Telefono`)
VALUES ('1', 'Admin', 'Admin1234', 'Admin@gmail.com', '123456789');

INSERT IGNORE INTO `Categoria_Bicicleta` (`Id`, `Nombre`)
VALUES ('1', 'Urbana'), ('2', 'Ruta'), ('3', 'Montaña'), 
('4', 'BMX'), ('5', 'Circuito'), ('6', 'Gravel'), ('7', 'Trail');

INSERT IGNORE INTO  `Categoria_Carrera` (`Id`, `Nombre`)
VALUES ('1', 'Urbana'), ('2', 'Ruta'), ('3', 'Montaña'), 
('4', 'BMX'), ('5', 'Circuito'), ('6', 'Gravel'),('7', 'Trail');

INSERT IGNORE INTO `Evento` (`Id`, `Nombre`, `Descripcion`, `Fecha_inicio`)
VALUES ('1', 'TurboFest', 'Carreras bicicletas', '2022-05-01');

INSERT IGNORE INTO  `Carrera` (`Id`, `Id_Categoria_Carrera`, `Id_Evento`, `Nombre`, `Fecha_inicio`, `Ubicacion`)
VALUES ('1', '1', '1', 'Carreras bicicletas urbanas', '2022-05-01', 'Calle 1'), 
('2', '2', '1', 'Carreras bicicletas rutas', '2022-05-01', 'Calle 2'),
('3', '3', '1', 'Carreras bicicletas montaña', '2022-05-01', 'Calle 3'),
('4', '4', '1', 'Carreras bicicletas BMX', '2022-05-01', 'Calle 4'),
('5', '5', '1', 'Carreras bicicletas circuito', '2022-05-01', 'Calle 5'),
('6', '6', '1', 'Carreras bicicletas gravel', '2022-05-01', 'Calle 6');

INSERT IGNORE INTO `Bicicleta` (`Id`, `Id_Categoria_Bicicleta`, `Marca`, `Modelo`, `Color`)
VALUES ('1', '3', 'Specialized', 'Rockhopper Expert 27.5', 'Azul'), ('2', '3', 'Specialized', 'Epic World Cup Expert', 'Rojo')
, ('3', '3', 'Specialized', 'Turbo Levo Expert G3', 'Verde'), ('4', '3', 'Specialized', 'S-Works Turbo Levo SL Carbon', 'Negro');

INSERT IGNORE INTO `Participante` (`Id`, `Nombre`, `Apellidos`, `Email`, `Fecha_nac`, `Id_Bicicleta`)
VALUES ('1', 'Pepe', 'Perez', 'Pepe@gmail', '2000-05-06', '1'), ('2', 'Juan', 'Lopez', 'Juan@gmail', '1989-25-01', '2')
, ('3', 'Jonay', 'Martel', 'Jonay@gmail', '1990-05-06', '3'), ('4', 'Ruben', 'Sosa', 'Ruben@gmail', '2002-16-08', '4');

INSERT IGNORE INTO `Participa` (`Id_Carrera`, `Id_Participante`)
VALUES ('3', '1'), ('3', '2'), ('3', '3'), ('3', '4');



