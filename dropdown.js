function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    // Toggle the dropdown menu
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show"); // Start the closing animation

        // Wait for the animation to complete before hiding the dropdown
        setTimeout(() => {
            dropdown.style.display = "none";
        }, 300); // Match the CSS transition duration (0.3s)

        // Toggle icons
        menuIcon.style.display = "inline"; // Show menu icon
        closeIcon.style.display = "none"; // Hide close icon
    } else {
        dropdown.style.display = "block"; // Make the dropdown visible initially

        // Allow slight delay to trigger the opening animation
        setTimeout(() => {
            dropdown.classList.add("show");
        }, 10);

        // Toggle icons
        menuIcon.style.display = "none"; // Hide menu icon
        closeIcon.style.display = "inline"; // Show close icon
    }
}

// Close the dropdown menu if clicked outside
window.onclick = function (event) {
    const dropdown = document.getElementById("dropdown-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    if (!event.target.matches('.dropdown-menu-icon') && !dropdown.contains(event.target)) {
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show"); // Start the closing animation

            // Wait for the animation to complete before hiding the dropdown
            setTimeout(() => {
                dropdown.style.display = "none";
            }, 300); // Match the CSS transition duration (0.3s)

            // Toggle icons
            menuIcon.style.display = "inline"; // Show menu icon
            closeIcon.style.display = "none"; // Hide close icon
        }
    }
};

function toggleNestedOptions(clickedIcon) {
    // Find the parent of the clicked icon (the dropdown header)
    const dropdownHeader = clickedIcon.closest('.dropdown-header');
    
    // Find the nested options (ul) and the corresponding icons in this dropdown
    const nestedOptions = dropdownHeader.nextElementSibling; // This will be the <ul> (nested dropdown)
    const plusIcon = dropdownHeader.querySelector('.plus-icon');
    const minusIcon = dropdownHeader.querySelector('.minus-icon');

    // Toggle the display of nested options
    if (nestedOptions.style.display === "block") {
        // Hide the nested options
        nestedOptions.style.display = "none";

        // Show plus icon and hide minus icon
        plusIcon.style.display = "inline";
        minusIcon.style.display = "none";
    } else {
        // Show the nested options
        nestedOptions.style.display = "block";

        // Hide plus icon and show minus icon
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline";
    }
}
