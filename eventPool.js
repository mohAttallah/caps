const eventsPool = require('./hub')

eventsPool.on('pickup', pickUpHandler);

function pickUpHandler(payload) {
    console.log('EVENT:', {
        event: 'pickup',
        time: new Date(),
        payload: (payload),
    });
}

module.exports = eventsPool;