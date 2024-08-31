import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.json({
        message: "Hello Mrs Amiisha Laki"
    })
})

app.listen(8000,()=>{
    console.log(`http://localhost:${8000}`)
});