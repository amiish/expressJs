import express,{Express,Request,Response} from 'express';
const app:Express = express();
const port:number = 4321

const fariin:string = "waan ku salamay walaal"
const anotherMessage:string = "I like you"
app.get('/',(req:Request,res:Response)=>{
    res.json({
        message: "Hello Mrs Amiisha Laki welcome to TypeScript",
        status: 'You are Legend',
        fariin

    })
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});