
/* 

const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1D = document.querySelector("#p1D");
const p2D = document.querySelector("#p2D");
const resetButton = document.querySelector('#reset');
const winningScore = document.querySelector('#noofgames');



let win = 3;
let p1S = 0;
let p2S = 0;
let isGameOver = false;

p1Button.addEventListener('click', (e) =>
{
    
    if (!isGameOver)
    {
        p1S += 1;
        if (p1S === win)
        {
            isGameOver = true;
            p1D.classList.add('has-text-success');
            p2D.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1D.innerText = p1S;
    }
    

});



p2Button.addEventListener('click', (e) =>
{
    if (!isGameOver)
    {
        p2S += 1;
        if (p2S === win)
        {
            isGameOver = true;
            p2D.classList.add('has-text-success');
            p1D.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p2D.innerText = p2S;
    }   
});

reset = function () {
        isGameOver = false;
        p1S = 0;
        p2S = 0;
        p1D.innerText = p1S;
        p2D.innerText = p2S;
        p1D.classList.remove('has-text-success', 'has-text-danger');
        p2D.classList.remove('has-text-success', 'has-text-danger');
        p1Button.disabled = false;
        p2Button.disabled = false;

    
};

resetButton.addEventListener('click', reset);

winningScore.addEventListener('change', (e) => {

    win = parseInt(e.target.value);
    reset();
});

*/

const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1D")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2D")
}

const resetButton = document.querySelector("#reset");
const winningScore = document.querySelector('#noofgames');

let win = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === win) {
            isGameOver = true;
            player.display.classList.add("has-text-danger");
            opponent.display.classList.add("has-text-success");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    } player.display.textContent = player.score;
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winningScore.addEventListener('change',  (e) => {
    win = parseInt(e.target.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.removeAttribute("class");
        p.button.disabled = false;
    }
}