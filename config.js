const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2348168855791'
global.mongodb = process.env.MONGODB_URI || "mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/trenz_alore' // add your username
global.sudo = process.env.SUDO || '2348168855791,2348050907760'
global.devs = '2347039570336,2348168855791';
global.website = 'wa.me/+2348168855791' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUMrcng3U3ZtMFRaLy9RNHFlOE5zQ1hOZDIvTGorcmx4d0dCRktjYnNtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnZWb3hxNTNCQkVZakgrRGoxUkEyRUlFWlJ3RG5LTWYwRDBjSkwzOHREaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5T1AxNUsxMW56VlJrczVOVE0wbmVaaFdwWmMxbkVYb0FKcTE3ZWwzYjJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSW5PWStYbzBUaFJnL0NZcEVFVHo2ZlJmWk54c3JUZUYrQXRYUlhUV0JjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHamExeFJOSmR6b0dKeDFqaVpYQTFhYXJmSXJ0V09wc2drYWZFWk1Vblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhaR0JVZlZKWGVQWWtEd0MrQlVUQ2ZFeUJJczhDYWpCaVFOWWovWmc5bkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUErSnkydVdDZk5ya2s0WU1VNkF3TVlUbGVwQXY5OHl0NEl0OW1Pc0dscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RCWnhkL24yRWhsR25zMmU1T28yOXRNdEkwb2Iydk0zdnpscVNHY21nOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhqUjdwNmY5NzZ2QmsrMnl0Mjh4NVdJL29oQkY5KzVTKzJXcFVRS3lmTFBhemZXN241bDBaY0x4b2pJaXRCTE4yS09lTmtBVUFCeTlldmU1MExOOGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Ims2UW92M0lGTm5SY01ibWFiekZjOCtwcE5xMTBPRG9HcDJheU5CZSszVHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllrOExuSnZ2U2VxLVpYcURiUFlYUEEiLCJwaG9uZUlkIjoiY2RlOTgxYWYtYWJkNC00MDM5LWJjMTUtMDMxODQzNDlkY2RlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktRMGpveXhOdkhnYk4yYUNReEpGTEsza3ZTMD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUitGQVgrNkVJT3NDUkNFV2xxaGRUVENwb1ZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHZVbllRRUVKM0Q5N01HR0JvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMU9naGJTVXBQbDJRUEpkNk9yWjM5eGRrbXNnVzVlNWpmazRtWHpiR1Zpbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV2M2cXZhZ3NzU1NPN0hhWlF6NkZpQTM3RzNIU0dVdkhCOGZSVkJTRHRkZHVENnFXK0lmeC9Od1FXNEplSFpVS0JwTjRxUEFsTWU0S01YNG1LU3YxQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ikx2SXJicFNyaVBmSmxoVEhScGFZdWVzZnNVNHhHTFo3ZWRPSE4yR0xWNG9JVlBhM1cxUm9HQUMvenN6WG1Kc1NuV0MrK29ielVaVEdhNnpFOGRuOGhBPT0ifSwibWUiOnsiaWQiOiIyMzQ4MTY4ODU1NzkxOjQ0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjg4NTU3OTE6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFRvSVcwbEtUNWRrRHlYZWpxMmQvY1haSnJJRnVYdVkzNU9KbDgyeGxZcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTUyNTc5M30=",
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Silent' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '!' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
