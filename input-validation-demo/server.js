const express = require('express');

const validateUser = require('./middleware/validateUser');
const app = express(); 

app.use(express.json());

const PORT= 3000; 


app.post('/register', validateUser , (req, res)=> {
    const { name ,email, password } = req.body;

    console.log("User data received succesffully:", { name, email, password });
    res.status(201).json({
        success : true, 
        message : "user registered successfully",
        user : {
            name,
            email,
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});