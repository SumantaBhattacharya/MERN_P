// localStorage.setItem("name", "Sumanta Bhattacharya");
// console.log(localStorage.getItem("name"));
// console.log(localStorage);

// let val = localStorage.getItem("name");
// localStorage.setItem("name", "Suman Bhattacharya"); // update
// localStorage.removeItem("name");
localStorage.clear();
// console.log(localStorage);
// console.log(localStorage.getItem("name"));
// localStorage.setItem("friends", ["Suman", "Sumanta", "Sudip"])
/*localStorage.setItem("friend's", {
            firstFriend: "Suman",
            secondFriend: "Sumanta"
        }
        )*/
// JSON.stringify([69, 68, 440, 180]);

localStorage.setItem(
  "friends",
  JSON.stringify(["Suman Bhattacharya", "Sumanta", "Sudip"])
); //localStorage.getItem("friends");
// console.log(JSON.parse(localStorage.getItem("friends")))// in local storage data type like array cannot be stored that is why we convert them into string to store them when we fetch those data back we get strings we conver the strings into their original form in our case which is arrays we do JSON.parse
let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);

sessionStorage.setItem("name", "Sumanta");
sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
sessionStorage.clear(); // remove everything

document.cookie = "email = sumanta2004@gmail.com";
// document.cookie
