CREATE TABLE contact_forms (
  id SERIAL PRIMARY KEY,
  nume VARCHAR(100) NOT NULL,
  prenume VARCHAR(100) NOT NULL,
  subiect VARCHAR(255) NOT NULL,
  mesaj TEXT NOT NULL,
  data_creare TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE solicitari_ajutor (
    id SERIAL PRIMARY KEY, 
    nume VARCHAR(100) NOT NULL,
    prenume VARCHAR(100) NOT NULL,
    localitate VARCHAR(100) NOT NULL,
    adresa VARCHAR(255) NOT NULL,
    telefon VARCHAR(15) NOT NULL,
    email VARCHAR(100),
    numar_membri_familie INT NOT NULL,
    tip_calamitate VARCHAR(50) NOT NULL,
    tip_ajutor VARCHAR(50) NOT NULL,
    nevoi_speciale VARCHAR(100) NOT NULL,
    prioritatea_cererii VARCHAR(50) NOT NULL,
    data_crearii TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE voluntari (
    id SERIAL PRIMARY KEY,                    
    nume VARCHAR(100) NOT NULL,              
    prenume VARCHAR(100) NOT NULL,            
    varsta INT CHECK (varsta BETWEEN 1 AND 99),
    ocupatie VARCHAR(100),                  
    adresa VARCHAR(255),                    
    disponibilitate VARCHAR(255),          
    experienta VARCHAR(10),                 
    ore_disponibile INT CHECK (ore_disponibile BETWEEN 1 AND 8), 
    motivatie TEXT                         
);

