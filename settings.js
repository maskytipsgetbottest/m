require('dotenv').config();

const settings = {
  packname: 'ᴍᴀsᴋʏ xᴅ',
  author: 'ᴍᴀsᴋʏ ᴏғғɪᴄɪᴀʟ ᴛᴇᴄʜ',
  botName: 'ᴍᴀsᴋʏ xᴅ',
  version: '1.2.0',
  botOwner: 'ᴍᴀsᴋʏ ᴏғғɪᴄɪᴀʟ ᴛᴇᴄʜ',
  ownerNumber: process.env.OWNER_NUMBER || '2348074648225',
  giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: 'public',
  description: 'This is a bot for managing group commands and automating tasks.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || 'true', // Automatically view WhatsApp statuses
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || 'true', // Automatically react to WhatsApp statuses with random emoji
  SESSION_ID: process.env.SESSION_ID || 'REPLACE_TEXT_WITH_YOUR_SESSION_ID'
};

global.SESSION_ID = settings.SESSION_ID;

module.exports = settings;