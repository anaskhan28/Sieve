const { MongoClient, ObjectId } = require('mongodb');

// Replace the connection string with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/your-database-name';
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const findUserByGoogleId = async (google_id) => {
    try {
        const db = client.db(); // Get the database instance

        const user = await db.collection('user').findOne({ google_id });

        if (!user) {
            return 'no user';
        }

        return user;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
};

const addGoogleUsers = async (profile) => {
    try {
        const db = client.db(); // Get the database instance

        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' '); // Get the current date and time

        const result = await db.collection('user').insertOne({
            google_id: profile.id,
            email: profile.emails[0].value,
            role: 'user',
            date_and_time: currentDate,
            isActive: 'yes'
        });

        if (result.insertedCount > 0) {
            return 'new user created';
        } else {
            return 'some error';
        }
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
};

module.exports = {
    findUserByGoogleId,
    addGoogleUsers
};
