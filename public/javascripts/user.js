const { json } = require("body-parser");
const exp = require("constants");
const fs = require("fs");


// 사용자 정보인 getInfo를 받아와서 존재하는 사용자인지 반환하는 함수
exports.isInfoProper = (getInfo) => {
    userID = getInfo.id;
    userPW = getInfo.password;

    let isExist = false;
    let data =  fs.readFileSync("./data/studentInfo.json", "UTF-8");

    let parsedData = JSON.parse(data);
    let jsonLength = parsedData.length;

    for(let i = 0; i < jsonLength; i++) {
        if(userID == parsedData[i].id && userPW == parsedData[i].pw) {
            isExist = true;
            break;
        }
    }
    
    return isExist;
}

//책의 이름을 받아와서 책이 존재하는지 반환하는 함수
exports.isBookExists = (bookName) => {
    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);

    let bookExists = -1
    let jsonLength = parsedData.length;



    for(let i = 0; i < jsonLength; i++) {
        if(parsedData[i].name == bookName) {
            bookExists = i;
            break;
        }
    }

    return bookExists + 1; //찾으면 1 이상, 못찾으면 0
}

//책 이름과 책 이미지 경로를 입력받아서 json 파일에 책을 추가하는 함수
exports.addBooksInJSON = (bookName, imagePath) => {
    if(this.isBookExists(bookName)) {
        return;
    }

    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);

    let newBook = {};
    newBook.name = bookName;
    newBook.path = imagePath;
    parsedData.push(newBook);

    let editedData = JSON.stringify(parsedData);
    fs.writeFileSync('data/bookInfo.json', editedData);
}

//책 이름을 입력받아서 json 파일에서 책을 제거하는 함수
exports.deleteBooksInJSON = (bookName) => {
    if(!this.isBookExists(bookName)) {
        return;
    }

    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);

    let filteredData = parsedData.filter((element) => {
        element.name != bookName;
    })

    let editedData = JSON.stringify(filteredData);
    fs.writeFileSync('data/bookInfo.json', editedData);
}

//책 이름과 comment를 입력받아서 책에 대한 댓글을 다는 함수
exports.addCommentInBook = (bookName, comment) => {
    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);
}