document.addEventListener('DOMContentLoaded', function() {
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
            const modalContent = modal.querySelector('.modal-content');
            if (event.target == modal || event.target == modalContent) {
                modal.style.display = "none";
            }
        });
    };

    // Go back function for back button
    function goBack() {
        window.history.back();
    }

    // Attach event listeners to open modals for each milestone button
    const milestoneButtons = [
        { btnId: 'showModalBtn1', modalId: 'modal1' },
        { btnId: 'showModalBtn2', modalId: 'modal2' },
        { btnId: 'showModalBtn3', modalId: 'modal3' },
        { btnId: 'showModalBtn4', modalId: 'modal4' },
        { btnId: 'showModalBtn5', modalId: 'modal5' },
        { btnId: 'showModalBtn6', modalId: 'modal6' },
        { btnId: 'showModalBtn7', modalId: 'modal7' },
        { btnId: 'showModalBtn8', modalId: 'modal8' },
    ];

    // Attach event listeners dynamically to all milestone buttons
    milestoneButtons.forEach(button => {
        const btn = document.getElementById(button.btnId);
        if (btn) {
            btn.onclick = function() {
                openModal(button.modalId);
            };
        }
    });
});
