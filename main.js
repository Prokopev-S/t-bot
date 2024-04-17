const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')

const token = ''
const webAppUrl = 'https://prokopevs.github.io/rocket-game'

const bot = new Telegraf(token)

bot.start((ctx) => {
    const userName = ctx.from.first_name;
    const userId = ctx.from.id;

    const { message } = ctx;
    const startappParam = message.text.split(' ')[1];

    // if (message.text.startsWith('/start')) {
    //     ctx.reply(`Вы запустили бот с параметром startapp: ${startappParam}`);
    // }

    ctx.replyWithPhoto({ source: './scale_1200.jpg' }, {
        caption: "Let's launch",
        parse_mode: 'Markdown', 
        ...Markup.inlineKeyboard([Markup.button.webApp("Play Mellstroy Game", `${webAppUrl}`)
    ])

    });
    let now = new Date();
    console.log(ctx.from)
    console.log(now)
});

bot.hears('/friend', (ctx) => {
    // ctx.reply('Вот ваша реферальная ссылка: ..............')

    ctx.reply('Вот ваша реферальная ссылка, нажмите чтобы скопировать: `t.me/testStarterLaunchBot?start=795512`', { parse_mode: 'Markdown' });
});

bot.launch()