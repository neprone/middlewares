// Basic zod implemantation

// const express = require("express");
const zod = require("zod");
// const app = express();
// const port = 3000;
function validateInput(obj){
  const schema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
  })
  const response =schema.safeParse(obj);
  console.log(response);
}

validateInput({
 email: "mayank@gmail.com",
 password:"mayankmk"
})
// const schema = zod.array(zod.number());
// app.use(express.json());
// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys)
//   res.send({
//     response,
//   });
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });