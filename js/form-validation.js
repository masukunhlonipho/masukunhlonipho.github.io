document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var valid = true;

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var messageError = document.getElementById("messageError");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        emailError.textContent = "Invalid email format.";
        valid = false;
    }

    // Phone validation
    if (phone.value.trim() !== "" && !/^\d{10}$/.test(phone.value)) {
        phoneError.textContent = "Invalid phone number format. Use 10 digits.";
        valid = false;
    }else if (phone.value.trim() ===""){
        phoneError.textContent = "Phone number is required.";
        valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.textContent = "Message is required.";
        valid = false;
    }

    if (valid) {
        // Submit the form using Formspree
        fetch("https://formspree.io/f/xwpeeodl", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            })
        }).then(function(response) {
            if (response.ok) {
                alert("Your message has been sent!");
                document.getElementById("contactForm").reset();
            } else {
                alert("There was a problem with your submission. Please try again.");
            }
        });
    }
});
