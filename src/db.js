import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/youtube");

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("DB Error", error);
});
db.once("open", () => console.log("Conneted to DB ✅"));
