//we are just going to create a skeleton of the https module which can send requests 
//and receive the response from the url, for that we have to create different js files
//request and response which will have their respective functions send and receive, which we will then export
//and use those functions in our main https.js file

const {send} = require('./request');
const {read} = require('./response');

function makerequest(url,data){
    send(url,data);
    return read();
}

const responsedata = makerequest('https:/www.google.com', 'hello');
console.log(`Response: ${responsedata}`);