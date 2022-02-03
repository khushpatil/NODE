//Our ice cream factory, only this time instead of using 
//callbacks we will be using promises to make the code clean,
//easy to read and simple

let stocks = {
    Fruits : [`Strawberry`, `Grapes`, `Banana`, `Apple`],
    liquid : [`Water`, `Ice`],
    holder : [`Cone`, `Cup`, `Stick`],
    toppings : [`Chocolate`, `Peanuts`],
};

let is_shop_open = true;

let order = (time,work) => {
    return new Promise((resolve,reject) => {
        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time);
        }else{
            reject(console.log(`Our shop is closed!`));
        }
    });
}

order(2000, () => console.log(`${stocks.Fruits[0]} has been selected`))
.then(() => {return order(1000, () => console.log(`The production has started`))})
.then(() => {return order(2000, () => console.log(`The Strawberry is being chopped`))})
.then(() => {return order(1000, () => console.log(`The machine is being started`))})
.then(() => {return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`))})
.then(() => {return order(2000, () => console.log(`${stocks.holder[0]} has been selected as the container`))})
.then(() => {return order(3000, () => console.log(`${stocks.toppings[0]} is the selected topping for the ice cream`))})
.then(() => {return order(1000, () => console.log(`The ice cream has been served`))})

.catch(() => {
    console.log(`Customer has left the shop`);
})

.finally(() => {
    setTimeout(() => {
        console.log(`Day has ended, we are closing the shop`);
    },3000);
})