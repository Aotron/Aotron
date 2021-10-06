//-----ESSA SCRIPT FOI TOTALMENTE DESENVOLVIDA PELO ZULTRA/ZEUS. DOU OS CRÉDITOS DESSA BASE-----//
//-----PARA O MEU AMIGO AZTRO.-----//
//-----CASO QUEIRA O ACESSO  A ESSA SCRIPT, PROCURE PELO ZEUS, OU PESQUISE PELO CANAL DO ZULTRA E ENTRE EM CONTATO!-----//
//-----LEMBRANDO QUE É TOTALMENTE PROIBÍDO TIRAR O COMANDO DE "#CRÉDITOS" DO MENU E FAZER ALTERAÇÕES DENTRO DO ARQUIVO!-----//
//-----POR FAVOR NÃO TIRE AS INFORMAÇÕES DE COMPRA TAMBÉM ("COMPRARBOT") ISSO É MUITO IMPORTANTE-----//
//-----PRA EU TRAZER ATUALIZAÇÕES SEMPRE-----//
//-----CASO VOCÊ NÃO TENHA COMPRADO ESSA SCRIPT COM O ZEUS, VOCÊ ESTARÁ SENDO VÍTIMA DE FALSIFICAÇÃO (QUE TAMBÉM É CRIME!)-----//

//Zeus29cm wa.me//556993899391-----//
//Grupo Oficial do *Zeus:* https://bit.ly/3z5HwUu-----//
//Canal Oficial: https://youtube.com/c/ZULTRA_Vinizeus-----//

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const { WAMessageProto } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { exec } = require("child_process")
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Zeus29cm\n' 
            + 'ORG: ❲████████████▒▒❳ 90% ZeusWorld;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=556993899391:+55 69 9389-9391\n' 
            + 'END:VCARD' 
prefix = '#'
name = "Zeus"
blocked = []   
limitawal = 1
memberlimit = 1
cr = '_Legion of Gods 神 🇧🇱_'
hitt = []
const X = "❌"
const O = "⭕️"


/*------------------------------CONFIGURAÇÃO DE USUÁRIOS------------------------------*/

/******* premium**********/
const userpremium = ["556993899391@s.whatsapp.net","553199507778@s.whatsapp.net"] //ubah nomer kalian
/******* zeus gostoso**********/
const ownerNumber = ["556993899391@s.whatsapp.net","556993899391@s.whatsapp.net"] 
const vipNumber = ["556993899391@s.whatsapp.net", "556692300611@s.whatsapp.net",  "556892450570@s.whatsapp.net",  "559784031611@s.whatsapp.net",  "5516993865842@s.whatsapp.net"]


/*------------------------------CONFIGURAÇÃO DE API------------------------------*/
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa' // 
const VhtearKey = 'PUNYARAMLAN' // YANG DI YOUTUBE
const TobzKey = 'BotWeA' // JANGAN MAU ENAK DOANG
const XteamKey = 'RAMLANGANS' // APIKEY XTEAM BELI SENDIRI:V
const LolHuman = 'YOUR_APIKEY'
/*
/*********** Configurações de restrições de level********/
ahb = 3 
ahc = 5 


/*------------------------------CONFIGURAÇÕES LIB------------------------------*/
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { addMetadata } = require('./lib/exif.js')
const { recognize } = require('./lib/ocr')
const { webp2gifFile } = require("./lib/gif.js")
const { isFiltered, addFilter } = require('./lib/antispam')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/banned.js")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')


/*------------------------------DATABASE LEVEL------------------------------*/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))


/*------------------------------JSON INFORMAÇÕES DO USUÁRIO------------------------------*/
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json')) 
const ban = JSON.parse(fs.readFileSync('./database/datauser/banned.json'));
const _premiun = JSON.parse(fs.readFileSync('./database/user/premiun.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
       
       
/*********** ARQUIVOS DE MENUS ***********/
const { regras } = require('./menu/regras')
const { creditos } = require('./menu/creditos')
const { menus } = require('./menu/menus')
const { menu2 } = require('./menu/menu2')
const { comprarbot } = require('./menu/comprarbot')
const { menuadm } = require('./menu/menuadm')
const { menuvip } = require('./menu/menuvip')
const { menuzeus } = require('./menu/menuzeus')
const { menuprem } = require('./menu/menuprem')


				/*------------------------------ARQUIVOS DA DATABASE------------------------------*/
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const zeusinte = JSON.parse(fs.readFileSync('./database/bot/zeusinte.json'))
const antifake = JSON.parse(fs.readFileSync('./database/json/antifake.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const bancht = JSON.parse(fs.readFileSync('./database/json/banchat.json'))
banChats = true
const videonye = JSON.parse(fs.readFileSync('./add/video.json'))
const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))
const setiker = JSON.parse(fs.readFileSync('./add/stik.json'))


				/*------------------------------ARQUIVOS DO JODO DA VELHA------------------------------*/
const { crtt } = "Jogo da velha"
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const tictactoe = JSON.parse(fs.readFileSync('./jdv/ttt/tictactoe.json'));
const { ttthelp } = require('./jdv/ttt/TTTconfig/ttthelp');
const { tttme } = require('./jdv/ttt/TTTconfig/tttme');
var tttset = require('./jdv/ttt/TTTconfig/tttset.json');
var esp = require('./jdv/ttt/TTTconfig/tttframe.json');
const { validmove, setGame } = require("./database/tictactoe/index.js");
hit_today = [1000]


/*------------------------------SISTEMAS DE USUÁRIOS------------------------------*/
        const double = Math.floor(Math.random() * 2) + 1

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*------------------------------SISTEMA DE INICIALIZAÇÂO------------------------------*/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('Leia o QR code e se inscreva no','white'),color('CANAL','red'),color('DO','white'),color('ZULTRA','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		const mdata = await client.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePictur(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://uploaddeimagens.com.br/images/003/256/905/full/1621803831046.png?1621803982'
				}
				teks = `( ꈍᴗꈍ) Olá @${num.split('@')[0]} Seja Bem-Vindo(a) ao grupo 💕`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remo') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePictur(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `q`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

client.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        
        console.log(color('LIGAÇÃO DE ', 'red') + callerId)
        client.sendMessage(callerId, "Ligações = block", MessageType.text)
        setTimeout(async() => {
            await client.blockUser(callerId, "add")
        }, 4000)
    })

client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
	})
	client.on('close', async () => {
  if (client.state == 'close') {
  client.logger.error('Reconectando...')
    await client.loadAuthInfo('./client.json')
    await client.connect()
    global.timestamp.connect = new Date
  }
})
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            const apiKey = 'API-KEY' // apikey you can get it at https://mhankbarbar.moe
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
			const time2 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
			const timi2 = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu2 = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : ''            
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            chatss = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase() 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const argss = body.split(/ +/g)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /*------------------------------CONFIGURAÇÕES DE GRUPOS------------------------------*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)         
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isZeusinte = isGroup ? zeusinte.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBanchat = isGroup ? bancht.includes(from) : false
			const isOwner = ownerNumber.includes(sender) 
			const isVip = vipNumber.includes(sender)
			const isBan = cekBannedUser(sender, ban)
			const isPrem = userpremium.includes(sender)
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
            hitt.push(command)
			//const groupall = client.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			
			
	        /*------------------------------SISTEMA DE NÍVEL------------------------------*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, role, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          /*------------------------------SISTEMA DE CHECAGEM DE LIMITE------------------------------*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			/*------------------------------SISTEMA DE LIMITE------------------------------*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

      
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        } 
        /*------------------------------ANTI LINK------------------------------*/
            if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*B.A.N.I.D.O*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}
	
	if (messagesC.includes("chipsapsaas")){
			client.updatePresence(from, Presence.composing)
			reply("sim, paguei sua mãe pra te comer e vc nasceu")
	}
	
	//******************* 》banchat《 ********************\\
