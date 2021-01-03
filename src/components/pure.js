// 纯函数，入参不允许改变
function add(a, b){
    return a + b
}

// 改变了就是非纯函数
function add2(a, b){
    a = a + b
    return a
}