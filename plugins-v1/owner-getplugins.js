const fs = require("fs")

let handler = async (m, { Kyyhst, isCreator, reply, text, example }) => {
if (!isCreator) return reply(global.mess.owner)
if (!text) return reply(example("namafile plugins nya"))
if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")
if (!fs.existsSync("./plugins-v1/" + text.toLowerCase())) return reply("File plugins tidak ditemukan!")
let res = await fs.readFileSync("./plugins-v1/" + text.toLowerCase())
return reply(`${res.toString()}`)
}

handler.command = ["getp", "gp", "getplugins", "getplugin"]

module.exports = handler