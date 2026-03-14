const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: 'SUNUCU_IP_ADRESIN', 
  port: 25565,
  username: 'Anarchy_Bot',
  version: '1.21.1'
});
bot.on('spawn', () => console.log('Bot girdi!'));
bot.on('end', () => process.exit()); // Kapandığında GitHub tekrar başlatsın diye
