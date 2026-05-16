const express = require ('express'); 
const app = express(); 

const PORT = 3000; 

app.use ((req,res,next)=> { 
    const timestamp = new Date().toLocaleTimeString(); 
    console.log(`[${timestamp}] ${req.method} request to : ${req.url}`); 
    next(); 
})

app.get('/' , (req, res)=>{
    res.send("welcome");
})

app.get('/about' , (req, res)=> {
    res.send('<h1>About us!</h1>');
})

app.get('/products/:id' , (req ,res)=> { 
    const id = req.params.id; 
    res.send(`viewing product id: ${id}`); 
})

app.get('/search', (req, res)=> { 
    const searchTerm = req.query.q

    if(!searchTerm){ 
        return res.send("Please provide  a search term"); 
    }else{ 
        res.send(`Searching for ${searchTerm}`);
    }
})

app.use((req, res) => { res.status(404).send("Page Not Found") })

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});