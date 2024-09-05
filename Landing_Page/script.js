function toggleCard() {
    const cardBody = document.getElementById('card-body');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    if (cardBody.style.display === "none" || cardBody.style.display === "") {
        cardBody.style.display = "block";
        toggleIcon.textContent = "-";
    }
}