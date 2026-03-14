const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SUNUCU_IP_ADRESIN', // Burayı kendi IP'nle değiştir
        port: 25565,                // Portun farklıysa değiştir
        username: '724_Anarchy_Bot', 
        version: '1.21.1'           // Sunucu sürümün (1.21.1 veya 1.21.11)
    });

    bot.on('spawn', () => {
        console.log('Bot sunucuya girdi ve aktif!');
        // Botun sunucudan atılmaması için her 30 saniyede bir zıplamasını sağlar
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000);
    });

    // Bot sunucudan düşerse otomatik geri bağlanmasını sağlar
    bot.on('end', () => {
        console.log('Bağlantı kesildi, 10 saniye içinde tekrar bağlanıyor...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Hata:', err));
}

createBot();
