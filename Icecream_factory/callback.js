//Basically a representation of callback hell and why callbacks are outdated
//and promises and async await are preferred over callbacks

let stocks = {
    Fruits : [`Strawberry`, `Grapes`, `Banana`, `Apple`],
    liquid : [`Water`, `Ice`],
    holder : [`Cone`, `Cup`, `Stick`],
    toppings : [`Chocolate`, `Peanuts`],
};

let order = (Fruitname,fcall) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruitname]} was selected`);
        fcall();
    }, 2000);
}

let production = () => {
    setTimeout(() => {
        console.log(`Production has started`);

        setTimeout(() => {
            console.log(`The fruit has been chopped`);

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);

                setTimeout(() => {
                    console.log(`${stocks.holder[0]} is selected as the holder`);

                    setTimeout(() => {
                        console.log(`${stocks.toppings[1]} is the topping`);

                        setTimeout(() => {
                            console.log(`The ice cream has been served`);

                        },3000);

                    },1000);

                }, 2000);
                
            }, 1000);

        },2000);

    }, 0)
}

order(0,production);