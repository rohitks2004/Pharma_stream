// config/hospitaldb.js

const mongoose = require('mongoose');

async function connectHospitalDb(hospitalName) {
  try {
    const hospitalDBName = `hospital_${hospitalName}`;
    const connection = await mongoose.createConnection(
      `mongodb+srv://pharma:stream@project-sre.jnie5.mongodb.net/${hospitalDBName}`
    );

    connection.on('connected', () => {
      console.log(`Connected to ${hospitalDBName} database`);
    });

    connection.on('error', (err) => {
      console.error(`Error connecting to ${hospitalDBName} database:`, err);
    });

    return connection;
  } catch (err) {
    console.error('Error creating hospital database:', err);
    throw err;
  }
}

module.exports = connectHospitalDb;
