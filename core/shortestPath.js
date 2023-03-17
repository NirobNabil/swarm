// const Qclass = require('./dataTypes.js');

class QItem {

	constructor(x, y, w) {
		this.row = x;
		this.col = y;
		this.dist = w;
	}
};


function initPrev(prev,row,col)
{
	for(var i=0; i<=row; i++){
		prev.push([]);
		for(var j=0; j<=col; j++){
			prev[i].push([-1,-1]);	
		}
	}
}



function withinGrid(curX, curY, row, col) {
	if (curX >= 0 && curX < row && curY >= 0 && curY < col) return true;
	return false;
}

function arrayToPos(posArray) {
	return {
		x: posArray[0],
		y: posArray[1],
	}
}

function minDistance(gameBoard, stX, stY, enX, enY) {

	stX = Math.round(stX);
	stY = Math.round(stY);
	enX = Math.round(enX);
	enY = Math.round(enY);

	var source = new QItem(0, 0, 0);
	var prev = [];

	// To keep track of visited QItems. Marking
	// blocked cells as visited.
	row = gameBoard.length;
	col = gameBoard[0].length;
	var visited = Array.from(Array(row), () => Array(col).fill(0));
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			if (gameBoard[i][j] == '.')
				visited[i][j] = false;
			else
				visited[i][j] = true;
		}
	}

	//finding source:
	source.row = stX;
	source.col = stY;

	// applying BFS on matrix cells starting from source 
	var q = [];
	var prev = [[]];
	initPrev(prev,row,col);
	q.push(source);
	prev[stX][stY]= [-1,-1] ;
	visited[stX][stY] = true;
	while (q.length != 0) {
		var p = q[0];
		q.shift();
		//console.log(p);

		// Destination found;
		if (p.row == enX && p.col == enY) {
			var res = [];
			while(prev[p.row][p.col][0]!=-1)
			{
				res.push(prev[p.row][p.col]);
				[p.row, p.col] = prev[p.row][p.col];
				//console.log(p.row,p.col);// prev[p.row][p.col]);
			}
			return res.map(v => arrayToPos(v)).reverse();
		}
		// moving up
		if (withinGrid(p.row - 1, p.col, row, col) && visited[p.row - 1][p.col] == false) {
			q.push(new QItem(p.row - 1, p.col, p.dist + 1));
			visited[p.row - 1][p.col] = true;
			prev[p.row-1][p.col] = [p.row,p.col];
		}

		// moving down
		if (withinGrid(p.row + 1, p.col, row, col) && visited[p.row + 1][p.col] == false) {
			q.push(new QItem(p.row + 1, p.col, p.dist + 1));
			visited[p.row + 1][p.col] = true;
			prev[p.row+1][p.col] = [p.row,p.col];
		}

		// moving left
		if (withinGrid(p.row, p.col - 1, row, col) && visited[p.row][p.col - 1] == false) {
			q.push(new QItem(p.row, p.col - 1, p.dist + 1));
			visited[p.row][p.col - 1] = true;
			prev[p.row][p.col-1] = [p.row,p.col];
		}

		// moving right
		if (withinGrid(p.row, p.col + 1, row, col) && visited[p.row][p.col + 1] == false) {
			q.push(new QItem(p.row, p.col + 1, p.dist + 1));
			visited[p.row][p.col + 1] = true;
			prev[p.row][p.col+1] = [p.row,p.col];
		}
	}
	return -1;
}

exports.minDistance = minDistance;
