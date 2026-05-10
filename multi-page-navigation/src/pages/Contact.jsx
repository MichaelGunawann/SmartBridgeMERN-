import {useNavigate} from 'react-router-dom';
function Contact(){ 
    const navigate = useNavigate();
    return(
        <div> 
            <h1> Contact Page</h1>
            <p> This is the contact page</p>
            <button onClick = {()=> navigate ("/")}>Go Home</button>
        </div>
    );
}

export default Contact; 