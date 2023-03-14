const posDelta = .01

exports.checkPositionEqual = (pos1, pos2) => {
    if( Math.abs(pos1.x - pos2.x) < posDelta 
        && Math.abs(pos1.y - pos2.y) < posDelta ) {
        return true;
    } else return false;
}