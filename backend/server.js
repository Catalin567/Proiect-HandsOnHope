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

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});
