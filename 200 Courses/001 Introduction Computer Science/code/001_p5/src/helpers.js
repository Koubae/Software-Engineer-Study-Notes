function drawMousePosition() {
    // Makes changes and restores previous styles 
    push();         // Save current styles
    textSize(20);
    fill(0);
    text(`${mouseX}, ${mouseY}`, 20, 20);
    pop();          // Restore previous fill color

}

export { drawMousePosition };
