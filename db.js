require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

const MongoUtils = () => {
  const MyMongoLib = this || {};
  const url = "mongodb://localhost:27017" || process.env.MONGODB_URI;
  let db;
  const dbName = "covidDB";
  MongoClient.connect(url, { useUnifiedTopology: true }).then((client) => {
    db = client.db(dbName);
  });

  MyMongoLib.insertOneDoc = (doc, dbCollection) => {
    const collection = db.collection(dbCollection);
    return collection.insertOne(doc);
  };

  MyMongoLib.insertManyDocs = (docs, dbCollection) => {
    const collection = db.collection(dbCollection);
    return collection.insertMany(docs);
  };

  MyMongoLib.getDocs = (dbCollection) => {
    const collection = db.collection(dbCollection);
    return collection.find({}).toArray();
  };

  MyMongoLib.updateDoc = (id, object, dbCollection) => {
    const collection = db.collection(dbCollection);
    return collection.replaceOne(
      {
        _id: ObjectId(id),
      },
      object
    );
  };

  MyMongoLib.getLoginByUsername = (username) => {
    const collection = db.collection("login");
    return collection
      .find({
        username: username,
      })
      .toArray();
  };

  MyMongoLib.getWithJoin = (
    dbcollection,
    fromCollection,
    localField,
    foreingField,
    asName,
    id
  ) => {
    const collection = db.collection(dbcollection);
    return collection
      .aggregate([
        { $match: { _id: ObjectId(id) } },
        { $unwind: "$" + localField },
        {
          $lookup: {
            from: fromCollection,
            localField: localField,
            foreignField: foreingField,
            as: asName,
          },
        },
        { $unwind: "$" + asName },
        {
          $group: {
            _id: "$_id",
            revisiones_id: { $push: "$" + localField },
            revisiones: { $push: "$" + asName },
          },
        },
      ])
      .toArray();
  };
  return MyMongoLib;
};

module.exports = MongoUtils();
