function toggleDropdown() {
    console.log("Dropdown toggled"); // Debugging log
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-menu-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown_menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
