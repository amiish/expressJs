import express from 'express';
const app = express();
const port = 4321;
const personInfo = {
    id: 1,
    name: 'Amiisha',
    isStudent: false,
};
app.get('/', (req, res) => {
    res.json({
        message: "Hello Mrs Amiisha Laki welcome to TypeScript",
        personInfo
    });
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
