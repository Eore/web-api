let { connection } = require("../module/database");
let ObjectID = require("mongodb").ObjectID;
let { Info } = require("../models/info");

exports.tambahInfo = ({ judul, isi, penulis, gambar, tag }) => {
  return Info.judul.test(judul) &&
    Info.isi.test(isi) &&
    Info.penulis.test(penulis) &&
    Info.tag.test(tag)
    ? connection("info").then(col =>
        col.insert({
          judul,
          isi,
          penulis: ObjectID(penulis),
          gambar,
          createAt: new Date(),
          updateAt: new Date(),
          hit: 0,
          tag
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

exports.listInfo = ({ idInfo, from, limit, byHit, tag }) => {
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
        .aggregate([
          { $match: { tag: tag ? tag : { $exists: false } } },
          { $sort: byHit === "true" ? { hit: -1 } : { createAt: -1 } },
          { $skip: from ? parseInt(from) : 0 },
          { $limit: limit ? parseInt(limit) : 20 },
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
    );
  }
};

exports.hapusInfo = idInfo =>
  connection("info").then(col =>
    col.findOneAndDelete({ _id: ObjectID(idInfo) })
  );
