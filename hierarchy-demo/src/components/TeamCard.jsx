function TeamCard({ name, role, bio }) {
    console.log(name)
    return (
        <div className="card">
            <h2>{name}</h2>
            <h4>{role}</h4>
            <p>{bio}</p>
        </div>
       
    ); 
}

export default TeamCard;