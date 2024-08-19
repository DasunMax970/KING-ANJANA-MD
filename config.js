const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
 ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/900435c6d3157c98c3c88.jpg",
ALIVE_MSG:process.env.ALIVE_MSG || "𝙰𝙽𝚈𝚃𝙷𝙸𝙽𝙶 𝙵𝙾𝚁 𝚈𝙾𝚄


             🐼 ... 𝚂𝚄𝙳𝙳𝙰 ...🐼


              𝙸 𝙰𝙼 𝙼𝚄𝙻𝚃𝙸 𝙳𝙴𝚅𝙸𝙲𝙴
            ©️ 𝚆𝚃𝚂 𝙱𝙾𝚃  


🐼 𝙾𝚆𝙽𝙴𝙳 𝙱𝚈 : ANJANA MD AND DASUN MAX


 𝙾𝚆𝙽𝙴𝚁𝚂:+94760105256,+94765775550



                   
                  


    


           ᴾᴼᵂᴱᴿᴰ ᴮʸ
   ᴋɪɴɢ-ᴀɴᴊᴀɴᴀ :ввн׀🍁👻💦"
};
