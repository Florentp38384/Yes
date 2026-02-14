function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === "Michel2026@gmail.com" && pass === "motdepasse2026") {
        window.location.href = "payer.html";
    } else {
          error.textContent = "Identifiants incorrects";
    }
}
