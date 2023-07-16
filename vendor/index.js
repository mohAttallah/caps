// vendor/index.js
const eventPool = require('../hub');

const { pickupHandler } = require('./handler')
const { handlePayload } = require('./handler')
const { handleDelivered } = require('./handler')

eventPool.on('delivered', handlePayload)
eventPool.on('delivered', handleDelivered);

require('../driver');
require('./handler');

module.exports = pickupHandler;