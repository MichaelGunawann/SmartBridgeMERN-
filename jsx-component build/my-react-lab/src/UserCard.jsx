function UserCard(props) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px" }}>
            <h2>{props.name}</h2>
             <p>{props.email}</p>
        </div>
    );
}

export default UserCard;