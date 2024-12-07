const searchInput = document.getElementById("searchInput");
const websiteDropdown = document.getElementById("websiteDropdown");
const searchIcon = document.getElementById("searchIcon");

// List of websites
const websites = [
    { name: "Google", url: "https://www.google.com" },
    { name:"linkedin", url:"https://www.linkedin.com"},
    { name:"Tiktok",url:"https://www.tiktock.com"},
    { name: "Instagram", url: "https://www.instagram.com" },
    { name: "WhatsApp", url: "https://web.whatsapp.com" },
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "Twitter", url: "https://www.twitter.com" }
];

// Update dropdown dynamically
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    websiteDropdown.innerHTML = ""; // Clear previous results

    if (searchTerm) {
        const matches = websites.filter(site =>
            site.name.toLowerCase().includes(searchTerm)
        );

        if (matches.length > 0) {
            websiteDropdown.style.display = "block"; // Show dropdown
            matches.forEach(site => {
                const listItem = document.createElement("li");
                listItem.textContent = site.name;
                listItem.dataset.url = site.url; // Store URL for redirection
                websiteDropdown.appendChild(listItem);
            });
        } else {
            websiteDropdown.style.display = "none"; // Hide dropdown if no matches
        }
    } else {
        websiteDropdown.style.display = "none"; // Hide dropdown if input is empty
    }
});

// Fill search bar and hide dropdown when selecting an option
websiteDropdown.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        searchInput.value = e.target.textContent; // Update search bar text
        websiteDropdown.style.display = "none"; // Hide dropdown
    }
});

// Redirect to the selected website
const redirectToWebsite = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const match = websites.find(site =>
        site.name.toLowerCase() === searchTerm
    );

    if (match) {
        window.open(match.url, "_blank"); // Open URL in new tab
    } else {
        alert("No matching website found. Please select from the dropdown.");
    }
};

// Add event listeners for search
searchIcon.addEventListener("click", redirectToWebsite);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        redirectToWebsite();
    }
});
