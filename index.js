const TelegramBot = require('node-telegram-bot-api');


const token = '1735997086:AAEaLv71OS7huvJGqCnrg-GdRfELbaY7Gms';

const bot = new TelegramBot(token, {polling:true});

bot.onText(/^\/start/, function(msg) {
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.username;
    bot.sendMessage(chatId, "Hola, " + username + "Soy un robot programado por Wilfredo");
})

bot.onText(/^\/jamie/, function(msg) {
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.first_name;
    bot.sendMessage(chatId, "Hola, yo soy Beimax no mentira. Hola, " + username + " Soy un prototipo de prueba creado por tu hermoso e inteligente Novio");
})

bot.onText(/^\/lovo/, function(msg) {
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.first_name;
    bot.sendMessage(chatId, "Sos un tremendo cerote " + username + " Deja de fumar cara de verga");
})

bot.onText(/^\/joel/, function(msg) {
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.first_name;
    var sendUrl = 'https://www.xvideos.com/'
    bot.sendMessage(chatId, "Hola miamor " + username + "Estas viendo porno solo? Ten una recomendacion " + sendUrl);
})

bot.onText(/^\/Jamie/, function(msg){
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.first_name;
    var img = 'imgExample.jpg';
    bot.sendPhoto(chatId, img);
    bot.sendMessage(chatId, "Hola miamor me presento de nuevo " + username + "YA QUE ALGUIEN LO QUERIA CON MAYUSCULAS");
})

bot.onText(/^\/textraño/, function(msg){
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.first_name;
    var video = 'beimax.mp4';
    bot.sendVideo(chatId, video);
    bot.sendMessage(chatId, "Hola miamor me presento de nuevo " + username + "Este lo deje programado, mas bien es una prueba");
})




