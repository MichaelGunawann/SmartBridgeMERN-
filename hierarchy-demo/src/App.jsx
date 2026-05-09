
import Header from "./components/Header";
import TeamCard from "./components/TeamCard";
import Footer from "./components/Footer"; 


import "./App.css";

function App() {
  const teamMembers = [
    { id: 1, name: "Alice Tan", role: "Frontend Dev", bio: "Loves React and design systems." },
    { id: 2, name: "Bob Cruz", role: "Backend Dev", bio: "Expert in APIs and databases." },
    { id: 3, name: "Cara Moon", role: "Designer", bio: "Creates beautiful user experiences." },
        { id: 4, name: "Cara sky", role: "Designer", bio: "Creates beautiful user experience." },

  ];

  return (
    <div className="app">
      
        <Header title = "Engineering team" /> 

        <main className ="main">
          { 
  teamMembers.map((member)=>(
    <TeamCard 
      key={member.id}
      name={member.name}
      role={member.role}
      bio={member.bio}
    />  
  ))
  
          }</main> 
            
          
<Footer year ={2026}> 
  </Footer>       

      
    </div>
  );
}

export default App;