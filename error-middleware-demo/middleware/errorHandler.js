const errorHandler = (err, req , res , next) => {
    console.log(`[ERROR] , ${err.message}`); 

    const status  = err.status || 500; 
    

    res.status(status).json({ 
        success : false, 
        message :err.message || 'unknown error'

    });
};

module.exports = errorHandler;