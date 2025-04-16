const fs = require("fs")

let handler = async (m, { Kyyhst, isCreator, text, reply2, example }) => {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(example("namafile plugins"))
if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")
if (!fs.existsSync("./plugins-v1/" + text.toLowerCase())) return reply("File plugins tidak ditemukan!")
await fs.unlinkSync("./plugins-v1/" + text.toLowerCase())
return reply(`Berhasil menghapus file plugins *${text.toLowerCase()}*`)
}

handler.command = ["delplugins", "delplugin"]

module.exports = handler