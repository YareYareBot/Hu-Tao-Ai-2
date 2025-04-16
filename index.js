/*
Base Simple Hillary Abigail

Pembuat Script : FallZx-Infinity

Subscribe Yt : FallZx-Features
My Ch : https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D

JANGAN DIHAPUS, RECODE SILAHKAN TAPI DILARANG KERAS UNTUK HAPUS CREDITS 
*/

const {
  default: makeWAKyyhstet,
  DisconnectReason,
  makeInMemoryStore,
  jidDecode,
  proto,
  getContentType,
  useMultiFileAuthState,
  downloadContentFromMessage,
} = require("@adiwajshing/baileys");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const chalk = require("chalk");
const readline = require("readline");
const FileType = require("file-type");
const _ = require("lodash");
const yargs = require("yargs/yargs");
const PhoneNumber = require("awesome-phonenumber");

var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}
//=================================================//
const { Low, JSONFile } = low;
const mongoDB = require("./lib/mongoDB");
//=================================================//

const manualPassword = "akameai"; //

// Fungsi untuk menghapus file
function deleteFiles() {
  const filesToDelete = ["case.js", "index.js"]; // Ganti dengan nama file.js yang ingin dihapus
  filesToDelete.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file); // Menghapus file
      console.log(
        `File ${file} Di Hapus Karna Anda Tidak Masuk Group Akame Ai`
      );
    }
  });
}

const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

