function fibonacci(n) {
    if (n == 1) {
        return [0, 1]
    } else if (n == 0){
        return [0]
    } else {
        let arr = [...fibonacci(n-1)]
        // console.log(arr.at(-1), n)
        return [...arr, arr.at(-1) + arr.at(-2)]
    }
}


// console.log(fibonacci(10))
// Jangan hapus kode di bawah ini!
export default fibonacci;
