//now we will write the same code of the ice cream factory 
//but this timme we will be using the async await functions
//this is basically the same as promise, just syntactic sugar

let stocks = {
    Fruits : [`Strawberry`, `Grapes`, `Banana`, `Apple`],
    liquid : [`Water`, `Ice`],
    holder : [`Cone`, `Cup`, `Stick`],
    toppings : [`Chocolate`, `Peanuts`],
};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject) => {
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log(`Shop is closed`));
        }
    });
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} has been selected`);

        await time(1000);
        console.log(`The production has started`);

        await time(2000);
        console.log(`${stocks.Fruits[0]} is being chopped`);

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);

        await time(1000);
        console.log(`The machine is being started`);

        await time(2000);
        console.log(`The ice cream has been placed on a ${stocks.holder[0]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} has been added as the toppings`);

        await time(2000);
        console.log(`The ice cream is served ! `);
    }
    catch(error){
        setTimeout(() => {console.log(`Customer has left`,error);},2000)
    }
    finally{
        console.log(`Day has ended, the shop is closed`);
    }
}

kitchen();