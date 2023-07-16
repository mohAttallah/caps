
const eventPool = require('../eventPool');

function handlePickup(payload) {
    console.log(`DRIVER: picked up ${payload.orderId}`);


    eventPool.emit('delivered', payload);
    console.log(payload)
}


function handleTransit(payload) {
    console.log(`DRIVER: delivered ${payload.orderId}`);

    eventPool.emit('delivered', payload);
    console.log(payload)
}

module.exports = { handleTransit, handlePickup };