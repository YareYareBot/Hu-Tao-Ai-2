const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

//————————————————————————//

/*

Created By Xyroo
WhatsApp Me : 6281543496975

 - Source ↓
 - https://chat.whatsapp.com/B5eed04F4v6LbstG2SuRbA
 - https://whatsapp.com/channel/0029Vak9tFD2P59bOJcv3N3b
- https://whatsapp.com/channel/0029Valg4QU7oQhidANPik3Q
- https://whatsapp.com/channel/0029VajOwS32phHQj8bIpd3G

*/

//————————————————————————//

function VideoHD(inputPath, outputPath, callback) {
  ffmpeg(inputPath)
    .videoCodec("libx264")
    .size("1280x720")
    .on("end", () => {
      console.log("Video berhasil diubah menjadi HD.");
      callback(null, outputPath);
    })
    .on("error", (err) => {
      console.error("Terjadi kesalahan: ", err.message);
      callback(err, null);
    })
    .save(outputPath);
}

module.exports = { VideoHD };
