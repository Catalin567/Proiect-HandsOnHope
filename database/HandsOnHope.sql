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

CREATE TABLE donatii (
  id SERIAL PRIMARY KEY,                    
  nume VARCHAR(255) NOT NULL,                
  prenume VARCHAR(255) NOT NULL,            
  suma_libera NUMERIC NOT NULL,            
  tip_donatie VARCHAR(50),                 
  tip_plata VARCHAR(50),                    
  nume_card VARCHAR(255),                   
  data_expirare DATE,                       
  cvc VARCHAR(3),                          
  email VARCHAR(255) NOT NULL,             
  data_donatie TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE redirectionari (
    id SERIAL PRIMARY KEY,
    nume VARCHAR(255),
    prenume VARCHAR(255),
    initiala_prenume_tata CHAR(1),
    cnp VARCHAR(13),
    telefon VARCHAR(20),
    email VARCHAR(255),
    strada VARCHAR(255),
    numar VARCHAR(10) NOT NULL,
    bloc VARCHAR(10),
    scara VARCHAR(10),
    etaj VARCHAR(10),
    apartament VARCHAR(10),
    localitate VARCHAR(255),
    judet_sector VARCHAR(255),
    cod_postal VARCHAR(20),
    perioada_donatie INTEGER,
    semnatura TEXT,
    acord_politica BOOLEAN,
    acord_anaf BOOLEAN
);
CREATE TABLE redirectionari_pj (
    id SERIAL PRIMARY KEY,
    denumire VARCHAR(255) NOT NULL,
    adresa_sediu_social TEXT NOT NULL,
    cui VARCHAR(50) NOT NULL,
    nr_reg_comert VARCHAR(50) NOT NULL,
    cont_bancar VARCHAR(50) NOT NULL,
    banca VARCHAR(100) NOT NULL,
    reprezentant VARCHAR(100) NOT NULL,
    functie VARCHAR(100) NOT NULL,
    telefon VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    suma_redirectionata DECIMAL(10, 2) NOT NULL,
    strada TEXT NOT NULL,
    numar VARCHAR(10) NOT NULL,
    bloc VARCHAR(10),
    scara VARCHAR(10),
    etaj VARCHAR(10),
    apartament VARCHAR(10),
    localitate VARCHAR(100) NOT NULL,
    judet_sector VARCHAR(100) NOT NULL,
    cod_postal VARCHAR(20) NOT NULL,
    acord_politica BOOLEAN NOT NULL,
    acord_date BOOLEAN NOT NULL,
    data_inregistrare TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
