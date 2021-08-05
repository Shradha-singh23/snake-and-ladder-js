const scoreValue = [
    [16,15,14,13],
    [9,10,11,12],
    [8,7,6,5],
    [1,2,3,4]
]

const ladderMap = {
    2: 11,
    5: 9,
    7:15
}

const snakeMap = {
    14: 3,
    12: 6,
    10: 4
}
const LADDER_CLASS = "ladder";
const SNAKE_CLASS = "snake";

function createBoard(){
    const board = document.querySelector('.main-board')
    let str = "";
    scoreValue.map(row => {
        str += `
            <div class="row">`
        row.map(block => {
            str += `
                    <div class="block ${ladderMap[block] ? LADDER_CLASS : ''} ${snakeMap[block] ? SNAKE_CLASS : ''} ${block === 1 ? 'active' : ''} " data-value=${block}>
                      ${block}
                    </div>
                `
            })   
        str += `</div>`
    })
    board.innerHTML = str;
}

function roll(){
    const dice = document.querySelector("img");
    dice.classList.add("shake");
    setTimeout(() => {
        dice.classList.remove("shake");
        const diceValue = Math.ceil(Math.random()* 6);
        document.querySelector("#dice-id").setAttribute("src", `assets/dice${diceValue}.png`);   
        changeCurrentPosition(diceValue);
    }, 1000); 
}

function changeCurrentPosition(diceValue){
    const activeBlock = document.querySelector('.active');
    const activeBlockValue = parseInt(activeBlock.outerText);
    let presentValue = diceValue + activeBlockValue;
    if (snakeMap[presentValue]){
        alert(`Oppsss! Your present Value is ${presentValue} & a snake has bitten you go back to ${snakeMap[presentValue]}`)
        presentValue = snakeMap[presentValue];
        changeActiveClass(presentValue);
    }
    if (ladderMap[presentValue]){
        alert(`Yayyy! Your present Value is ${presentValue},you got a ladder go to ${ladderMap[presentValue]}`)
        presentValue = ladderMap[presentValue];
        changeActiveClass(presentValue);
    }
    if (presentValue<=16){
        changeActiveClass(presentValue);
    }
}

function changeActiveClass(presentValue){
    const activeBlock = document.querySelector('.active');
    activeBlock.classList.remove('active');
    const block = document.querySelector(`[data-value = "${presentValue}"]`);
    block.classList.add('active');
}