if (isBanchat){
if (!isOwner) return
if (chatss.toLowerCase().startsWith('unbanchat')){
if (!isBanchat) return reply('O bot foi banido desse grupo')
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/json/banchat.json', JSON.stringify(bancht))
reply('O bot não funcionará mais nesse grupo')
}
}
	
	
	/*------------------------------ANTI SPAM------------------------------*/
     if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff = {
                  text:  `Olá@${sender.split('@')[0]}. Aguarde 3 segundos antes de usar outro comando!`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff)}
        
        if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
                  text:  `Olá@${sender.split('@')[0]}. Aguarde 3 segundos antes de usar outro comando!`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff1)}
        
           //_USUÁRIO BANIDO
         /*   if (isBan && isCmd && !isOwner) {
                reply(ptbr.ban())
                return console.log(color('[BAN]', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
            }*/
	
	   /*------------------------------BARRA DE NÍVEL------------------------------*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 3000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*10))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			
			
			/*------------------------------CONFIGURAÇÃO DE RANK------------------------------*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'SEM RANK'
   	     if (levelRole <= 3) {
   	         role = 'GHOST'
   	     } else if (levelRole <= 5) {
   	         role = 'PRATA I'
   	     } else if (levelRole <= 7) {
   	         role = 'PRATA II'
   	     } else if (levelRole <= 8) {
   	         role = 'PLATINA'
   	     } else if (levelRole <= 9) {
   	         role = 'MINI ZEUS'
   	     } else if (levelRole <= 10) {
   	         role = 'ESMERALDA'
   	     } else if (levelRole <= 11) {
   	         role = 'ESMERALDA II'
   	     } else if (levelRole <= 12) {
   	         role = 'ESMERALDA III'
   	     } else if (levelRole <= 13) {
   	         role = 'SAFIRA'
   	     } else if (levelRole <= 14) {
   	         role = 'SAFIRA II'
   	     } else if (levelRole <= 14) {
   	         role = 'MEMBRO ATIVO'
   	     } else if (levelRole <= 15) {
   	         role = 'ATIVASSO I'
   	     } else if (levelRole <= 16) {
   	         role = 'ATIVASSO II'
   	     } else if (levelRole <= 17) {
   	         role = 'ATIVASSO III'
   	     } else if (levelRole <= 18) {
   	         role = 'RUBI'
   	     } else if (levelRole <= 19) {
   	         role = 'RUBI II'
   	     } else if (levelRole <= 20) {
   	         role = 'FILHO DO ZEUS'
   	     } else if (levelRole <= 21) {
   	         role = 'MESTRE'
   	     } else if (levelRole <= 22) {
   	         role = 'MESTRE II'
   	     } else if (levelRole <= 23) {
   	         role = 'MESTRE III'
   	     } else if (levelRole <= 24) {
   	         role = 'ATIVASSO '
   	     } else if (levelRole <= 25) {
   	         role = 'ATIVASSO II'
   	     } else if (levelRole <= 26) {
   	         role = 'CONQUISTADOR'
   	     } else if (levelRole <= 27) {
   	         role = 'PUTINHA'
   	     } else if (levelRole <= 28) {
   	         role = 'PUTINHA II'
   	     } else if (levelRole <= 29) {
   	         role = 'GRANDE PUTINHA'
   	     } else if (levelRole <= 30) {
   	         role = 'SUPREMO'
   	     }
   

             /*---CORES---*/
			colors = ['red','white','black','blue','yellow','green']
			
			/*------------------------------DETCTOR DE MIDIA------------------------------*/
			const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
            const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			
			
			/*------------------------------DETECTOR DE MENSAGENS NO PRIVADO------------------------------*/
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			/*------------------------------DETECTOR DE MENSAGENS EM GRUPOS------------------------------*/
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			
			//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "??" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
			
			
			
			
			
			/*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "s" ||
               budy.toLowerCase() == "sim" ||
               budy.toLowerCase() == "si"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 Jogo dá Velha 🎳*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    client.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    client.sendMessage(
                         from,
                         `Esta opção é apenas para @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "tidak"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    client.sendMessage(
                         from,
                         `Infelizmente o desafio @${boardnow.X} foi rejeitado ❌😕`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    client.sendMessage(
                         from,
                         `Esta opção é apenas para @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Parece que seu oponente não aceitou / rejeitou o desafio.`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮 Jogo dá Velha 🎳*
          
Jogo termina empatado 😐
`;
                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮 Jogo dá Velha 🎳*
          
Ganho por @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
               client.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮 Jogo dá Velha 🎳*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Vez : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               client.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }
			
			
			switch(command) {
				
				
				            /*------------------------------INICIO DOS COMANDOS------------------------------*/
                case  'jogov':
                if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮 Jogo dá Velha 🎳*
     
     Há uma sessão de jogo neste grupo\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         client.sendMessage(from, chatMove, MessageType.text, {
                              quoted: mek,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `Marca quem quer ser seu oponente!\n\nUsar : *.jogov <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*?? Comece o jogo dá Velha 🎳*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} desafiar você a se tornar um oponente do jogo
     
     _[ ${argss[1]} ] Digite S/N para aceitar ou rejeitar o jogo_ 
     `;
                    client.sendMessage(from, strChat, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
               case  'delttc':
                    if (!isOwner && !isGroupAdmins) return reply('Esse comando só pode ser usado pelo dono do bot ou pelo o administrador do grupo')
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Sessão excluída com sucesso neste grupo!`);
                    } else {
                         reply(`Nenhuma sessão em andamento, digite ${prefix}jogov`);
                    }
                    break
				
				case 'mutual6':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break 
            case 'menus66': 
let pi = client.prepareMessageFromContent(from, {
"listMessage": {
"title": "Seja bem-vindo",
"description": '			Zeus-Beta',
"buttonText": "Zeus-Beta",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": "Lista de menus",
"rows": [
{
"title": 'menus',
"rowId": `${prefix}menus`
},
{
"title": "menu",
"rowId": `${prefix}menu`
},
{
"title": "menu2",
"rowId": `${prefix}menu2`
},
{
"title": "menuzeus",
"rowId": `${prefix}menuzeus`
},
{
"title": "menuadm",
"rowId": `${prefix}menuadm`
},
{
"title": "menuprem",
"rowId": `${prefix}menuprem`
}
]
}
]
}}, {})
 client.relayWAMessage(pi, {waitForAck: true})
                break
            //INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttthelp':
if (!isGroup) return reply(ind.groupo())
	client.sendMessage(from, ttthelp(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jogo da velha", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
			break
case 'ttt':			
if (!isEventon) return reply(`Olá ${pushname} pessa para o dono do bot ativar o evento!`)
if (!isGroup) { return reply(ind.groupo())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)

} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, tescuk, cr)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Bom jogo`, text) 

}
break	
case 'tttme':
if (!isGroup) return reply(ind.groupo())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break	
case 'tttrank':
if (!isGroup) return reply(ind.groupo())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break	
case 'coord' :
tttset.playertest = sender
if (!isGroup) { return reply(ind.groupo())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 30) + 30
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 40) + 40
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 250) + 250
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 Parabéns ${pushname} você ganhou 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 Parabéns ${pushname} você ganhou 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 250) + 250)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 50) + 50)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
client.sendMessage(from, `EMPATE ⚖\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `EMPATE ⚖`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen
            
            //BANS TEMPORARIOS
            
            case 'tempban10s':
						if (!isGroup) return reply(ind.groupo())
											if (!isGroupAdmins) return reply(ind.admin())
											if (!isBotGroupAdmins) return reply(ind.badmin())
						if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
						mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						if (mentioned.length > 1) {
							teks = 'ban temporario\n'
							for (let _ of mentioned) {
								teks += `@${_.split('@')[0]}\n`
							}
							mentions(teks, mentioned, true)
							client.groupRemove(from, mentioned)
						} else {
							mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 10 segundos adiciono ele de volta`, mentioned, true)
							client.groupRemove(from, mentioned)
							await sleep(10000)
							client.groupAdd(from, mentioned)
							reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
						}
						break
						case 'tempban20s':
							if (!isGroup) return reply(ind.groupo())
											if (!isGroupAdmins) return reply(ind.admin())
											if (!isBotGroupAdmins) return reply(ind.badmin())
							if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
							mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
							if (mentioned.length > 1) {
								teks = 'ban temporario\n'
								for (let _ of mentioned) {
									teks += `@${_.split('@')[0]}\n`
								}
								mentions(teks, mentioned, true)
								client.groupRemove(from, mentioned)
							} else {
								mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 20 segundos adiciono ele de volta`, mentioned, true)
								client.groupRemove(from, mentioned)
								await sleep(20000)
								client.groupAdd(from, mentioned)
								reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
							}
							break
							case 'tempban30s':
								if (!isGroup) return reply(ind.groupo())
											if (!isGroupAdmins) return reply(ind.admin())
											if (!isBotGroupAdmins) return reply(ind.badmin())
								if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
								mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
								if (mentioned.length > 1) {
									teks = 'ban temporario\n'
									for (let _ of mentioned) {
										teks += `@${_.split('@')[0]}\n`
									}
									mentions(teks, mentioned, true)
									client.groupRemove(from, mentioned)
								} else {
									mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 30 segundos adiciono ele de volta`, mentioned, true)
									client.groupRemove(from, mentioned)
									await sleep(30000)
									client.groupAdd(from, mentioned)
									reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
								}
								break
								case 'tempban40s':
									if (!isGroup) return reply(ind.groupo())
											if (!isGroupAdmins) return reply(ind.admin())
											if (!isBotGroupAdmins) return reply(ind.badmin())
									if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									if (mentioned.length > 1) {
										teks = 'ban temporario\n'
										for (let _ of mentioned) {
											teks += `@${_.split('@')[0]}\n`
										}
										mentions(teks, mentioned, true)
										client.groupRemove(from, mentioned)
									} else {
										mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 40 segundos adiciono ele de volta`, mentioned, true)
										client.groupRemove(from, mentioned)
										await sleep(40000)
										client.groupAdd(from, mentioned)
										reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
									}
									break
									case 'tempban1m':
										if (!isGroup) return reply(ind.groupo())
											if (!isGroupAdmins) return reply(ind.admin())
											if (!isBotGroupAdmins) return reply(ind.badmin())
										if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
										mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
										if (mentioned.length > 1) {
											teks = 'ban temporario\n'
											for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
											}
											mentions(teks, mentioned, true)
											client.groupRemove(from, mentioned)
										} else {
											mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 1 minuto adiciono ele de volta`, mentioned, true)
											client.groupRemove(from, mentioned)
											await sleep(60000)
											client.groupAdd(from, mentioned)
											reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
										}
										break
										case 'tempban2m':
											if (!isGroup) return reply(ind.groupo())
											if (!isGroupAdmins) return reply(ind.admin())
											if (!isBotGroupAdmins) return reply(ind.badmin())
											if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
											mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
											if (mentioned.length > 1) {
												teks = 'ban temporario\n'
												for (let _ of mentioned) {
													teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												client.groupRemove(from, mentioned)
											} else {
												mentions(`Dei ban temporario no: @${mentioned[0].split('@')[0]} em 2 minutos adiciono ele de volta`, mentioned, true)
												client.groupRemove(from, mentioned)
												await sleep(120000)
												client.groupAdd(from, mentioned)
												reply('Dessa vez foi um ban temporario, q sorte hein! evite fazer merda.')
											}
											break
            
            case 'casal':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = 'O amor vale apena, só basta querer que aconteça💕 Seu par perfeito é o(a)'
						for(i = 0; i < 1; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += ` @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
						case 'putinha':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = 'A mais putinha do grupo é o(a)'
						for(i = 0; i < 1; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += ` @${groupMembers[r].jid.split('@')[0]} 😈\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
						///Comandos de Rank
            case 'rankgay':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '🏳️‍🌈 𝑹𝒂𝒏𝒌 𝒅𝒐𝒔 𝒎𝒂𝒊𝒔 𝒗𝒊𝒂𝒅𝒊𝒏𝒉𝒐𝒔 🏳️‍🌈\n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `🌈✗ @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
            case 'rankgostoso':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '😋 𝑆𝑜 𝑜𝑠 𝑚𝑎𝑖𝑠 𝑔𝑜𝑠𝑡𝑜𝑠𝑜𝑠 𝑒𝑠𝑡𝑎𝑜 𝑎𝑞𝑢𝑖 😋\n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `🤤 @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
						case 'rankgado':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '🐂 𝐸𝑠𝑠𝑒𝑠 𝑎𝑞𝑢𝑖 𝑠𝑎𝑜 𝑜𝑠 𝑚𝑎𝑖𝑠 𝑔𝑎𝑑𝑜𝑠 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜 🐂\n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `🤠 @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
case 'matar':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				    reply(ind.matar())
					rate = body.slice(1)
					const ma =['Você é um psicopata!! Matou o(a) jovem a facadas 🔪', 'Você é um assassino silencioso, você matou esse(a) jovem asfixiado', 'Assassino barulhento, entrou na casa dele e descarregou um pente todo...🔫📢']
					const am = ma[Math.floor(Math.random() * ma.length)] 
					tesk = am
					client.sendMessage(from, tesk, text, { quoted: mek})
					break
				case 'transfer6':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`Você não tem dinheiro suficiente para fazer a transferência`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6993899391@s.whatsapp.net', fee)
                reply(`*Transferencia bem sucedida*\n\nComissao: +${sender.split("@")[0]}\nBeneficiario : +${tujuan}\nValor recebido : ${jumblah}\nTaxa: ${fee}`)
                break
				case 'buylimit6':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				case 'totaluser':
					if (!isOwner) return reply(ind.ownerb())
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOS* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *Zeus* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
					case 'desligar':
					if (!isOwner) return reply(ind.ownerb())
					client.getSFWLoli(async (err, res) => {
						if (err) return reply('*ERRO AO DESLIGAR*')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break
			case 'happymod6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender) 
			break

                                case 'antilinkgrupo':

          if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Mas já ativaram isso? 🤔')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link de grupos está ativo, Caso você enviar um link de alguem grupo será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('Anti-link de grupos foi desativado!')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
                case 'nangis6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob6':
				if (!isRegistered) return reply(ind.noregis())
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'stickwm':
					if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
		    var Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()
            var stickerWm = (media, packname, author) => {
            ran = getRandom('.webp')
            exif.create(packname, author, from.split("@")[0])
            exec(`webpmux -set exif ./temp/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
            if (err) return client.sendMessage(from, String(err), text, { quoted: mek})
            client.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek})
        })
    }
    if ((isMedia && !isQuotedVideo || isQuotedImage) && args.length >= 0) {
               var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var mediaFinalys = await client.downloadAndSaveMediaMessage(mediaEncrypt, 'dlstikerwm')
               var kls = body.slice(5)
			   var ter = kls.split("|")[0];
			   var teri = kls.split("|")[1];
               var packageName = `${ter}`
               var packageAuthor = `${teri}`
               var exifName = 'stikerwm.exif',
                   webpName = `${from.split(/@/)[0]}.webp`
               try {
                   exec(`cwebp -q 50 dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return reply(from, String(stderr))
                           stickerWm(webpName, packageName, packageAuthor)
                   })
               } catch (e) {
                   throw e
               }
           }
                break
                      case 'qrcode6':
				if (!isRegistered) return reply(ind.noregis())
				
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '𝐌𝐚𝐬𝐮??𝐚𝐧 𝐓𝐞𝐤𝐬/𝐔𝐫𝐥 𝐘𝐚𝐧𝐠 𝐈𝐧𝐠𝐢𝐧 𝐃𝐢 𝐁𝐮𝐚𝐭 𝐐𝐑', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					
					break
                case 'ninjalogo6':
				if (!isRegistered) return reply(ind.noregis())
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(ind.wait())
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})

                      break
                case 'naruto':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
                case 'minato':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
				case 'boruto':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
				case 'hinata':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
				case 'sasuke':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'rize':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'itori':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'akira':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'kurumi':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'miku':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
				case 'prnhb':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply(ind.wait())
			    buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${no}&msg=${bg}`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Toma ai lindor'})
					break
                case 'nekonime6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'kpop6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        randomkpop = `*${anu.desc}`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
				case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis()) 
				if (!isGroup) return reply(ind.groupo())
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp4`, quoted: mek}) 
					break
                         case 'mp3':   
              if (!isGroup) return reply(ind.groupo())
	          if (!isRegistered) return reply(ind.noregis())
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=zultrazeus`)
               if (anu.error) return reply(anu.error) 
               client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
                 infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
                buffer = await getBuffer(anu.result.thumbnail) 
                lagu = await getBuffer(anu.result.url_audio) 
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp4':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'porn':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
					data = await fetchJson(`https://api.lolhuman.xyz/api/pornhub?apikey=e5d9be2f49006382730e8e8d&url=${args[0]}`, {method: 'get'}) 
					hasil = `${data.title}`
					reply(hasil)
					break
				case 'limit6':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
					case 'listonline': 
        		if (!isGroupAdmins) return reply(ind.admin())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Membros onlines:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
                case 'beritahoax6':
                     if (!isRegistered) return reply(ind.noregis())
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'ppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie uma imagem com a legenda *${prefix}ppbot*`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obg pelo novo perfil 😗')
					break 
					case 'brainly6':
					if (!isRegistered) return reply(ind.noregis())
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ JAWABAN:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
 case 'menus':
 if (!isRegistered) return reply(ind.noregis())
