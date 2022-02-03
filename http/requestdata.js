//now to request data from certain websites we need to use the http/https module
//3 blocks of code, all 3 perform the same function
//comment the other 2 before trying out any one

//this is the basic code where we assign the request to an object req and use the object http 
//to store the https module, the request function has parameters like data(website name)
//and a callback function which will have an argument response(res)
//this response will emit an event "data" which we will receive from the website
//and this data will be in the form of a chunk, hence the argument
//is chunk in the callback function on.
//also the response will emit an end event when there is no more data to be received from the site 
//There will be more efficient methods listed below

const http = require('https');
const req = http.request('https:/www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    });
    res.on(`end`, () => console.log(`No more data`));
});

req.end();

//now for the more efficient way we do not need to store https module in an object http

const {request} = require('https');
const req = request('https:/www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    });
    res.on('end', () => console.log(`No more data`));
});

req.end();

//another way is to use the get function for which we do not need to use the end()
//function to send our request, but this is applicable only when we need to get data
//from a website

const {get} = require('https');
get('https:/www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => console.log(`No more data`));
});