const stories = document.getElementById('stories');
const explore = document.getElementById('explore');

let isDragging = false;
let startX;

stories.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

stories.addEventListener('mouseup', () => {
    isDragging = false;
});

stories.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = startX - e.clientX;
        stories.scrollLeft -= deltaX;
        startX = e.clientX;
    }
});

// Apply the same event listeners to the 'explore' element
explore.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

explore.addEventListener('mouseup', () => {
    isDragging = false;
});

explore.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = startX - e.clientX;
        explore.scrollLeft -= deltaX;
        startX = e.clientX;
    }
});