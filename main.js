function createBoard(){
    const scoreValue = [[16,15,14,13],[9,10,11,12],[8,7,6,5],[1,2,3,4]]
    const board = document.querySelector('.main-board')
    let str = "";
    scoreValue.map(row => {
        str += `
            <div class="row">`
        row.map(block => {
                str += `
                    <div class="block" data-value=${block}>
                      ${block}
                    </div>
                `
            })
        
        str += `</div>`
    })
    console.log(str);
    board.innerHTML = str;
}

function roll(){
    const dice = document.querySelector("img");
    dice.classList.add("shake");
    setTimeout(() => {
        dice.classList.remove("shake");
        const diceValue = Math.ceil(Math.random()* 6);
        document.querySelector("#dice-id").setAttribute("src", `assets/dice${diceValue}.png`);   
    }, 1000);  
}