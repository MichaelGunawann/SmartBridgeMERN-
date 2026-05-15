import { useState } from "react";


function Form() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


   const [errors, setErrors] = useState({}); 
   const [submitted ,setSubmitted] = useState  (false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const validate = () => {
    const newErrors = {};

  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors; 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const validationErrors = validate();
    setErrors(validationErrors);

   
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  if (submitted) {
    return (
      <div>
        <h2 style={{ color: "green" }}>Form submitted successfully!</h2>
        <button onClick={() => setSubmitted(false)}>Submit another</button>
      </div>
    );
  }
  return (
     <form onSubmit = {handleSubmit}>
      <h2>Register</h2>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
{errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;