const fs = require("fs")

let handler = async (m, { Kyyhst, isCreator, text, reply, example }) => {
if (!isCreator) return reply(mwss.OnlyOwner)
if (!text) return reply(example("namafile & reply code"))
if (!m.quoted || !m.quoted.text) return reply(example("namafile & reply code"))
if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")
let kondisi = "menambah"
if (fs.existsSync("./plugins-v1/" + text)) return reply("Nama file plugins sudah terdaftar di dalam folder plugins!")
let teks = m.quoted.text
await fs.writeFileSync("./plugins-v1/" + text, teks)
return reply(`Berhasil ${kondisi} file plugins *${text}*`)
}

handler.command = ["addplugins", "addplugin", "addp", "addplug"]

module.exports = handler



