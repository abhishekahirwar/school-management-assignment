const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Database Connection
const sequelize = require('./config/database');

// Sync the models with the database
sequelize.sync({ alter: true }).then((result) => {
    console.log('Database synchronized successfully.');
    // console.log(`Result: ${result.rows}`);
}).catch((error) => {
    console.error('Unable to sync the database:', error);
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
