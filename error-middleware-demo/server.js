const express = require('express'); 
const app = express(); 
const errorHandler = require('./middleware/errorHandler'); 

const PORT = 3000; 

app.use(express.json());

app.get('/success', (req,res)=> {
    res.json({ 
        success : true , 
        message : 'Everything worked!'
    });
}); 

app.get('/error', (req, res , next )=> { 
    const err = new Error('something went wrong'); 
    err.status = 500; 
    next(err); 
}); 

app.use((req,res,next)=> { 
    const err = new Error(`Route ${req.method} ${req.url} not found`); 
    err.status = 404; 
    next(err);
}); 

app.use(errorHandler); 

app.listen(PORT , ()=> { 
    console.log(`server running on ${PORT}`); 
});