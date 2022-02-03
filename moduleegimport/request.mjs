//we will create a send function which will send the encrypted data
//to the respective url

function encryptData(){
    return 'encrypted data';
}

function send(url,data){
    const encryptedData = encryptData(data);
    console.log(`sending ${encryptedData} to the ${url}`);
}

export {
    send,
};