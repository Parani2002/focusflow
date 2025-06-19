const express = require('express');

const app = express();
const taskRoutes = require('./routes/tasks');


const PORT = process.env.PORT || 3000;

app.use('/api/tasks',taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
