balance = (left, right) => {
    var lleft = 0;
    var rright = 0;
    for (var i = 0; i < left.length; i++) {
        if (left[i] === '!') {
            lleft++
            lleft++
        } else if (left[i] === '?') {
            lleft++
            lleft++
            lleft++
        }
    }
    for (var j = 0; j < right.length; j++) {
        if (right[j] === '!') {
            rright++
            rright++
        } else if (right[j] === '?') {
            rright++
            rright++
            rright++
        }
    }
    if (lleft > rright) {
        return "Left"
    } if (lleft < rright) {
        return "Right"
    } else return "Balance"

}


//console.log(balance())
