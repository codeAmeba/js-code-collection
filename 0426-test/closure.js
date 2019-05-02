function fiboCloser() {
    var li = [0, 1]
    function inner(n) {
      if (n > li.length) {
        li.push(inner(n - 1) + inner(n - 2))
      }
      return li[n - 1]
    }
    return inner
  }