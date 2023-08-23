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

            // Add active class to transition element to fade in transition
            transition_el.classList.add('is-active');

            // Redirect after a delay to allow transition animation
            setTimeout(() => {
                window.location.href = target;
            }, 1000);
        })
    }
}
