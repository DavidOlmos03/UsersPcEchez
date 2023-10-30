/*ALTER TABLE Alquilado ADD CONSTRAINT PK_Alquilados PRIMARY KEY (Serial);*/
/*ALTER TABLE Alquilado ALTER COLUMN Serial nvarchar(255) NOT NULL;*/
/*ALTER TABLE Alquilado ADD CONSTRAINT PK_Alquilados PRIMARY KEY (Serial);*/

/*DELETE FROM Alquilado WHERE User =  'William%';*/
/*select * from Alquilado where User = 'GKQNYH3';*/
/*ALTER TABLE Propio ADD Id INT IDENTITY(1,1), CONSTRAINT PK_Propio PRIMARY KEY (Id);*/
DELETE FROM Devolucion WHERE Id BETWEEN 73 AND 863;