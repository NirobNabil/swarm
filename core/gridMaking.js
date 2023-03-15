// creating the grid with given length and width :

function createBoard (length,width) 
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
    return (board);
}

// displaying the grid :

function displayBoard (board)
{
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


function initShelf(noOfShelfs,gameBoard,robotCoordinates)
{
    // console.log(robotCoordinates.length);
    for(let i=0; i<robotCoordinates.length; i++){
		let x1 = robotCoordinates[i][0];
        let y1 = robotCoordinates[i][1];
        let shelfSize = robotCoordinates[i][2];
        let side = robotCoordinates[i][3];
		if(side==2){
			while(shelfSize--){
				gameBoard[x1-1][y1-1]='#';
				x1++;
			}
		}
		else{
			while(shelfSize--){
				gameBoard[x1-1][y1-1]='#';
				y1++;
			}
        }
    }
}



exports.createBoard = createBoard;
exports.displayBoard = displayBoard;
exports.initShelf = initShelf;