const crowley = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Abrir menu",
description: `			Zeus-Beta`,
listType: 1,
"sections": [{//início
"title": "Menus",
"rows": [{
"title": "menus",
"rowId": `${prefix}menus`},
{ "title": "menu",
"rowId": `${prefix}menu` },
{ "title": "menu2",
"rowId": `${prefix}menu2` },	 
{ "title": "menuzeus",
"rowId": `${prefix}menuzeus` },
{ "title": "menuadm",
"rowId": `${prefix}menuadm` },
{ "title": "menuprem",
"rowId": `${prefix}menuprem` },
]},
{ "title": "Contato",
"rows": [{
"title": "https://wa.me/556993899391",
"rowId": "https://wa.me/556993899391" },
{ "title": "https://www.instagram.com/viny_zz/",
"rowId": "https://www.instagram.com/viny_zz/" }] },
										
{ "title": "Informações",
"rows": [{
"title": "Criador: Zeus/Zultra",
"rowId": ""
}]
									  
}]//Terminou
})
})
let preparedCrowley = client.prepareMessageFromContent(from, crowley, {});
client.relayWAMessage(preparedCrowley, {waitForAck: true})//sempre que for fazer um novo botão mude o preparedCrowley/crowley ex: preparedMacaco/macaco
break
case 'play':


					teks = body.slice(7)
					anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
					const objs = []
					for(i=0;i< anu.resultados.length; ++i) {
						let data = {
							"rowId": `${prefix}mp3 `+ anu.resultados[i].title,
							"title": `${prefix}mp3`,
							description: anu.resultados[i].title
						}
						objs.push(data)
					}

					const payload = {
						listMessage: {
							title: " Músicas encotradas ✓",
							buttonText: "Mostra lista de músicas",
							description: `Nome: ${teks}`,
							listType: 1,
							sections: [
								{
									title: "Músicas relacionadas",
									rows: objs
								}
							]
						}
					}
					let preparedPayload = await client.prepareMessageFromContent(from, payload, {});
					await client.relayWAMessage(preparedPayload, {waitForAck: true})
					break
				case 'bcgc6':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					var nomor = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSÃO 」*\n\nSla : ${groupName}\nSLA2 : wa.me/${(sender.split('@')[0])}\nSla3 : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 TRANSMISSÃO 」*\n\nSla : ${groupName}\nSla2 : wa.me/${(sender.split('@')[0])}\nSla3 : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					} 
					break
					case 'ttp':
					if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('yang mau dijadiin text sticker apaan, titit kah?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					}) 
					break
				case 'cadr35':
				case 'tulis1':
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis1 Ramlan baik hati`)
				ramlan = body.slice(8)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ramlan}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				break
				case 'cadr25':
				case 'tulis2':
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 Ramlan baik hati`)
				laysha = body.slice(8)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				break
				case  'testix':
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		reply('fazendo')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `dexz bot`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, mek, from)
					break
				case 'cadr':
				case 'tulis':
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Cadê o texto mamaco?')
				if (!isRegistered) return reply(ind.noregis())
					teks = body.slice(7)
					reply('*⏰AGUARDE UM MOMENTO!*')
					buffer = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					
					break 
					case 'pinterest':
					if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply(ind.noregis()) 
					if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
				
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*Aqui está;)*`})
					break
										case 'hentai6': 
						try { 
						  if (!isGroup) return reply(ind.groupo())
						  if (!isRegistered) return reply(ind.noregis()) 
						  if (!isNsfw) return reply(ind.nsfwoff())
						  if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
							res = await fetchJson(`http://api.lolhuman.xyz/api/random2/${command}?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'eita 😳'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('Ocorreu um erro, tente novamente mais tarde!')
						}
					break
                                case 'loli':
                                        gatauda = body.slice(6)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isRegistered) return reply(ind.noregis())
                                        if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
					case 'resepmasakan6':
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
                   case 'igstalk6':
                   if (!isRegistered) return reply(ind.noregis())
                   
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    
					break 
                    case 'banall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setmarc':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`Marcaçao altarada para: ${cr}`)
					await limitAdd(sender)
					break 
					case 'pisc':
                     if (!isGroup) return reply(ind.groupo())
                     if (!isRegistered) return reply(ind.noregis())
			     	if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}stc atari*`)
                    url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		    		attp2 = await getBuffer(url)
			    	client.sendMessage(from, attp2, sticker, {quoted: mek})
			     	break
					case 'grouplist6':
					if (!isRegistered) return reply(ind.noregis())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group XPTN BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				case 'rg': 
				  if (isGroup) return  reply( '*Para está se registrando ou verificar se está registrado, use o meu privado!*')
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Pq seu nick é tão grande, isso seria um nick ou um trem? 🚆`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Sua idade não pode ser mais nova que 10 e nem mais velha que 40`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'xp6':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.xpdia())
                      if (!isEventon) return reply(`Olá ${pushname} pessa para o dono do bot ativar o evento!`)
                      else{
                      const mining = Math.ceil(Math.random() * 5000)
                      addLevelingXp(sender, mining)
                      reply(`Parabéns ${pushname}, você ganhou *${mining}Xp* 🥳`)
                      }
                    await limitAdd(sender)
					break  
				case 'bisakah6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'shitpost':
					data = fs.readFileSync('./outros/shitpost.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buffer = await getBuffer(randKey.result)
				client.sendMessage(from, buffer, image, {caption: 'chitpost', quoted: mek})
                 break
                 case 'hentai':
                   if (!isGroup) return reply(ind.groupo())
				   if (!isRegistered) return reply(ind.noregis()) 
				   if (!isNsfw) return reply(ind.nsfwoff())
					data = fs.readFileSync('./outros/hentai.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buffer = await getBuffer(randKey.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
                 break
                 case "shit":
            fs.readdir('./outos/shit', async (err, files) => {
            let imagens = files.filter((f) => f.split(".").pop() == "mp4");
            let imagem = imagens[Math.floor(Math.random() * imagens.length)];
            dua = fs.readFileSync(`./outros/shit/${imagem}`);
            client.sendMessage(from, dua, video, {caption: 'chitpost', quoted: mek})
          });
        break
				case 'kapankah6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah6':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'caracoroa':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				
					rate = body.slice(1)
					const ra =['Cara 👨🏽‍🦲 ✨', 'Coroa 👴🏽 ✨' ]
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, '*Resultado:* '+ te+``, text, { quoted: mek })
					await limitAdd(sender) 
					
					break
				case 'ping':
				if (!isRegistered) return reply(ind.noregis()) 
					rate = body.slice(1)
					const re =['19', '25', '28']
					const ta = re[Math.floor(Math.random() * re.length)] 
					buffer = await getBuffer(`https://i.ibb.co/1rFpLGc/1164b039-354e-4b02-9a2c-e0c02eb208f5.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'*Ping:* _' + ta+`ms_\n*Dispositivo:* _Nokia Tijolão_\n*Rede:* _Wi-fi_\n*Status:* _Carregando_`})
					break
					
				//cases simples by Zeus/Zultra
					case 'testi6':
				if (!isRegistered) return reply(ind.noregis())
				    await reply('oi')
					break
						//maquina gay//			
				case 'gay':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())  
					rate = body.slice(1)
					const ab =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%']
					const be = ab[Math.floor(Math.random() * ab.length)] 
					buffer = await getBuffer(`https://i.ibb.co/FhGKxX4/IMG-20210209-WA0172.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳‍🌈 | Máquina gay*\n_${pushname} você é `+be +` gay._`}) 
					
					break
				case 'resp':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
					rate = body.slice(1)
					const ge =['Não', 'Sim', 'Provavelmente', 'Talvez', 'Minhas fontes dizem que sim', 'Provavelmente não', 'Provavelmente sim', 'Minha resposta é sim', 'Minha resposta é não', 'Quem sabe', 'Também queria saber', 'Não sei']
					const ha = ge[Math.floor(Math.random() * ge.length)] 
					tesk = ha
					client.sendMessage(from, tesk, text, { quoted: mek})
					break 
					case 'banchat':
