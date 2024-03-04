const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = event.target
    const login = data.elements.email.value;
    const password = data.elements.password.value;

    if (login === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    } 
        
    console.log(`{Login: ${login}, Password: ${password}}`); 
    
    data.reset();
}