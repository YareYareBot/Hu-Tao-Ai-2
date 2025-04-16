const fs = require("fs")
const path = require('path');

let handler = async (m, { Kyyhst, isCreator, text, reply, example }) => {
if (!isCreator) return reply(global.mess.owner)
let dir = fs.readdirSync('./plugins-v1')
if (dir.length < 1) return reply("Tidak ada file plugins")
let teks = "\n"
for (let e of dir) {
teks += `* ${e}\n`
}
reply(teks)
}

handler.command = ["listplugin", "listplugins"]

module.exports = handler