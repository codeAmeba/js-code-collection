function fiboLoop(n) {
    let left = 0;
    let right = 1;
    for(let i = 1; i < n; i++) {
        [left, right] = [right, left + right]
    }
    return left
}