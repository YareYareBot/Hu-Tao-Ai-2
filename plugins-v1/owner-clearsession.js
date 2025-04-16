const fs = require("fs")

let handler = async (m, { isCreator, reply }) => {
if (!isCreator) return reply(mess.OnlyOwner)
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session file`)
}

handler.command = ["boost", "clearsession", "clsesi", "clearsesi"]

module.exports = handler