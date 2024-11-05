// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when the user clicks outside of the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};

function goBack() {
    window.history.back();
}

document.getElementById("showModalBtn").onclick = function() {
    openModal("myModal");
};

document.getElementById("showModalBtn2").onclick = function() {
    openModal("myModal");
};

// Attach event listeners to each button to open their corresponding modal
document.getElementById("showModalBtn1").onclick = function() {
    openModal("modal1");
};

document.getElementById("showModalBtn2").onclick = function() {
    openModal("modal2");
};

document.getElementById("showModalBtn3").onclick = function() {
    openModal("modal3");
};

document.getElementById("showModalBtn4").onclick = function() {
    openModal("modal4");
};

document.getElementById("showModalBtn5").onclick = function() {
    openModal("modal5");
};

document.getElementById("showModalBtn6").onclick = function() {
    openModal("modal6");
};

document.getElementById("showModalBtn7").onclick = function() {
    openModal("modal7");
};

document.getElementById("showModalBtn8").onclick = function() {
    openModal("modal8");
};
