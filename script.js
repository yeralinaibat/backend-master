const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

// middleware
var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);


const mongoose = require("mongoose");

async function main() {
  await mongoose
    .connect("mongodb+srv://Kval-test:Kval-test@kvaltest.btwi7.mongodb.net/KvalTest?retryWrites=true&w=majority")
    .then(() => {
      console.log("Success");
    })
    .catch((e) => {
      console.log(e);
    });
}
main().catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`server started on port ${process.env.PORT || 5000}`);
});
