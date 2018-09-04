let { connection } = require("../module/database");
let ObjectID = require("mongodb").ObjectID;
let { Info } = require("../models/info");

exports.tambahInfo = ({ judul, isi, penulis }) => {
  return Info.judul.test(judul) &&
    Info.isi.test(isi) &&
    Info.penulis.test(penulis)
    ? connection("info").then(col =>
        col.insert({
          judul,
          isi,
          penulis: ObjectID(penulis),
          createAt: new Date(),
          updateAt: new Date(),
          hit: 0
        })
      )
    : Promise.reject("invalid data");
};

exports.editInfo = (idInfo, newData) =>
  connection("info").then(col =>
    col
      .findOne({ _id: ObjectID(idInfo) })
      .then(info => {
        if (info) {
          Object.keys(newData).forEach(key => (info[key] = newData[key]));
          info.updateAt = new Date();
          return info;
        } else {
          return Promise.reject("user tidak ditemukan");
        }
      })
      .then(info =>
        col.findOneAndUpdate({ _id: ObjectID(idInfo) }, { $set: info })
      )
  );

exports.listInfo = (idInfo, from, limit) => {
  if (idInfo) {
    return connection("info").then(col =>
      col
        .findOneAndUpdate({ _id: ObjectID(idInfo) }, { $inc: { hit: 1 } })
        .then(() =>
          col
            .aggregate([
              { $match: { _id: ObjectID(idInfo) } },
              {
                $lookup: {
                  from: "user",
                  localField: "penulis",
                  foreignField: "_id",
                  as: "penulis"
                }
              },
              { $unwind: "$penulis" },
              {
                $addFields: { penulis: "$penulis.username" }
              }
            ])
            .toArray()
        )
    );
  } else {
    return connection("info").then(col =>
      col
        .find()
        .sort({ hit: -1 })
        .skip(parseInt(from))
        .limit(parseInt(limit))
        .toArray()
    );
  }
};

exports.hapusInfo = idInfo =>
  connection("info").then(col =>
    col.findOneAndDelete({ _id: ObjectID(idInfo) })
  );
