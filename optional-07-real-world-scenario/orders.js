// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
class Order {
  constructor(customerName, items, totalPrice, status) {
    this.id = generateUniqueId();
    this.customerName = customerName;
    this.items = items;
    this.totalPrice = totalPrice;
    this.status = status;
  }
}

let orders = [];

function newOrder(customerName, items, totalPrice, status) {
  return new Order(customerName, items, totalPrice, status)
}

function calculateTotalPrice(items) {
  // if reduce() has no initalValue set, accumulator will take items[0] as initial value which
  // is {name: name, price: price} and will try to convert it into a string, thus will result
  // in [object Object]5000 since it concatenates the object that has been converted into
  // string with the 5000 (also converted into string). Thanks for nothing, type coercion 🙄 
  return items.reduce((accumulator, item) => accumulator + item.price, /*initialValue*/ 0)
}

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  orders.push(newOrder(customerName, items, calculateTotalPrice(items), 'Menunggu'))
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const item = orders.find(item => orderId === item.id)
  item.status = status
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // => without braces {} implies return, so you don't have to explicitly return the accumulator
  return orders.reduce((accumulator, order) => order.status === "Selesai" ?
    accumulator + order.totalPrice : accumulator
    , 0)
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id)
  if (index === -1) {
    throw new Error("Index not found!")
  }
  orders.splice(index, 1)
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