if (!isOwner) return reply(ind.ownerg())
if (!isGroup) return reply(ind.groupo())
if (isBanchat) return reply('O bot está mutado')
bancht.push(from)
fs.writeFileSync('./database/json/banchat.json', JSON.stringify(bancht))
reply('O bot não funcionará mais nesse grupo')
break

      //menus do bot

               case 'help6': 
				case 'menu':
				addFilter(from)
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 1000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				     var groups = client.chats.array.filter(v => v.jid.endsWith('g.us'))
				    var privat = client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					const totalChat = await client.chats.all()
					await costum(ind.menu(pushname, prefix, privat, groups, totalChat, time, time2 , getLevelingLevel, getLevelingXp, sender, role, reqXp, _registered, uangku), text, tescuk, cr)
					break
				case 'menu6':
client.sendMessage(from, ind.menu(pushname, prefix, time, time2), text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Legion of Gods 神 🇧🇱", 'jpegThumbnail': fs.readFileSync('kk/botlogo.webp')}}}})					
break
			     case 'menuadm':
			    if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
		await costum(menuadm(prefix, sender, role), text, tescuk, cr)
                break
                 case 'menuprem':
                if (!isPrem) return reply('Apenas Premiuns podem usar esse comando')
			    if (!isGroup) return reply(ind.groupo())
		await costum(menuprem(prefix, sender, role), text, tescuk, cr)
                break
				 case 'menuzeus':
				if (!isOwner) return reply(ind.ownerg())
		await costum(menuzeus(prefix, sender, role), text, tescuk, cr)
                break
				case 'menuvip':
				if (!isVip) return reply(ind.vip())
			    if (!isGroup) return reply(ind.groupo())
		await costum(menuvip(prefix, sender, role), text, tescuk, cr)
                break
                case 'regras':
                if (!isGroup) return reply(ind.groupo())
		await costum(regras(prefix, sender, role), text, tescuk, cr)
                break
                case 'creditos':
                if (!isGroup) return reply(ind.groupo())
		await costum(creditos(prefix, sender, role), text, tescuk, cr)
                break
                case 'menus6':
		await costum(menus(prefix, sender, role), text, tescuk, cr)
                break
                case 'menu2':
		await costum(menu2(prefix, sender, role), text, tescuk, cr)
                break
                case 'comprarbot':
		await costum(comprarbot(pushname, prefix, sender, role), text, tescuk, cr)
                break
				case 'donasi6':
				case 'donate6':
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
				case 'nivel':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100 
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nick* : ${pushname}\n┣⊱ *Experiência:*  ${userXp}\n┣⊱ *Nivel:* ${userLevel}\n┣⊱ *Patente*: ${role}\n┣⊱ *Link:* wa.me/${sender.split("@")[0]}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break
				case 'perfil6':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                    try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                const userLevel2 = getLevelingLevel(sender)
                const userXp2 = getLevelingXp(sender)
                if (userLevel2 === undefined && userXp2 === undefined) return reply(ind.lvlnul())
                const requiredXp2 = 3000 * (Math.pow(2, userLevel2) - 1)
                profile = `╭─「 *_Seu perfil_* 」\n┣⊱ *Nome:* ${pushname}\n┣⊱ *Registrado:* √\n┣⊱ *Experiência:*  ${userXp2}/${requiredXp2}\n┣⊱ *Nivel:* ${userLevel2}\n┣⊱ *Patente*: ${role}\n┣⊱ *Link:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buffer = await getBuffer(profil)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile}, text, tescuk, cr)
				break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `_Info: Zeus. Apenas um simples bot para o whatsapp, focado em diversão e moderação de grupos! Quer me add no seu grupo? Converse com #criadorbot ??_`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break 
				case 'blocklist6': 
					teks = '𝗕𝗟𝗢???? 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, {quoted: mek}, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'marcar':
                if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
					case 'hentai7': 
			if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
				if (!isRegistered) return reply(ind.noregis())
				reply(ind.wait())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=BotWeA`, {method: 'get'})
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'spamcall':
			if (!isRegistered) return reply(ind.noregis())
			if (!isGroup) return reply(ind.groupo())
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'spamgmail':
			if (!isRegistered) return reply(ind.noregis())
			if (!isGroup) return reply(ind.groupo())
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			client.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
                case 'fraselogo':
                if (!isRegistered) return reply(ind.noregis())
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Use: \n${prefix}fraselogo texto|texto2\n\nExemplo :\n${prefix}fraselogo zeus|teste`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Prontinhuuu', quoted: mek})
					await limitAdd(sender)
					break
                case 'ssweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('Coloque uma url ✌️🙄')
					teks = body.slice(7)
					reply(ind.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
                case 'cachorrinho':
                if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ytmp46':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break

        //Atualização
                case 'belle6':
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7ot6RZPnXSJFFKVjPoeXHjTYyi6uk5W_mA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '👀️'})
                   case 'clima':
               if (!isGroup) return reply(ind.groupo())
               if (!isRegistered) return reply(ind.noregis())
				client.updatePresence(from, Presence.composing) 
       		if (args.length == 0) return reply('Insira o nome da sua cidade.')
            try {
				const clima = await axios.get(`https://pt.wttr.in/${body.slice(7)}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
				const buffer = await getBuffer(`https://wttr.in/${body.slice(7)}.png`)
				let teks = `*「C L I M A」*
╴
${clima.data}
╴
Legion of Gods 神 🇧🇱`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
            } catch {
                reply('Estranho...\nCertifique-se de não estar usando acentos ok?')
            }
            break
		        case 'ftkpop':
            if (!isRegistered) return reply(ind.noregis())
            if (!isGroup) return reply(ind.groupo())
                   kpp = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                   kpp1 = await getBuffer(kpp.result)
                   client.sendMessage(from, kpp1, image, {quoted: mek, caption: 'Ebaaaa kpop:)'})
                   await limitAdd(sender)
					break
				case 'semoji':
					if (args.length < 1) return reply('Emoji?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=${teks}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break 
				case 'topanime': 	
				client.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/topanime?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Studio* : ${i.studio}\n*Rank* : ${i.rank}\n*Peak* : ${i.stats.peak}\n*Previously* : ${i.stats.previously}\n*Week On Top* : ${i.stats.weeksOnTop}\n*Status* : ${i.stats.status}\n*Stat* : ${i.stats.stat}\n=================\n`
				}
				reply(teks)
				break
				case 'ocr6': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
				case 'figurinha6':
				    if (!isGroup) return reply(ind.groupo())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Envie uma imagem/gif/video não mt pesada, cm a legenda #figu`)
					}
					break
					case 'sticker':
					case 'stiker':
					case 'figu':
					case 'figug':
					case 'f':
					case 's':
					addFilter(from)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(ind.errofig())
                            })
                            .on('end', function() {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata('Zeus-Bot', 'Zultra')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ind.errofig())
                                    client.sendMessage(from, fs.readFileSync(ran), sticker, {
                                        quoted: mek
                                    })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        reply(ind.wait())
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(ind.errofig())
                            })
                            .on('end', function() {
                                console.log('Finish')
                                buffer = fs.readFileSync(ran)
                                exec(`webpmux -set exif ${addMetadata('Zeus-Bot', 'Zultra')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ind.errofig())
                                    client.sendMessage(from, buffer, sticker, {quoted: mek})
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                    }
                    break
				case 'voz':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
		
				if (args.length < 1) return client.sendMessage(from, '', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 130
					? reply('Para reduzir spam o máximo de letras permitidas são 130!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefixo alterado para:* ${prefix}`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				try {
				if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return client.sendMessage(from, 'Qual o nome do usuário/id?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Nome do usuário* : ${user.uniqueId}\n*Nome* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Corações* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nome de usuário/id provavelmente inválido!')
					}
					break
                 case 'convite':
				    if (!isGroup) return reply(ind.groupo()) 
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `_Aqui está o link do grupo 😛✌️_\n*Link:* https://chat.whatsapp.com/${linkgc}`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender) 
			        
			        break	
              case 'delete':
					    case 'del': 
					      if (!isOwner) return reply(ind.ownerb())
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'marcar2': 
				  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${body.slice(8)}\n\n`
					for (let mem of groupMembers) {
						teks += `¡ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break 
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'buc':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
		            if (args.length < 1) return reply ('Vou sair aqui ok? Pfv tentem esquecer isso...era eu? Era mas pfv não espalhem eu só queria uma figurinha pra zoar com pessoas ÍNTIMAS minhas não era pra ter esse alvoroço todo....(não aql roula n é minha kk.. é de um amigo meu pfv não espalhem tmb) nunca pedia nada pra ngm daqui então pfv não espalhem e esquecem isso pfv...')
		            break
			       case 'block7':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `Desbloqueado com sucesso ${body.slice(9)}@c.us`, text)
					break
				case 'exit': 
				if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(groupId))
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}`})
						}
						reply('Transmissão feita!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ᴛʀᴀɴsᴍɪssᴀ̃ᴏ 」*\n\n${body.slice(4)}`)
						}
						reply('Transmissão feita!')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('🤝')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isVip && !isGroupAdmins) return reply(ind.vip())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você quer add?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Número privado, não foi possível add!')
					}
					break
					case 'gp':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'criadorbot':
            case '=r':
            case '[':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessae(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMenssage(from, '🤝', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '🤝', text, {quoted: mek})
					break
           case 'demitir':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #demitir @tagadministrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*?? :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} seus dias de glória acabaram 😭😭👌`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break 
			case 'bug':
                case 'reportar':
                case 'report':
                     const pesan = body.slice(5)
                      if (pesan.length > 1000) return client.sendMessage(from, 'Você excedeu o número máximo de letras(1000). Por favor, resuma o seu report.', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[BUG REPORTADO]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMOTIVO : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('556993899391@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Seu bug foi reportado para o Zultra, agradecemos por ter entrado em contato com o suporte😉')
                    break
					case 'cadr23':
				
					if (args.length < 1) return reply(ind.wrongf)
					var gold51 = body.slice(7)
                                        var gold291 = gold51.split("|")[0];
					reply(ind.wait)
					nullis = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${gold291}&apikey=apivinz`)
					client.sendMessage(from, nullis, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'promover':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #promover @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Parabéns🥳 agora você é um admin do grupo! (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} parabéns pela promoção 🥳🥳`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
					case 'antifake':
					try {
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
					 case 'remover':
					if (!isGroup) return reply(ind.groupo())
					if (!isVip) return reply(ind.vip())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #remover @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(tesk, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions('👋', mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
			     	case 'ban6':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #ban @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(tesk, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions('👋', mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break 
					case 'ban':    
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
break
case 'sn':
                      paperr = body.slice(3)
        var buttons = [{ buttonId: 'Teste', buttonText: { displayText: 'sim' }, type: 1 },
 { buttonId: 'teste3', buttonText: { displayText: 'não' }, type: 1 },
 { buttonId: 'teste2', buttonText: { displayText: 'sla' }, type: 1 }]
 
        var buttonsMessage = {
 contentText: `${paperr}`, 
footerText: 'clique para votar',
 buttons: buttons, headerType: 1 }
        var sendMsg = await client.prepareMessageFromContent(from, { buttonsMessage }, {})
        client.relayWAMessage(sendMsg, { waitForAck: true })
        break
               //adicionar midia no bot
case 'listfigu': 
				    if (!isRegistered) return reply(ind.noregis())
				    if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addfigurin':
				    if (!isPrem) return reply(mess.only.premium)
				    if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Qual o nome da figurinha?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./add/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sucesso ao adicionar na lista de figurinhas\nUse ${prefix}listfigu para ver`, MessageType.text, { quoted: mek })
					break
               case 'mandarfigu':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(12)
					result = fs.readFileSync(`./add/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break	
					case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
				if (!isQuotedVideo) return reply('Marque uma foto e digite o nome dela!')
					svst = body.slice(10)
					if (!svst) return reply('Qual o nome do vídeo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./add/video/${svst}.mp4`, delb)
					fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sucesso ao adicionar na lista de videos\nUse ${prefix}videolist para ver`, MessageType.text, { quoted: mek })
					break 
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de videos :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break 
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					case 'premium':
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					_premiun.push(from)
                    fs.writeFileSync('./database/user/premiun.json', JSON.stringify(_premiun))
					userpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					addpremium = userpremium
					reply(`*Agora você é um premium* ${addpremium} \n\nUse ${prefix}menuprem para ver seus novos comandos:)`)
					break 
				case 'addimage':
				    if (!isRegistered) return reply(ind.noregis())
				    if (!isPrem) return reply(mess.only.premium)
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Marque uma foto e digite o nome dela')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./add/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sucesso ao adicionar na lista de fotos\nUse ${prefix}fotolist para ver a lista de fotos`, MessageType.text, { quoted: mek })
					break 
				case 'fotolist':
				if (!isRegistered) return reply(ind.noregis())
			    if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de fotos :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break 
				case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek})
					break 
				case 'addaud':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					if (!isQuotedAudio) return reply('Responda um audio e digite um nome!')
					svst = body.slice(7)
					if (!svst) return reply('Qual o nome do audio?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./add/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sucesso ao adicionar na lista de audios\nUse ${prefix}audiolist para ver a lista de audios`, MessageType.text, { quoted: mek })
					break 
				case 'audiolist':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de áudios Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break 
				case 'getau':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./add/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
					                    case 'plaq':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(6)
					if (teks.length > 20) return reply('O texto é muito longo, o máximo é 20 caracteres')
					reply(ind.wait())
					buffer = await getBuffer(`https://ustreggl.sirv.com/WhatsApp%20Image%202021-05-23%20at%2010.34.13%20AM.jpeg?text.0.text=${teks}&text.0.position.x=-39%25&text.0.position.y=-60%25&text.0.size=2&text.0.color=000000&text.0.font.family=Muli&text.0.font.weight=600`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tem mulher pra pedir nao?'})
					break
					case 'plaq2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(6)
					if (teks.length > 20) return reply('O texto é muito longo, o máximo é 20 caracteres')
					reply(ind.wait())
					buffer = await getBuffer(`https://ustreggl.sirv.com/e7e8c966-1a5a-4260-bb47-4011f337bc71.jpg?text.0.text=${teks}&text.0.position.x=-39%25&text.0.position.y=-48%25&text.0.size=23&text.0.color=000000&text.0.font.family=Muli&text.0.font.weight=600`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tem mulher pra pedir nao?'})
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					addpremium.splice(`${rprem}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(addpremium))
					reply(`Você não é mais um membro premium wa.me/${rprem} Portando não podera mais usar os comandos premiuns`)
					break
				case 'admin':
					if (!isGroup) return reply(ind.groupo())
					teks = `⭐ *admin acorda (๑•﹏•)* \n\n `
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks +=`\n! @${admon.split('@')[0]}`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'imagem':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('*Marque um sticker! 😉*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui está amigo! '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *O comando já estava ativo antes*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬SUCESSO ❭ nsfw foi ativado neste grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUCESSO ❭ nsfw foi desativado neste grupo')
					} else {
						reply(ind.satukos())
					}
					break
				case 'zeus6':
			     if (!isGroup) return reply(ind.groupo())
		          if (!isZeusinte) return reply(ind.zeusinte())
				   if (args.length < 1) return reply('*🕵🏻‍♂️ O Bot Precisa De Um Texto 🕵🏻‍♂️*')
					luc4rio1 = body.slice(5)
                    luc4rio2 = await fetchJson(`https://luc4rio.herokuapp.com/api/adicionais/simsimi?texto=${luc4rio1}`, {method: 'get'})
                    if (luc4rio2.Erro) return reply(luc4rio2.Erro)
                    luc4rio3 = `${luc4rio2.Mensagem}`
                    client.sendMessage(from, luc4rio3, text, {quoted: mek})
                    break
			case 'zeusinte':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.zeusinte())
					if (args.length < 1) return reply('Use "zeusinte 1" para ativar a inteligência ou use "zeusinte 0" para desativar')
					if (Number(args[0]) === 1) {
						if (isZeusinte) return reply(' *O comando já estava ativo antes*  !!')
						zeusinte.push(from)
						fs.writeFileSync('./database/bot/zeusinte.json', JSON.stringify(zeusinte))
						reply('A inteligência artificial do zeus foi ativado nesse grupo!')
					} else if (Number(args[0]) === 0) {
						zeusinte.splice(from, 1)
						fs.writeFileSync('./database/bot/zeusinte.json', JSON.stringify(zeusinte))
						reply('A inteligência artificial do zeus foi desativado nesse grupo!')
					} else {
						reply(ind.satukos())
					}
					break
                case 'atnivel':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'on') {
                    if (isLevelingOn) return reply('Já está ativado!')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'off') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
                 case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Pessoas bloqueadas* ${body.slice(7)}@c.us`, text)
				case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Já está ativado* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😳 Welcome foi ativado neste grupo!*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😰 Welcome foi desativado neste grupo!*')
					} else {
						reply(ind.satukos())
					}
					break 
					//Porcentagens
               case 'avalie':
               if (!isRegistered) return reply(ind.noregis())
               if (!isGroup) return reply(ind.groupo())
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Pergunta : *${body.slice(1)}*\n\nResposta : *${random}%*`
              reply(hasil)
                break
                case 'gado':
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de gadisse🐂\n\nVocê é: *${random}%* GADO(A)😛🐂`
              reply(hasil)
                break
                case 'gostoso':
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de gostosura🤤\n\nVocê é: *${random}%* gostoso(A)😏👊`
              reply(hasil)
                break
                case 'safado':
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de safadeza😈\n\nVocê é: *${random}%* safado(a)😈`
              reply(hasil)
                break
                case 'perfil':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                              client.updatePresence(from, Presence.composing) 
                              random = `${Math.floor(Math.random() * 100)}`
                              random2 = `${Math.floor(Math.random() * 100)}`
                              random3 = `${Math.floor(Math.random() * 100)}`
                              random4 = `${Math.floor(Math.random() * 100)}`
                              random5 = `${Math.floor(Math.random() * 5000)}`
                    try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                const userLevel7 = getLevelingLevel(sender)
                const userXp7 = getLevelingXp(sender)
                if (userLevel7 === undefined && userXp7 === undefined) return reply(ind.lvlnul())
                const requiredXp7 = 1000 * (Math.pow(2, userLevel7) - 1)
                profile = `    「 *_Seu perfil_* 」\n*📋Nome:* ${pushname}\n*🕹️Xp:*  ${userXp7}\n*📊Nivel:* ${userLevel7}\n*💎Patente*: ${role}\n*🐂Nivel gado: ${random2}%*\n*😈Nivel puta: ${random3}%*\n*🏳️‍🌈Nivel gay: ${random4}%*\n*😋Nivel de gostosura: ${random}%*\n*🍼Valor do programa: R$${random5}*`
					buffer = await getBuffer(profil)
				
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile}, text, tescuk, cr)
				break
                 case 'evento':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('Esse comando ja estava ativo antes!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*O evento foi ativo neste grupo!*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*O evento foi desativado neste grupo!*')
					} else {
						reply(ind.satukos())
					}
					break
			case 'resetlimit':
				if (!isGroup) return reply(dpa.groupo())
				if (!isOwner) return reply(ind.ownerg()) 
				var obj = []
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj))
				await reply(`O limite foi resetado!`)
				break
				  case 'setlimit':
				if (!isGroup) return reply(dpa.groupo())
				if (args.length < 1) return
				limitawal = args[0]
				reply(`O limit foi alterado para: *${limitawal}*`)
				break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *Marque uma pessoa que terá sua foto do perfil clonada:* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('q')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`obg pela foto de perfil 😳 @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender) 
					break   
case 'teste6':
const mkv = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Lista de menus",
description: `Ultron-Plus`,
listType: 1,
"sections": [{//início
"title": "Menus",
"rows": [{
"title": "#ead",
"rowId": `{prefix}` },
{ "title": "#menu",
"rowId": `{prefix}menu` },
{ "title": "#flix",
"rowId": `{prefix}` },
{ "title": "#biblioteca",
"rowId": `{prefix}` },
{ "title": "#adms",
"rowId": `{prefix}` },
{ "title": "#maker",
"rowId": `{prefix}` },  
{ "title": "#fga",
"rowId": `{prefix}` },
{ "title": "#entretenimento",
"rowId": `{prefix}` },
{ "title": "#consultas",
"rowId": `{prefix}` },
{ "title": "#ttthelp",
"rowId": `{prefix}ttthelp`  }, 
{ "title": "#credits",
"rowId": "" },   
]},
{ "title": "Contato",
"rows": [{
"title": "https://wa.me/+5511930758170",
"rowId": "" },
{ "title": "https://www.instagram.com/crwth.gs/",
"rowId": "" }] },
                    
{ "title": "Informações",
"rows": [{
"title": "Versão: 4.0 Beta",
"rowId": "" },
{ "title": "Ano: 2020",
"rowId": "" },
{ "title": "Criador: Thoth",
"rowId": ""
}]
                  
}]//Terminou
})
})
let ultron = await client.prepareMessageFromContent(from, mkv, {});
client.relayWAMessage(ultron, {waitForAck: true})
break 
					
					//rank de nível 
				case 'rank':
	if (!isRegistered) return reply( ind.noregis())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				let leaderboardlvl = '-----[ *RANKING DE NIVEL* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.split('@')[0]}\n│➣  *XP*: ${_level[i].xp}\n│➣  *Nivel*: ${_level[i].level}\n`
				}
				await reply(leaderboardlvl)
				} catch (err) {
				console.error(err)
				await reply(`minimal 5 user untuk bisa mengakses database`)
				}
				break
              //feito por Zultra/zeus 556993899391 
				case 'registros':
	if (!isRegistered) return reply( ind.noregis())
				let registros = '-----[ *LISTA DE REGISTRO* ]----\n\n'
				let num = 0
				try {
				for (let i = 0; i < 5; i++) {
					num++
					registros += `*[${num}]* ${_registered[i].id.split('@')[0]}\n*Nome*: ${_registered[i].name}\n*Idade*: ${_registered[i].age}\nHorário de registro: ${_registered[i].time}\nCPF: ${_registered[i].serial}`
				}
				await reply(registros)
				} catch (err) {
				console.error(err)
				await reply(`Zeus fez caquinha no comandokkkkk`)
				}
				break
				case 'buscanime':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.wait())
					}
					await limitAdd(sender)
					break
					
					//atualizações 
					
					case 'cassino':
		const sotoy = [
		'🍊-🍒-🍐',
		'🍒-🔔-🍊',
		'🍇-🍇-🍇',
		'🍊-🍋-🔔',
		'🔔-🍒-🍐',
		'🔔-🍒-🍊',
        '🍊-🍋-🔔',		
		'🍐-🍒-🍋',
		'🍐-🍐-🍐',
		'🍊-🍒-🍒',
		'🔔-🔔-🍇',
		'🍌-🍒-🔔',
		'🍐-🔔-🔔',
		'🍊-🍋-🍒',
		'🍋-🍋-🍌',
		'🔔-🔔-🍇',
		'🔔-🍐-🍇',
		'🔔-🔔-🔔',
		'🍒-🍒-🍒',
		'🍌-🍌-🍌'
		]
            const sintoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const sintoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
            const sintoy3 = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 CASSINO ]\n-----------------\n${sintoy}\n${sintoy2}⟵\n${sintoy3}`
            reply(yow)
	            break
	                case 'slot':
                    const somtoy = sotoe[Math.floor(Math.random() * sotoe.length)]
                    ppg = Math.floor(Math.random() * 13) + 349
                    if ((somtoy == '🥑 : 🥑 : 🥑') || (somtoy == '🍉 : 🍉 : 🍉') || (somtoy == '🍓 : 🍓 : 🍓') || (somtoy == '🍎 : 🍎 : 🍎') || (somtoy == '🍍 : 🍍 : 🍍') || (somtoy == '🥝 : 🥝 : 🥝') || (somtoy == '🍑 : 🍑 : 🍑') || (somtoy == '🥥 : 🥥 : 🥥') || (somtoy == '🍋 : 🍋 : 🍋') || (somtoy == '🍐 : 🍐 : 🍐') || (somtoy == '🍌 : 🍌 : 🍌') || (somtoy == '🍒 : 🍒 : 🍒') || (somtoy == '🔔 : 🔔 : 🔔') || (somtoy == '🍊 : 🍊 : 🍊') || (somtoy == '🍇 : 🍇 : 🍇')) {
                        var vitr = "Você ganhou!!!"
                    } else {
                        var vitr = "Você perdeu..."
                    }
                    const slott =
                        `Consiga 3 iguais para ganhar
