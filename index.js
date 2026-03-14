const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'IP_ADRESIN',       // Sadece sayısal IP veya adres (Örn: 123.45.67.89)
  port: 25565,              // Portun 25565 değilse mutlaka değiştir!
  username: 'AnarchyBot724',
  version: '1.21.1',        // 1.21.11 yerine 1.21.1 yazmayı dene (uyumludur)
  hideErrors: false         // Hataları gizleme ki görelim
});

bot.on('spawn', () => {
  console.log('BOT SUNUCUDA! ŞU AN AKTİF.');
  // Botun kapanmaması için sonsuz döngü
  setInterval(() => {
    console.log('Bot hala burada...');
  }, 60000);
});

bot.on('error', (err) => console.log('HATA ÇIKTI: ' + err));
bot.on('end', () => console.log('Bağlantı kesildi.'));
