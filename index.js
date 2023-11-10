const express = require("express");
const dotenv=require('dotenv')

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3030;



app.get('/test',(req,res)=>{
    res.send('whats up homie')
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});