console.clear();
//=================================================//
global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb/.test(opts["db"])
    ? new mongoDB(opts["db"])
    : new JSONFile(`./src/database.json`)
);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(function () {
        !global.db.READ
          ? (clearInterval(this),
            resolve(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null;
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    game: {},
    database: {},
    settings: {},
    setting: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();

const question = (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
};

async function startBotz() {
  const { state, saveCreds } = await useMultiFileAuthState("session");
  const Kyyhst = makeWAKyyhstet({
    version: [2, 3000, 1015901307],
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: state,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    emitOwnEvents: true,
    fireInitQueries: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
  });

  if (!Kyyhst.authState.creds.registered) {
    const inputPassword = await question(
      chalk.green("Not Acces!!\nMasukan Pasword Akame::\n")
    );
    if (inputPassword !== manualPassword) {
      console.log("Maaf Password Salah\nSistem Akan Mengapus File");
      deleteFiles(); // Hapus file jika password salah
      process.exit(); // Matikan konsol
    }
    console.log(chalk.green.bold(`Password Yang Anda Masukan Benar ✅`));
    console.log(chalk.hex("#3498DB")("──────────────────────────────"));
    const phoneNumber = await question(
      "Masukan Nomer Whatsapp Berawalan 𝟼𝟸 :\n"
    );
    console.log(chalk.hex("#3498DB")("──────────────────────────────"));
    let code = await Kyyhst.requestPairingCode(phoneNumber);
    code = code?.match(/.{1,4}/g)?.join("-") || code;
    console.log(chalk.red.bold(`Your Pairing Code`, code));
  }

  store.bind(Kyyhst.ev);

  Kyyhst.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message =
        Object.keys(mek.message)[0] === "ephemeralMessage"
          ? mek.message.ephemeralMessage.message
          : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") return;
      if (!Kyyhst.public && !mek.key.fromMe && chatUpdate.type === "notify")
        return;
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
      m = smsg(Kyyhst, mek, store);
      require("./case")(Kyyhst, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });

  // Setting
  Kyyhst.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  Kyyhst.getName = (jid, withoutContact = false) => {
    id = Kyyhst.decodeJid(jid);
    withoutContact = Kyyhst.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = Kyyhst.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === Kyyhst.decodeJid(Kyyhst.user.id)
          ? Kyyhst.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international"
      )
    );
  };

  Kyyhst.public = true;

  let wlcm = []; // Array wlcm global untuk digunakan dalam event listener
  Kyyhst.ev.on("group-participants.update", async (anu) => {
    if (!wlcm.includes(anu.id)) return;
    try {
      let metadata = await Kyyhst.groupMetadata(anu.id);
      let participants = anu.participants;

      for (let num of participants) {
        // Get Profile Picture User
        try {
          ppuser = await Kyyhst.profilePictureUrl(num, "image");
        } catch {
          ppuser =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }

        // Get Profile Picture Group
        try {
          ppgroup = await Kyyhst.profilePictureUrl(anu.id, "image");
        } catch {
          ppgroup =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }

        if (anu.action == "add") {
          Kyyhst.sendMessage(anu.id, {
            image: { url: ppuser },
            mentions: [num],
            caption: `Haii Kak *@${
              num.split("@")[0]
            }* Selamat Datang Di Group *${
              metadata.subject
            }* Semoga Betah Ya Kak`,
          });
        } else if (anu.action == "remove") {
          Kyyhst.sendMessage(anu.id, {
            image: { url: ppuser },
            mentions: [num],
            caption: `Sayonara *@${
              num.split("@")[0]
            }* Kami Harap Anda Bisa Masuk Lagi Ke Group ${metadata.subject}`,
          });
        } else if (anu.action == "promote") {
          Kyyhst.sendMessage(anu.id, {
            image: { url: ppuser },
            mentions: [num],
            caption: `@${num.split("@")[0]} Ciee Jadi Admin Di Group ${
              metadata.subject
            } ${metadata.desc}`,
          });
        } else if (anu.action == "demote") {
          Kyyhst.sendMessage(anu.id, {
            image: { url: ppuser },
            mentions: [num],
            caption: `@${num.split("@")[0]} Ciee Di Hapus Jadi Admin Di Group ${
              metadata.subject
            } ${metadata.desc}`,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  });

  // === Fitur Anti-Call ===
  Kyyhst.ev.on("call", async (callData) => {
    try {
      const anticall = true; // Ubah ke false jika ingin menonaktifkan
      if (!anticall) return;
      const { from, status } = callData[0];
      // Daftar nomor yang di-whitelist (tidak diblokir meskipun nelpon)
      const ownerNumbers = ["6289504242949@s.whatsapp.net"]; // Ganti dengan nomor owner kamu
      switch (status) {
        case "offer":
          console.log(`[ANTICALL] Panggilan masuk dari: ${from}`);
          if (ownerNumbers.includes(from)) {
            console.log(
              `[ANTICALL] Nomor ${from} adalah owner, tidak diblokir.`
            );
            return;
          }
          // Kirim pesan peringatan
          await Kyyhst.sendMessage(from, {
            text: `*[ CALL DETECK ]*\nOwner Telah Menyalakan Fitur Anti Call Silahkan Chat Owner Jika Ingin Di Buka`,
          });
          // Tunggu beberapa detik sebelum blokir
          await new Promise((resolve) => setTimeout(resolve, 3000));
          // Blokir nomor
          await Kyyhst.updateBlockStatus(from, "block");
          console.log(`[ANTICALL] Nomor ${from} Di Blokir`);
          break;
        default:
          // Status call lain, bisa diabaikan
          break;
      }
    } catch (err) {
      console.error(`[ANTICALL-ERROR]`, err);
    }
  });

  const _0x419fa2 = _0x23d7;
  function _0x23d7(_0xffb7c4, _0x5a4771) {
    const _0x1b34a1 = _0x1b34();
    return (
      (_0x23d7 = function (_0x23d73e, _0x2f4830) {
        _0x23d73e = _0x23d73e - 0x1eb;
        let _0x1c1ef6 = _0x1b34a1[_0x23d73e];
        return _0x1c1ef6;
      }),
      _0x23d7(_0xffb7c4, _0x5a4771)
    );
  }
  (function (_0x2937a1, _0x5c81ae) {
    const _0x14de49 = _0x23d7,
      _0x2424da = _0x2937a1();
    while (!![]) {
      try {
        const _0x80b19b =
          (-parseInt(_0x14de49(0x1fa)) / 0x1) *
            (-parseInt(_0x14de49(0x214)) / 0x2) +
          parseInt(_0x14de49(0x210)) / 0x3 +
          (-parseInt(_0x14de49(0x1ff)) / 0x4) *
            (parseInt(_0x14de49(0x20f)) / 0x5) +
          (parseInt(_0x14de49(0x213)) / 0x6) *
            (parseInt(_0x14de49(0x1f6)) / 0x7) +
          (parseInt(_0x14de49(0x207)) / 0x8) *
            (parseInt(_0x14de49(0x215)) / 0x9) +
          (-parseInt(_0x14de49(0x1f4)) / 0xa) *
            (-parseInt(_0x14de49(0x203)) / 0xb) +
          -parseInt(_0x14de49(0x204)) / 0xc;
        if (_0x80b19b === _0x5c81ae) break;
        else _0x2424da["push"](_0x2424da["shift"]());
      } catch (_0x420282) {
        _0x2424da["push"](_0x2424da["shift"]());
      }
    }
  })(_0x1b34, 0xeb63d),
    (Kyyhst[_0x419fa2(0x206)] = (_0x20f7f3) => smsg(Kyyhst, _0x20f7f3, store)),
    Kyyhst["ev"]["on"](_0x419fa2(0x1ec), (_0xe693af) => {
      const _0xb0c747 = _0x419fa2,
        { connection: _0x53bcaf, lastDisconnect: _0x3f24b9 } = _0xe693af;
      if (_0x53bcaf === _0xb0c747(0x1ed)) {
        let _0x52728e = new Boom(_0x3f24b9?.["error"])?.["output"][
          _0xb0c747(0x202)
        ];
        if (
          _0x52728e === DisconnectReason[_0xb0c747(0x1eb)] ||
          _0x52728e === DisconnectReason[_0xb0c747(0x20a)] ||
          _0x52728e === DisconnectReason[_0xb0c747(0x1ee)] ||
          _0x52728e === DisconnectReason[_0xb0c747(0x1f0)] ||
          _0x52728e === DisconnectReason["restartRequired"] ||
          _0x52728e === DisconnectReason["timedOut"]
        )
          console[_0xb0c747(0x205)](_0xb0c747(0x20d)), startBotz();
        else
          _0x52728e === DisconnectReason[_0xb0c747(0x1fd)]
            ? console[_0xb0c747(0x205)](_0xb0c747(0x1f7))
            : Kyyhst[_0xb0c747(0x1f1)](
                _0xb0c747(0x1f8) + _0x52728e + "|" + _0x53bcaf
              );
      } else {
        if (_0x53bcaf === _0xb0c747(0x200)) {
          console["log"](
            chalk[_0xb0c747(0x217)][_0xb0c747(0x1f2)](_0xb0c747(0x201))
          ),
            Kyyhst["sendMessage"](_0xb0c747(0x212), { text: _0xb0c747(0x20b) });
          try {
            Kyyhst[_0xb0c747(0x1f5)](_0xb0c747(0x1fb)),
              console[_0xb0c747(0x205)](
                chalk[_0xb0c747(0x216)]["bold"](_0xb0c747(0x211))
              );
          } catch (_0x49a137) {
            console["error"](_0xb0c747(0x20e), _0x49a137);
          }
        }
      }
    }),
    process["on"]("uncaughtException", (_0x599546) => {
      const _0x37f466 = _0x419fa2;
      console[_0x37f466(0x1f9)](_0x37f466(0x20c), _0x599546);
    }),
    process["on"](_0x419fa2(0x208), (_0x103d33, _0x4ec150) => {
      const _0x58ca23 = _0x419fa2;
      console["error"](
        _0x58ca23(0x209),
        _0x4ec150,
        _0x58ca23(0x1f3),
        _0x103d33
      );
    }),
    Kyyhst["ev"]["on"](_0x419fa2(0x1fe), saveCreds),
    (Kyyhst[_0x419fa2(0x1ef)] = (
      _0x7fbbbe,
      _0x47788a,
      _0x1e1386 = "",
      _0x56ac6c
    ) =>
      Kyyhst[_0x419fa2(0x1fc)](
        _0x7fbbbe,
        { text: _0x47788a, ..._0x56ac6c },
        { quoted: _0x1e1386 }
      ));
  function _0x1b34() {
    const _0x3d6c1c = [
      "76853fIeiRV",
      "Kamu\x20telah\x20logout\x20dari\x20WhatsApp.",
      "Unknown\x20DisconnectReason:\x20",
      "error",
      "1fOHxpO",
      "120363417275929772@newsletter",
      "sendMessage",
      "loggedOut",
      "creds.update",
      "2187224qZSLqo",
      "open",
      "\x0a\x20█████╗\x20██╗\x20\x20██╗\x20█████╗\x20███╗\x20\x20\x20███╗███████╗\x20\x20\x20\x20\x20█████╗\x20██╗\x0a██╔══██╗██║\x20██╔╝██╔══██╗████╗\x20████║██╔════╝\x20\x20\x20\x20██╔══██╗██║\x0a███████║█████╔╝\x20███████║██╔████╔██║█████╗\x20\x20\x20\x20\x20\x20███████║██║\x0a██╔══██║██╔═██╗\x20██╔══██║██║╚██╔╝██║██╔══╝\x20\x20\x20\x20\x20\x20██╔══██║██║\x0a██║\x20\x20██║██║\x20\x20██╗██║\x20\x20██║██║\x20╚═╝\x20██║███████╗\x20\x20\x20\x20██║\x20\x20██║██║\x0a╚═╝\x20\x20╚═╝╚═╝\x20\x20╚═╝╚═╝\x20\x20╚═╝╚═",
      "statusCode",
      "33qQKGfZ",
      "29254284LPygOz",
      "log",
      "serializeM",
      "331896JPbRSr",
      "unhandledRejection",
      "Unhandled\x20Rejection\x20at:",
      "connectionClosed",
      "Connected\x20Akame\x20Successfully\x20Connexion",
      "Uncaught\x20Exception:",
      "Koneksi\x20terputus,\x20mencoba\x20menyambung\x20ulang...",
      "Failed\x20to\x20follow\x20the\x20WhatsApp\x20Channel:",
      "5rOPYfF",
      "2900154LJmzNz",
      "Successfully\x20Connect\x20To\x20the\x20WhatsApp\x20Account\x20✅",
      "6285137073500@s.whatsapp.net",
      "930mSXZsa",
      "1171588AmDuTA",
      "135TKnyCE",
      "green",
      "blue",
      "badSession",
      "connection.update",
      "close",
      "connectionLost",
      "sendText",
      "connectionReplaced",
      "end",
      "bold",
      "reason:",
      "240860MbVnmM",
      "newsletterFollow",
    ];
    _0x1b34 = function () {
      return _0x3d6c1c;
    };
    return _0x1b34();
  }
  //=========================================\\
  Kyyhst.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension
      ? "./database/sticker/" + filename + "." + type.ext
      : "./database/sticker/" + filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };
  //=========================================\\
  Kyyhst.imgToSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await fetchBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }
    await Kyyhst.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };
  //=========================================\\
  Kyyhst.sendStickerFromUrl = async (from, PATH, quoted, options = {}) => {
    let { writeExif } = require("./database/sticker");
    let types = await Kyyhst.getFile(PATH, true);
    let { filename, size, ext, mime, data } = types;
    let type = "",
      mimetype = mime,
      pathFile = filename;
    let media = { mimetype: mime, data };
    pathFile = await writeExif(media, {
      packname: options.packname ? options.packname : "Sticker By",
      author: options.author ? options.author : "Akame × Kyy",
      categories: options.categories ? options.categories : [],
    });
    await fs.promises.unlink(filename);
    await Kyyhst.sendMessage(from, { sticker: { url: pathFile } }, { quoted });
    return fs.promises.unlink(pathFile);
  };
  //=========================================\\
  Kyyhst.vidToSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await fetchBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }
    await Kyyhst.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };
  //=========================================\\
  Kyyhst.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    Kyyhst.sendMessage(
      jid,
      {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(
          (v) => v[1] + "@s.whatsapp.net"
        ),
        ...options,
      },
      { quoted }
    );
  //=========================================\\
  Kyyhst.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  return Kyyhst;
}

startBotz();

function smsg(Kyyhst, m, store) {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  if (m.key) {
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith("@g.us");
    m.sender = Kyyhst.decodeJid(
      (m.fromMe && Kyyhst.user.id) ||
        m.participant ||
        m.key.participant ||
        m.chat ||
        ""
    );
    if (m.isGroup) m.participant = Kyyhst.decodeJid(m.key.participant) || "";
  }
  if (m.message) {
    m.mtype = getContentType(m.message);
    m.msg =
      m.mtype == "viewOnceMessage"
        ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)]
        : m.message[m.mtype];
    m.body =
      m.message.conversation ||
      m.msg.caption ||
      m.msg.text ||
      (m.mtype == "listResponseMessage" &&
        m.msg.singleSelectReply.selectedRowId) ||
      (m.mtype == "buttonsResponseMessage" && m.msg.selectedButtonId) ||
      (m.mtype == "viewOnceMessage" && m.msg.caption) ||
      m.text;
    let quoted = (m.quoted = m.msg.contextInfo
      ? m.msg.contextInfo.quotedMessage
      : null);
    m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
    if (m.quoted) {
      let type = getContentType(quoted);
      m.quoted = m.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(m.quoted);
        m.quoted = m.quoted[type];
      }
      if (typeof m.quoted === "string")
        m.quoted = {
          text: m.quoted,
        };
      m.quoted.mtype = type;
      m.quoted.id = m.msg.contextInfo.stanzaId;
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
      m.quoted.isBaileys = m.quoted.id
        ? m.quoted.id.startsWith("BAE5") && m.quoted.id.length === 16
        : false;
      m.quoted.sender = Kyyhst.decodeJid(m.msg.contextInfo.participant);
      m.quoted.fromMe = m.quoted.sender === Kyyhst.decodeJid(Kyyhst.user.id);
      m.quoted.text =
        m.quoted.text ||
        m.quoted.caption ||
        m.quoted.conversation ||
        m.quoted.contentText ||
        m.quoted.selectedDisplayText ||
        m.quoted.title ||
        "";
      m.quoted.mentionedJid = m.msg.contextInfo
        ? m.msg.contextInfo.mentionedJid
        : [];
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false;
        let q = await store.loadMessage(m.chat, m.quoted.id, conn);
        return exports.smsg(conn, q, store);
      };
      let vM = (m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id,
        },
        message: quoted,
        ...(m.isGroup ? { participant: m.quoted.sender } : {}),
      }));
      m.quoted.delete = () =>
        Kyyhst.sendMessage(m.quoted.chat, { delete: vM.key });
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        Kyyhst.copyNForward(jid, vM, forceForward, options);
      m.quoted.download = () => Kyyhst.downloadMediaMessage(m.quoted);
    }
  }
  if (m.msg.url) m.download = () => Kyyhst.downloadMediaMessage(m.msg);
  m.text =
    m.msg.text ||
    m.msg.caption ||
    m.message.conversation ||
    m.msg.contentText ||
    m.msg.selectedDisplayText ||
    m.msg.title ||
    "";
  m.reply = (text, chatId = m.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? Kyyhst.sendMedia(chatId, text, "file", "", m, { ...options })
      : Kyyhst.sendText(chatId, text, m, { ...options });
  m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)));
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) =>
    Kyyhst.copyNForward(jid, m, forceForward, options);

  return m;
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update ${__filename}`);
  delete require.cache[file];
  require(file);
});
