let gameBoard = []; //createBoard(input.gridLength,input.gridWidth);


// creating the grid with given length and width :

function create (length,width) 
{
    board = [];
    row = [];
    for (var i = 0; i <length; i++) 
    {
        for (var j = 0; j<width; j++)
        {
            row.push(".");
        }
        board.push(row);
        row =[];
    }
    gameBoard = board;
    // return (board);
}

// displaying the grid :

function display ()
{
    const board = gameBoard;
    s = "   "
    for(var j=0; j<board[0].length; j++)
        s += j + " "
    console.log(s)
    for (var i = 0; i < board.length; i++) 
    {
        let s="";
        for(var j=0; j<board[i].length; j++)
        {
            s+=board[i][j] + " ";
        }
        console.log((i)+"  "+s);
    }
}


//initializing the shelfs :
// "- - - -" -> 4th input is 1 if shelf continues in rightwards
// "- - - -" -> 4th input is 2 if shelf continues in downwards 


function initShelves(shelves)
{

    shelves.forEach(shelf => {
        shelf.positions.forEach( pos => {
            gameBoard[pos.x-1][pos.y-1] = '#';
        } )
    });

}





exports.getMap = () => gameBoard;

exports.create = create;
exports.display = display;
exports.initShelves = initShelves;