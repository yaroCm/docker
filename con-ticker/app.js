var cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

console.log("INICIO DE LA APP");
cron.schedule('1-59/5 * * * * *', syncDB);

