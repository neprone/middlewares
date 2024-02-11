
// const express = require('express')
// const app = express()
// const port = 3000
// app.use(express.json());
// // input exprected is  an array
// // if we dont use app.use(express.json());
// // body will not get extracted.

// app.get('/', (req, res) => {
//   res.json({
//     msg:"hi there"
//   })
// })

// app.post("/hey" , (req ,res)=>{
//     console.log(kidneys);
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
// input exprected is  an array
// if we dont use app.use(express.json());
// body will not get extracted.
app.post('/', (req, res) => {
  const kidneys = req.body.kidneys;
  const kidenyLength = kidneys.length;
  res.send("you have" + kidenyLength + "kidneys")
})
//global catches

app.use(function(err, req, res, next){
  res.json ({

    msg: " something is up with our server "})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})