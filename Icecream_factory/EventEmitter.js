//learning about the eventemitter object which requires the events module
//let's have a racer who will emit his result ie either win or lose to his fans(observers)
//the racer will be a celebrity and we will put on functions for the observers

const EventEmitter = require(`events`);
const celebrity = new EventEmitter;

//now for the observers 
//this observer is the fan
celebrity.on(`race`, (result) => {
    if(result == `win`){
        console.log(`ma nigga won, yay`);
    }
    else if(result == `lost`){
        console.log(`Hard luck for my nigga`);
    }
    else{console.log(`nigga a race is either won or lost, nothing in between`)}
});

//this observer is the hater
celebrity.on(`race`, (result) => {
    if(result == `win`){
        console.log(`nigga did'nt deserve to win`);
    }
    else if(result == `lost`){
        console.log(`nigga deserved to lose`);
    }
    else{console.log(`nigga a race is either won or lost, nothing in between`)}
});

//now to actually emit the event about the racer
celebrity.emit(`race`, `win`);
celebrity.emit(`race`, `lost`);
celebrity.emit(`race`, `middle`);



