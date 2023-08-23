
// Get references to the elements
const reservationLink = document.querySelector('.navbar .reservation-link');
const reservationContainer = document.getElementById('reservationContainer');
const content = document.querySelector('.content');
const navbar = document.querySelector('.navbar');
let reservationVisible = false;

// Add a click event listener to the reservation link
reservationLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior


    // Slide out the content and navbar
    content.style.animation = 'slideOutContent 2s forwards';
    navbar.style.animation = 'slideOutNav 2s forwards';

    // Wait for the slide out animations to complete before showing the reservation container
    setTimeout(() => {
        // Hide the content and navbar after their animations are complete
        content.style.display = 'none';
        navbar.style.display = 'none';

        // Show the reservation container with animation
        reservationContainer.style.display = 'flex';
        reservationContainer.style.animation = 'slideInFromBottom 1s forwards';
    }, 750); // Use the same duration as the slideOut animations

    reservationVisible = true;
});



const reservationButton = document.querySelector('.reservationButton');

reservationButton.addEventListener('click', function() {
    if (reservationVisible) {
        // Slide out the reservation container to the bottom
        reservationContainer.style.animation = 'slideOutToBottom 2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards';
        reservationVisible = false;

        // Reset animation and hide reservation container after animation
        setTimeout(() => {
            reservationContainer.style.animation = '';
            reservationContainer.style.display = 'none';
        }, 1000); // Wait for the animation duration

        // Slide in the content and navbar with animation
        content.style.display = 'block';
        content.style.animation = 'slideInContent 1.5s forwards';
        navbar.style.display = 'block';
        navbar.style.animation = 'slideInNav 1.5s forwards';
    }
});





// Run when the page is fully loaded
window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');

    // Remove active class after a delay to fade out transition
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 1000);

    // Add click event listeners to all anchor links
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            // Check if the clicked link is not the reservation link
            if (!anchor.classList.contains('reservation-link')) {
                // Add active class to transition element to fade in transition
                transition_el.classList.add('is-active');
            }

            // Redirect after a delay to allow transition animation
            setTimeout(() => {
                // Redirect only if it's not the reservation link
                if (!anchor.classList.contains('reservation-link')) {
                    window.location.href = target;
                }
            }, 1000);
        })
    }
}
