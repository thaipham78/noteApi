const express=require('express');
const app=express();
const port=8000;
const cors=require('cors');


app.use(express.json());
app.use(cors());
app.use('/notes',require('./api/note'))
app.listen(port,()=>{
    console.log(`web server is running on port: ${port}`);
});