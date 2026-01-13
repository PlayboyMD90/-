const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "9qwTVYoS#2ck33djclIcSkbUSfuzmxaI2LgAiqyFsv1-qkmmk7qk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/PlayboyMD90/-/blob/main/imagejus/20260112_180822.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 PLAYBOY-MD Is Alive Now☹️*",
BOT_OWNER: '94770614128',  // Replace with the owner's phone number



};
