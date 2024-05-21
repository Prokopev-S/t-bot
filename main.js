const { Telegraf, Markup } = require('telegraf')
// const { message } = require('telegraf/filters')

const token = ""
const webAppUrl = 'https://prokopevs.github.io/rocket-game/#&'

const bot = new Telegraf(token)

bot.start(async (ctx) => {
    try {
        // const userName = ctx.from.first_name;
        // const userId = ctx.from.id;

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
    } catch (error) {
        console.error('Error occurred while handling /start command:', error);
    }
});

bot.hears('/friend', async (ctx) => {
    try {
        const userId = ctx.from.id;
        await ctx.replyWithHTML(`📱 <b>Referral link:</b> <code>https://t.me/testStarterLaunchBot?start=${userId}</code>`, { parse_mode: 'HTML' });
    } catch (error) {
        console.error('Error occurred while handling /friend command:', error);
    }
});

bot.launch()