╔═══ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║         [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ═══╝
                      @ɪᴛᴀʟᴜ

${vitr}`
                    if (vitr == "Você ganhou!!!") {
                        
                            reply(`Você ganhou ${ppg} em xp!!!`)
                        
                    }
                    client.sendMessage(from, slott, text, {
                        quoted: mek
                    })
                    break
	case 'reiniciar':
if (!isOwner) return reply(ind.ownerb())
npm = `node index`
reply('Reiniciando, aguarde')       
exec(npm, (err, stdout) => {
if(err) return client.sendMessage(from, "Erro, tente nova mente", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break
	       case 'encurta':                     
					data = await fetchJson(`https://encurta.net/api?api=7676c2a06283550f068bcf8aed4de517f91e4875&url=${args[0]}`, {method: 'get'})
                    hasil = `${data.shortenedUrl}`                     
					reply(hasil)
                    break
           case 'covid':
					anu = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${args[0]}`, {method: 'get'})
                    covi = `Estado: ${anu.state}\nUF: ${anu.uf}\nCasos: ${anu.cases}\nMortes: ${anu.deaths}\nSuspeitos: ${anu.suspects}\nData de atualização: ${anu.datetime}`                     
					reply(covi)
                    break
           case 'frase':
					data = await fetchJson(`https://allugofrases.herokuapp.com/frases/random`, {method: 'get'})
                    frase = `*Livro:* *${data.livro}*\n\n_${data.frase}_\n_*Autor: ${data.livro}*_\n`                     
					reply(frase)
                    break
                    case 'zeus':
                    if (!isZeusinte) return reply(ind.zeusinte())
					data = await fetchJson(`https://simsumi.herokuapp.com/api?text=${args[0]}=br`, {method: 'get'})
                    simi = `${data.success}`                     
					reply(simi)
                    break
          case 'fakemsg':
					var gh = body.slice(11)
                   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                   var replace = gh.split("|")[0];
                   var target = gh.split("|")[1];
                   var bot = gh.split("|")[2];
                   client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
                  break
case 'banbot':
                if (!isOwner) return reply(ind.ownerb())
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[1], ban)
                    }
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`, "mentionedJid", true)
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender.match('557499510904')) return reply(`🤨`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`, "mentionedJid", true)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`, "mentionedJid", true)
                } else {
                    reply(`Use ${prefix}ban @menção para banir um usuário`)
                }
                break
                
            case 'desbanbot':
                if (!isOwner) return reply(ind.ownerb())
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`, "mentionedJid", true)
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`, "mentionedJid", true)
                } else if (!isNaN(args[0])) {
                    unBanned(args[0] + '@s.whatsapp.net', ban)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`, "mentionedJid", true)
                } else {
                    reply(`Use ${prefix}unban @menção para desbanir um usuário`)
                }
                break
                case 'listban':
                let txtx = `Lista de usuários banidos\nTotal: ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `ID: @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENTE'
                        txtx += `Expira em: PERMANENTE\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `Expira em: ${cekvip.days} dia(s) ${cekvip.hours} hora(s) ${cekvip.minutes} minuto(s) ${cekvip.seconds} segundo(s)\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break
                case 'posttext':
                if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing)
                    client.sendMessage('status@broadcast', `${q}`, extendedText)
                    client.sendMessage(from, `Texto enviado ao status: ${q}`, text, {
                        quoted: mek
                    })
                    break
                    case 'postfoto':
                if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing)
                    if (isQuotedImage) {
                        const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        cihcih = await client.downloadMediaMessage(swsw)
                        client.sendMessage('status@broadcast', cihcih, image, {
                            caption: `${q}`
                        })
                    }
                    if (args.length < 1) {
                        bur = `Imagem enviada ao status`
                        client.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    } else {
                        bur = `Imagem enviada ao status com a legenda: ${q}`
                        client.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    }
                    break

                case 'postvid':
                if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing)
                    if (isQuotedVideo) {
                        const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        cihcih = await client.downloadMediaMessage(swsw)
                        client.sendMessage('status@broadcast', cihcih, video, {
                            caption: `${q}`
                        })
                    }
                    if (args.length < 1) {
                        bur = `Vídeo enviado ao status`
                        client.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    } else {
                        bur = `Vídeo enviado ao status com a legenda: ${q}`
                        client.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    }
                    break
                    case 'dado':
                    const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
                    dadu = dadus[Math.floor(Math.random() * dadus.length)]
                    dador = fs.readFileSync('./database/dados/' + dadu + '.webp')
                    client.sendMessage(from, dador, sticker, {
                        quoted: mek
                    })
                    break
                    case 'top5':
                    try {
                    	
                        if (args.length < 1) return reply('top5....?')
                        if (!isGroup) return reply(ptbr.group())
                        if (!isGroupAdmins) return reply(ptbr.admin())
                        d = []
                        top1 = body.slice(5)
                        teks = `️‍Top 5${top1}:\n`
                        for (i = 0; i < 5; i++) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
                            d.push(groupMembers[r].jid)
                        }
                        mentions(teks, d, true, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(e)
                        reply('ocorreu um erro')
                    }
                    break
                    case 'marcfig':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: {
                                mentionedJid: mem
                            },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Marque um sticker para que eu mencione todos com ele`)
                    }
                    break
                    case 'marcfoto':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: {
                                mentionedJid: mem
                            },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Marque uma imagem para que eu mencione todos com ela`)
                    }
                    break
                    case 'video': // by lindow
                    if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
                        a = await webp2gifFile(mediaaa)
                        mp4 = await getBuffer(a.result)
                        client.sendMessage(from, mp4, MessageType.video, {
                            mimetype: 'video/gif',
                            filename: `stick.gif`,
                            quoted: mek,
                            caption: '✅'
                        })
                        fs.unlinkSync(mediaaa)
                    }
                    break
                    case 'send':
                    if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                    if (args.length < 1) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado`)
                    if (!q.includes('|')) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado\nNão esqueça do: | `)
                    var pc = body.slice(6)
                    var nomor = pc.split("|")[0];
                    var pesan1 = pc.split("|")[1];
                    client.sendMessage(nomor + '@s.whatsapp.net', pesan1, text)
                    break
                    case 'bateria':
