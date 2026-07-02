const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
        return initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    // Delete all existing listings
    await Listing.deleteMany({});

    // Add owner to each listing
    const modifiedData = initData.data.map((listing) => ({
        ...listing,
        owner: new mongoose.Types.ObjectId("6a44044d645d4e05ec9987f9"),
    }));

    // Insert data into MongoDB
    await Listing.insertMany(modifiedData);

    console.log("Data was initialized");
};