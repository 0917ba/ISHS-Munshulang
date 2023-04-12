const express = require("express");
const app = express();

const mysql = require("mysql");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const dbconfig = require("./db-config.json");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const mainRouter = require("./routes/main");

const sessionStore = new MySQLStore(dbconfig);

app.use(
  session({
    key: "auth_session_cookie",
    secret: "mathIsAlwaysHyunwoojin",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/main", mainRouter);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(3000, (err) => {
  console.log("The server is listening on port 3000");
});
