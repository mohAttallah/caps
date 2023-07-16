// driver/index.js
const { handleTransit } = require('./handler')
const { handlePickup } = require('./handler');
const eventPool = require('../eventPool');

eventPool.on('pickup', handlePickup)
eventPool.on('in-transit', handleTransit);
