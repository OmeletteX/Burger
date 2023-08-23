document.getElementById('uploadImage').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the uploaded file

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Create a new grid item with the uploaded image as background
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.style.backgroundImage = `url(${e.target.result})`;

            // Append the new item to the grid
            const grid = document.querySelector('.grid');
            grid.appendChild(newItem);
        };

        // Read the uploaded image as a data URL
        reader.readAsDataURL(file);
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const dataIndex = item.getAttribute('data-item');


        gsap.from(item, {
            opacity: 0,
            duration: 1,
            delay: dataIndex * 0.3,
            ease: "sine.in"
        });
    });
});




