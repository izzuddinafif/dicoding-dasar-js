function factorial(n) {
    if (n == 1 || n == 0) {
        return 1
    }
    return n * factorial(n-1)
}

// console.log(factorial(0))
// Jangan hapus kode di bawah ini!
export default factorial;
