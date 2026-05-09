# Etch-A-Sketch

Second last project of Odin's Foundation Path

# Pseudocode

- REFERENCE the container and btn
- DECLARE the normal size (16)
- CREATE the squares inside a container when CHANGE SIZE is clicked
    - REMOVE the normal size
    - PROMPT the user for the size and limit it to a 100
    - LOOP throught the size given
    - CREATE a square that is proportional to the container size
    - SET backgroundColor to random
    - ADDEVENTLISTENER when mouse enters the square and change the color while the opacity is getting darker each time the mouse enters a square
- RESET progress when reset btn is clicked while the size stays the same
    