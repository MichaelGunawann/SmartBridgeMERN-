const fetchBtn = document.getElementById('fetchBtn'); 
const output = document.getElementById('output');


fetchBtn.addEventListener("click", () => {
    output.textContent = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("API error");
            }
            return response.json();
        })

        .then(data => {
            output.innerHTML = "";

            data.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.textContent = `${user.name} - ${user.email}`;
                output.appendChild(userDiv);
            });
        })

        .catch(() => {
            output.textContent = "Failed to fetch data";
        });
});