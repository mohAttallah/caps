const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();

function pickupHandler(storeName) {
    const payload = {
        store: storeName,
        orderId: chance.guid(),
        customer: chance.name(),
        address: chance.city() + ', ' + chance.state(),
    };

    eventPool.emit('pickup', payload);
}


function handlePayload(payload) {
    console.log(payload);
    console.log(`DRIVER: delivered ${payload.orderId}`);



}

function handleDelivered(payload) {

    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);

}




module.exports = { pickupHandler, handlePayload, handleDelivered };



