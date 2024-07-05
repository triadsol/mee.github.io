window.onload = function() {
    // Get references to the delete buttons and quantity inputs
    const deleteBtns = document.querySelectorAll('.button[id^="delete-btn-"]');
    const quantityInputs = document.querySelectorAll('.small-container table tr td input[type="number"]');
    const totalAmountDisplay = document.getElementById('total-amount');

    // Function to calculate the total
    function calculateTotal() {
        let total = 0;
        quantityInputs.forEach((input, index) => {
            const price = parseFloat(input.parentElement.previousElementSibling.textContent.replace('$', ''));
            const quantity = parseInt(input.value);
            const subtotal = price * quantity;
            total += subtotal;
        });
        return total.toFixed(2);
    }

    // Add event listeners to the delete buttons
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Remove the parent table row
            btn.closest('tr').remove();
            updateTotal();
        });
    });

    // Add event listeners to the quantity inputs
    quantityInputs.forEach((input) => {
        input.addEventListener('input', updateTotal);
    });

    // Function to update the total amount display
    function updateTotal() {
        const total = calculateTotal();
        totalAmountDisplay.textContent = `$${total}`;
    }

    // Initial update of the total amount
    updateTotal();
};
