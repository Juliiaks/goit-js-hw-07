const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = event.target
    const email = data.elements.email.value;
    const password = data.elements.password.value;

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    } 
        
     console.log({ Login: email.trim(), Password: password.trim() }); 
    
    data.reset();
}