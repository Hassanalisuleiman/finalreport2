// server.js
require('dotenv').config();




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
const Citizen = require('./models/Citizen');
const BirthRecord = require('./models/BirthRecord');
const User = require('./models/Users');
const LandRecord = require('./models/LandRecord');
const GovernmentOrder = require('./models/GovernmentOrder');
const DisasterRecord = require('./models/DisasterRecord');
const DeathRecord = require('./models/DeathRecord');
const ConflictRecord = require('./models/ConflictRecord');
const Addressee = require('./models/Addressee');
// const LetterTemplate = require('./models/LetterTemplate');
// const letter = require('./models/Letter');
const Shehia = require('./models/Shehia');

// initialize your routers hire
const birthRecordsRoutes = require('./routes/BirthRecord');
const citizenRoutes = require('./routes/citizenRoutes')
const UsersRoutes = require('./routes/UserRoutes');
const landRecordRoutes = require('./routes/LandRecordRoutes')
const governmentOrderRoutes = require('./routes/governmentOrderRoutes');
const disasterRecordRoutes = require('./routes/disasterRecordRoutes');
const DeathRecordRouters = require('./routes/deathRecordRoutes');
const conflictRecordRoutes = require('./routes/conflictRecordRoutes');
const addresseesRoutes = require('./routes/addresseesRoutes');
// const LetterTemplateRoutes = require('./routes/letterTemplatesRoutes');
// const LettersRouters = require('./routes/lettersRoutes');
// const letterRoutes = require('./routes/generateLettersRoutes');
// const Authroutes = require('./Auth/Auth.Routes');
const ShehiaRoutes = require('./routes/shehiaRouters');
const printedroutes = require('./routes/PrintedLetterRoute');
// const printedLetter = require('./routes/PrintedLetterRoutes');

const calculation =require('./calculation/userRoutes');
// const printedLettr = require('./routes/PrintedLetterRoute');

const userRoutes = require('./calculation/userRoutes');
const userorderRoutes = require('./routes/User_orderRoutes');




const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());


// end point api

app.use('/api', birthRecordsRoutes);
app.use('/api',citizenRoutes);
app.use('/api', UsersRoutes);
app.use('/api',landRecordRoutes);
app.use('/api',governmentOrderRoutes);
app.use('/api',disasterRecordRoutes);
app.use('/api',DeathRecordRouters);
app.use('/api',conflictRecordRoutes);
app.use('/api',addresseesRoutes);
app.use('/api',ShehiaRoutes);
app.use('/api',printedroutes);
// app.use('/api',printedLetter);
// app.use('/api',printedLettr);

// app.use('/api/letters', letterRoutes);
// app.use('/api/auth', Authroutes);

app.use('/api/users',calculation);
app.use(userRoutes);
app.use('/api', userRoutes);
app.use('/api',userorderRoutes);





// database connection
async function checkDatabaseConnection() {
  try {
    await db.authenticate();
    console.log('Database connection has been established successfully.');
    await db.sync(); // Sync all models
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkDatabaseConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

