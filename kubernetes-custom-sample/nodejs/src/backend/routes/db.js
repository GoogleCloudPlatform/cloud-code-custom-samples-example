const mongoose = require('mongoose')

const SAMPLE_DB_ADDR = process.env.SAMPLE_DB_ADDR; 
const mongoURI = "mongodb://" + SAMPLE_DB_ADDR + "/sample"

const db = mongoose.connection;
db.on('disconnected', () => {
    console.error(`Disconnected: unable to reconnect to ${mongoURI}`)
})
db.on('error', (err) => {
    console.error(`Unable to connect to ${mongoURI}: ${err}`);
});
db.once('open', () => {
  console.log(`Connected to ${mongoURI}`);
});

const connectToMongoDB = async () => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        serverSelectionTimeoutMS: 2000,
        useUnifiedTopology: true
    })
};

const schema = mongoose.Schema({
    body: { type: String, required: [true, 'Body is required'] }
});

const model = mongoose.model('Database', schema);

const construct = (params) => {
    const body = params.body
    const data = new model({ body: body })
    return data
};

const save = (data) => {
    console.log("saving data...")
    data.save((err) => {
        if (err) { throw err }
    })
};

// Constructs and saves data
const create = (params) => {
    try {
        const data = construct(params)
        const validationError = data.validateSync()
        if (validationError) { throw validationError }
        save(data)
    } catch (error) {
        throw error
    }
}

module.exports = {
    create: create,
    model: model,
    connectToMongoDB: connectToMongoDB
}

