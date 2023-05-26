const gameBoard=document.querySelector('#gameboard');
const info=document.querySelector('.info');
const startCells=[
"","","","","","","","","",
];
const img=document.querySelector('img');

let go="circle";
info.textContent=go + " " + "goes first ";


function createBoarder(){
    startCells.forEach((_cell,index)=>{
        const cellElement=document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id=index;
        cellElement.addEventListener('click', (e)=>{
            const goDispaly=document.createElement('div');
            goDispaly.classList.add(go);
            e.target.append(goDispaly); 
            go= go ==="circle"? "cross" : "circle";
            info.textContent="It is now " + go + "'s go.";
           checkScore();
        })
        gameBoard.append(cellElement);
        
    })

}
createBoarder();

function checkScore(){
    const allSquares=document.querySelectorAll(".square");

    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
     
    winningCombos.forEach(array => {
        const circleWins=array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'));
        if(circleWins){
            info.textContent="Circle Wins!";
            info.classList.add("green");
            img.classList.add("show");
            setTimeout(() => {
                window.location.reload();
           }, 3000);
            /**
             * !This code for Stop Game after win circle
             **/
            
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });



    winningCombos.forEach(array => {
        const crossWins=array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'));
        if(crossWins){
            info.textContent="Cross Wins!";
            info.classList.add("green");
            img.classList.add("show");
            setTimeout(() => {
                 window.location.reload();
            }, 5000);
            /**
             * !This code for Stop Game after win cross
             **/
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });
}