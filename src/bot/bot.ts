import Telegraf from 'telegraf';
import { getConfig } from '../config/config';

const config = getConfig('postg_test_');
const bot = new Telegraf(config.bot_section.bot_token);
bot.start((ctx) => ctx.reply('Welcome!'));
(<any>bot).launch();