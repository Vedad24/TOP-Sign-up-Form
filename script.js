document.querySelectorAll(".visible").forEach(
    visible =>
    visible.addEventListener("click", ToggleEvent = () => {
        let passInput = visible.nextElementSibling;
        if (passInput.type === "password") {
            passInput.type = "text";
            visible.src = "images/visible.png"
        }
        else {
            passInput.type = "password";
            visible.src = "images/visibility.png"
        }
    })
)