import express from 'express';
import cors from 'cors';
import pkg from 'pg'; 
const { Pool } = pkg;

const app = express();
const port = 5000;

// Configurare middleware
app.use(cors());
app.use(express.json());

// Conectare la baza de date PostgreSQL
const pool = new Pool({
  user: '',  // Schimbă cu datele tale de conexiune
  host: '',
  database: '',  // Schimbă cu numele bazei tale de date
  password: '',  // Schimbă cu parola ta
  port: 5432,  // Portul implicit pentru PostgreSQL
});

// Testează conexiunea la baza de date
pool.connect()
  .then(() => {
    console.log('Conexiune reușită la baza de date PostgreSQL');
  })
  .catch((err) => {
    console.error('Eroare la conectarea la baza de date:', err);
  });

// Rute de GET (pagina principală)
app.get('/', (req, res) => {
  res.send('Serverul funcționează!');
});

// Rute de GET pentru a arăta formularul
// Rute de GET pentru a obține datele din formular ordonate
app.get('/contact', async (req, res) => {
  try {
    // Aici ordonăm rezultatele după 'id' sau alt câmp dorit
    const result = await pool.query('SELECT * FROM contact_forms ORDER BY id ASC');  // Ordinea poate fi ajustată după necesitate

    // Returnăm datele ca JSON
    res.status(200).json({
      message: 'Datele formularului',
      data: result.rows,  // Datele returnate din baza de date
    });
  } catch (error) {
    console.error('Eroare la obținerea datelor:', error);
    res.status(500).json({
      error: 'A apărut o eroare la obținerea datelor.',
    });
  }
});


// Rute de POST pentru procesarea formularului
app.post('/contact', async (req, res) => {
  const { nume, prenume, subiect, mesaj } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO contact_forms (nume, prenume, subiect, mesaj) VALUES ($1, $2, $3, $4) RETURNING *',
      [nume, prenume, subiect, mesaj]
    );
    res.status(200).json({ message: 'Formularul a fost trimis cu succes!', data: result.rows[0] });
  } catch (error) {
    console.error('Eroare la trimiterea formularului:', error);
    res.status(500).json({ error: 'A apărut o eroare la trimiterea formularului.' });
  }
});
app.get('/solicita-ajutor', async (req, res) => {
  try {
    // Aici ordonăm rezultatele după 'id' sau alt câmp dorit
    const result = await pool.query('SELECT * FROM solicitari_ajutor ORDER BY id ASC');  // Ordinea poate fi ajustată după necesitate

    // Returnăm datele ca JSON
    res.status(200).json({
      message: 'Datele formularului',
      data: result.rows,  // Datele returnate din baza de date
    });
  } catch (error) {
    console.error('Eroare la obținerea datelor:', error);
    res.status(500).json({
      error: 'A apărut o eroare la obținerea datelor.',
    });
  }
});

