import express from 'express';
const app = express();
const port = 4321;
const fariin = "waan ku salamay walaal";
const anotherMessage = "I like you";
app.get('/', (req, res) => {
    res.json({
        message: "Hello Mrs Amiisha Laki welcome to TypeScript",
        status: 'You are Legend',
        fariin
    });
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
