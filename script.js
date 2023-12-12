/* Set Global Variables */
let restart = 0;
const click = 'click';
const dblclick = 'dblclick';

/* Parse each col and the button */
const cols = document.querySelectorAll('.col');
const btn = document.querySelector('#restart');

/* Add event listener to the restart button */
const btnActive = function () {
    btn.addEventListener('click', function () {
        restart = 1;
        game(); // Call the game function when the button is clicked
    });
}

/* Clear board */
const clearBoard = function () {
    for (let i = 0; i < cols.length; i++) {
        cols[i].textContent = "";
    }
}

/* Add event listener to each column */
const addEventListener = function (clickMark = 'X', dblclickMark = 'O') {
    for (let i = 0; i < cols.length; i++) {
        cols[i].addEventListener(click, function () {
            cols[i].textContent = clickMark;
        });

        cols[i].addEventListener(dblclick, function () {
            cols[i].textContent = dblclickMark;
        });
    }
}

/* Declare the game */
const game = function () {
    if (restart == 0) {
        addEventListener();
    } else {
        clearBoard();
    }
}


// Call btnActive function to add event listener to the restart button
btnActive();

// Initialize the game
game();