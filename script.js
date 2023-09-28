/* home page/ index.html */

/*nav bar */
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

//puzzle 

document.addEventListener('DOMContentLoaded', function() {
    const nonogram = document.querySelector('.nonogram');

    // Create a 5x5 grid
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', toggleCell);
            nonogram.appendChild(cell);
        }
    }

    function toggleCell() {
        // Toggle cell between filled and empty
        this.classList.toggle('filled');
    }
});