if (!isOwner) return reply(ind.ownerb())
teks = `Carga da bateria: ${batterylevel}%`
reply(teks)
                 break
                 case 'getbio':
                 if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await client.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("indisponível")
                }
                break
                    
                    //_COMANDOS ANIME
                case 'neko':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'abraçar':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/cuddle`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'beijar':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/kiss`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'foxg':
                    try {
                     if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())    
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/fox_girl`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'carinho':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/pat`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'dedo':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/poke`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'cossegas':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/tickle`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'waifu':
                    try {
                    	if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                         
                        axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'avatar':
                    try {
                    	if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                         
                        axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'wallpaper':
                    try {
                    	if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                         
                        axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'baka':
                    try {
                    	if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        reply(ind.wait())
                         
                        axios.get('https://nekos.life/api/v2/img/baka').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    //_COMANDOS NSFW
                case 'kuni':
                    try {
                    	if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                         
                        axios.get(`https://nekos.life/api/v2/img/kuni`).then((res) => {
                            imageToBase64(res.data.url).then((response) => {
                                var buf = Buffer.from(response, 'base64');
                                client.sendMessage(from, buf, image, {
                                    quoted: mek
                                })
                            })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('Ocorreu um erro')
                    }
                    break

                case 'lesbian':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/yuri`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    case 'keta':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/keta`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'nholo':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    
                    //GIF
                case 'smug':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'solo':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'ero':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'pezinhos':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
case 'tapa':
                    try {
                    	if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buffer = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buffer, video, {
                                            quoted: mek,
                                            mimetype: 'video/gif'
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                case 'feet':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'classic':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'holoero':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'cum':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'elesbian':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'eron':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'pwankg':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'anal':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'lewd':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'lewdkemo':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'solog':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'lewdk':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    //GIF
                case 'ngif':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'blowjob':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'hentai2':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'hololewd':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'trap':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'les':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'futanari':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'femdom':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'feed':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'erok':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'feetg':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'erokemo':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'boobs':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'pussy':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        e = String(e)
                        if (!e.includes("marker was not found")) {
                            reply(ptbr.erro())
                        }
                    }
                    break

                    //GIF
                    case 'cgif':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        axios.get('https://nekos.life/api/v2/img/cum').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.video, {
                                            mimetype: 'video/gif',
                                            filename: `stick.gif`,
                                            quoted: mek,
                                            caption: '🙈'
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                case 'nsfwgif':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                        if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.video, {
                                            mimetype: 'video/gif',
                                            filename: `stick.gif`,
                                            quoted: mek,
                                            caption: '🙈'
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                    //GIF
                case 'slap':
                if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                 if (!isNsfw) return reply(ind.nsfwoff())
                    axios.get('https://nekos.life/api/v2/img/slap').then(res => {
                        imageToBase64(res.data.url)
                            .then(
                                (ress) => {
                                    var buf = Buffer.from(ress, 'base64')
                                    client.sendMessage(from, buf, MessageType.image, {
                                        quoted: mek
                                    })
                                })
                    })
                    break

                    //GIF
case 'rhug':
				reply(ind.wait())
				if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                 if (!isNsfw) return reply(ind.nsfwoff())
                    axios.get('https://nekos.life/api/v2/img/hug').then(res => {
                        imageToBase64(res.data.url)
                            .then(
                                (ress) => {
                                    var buf = Buffer.from(ress, 'base64')
                                    client.sendMessage(from, buf, MessageType.image, {
                                        quoted: mek
                                    })
                                })
                    })
                    break
                case 'tits':
                    try {
                         if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
                         if (!isNsfw) return reply(ind.nsfwoff())
                        reply(ind.wait())
                        if (args[0] === "1") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "2") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/BestTits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "3") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/boobs').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "4") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "6") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/smallboobs').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "7") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/TinyTits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "8") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "9") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/amazingtits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            client.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        }
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
				default:
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`Comando *${prefix}${command}* não encontrado, use *${prefix}menu*!`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command)) 
					} else {
						console.log(color('ERROR','red'), 'Comando nao registrado', color(sender.split('@')[0]))
					} 
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
