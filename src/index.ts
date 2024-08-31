import express,{Express,Request,Response} from 'express';
const app:Express = express();
const port:number = 4321;


const personInfo={
    id:1,
    name:'Amiisha',
    isStudent: false,
}

app.get('/',(req:Request,res:Response)=>{
    res.json({
        message: "Hello Mrs Amiisha Laki welcome to TypeScript",
        personInfo
    })
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});