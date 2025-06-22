import { configDotenv } from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

console.log('Initializing database connection...'   );
console.log(`DB_USER: ${process.env.DB_USER}`);
console.log(`DB_HOST: ${process.env.DB_HOST}`);
console.log(`DB_NAME: ${process.env.DB_NAME}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
console.log(`DB_PORT: ${process.env.DB_PORT}`);


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,  
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,  

})

pool.connect()
  .then(() => {
    console.log('Connected to the database (manual trigger)');
  })
  .catch((err) => {
    console.error('Database connection error (manual trigger):', err);
  });


pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Database connection error:', err);
});

export default pool;