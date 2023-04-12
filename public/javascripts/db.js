const mysql = require("mysql");
const dbconfig = require("./../../db-config.json");

const connection = mysql.createConnection(dbconfig);

function getAllBooks(callback) {
  connection.query("select * from comments", (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

function tryLogin(id, password, callback) {
  var result = {
    err: null,
    errMsg: null,
  };

  connection.query(`select * from users where userid=${id}`, (err, rows) => {
    errMsg = null;

    if (err || rows.length == 0) {
      result.err = true;
      result.errMsg = "학번이 존재하지 않습니다.";
    } else if (rows[0].userpassword != password) {
      result.err = true;
      result.errMsg = "비밀번호가 일치하지 않습니다.";
    } else {
      result.err = false;
      result.errMsg = null;
    }

    callback(result);
  });
}

function isLogined(req, res) {
  if (req.session.is_logined) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getAllBooks,
  tryLogin,
  isLogined,
};

//코딩하기싫다코딩하기싫다코딩하기싫다
