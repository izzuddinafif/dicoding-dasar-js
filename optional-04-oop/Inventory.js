/**
 * inventory.js
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor(items = []){
        this.items = items;
    }
    #findItemIndex(id){
        return this.items.findIndex(item => item.id == id)
    }
    addItem(item){
        // console.log("pushing: " + item.displayDetails())
        this.items.push(item);
    }
    removeItem(id){
        let index = this.#findItemIndex(id)
        if (index < 0) {
            throw new Error("ID doesn't exist!")
        }
        // console.log(index)

        this.items.splice(index, 1)
    }
    listItems(){
        let list = "";
        for (const item of this.items) {
            list += item.displayDetails() + '\n'
        }
        return list
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
