/*Common nav bar */
document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
        fetch("nav.html")
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading navigation bar:", error);
            });
    }
});






