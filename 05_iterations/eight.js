// REDUCE 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal); // 6


// REDUCE IN ARROW FUNCTION 

const myTotal2 = myNums.reduce( (acc, currval) => acc + currval, 0 )
console.log(myTotal2); // 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "mob dev course",
        price: 4999
    },
    {
        itemName: "ai/ml course",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);  // 17996
