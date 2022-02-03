//run 3 promises in 3 different ways ie 
//parallel, sequence and race. race will return
//the fastest promise 

const promisify = (item, delay) =>
    new Promise((resolve) => 
        setTimeout(() => 
            resolve(item), delay))

const a = () => promisify('a',500);
const b = () => promisify('b',5000);
const c = () => promisify('c',3000);

async function parallel(){
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `Parallel Results: ${output1} ${output2} ${output3}`
}

async function race(){
    const promises = [a(), b(), c()];
    const result = await Promise.race(promises);
    return `Race results: ${result}`
}

async function sequential(){
    const promises = [a(), b(), c()];
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequential Results: ${output1} ${output2} ${output3}`
}

parallel().then(console.log);
race().then(console.log);
sequential().then(console.log);