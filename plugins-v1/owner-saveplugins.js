const fs = require("fs")

let handler = async (m, { Kyyhst, isCreator, text, reply, example }) => {
if (!isCreator) return reply(global.mess.owner)
if (!text) return reply(example("namafile & reply code"))
if (!m.quoted || !m.quoted.text) return reply(example("namafile & reply code"))
if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")
let kondisi = "mengedit"
if (!fs.existsSync("./plugins-v1/" + text.toLowerCase())) return reply("File plugins tidak ditemukan!")
let teks = m.quoted.text
await fs.writeFileSync("./plugins-v1/" + text, teks)
return reply(`Berhasil ${kondisi} file plugins *${text}*`)
}

handler.command = ["sp", "svp", "saveplugins", "saveplugin"]

module.exports = handler