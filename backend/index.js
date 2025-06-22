import express from 'express';
import cors from 'cors';

import pool from './config/db.js';
// Importing task routes
// import taskRoutes from './routes/tasks.js';

//import userRoutes from './routes/userRoutes.js'; // Assuming you have user routes defined
import taskRoutes from './routes/taskRoutes.js'; // Assuming you have task routes defined

const app = express();



const PORT = 5001;  
app.use(cors());
app.use(express.json());

app.get('/',async (req,res) => {
    const result = await pool.query('SELECT current_database()')
    res.send(`Connected to database: ${result.rows[0].current_database}`);
});
        

// app.use('/api',userRoutes);

app.use('/api/tasks', taskRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

