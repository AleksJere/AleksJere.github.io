console.log("scripts.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    // Function to open a modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    }

    // Function to close a modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        }
    }
    function goBack() {
    window.history.back();
    }
    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };

    // Make functions globally accessible
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.goBack = goBack;
    // Attach event listeners individually for each button
    document.getElementById('showModalBtn1').onclick = function() { openModal('modal1'); };
    document.getElementById('showModalBtn2').onclick = function() { openModal('modal2'); };
    document.getElementById('showModalBtn3').onclick = function() { openModal('modal3'); };
    document.getElementById('showModalBtn4').onclick = function() { openModal('modal4'); };
    document.getElementById('showModalBtn5').onclick = function() { openModal('modal5'); };
    document.getElementById('showModalBtn6').onclick = function() { openModal('modal6'); };
    document.getElementById('showModalBtn7').onclick = function() { openModal('modal7'); };
    document.getElementById('showModalBtn8').onclick = function() { openModal('modal8'); };
});
