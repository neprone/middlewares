// const express = require("express");
// const app = express();
// const port = 3000;

// function userMiddleware(){
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;

//   if (username != "harkirat" && password != "harkirat") {
//     res.sendStatus(403).json({
//       msg: "user does not exist",
//     });
//     return;
//   }
// }

// function kidneyMiddleware(){
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;
//   if (kidneyId == 1 || kidneyId == 2) {
//     res.json({
//       msg: "your kidney is fine",
//     });
//     return;
//   } else {
//     res.json({
//       msg: "wrong inputs",
//     });
//   }
// }

// app.get("/", userMiddleware , kidneyMiddleware, (req, res) => {
//  res.send("your kidney is fine mate!")
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
// input exprected is  an array
// if we dont use app.use(express.json());
// body will not get extracted.
app.post('/', (req, res) => {
  const kidneys = req.boy.kidneys;
  const kidenyLength = kidneys.length;
  res.send("you have" + kidenyLength + "kidneys")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})