const validateUser = (req, res, next) => {
    const {name , email , password} = req.body;
    if(!name ||!email || !password){
        return res.status(400).json({
            success : false, 
            message : "Please provide all the required fields"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({
            success: false,
            message : "Please provide a valid email address"
        });

        
    }
if(password.length < 6){ 
            return res.status(400).json({
                success : false,
                message : "Password must be at least 6 characters long"
            }

            );
        }
    next();
};

module.exports = validateUser;