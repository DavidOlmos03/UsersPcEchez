/*ALTER TABLE Alquilado ADD CONSTRAINT PK_Alquilados PRIMARY KEY (Serial);*/
/*ALTER TABLE Alquilado ALTER COLUMN Serial nvarchar(255) NOT NULL;*/
/*ALTER TABLE Alquilado ADD CONSTRAINT PK_Alquilados PRIMARY KEY (Serial);*/

/*DELETE FROM Alquilado WHERE User =  'William%';*/
/*select * from Alquilado where User = 'GKQNYH3';*/
/*ALTER TABLE Propio ADD Id INT IDENTITY(1,1), CONSTRAINT PK_Propio PRIMARY KEY (Id);*/
/*DELETE FROM Devolucion WHERE Id BETWEEN 73 AND 863;*/
/*INSERT INTO Alquilado([User],[Serial ],[PC Name],[Installation Date],[Plate PC],[Specifications ],[Ram],[Desktop/Laptop],[Domain])
SELECT [User],[Serial ],[PC Name],[Installation Date],[Plate PC],[Specifications ],[Ram],[Desktop/Laptop],[Domain] FROM Devolucion WHERE [Serial ] != 'NULL'*/
/*ALTER TABLE Alquilado ADD  [Status PC] nvarchar(255);*/
/*UPDATE Alquilado SET [Status PC] = 'disabled' WHERE Id BETWEEN 2046 AND 2113;*/
/*


INSERT INTO Users (correo, contraseņa) VALUES
  ('juan@example.com', '123456'),
  ('maria@example.com', '789012'),
  ('pepe@example.com', '345678'),
  ('luis@example.com', '901234'),
  ('ana@example.com', '567890');
  */
  /*UPDATE Alquilado SET [Status PC] = 'Active' WHERE [Status PC] ='active';*/
  /*UPDATE Alquilado SET [Status PC] = 'Disabled' WHERE [Status PC] = 'disabled';*/
/*
CREATE TABLE Rol (
id int primary key,
Descripcion varchar(50)
)

INSERT INTO Rol(id,Descripcion) VALUES (1,'Admin'),(2,'AreaTI');
*/

DROP TABLE Users;

CREATE TABLE Users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  correo VARCHAR(255) NOT NULL,
  contraseņa VARCHAR(255) NOT NULL,
  fkRol int not null,
  FOREIGN KEY (fkRol) REFERENCES Rol(id)
);

