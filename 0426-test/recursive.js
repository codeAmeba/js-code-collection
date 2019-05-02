function fiboRecursrion(n) {
    if(n == 1) {
        return 0
    }
    if(n === 2) {
        return 1
    }
    return fiboRecursrion(n - 1) + fiboRecursrion(n - 2)
}