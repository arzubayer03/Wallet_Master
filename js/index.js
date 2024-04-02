tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: "#da373d",
            },
        },
    },
};

document.addEventListener("DOMContentLoaded", function () {
    const MenuBtn = document.getElementById("MenuBtn");
    const DropdownMenu = document.getElementById("DropdownMenu");

    MenuBtn.addEventListener("click", function () {
        DropdownMenu.classList.toggle("hidden");
    });
});


function acceptAllCookies() {
    let cookieSection = document.getElementById("cookieSection");
    // cookieSection.classList.add("hidden");
    cookieSection.style.display = 'none';
}

window.onload = function() {
    let popup = document.getElementById('popup');
    popup.style.display = 'flex';
};

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}

    // Function to accept all cookies and hide the cookie section
    function acceptAllCookies() {
        console.log("All cookies accepted");
        
        document.getElementById("cookieSection").style.display = "none";
    }
    document.querySelector("#cookieSection button").addEventListener("click", acceptAllCookies);
    function openCookieSettings() {
        console.log("Opening cookie settings");
    }
    document.querySelector("#cookieSection button.bg-gray-500").addEventListener("click", openCookieSettings);
