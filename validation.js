document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applyForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate name
        const name = document.getElementById('name').value;
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            alert('Please enter a valid name with only letters and spaces.');
            return false;
        }

        // Validate email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Validate date of birth
        const dob = document.getElementById('dob').value;
        const dobDate = new Date(dob);
        const today = new Date();
        if (dobDate >= today) {
            alert('Please enter a valid date of birth.');
            return false;
        }

        // If all validations pass, submit the form
        form.submit();
    });
});
