const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')

const token = ""
const webAppUrl = 'https://prokopevs.github.io/rocket-game/#&'

const bot = new Telegraf(token)

bot.start((ctx) => {
    const userName = ctx.from.first_name;
    const userId = ctx.from.id;

    const { message } = ctx;
    const id = message.text.split(' ')[1]
    const startappParam = id ? id : null

    // if (message.text.startsWith('/start')) {
    //     ctx.reply(`Вы запустили бот с параметром startapp: ${startappParam}`);
    // }

    ctx.replyWithPhoto({ source: './rocket.jpg' }, {
        caption: "Let's launch",
        parse_mode: 'Markdown', 
        ...Markup.inlineKeyboard([Markup.button.webApp("Play Rocket Game", `${webAppUrl+"startapp="+startappParam}`)
    ])

    });
});

bot.hears('/friend', (ctx) => {
    const userId = ctx.from.id
    ctx.reply(`Вот ваша реферальная ссылка, зажмите чтобы скопировать: https://t.me/testStarterLaunchBot?start=${userId}`, { parse_mode: 'Markdown' });
});

bot.launch()