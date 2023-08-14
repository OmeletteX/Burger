// Function to close the curtains after a delay
function closeCurtains() {
    const leftPanel = document.querySelector('.curtain__panel--up');
    const rightPanel = document.querySelector('.curtain__panel--down');

    // Move the curtain panels
    leftPanel.style.transform = 'translateY(-100%)';
    rightPanel.style.transform = 'translateY(100%)';

    // Call unhideMainPage function after curtain animation
    setTimeout(unhideMainPage, 0);
}

// Function to remove the 'hidden' class and initiate the fade-in effect
function unhideMainPage() {
    const mainPage = document.querySelector('.main-page');
    const content = document.querySelector('.content');

    // Remove the 'hidden' class to trigger the fade-in animation
    mainPage.classList.remove('hidden');
    content.classList.remove('hidden');
}

// Call the closeCurtains function after a short delay
setTimeout(closeCurtains, 7700); // 7.7 seconds