app.post('/solicita-ajutor', async (req, res) => {
  const {
    nume,
    prenume,
    localitate,
    adresa,
    telefon,
    email,
    numarMembriFamilie,
    tipCalamitate,
    tipAjutor,
    nevoiSpeciale,
    prioritateaCererii,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO solicitari_ajutor 
      (nume, prenume, localitate, adresa, telefon, email, numar_membri_familie, tip_calamitate, tip_ajutor, nevoi_speciale, prioritatea_cererii) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
      [nume, prenume, localitate, adresa, telefon, email, numarMembriFamilie, tipCalamitate, tipAjutor, nevoiSpeciale, prioritateaCererii]
    );

    res.status(200).json({ message: 'Formularul a fost trimis cu succes!', data: result.rows[0] });
  } catch (error) {
    console.error('Eroare la trimiterea formularului:', error);
    res.status(500).json({ error: 'A apărut o eroare la trimiterea formularului.' });
  }
});
app.get('/voluntariat', async (req, res) => {
  try {
    // Aici ordonăm rezultatele după 'id' sau alt câmp dorit
    const result = await pool.query('SELECT * FROM voluntari ORDER BY id ASC');  
    // Returnăm datele ca JSON
    res.status(200).json({
      message: 'Datele formularului',
      data: result.rows,  
    });
  } catch (error) {
    console.error('Eroare la obținerea datelor:', error);
    res.status(500).json({
      error: 'A apărut o eroare la obținerea datelor.',
    });
  }
});
app.post("/voluntariat", async (req, res) => {
  const {
    nume,
    prenume,
    varsta,
    ocupatie,
    adresa,
    disponibilitate,
    experienta,
    ore,
    motiv,
  } = req.body;

  try {
    const query = `
      INSERT INTO voluntari (
        nume, prenume, varsta, ocupatie, adresa, disponibilitate, experienta, ore_disponibile, motiv
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;
    const values = [
      nume,
      prenume,
      varsta,
      ocupatie,
      adresa,
      disponibilitate,
      experienta === "Da",
      ore,
      motiv,
    ];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: "Voluntar salvat cu succes!",
      voluntar: result.rows[0],
    });
  } catch (error) {
    console.error("Eroare la salvarea voluntarului:", error);
    res.status(500).json({ error: "A apărut o eroare la salvarea datelor." });
  }
});
app.get('/doneaza', async (req, res) => {
  try {
    // Aici ordonăm rezultatele după 'id' sau alt câmp dorit
    const result = await pool.query('SELECT * FROM donatii ORDER BY id ASC');  
    // Returnăm datele ca JSON
    res.status(200).json({
      message: 'Datele formularului',
      data: result.rows,  
    });
  } catch (error) {
    console.error('Eroare la obținerea datelor:', error);
    res.status(500).json({
      error: 'A apărut o eroare la obținerea datelor.',
    });
  }
});
app.post('/doneaza', async (req, res) => {
  const {
    nume,
    prenume,
    sumaLiberă,  // Acesta va fi utilizat pentru valoarea donației
    tipDonație,

    email,
  } = req.body;

  // Verificăm ce date primim la server
  console.log(req.body); // Adaugă acest log pentru a verifica datele trimise

  // Validăm că câmpurile esențiale sunt furnizate
  if (!nume || !prenume || !sumaLiberă || !tipDonație || !email) {
    return res.status(400).json({
      error: "Toate câmpurile esențiale sunt obligatorii!",
    });
  }

  try {
    // Inserăm datele în baza de date
    const result = await pool.query(
      `INSERT INTO donatii (nume, prenume, suma_libera, tip_donatie, tip_plata, nume_card, numar_card, data_expirare, cvc, email) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        nume, prenume, sumaLiberă, tipDonație, tipPlata, 
        numeCard, numarCard, dataExpirare, cvc, email
      ]
    );
    

    res.status(200).json({
      message: 'Donația a fost procesată cu succes!',
      data: result.rows[0],  // Returnează datele donației
    });
  } catch (error) {
    console.error('Eroare la trimiterea donației:', error);
    res.status(500).json({
      error: 'A apărut o eroare la trimiterea donației.',
    });
  }
});
app.get('/redirectioneaza', async (req, res) => {
  try {
    // Aici ordonăm rezultatele după 'id' sau alt câmp dorit
    const result = await pool.query('SELECT * FROM redirectionari ORDER BY id ASC');  
    // Returnăm datele ca JSON
    res.status(200).json({
      message: 'Datele formularului',
      data: result.rows,  
    });
  } catch (error) {
    console.error('Eroare la obținerea datelor:', error);
    res.status(500).json({
      error: 'A apărut o eroare la obținerea datelor.',
    });
  }
});
app.post('/redirectioneaza', async (req, res) => {
  const {
    nume,
    prenume,
    initialaPrenumeTata,
    cnp,
    telefon,
    email,
    strada,
    numar,
    bloc,
    scara,
    etaj,
    apartament,
    localitate,
    judetSector,
    codPostal,
    perioadaDonatie,
    semnatura,
    acordPolitica,
    acordAnaf,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO redirectionari 
      (nume, prenume, initiala_prenume_tata, cnp, telefon, email, strada, numar, bloc, scara, etaj, apartament, localitate, judet_sector, cod_postal, perioada_donatie, semnatura, acord_politica, acord_anaf) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *`,
      [
        nume,
        prenume,
        initialaPrenumeTata,
        cnp,
        telefon,
        email,
        strada,
        numar,
        bloc,
        scara,
        etaj,
        apartament,
        localitate,
        judetSector,
        codPostal,
        perioadaDonatie,
        semnatura,
        acordPolitica,
        acordAnaf,
      ]
    );

    res.status(200).json({
      message: 'Formularul a fost trimis cu succes!',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Eroare la trimiterea formularului:', error);
    res.status(500).json({ error: 'A apărut o eroare la trimiterea formularului.' });
  }
});
app.get('/redirectioneaza-pj', async (req, res) => {
  try {
    // Aici ordonăm rezultatele după 'id' sau alt câmp dorit
    const result = await pool.query('SELECT * FROM redirectionari_pj ORDER BY id ASC');  
    // Returnăm datele ca JSON
    res.status(200).json({
      message: 'Datele formularului',
      data: result.rows,  
    });
  } catch (error) {
    console.error('Eroare la obținerea datelor:', error);
    res.status(500).json({
      error: 'A apărut o eroare la obținerea datelor.',
    });
  }
});
app.post('/redirectioneaza-pj', async (req, res) => {
  const {
    denumire,
    adresa_sediu_social,
    cui,
    nr_reg_comert,
    cont_bancar,
    banca,
    reprezentant,
    functie,
    telefon,
    email,
    suma_redirectionata,
    strada,
    numar,
    bloc,
    scara,
    etaj,
    apartament,
    localitate,
    judet_sector,
    cod_postal,
    acord_politica,
    acord_date,
  } = req.body;

  // Validare simplă
  if (
    !denumire ||
    !adresa_sediu_social ||
    !cui ||
    !nr_reg_comert ||
    !cont_bancar ||
    !banca ||
    !reprezentant ||
    !functie ||
    !telefon ||
    !email ||
    !suma_redirectionata ||
    !strada ||
    !numar ||
    !localitate ||
    !judet_sector ||
    !cod_postal ||
    acord_politica === undefined ||
    acord_date === undefined
  ) {
    return res.status(400).json({ message: 'Toate câmpurile obligatorii trebuie completate.' });
  }

  try {
    // Inserarea în baza de date
    const query = `
      INSERT INTO redirectionari_pj (
        denumire, adresa_sediu_social, cui, nr_reg_comert, cont_bancar, banca,
        reprezentant, functie, telefon, email, suma_redirectionata, strada, numar,
        bloc, scara, etaj, apartament, localitate, judet_sector, cod_postal, acord_politica, acord_date
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
      RETURNING id;
    `;
    const values = [
      denumire, adresa_sediu_social, cui, nr_reg_comert, cont_bancar, banca,
      reprezentant, functie, telefon, email, suma_redirectionata, strada, numar,
      bloc, scara, etaj, apartament, localitate, judet_sector, cod_postal,
      acord_politica, acord_date
    ];

    const result = await pool.query(query, values);

    res.status(201).json({ message: 'Formularul a fost înregistrat cu succes!', id: result.rows[0].id });
  } catch (error) {
    console.error('Eroare la inserarea în baza de date:', error);
    res.status(500).json({ message: 'A apărut o eroare la înregistrarea formularului.' });
  }
});
app.get('/register', async (req, res) => {
  try {
    // Aici ordonăm rezultatele după 'id' sau alt câmp dorit
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');  
    // Returnăm datele ca JSON
    res.status(200).json({
      message: 'Datele formularului',
      data: result.rows,  
    });
  } catch (error) {
    console.error('Eroare la obținerea datelor:', error);
    res.status(500).json({
      error: 'A apărut o eroare la obținerea datelor.',
    });
  }
});

// Crearea unui nou utilizator (exemplu de înregistrare)
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
      // Verificăm dacă e-mailul există deja
      const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (existingUser.rows.length > 0) {
          return res.status(400).json({ message: "E-mailul este deja utilizat." });
      }

      // Salvăm utilizatorul în baza de date, fără criptarea parolei
      await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);

      res.status(201).json({ message: 'Cont creat cu succes!' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Eroare la creare cont. Încearcă din nou.' });
  }
});


app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});
