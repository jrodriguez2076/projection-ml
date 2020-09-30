import express from 'express';
import path, { dirname } from 'path';
import 'dotenv/config';

const app = express();

//Base request middleware
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Additional middleware

//Routes
app.get('*', (req, res)=>{
    res.sendFile(path.join(process.cwd(),'dist', 'index.html'));
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running and listening to port: ${process.env.PORT}`);
})