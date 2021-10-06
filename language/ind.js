exports.wait = () => {
	return`_Aguarde, estou fazendo.⏰_`
}

exports.succes = () => {
	return`*Sucesso✓*`
}

exports.lvlon = () => {
	return`*Os níveis está ativado 👴🏽🤙🏿*`
}

exports.lvloff = () => {
	return`*Os níveis está desativado 😔*`
}

exports.lvlnul = () => {
	return`_Você ainda não tem um nível!_`
} 

exports.lvlnoon = () => {
	return`*Peça a um adm para ativar os níveis neste grupo!*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*

*🤝 Percebemos que você ainda não está registrado(a) em nosso banco de dados... para está se registrando use ${prefix}rg nome|idade - obs: use isso no privado do bot!* 

•Exemplo: ${prefix}rg zeus|18`
}

exports.rediregis = () => {
	return`*Você já está registrado em nosso banco de dados 🏦🎲🤝*`
}

exports.stikga = () => {
	return`*Falha, tente novamente mais tarde!*`
}

exports.linkga = () => {
	return`*Link inválido*`
}

exports.groupo = () => {
	return`*Comando só pode ser usado em grupos!*
https://chat.whatsapp.com/CK6wAeYLdd20U1kXVqDtym`
}

exports.matar = (pushname, anug, mem) => {
	return` ${pushname} matou o @${mem('@')[0]}

Tem um assassino a solta corram antes que seja tarde!!`
}

exports.ownerb = () => {
	return`Esse comando só pode ser usado pelo Zeus `
}

exports.ownerg = () => {
	return`*🚫*`
} 
exports.vip = () => { 
  return `_Você não possui uma conta *vip*😥_` 
}

exports.zeusinte = () => {
	return`Ative a inteligência artificial do zeus para poder usar esse comando`

}

exports.errofig = () => {
	return`Erro`

}

exports.admin = () => {
	return`_que se ta tentando fazer membro?kkkk 🤣🤣🤣_`
}
exports.nivel = () => { 
  return`*Para fazer uso deste comando é nescessário ter o nível 3 👳🏿‍♂️*`
} 
exports.badmin = () => {
	return`Preciso ser adm para o uso desse comando 😞*`
}

exports.userpremium = () => { 
	return `_Você não possui uma conta premium😥_` 
}

exports.nsfwoff = () => {
	return`Ative o nsfw para poder usar esse comando!`
}

exports.bug = () => {
	return`*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco 🤨*`
}

exports.clears = () => {
	return`Todas as conversas foram apagadas :b`
}

exports.pc = () => {
	return`*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`Registrado🤝`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado, use *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*`
}

exports.menu = (pushname, prefix, privat, groups, totalChat, time, time2, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
	
                       「 𝑍𝑒𝑢𝑠 ⚡ 」  
╔────────
║〆  Hora: ${time}
║〆  Data: ${time2}
║〆  Chat privado : ${privat.length}
║〆  Total de grupos: ${groups.length}
║〆  Total de chats: ${totalChat.length}
╚─────────────────⊀

                       「 𝐼𝑛𝑓𝑜 」
╔────────
║〆${prefix}info 
║〆${prefix}criadorbot
║〆${prefix}bug (Sua mensagem)
║〆${prefix}creditos
║〆${prefix}comprarbot
║〆${prefix}perfil
║〆${prefix}menus
║〆${prefix}regras
║〆${prefix}ping
║〆${prefix}nivel
║〆${prefix}rank
╚─────────────────⊀

                        「 𝐴ç𝑜𝑒𝑠 」
╔────────
║〆${prefix}covid {estado}
║〆${prefix}xp {Resgata seu xp diário}
║〆${prefix}figugif
║〆${prefix}figu
║〆${prefix}clima
║〆${prefix}imagem 
║〆${prefix}voz {código do idioma} {fala}
║〆${prefix}cadr {texto}
║〆${prefix}buscanime
║〆${prefix}fraselogo
║〆${prefix}pornhub (título)
║〆${prefix}convite
║〆${prefix}getbio
║〆${prefix}send 
║〆${prefix}video
╚─────────────────⊀

                       「 𝐷𝑖𝑣𝑒𝑟𝑠𝑜𝑒𝑠 」
╔────────
║〆${prefix}cassino
║〆${prefix}pisc 
║〆${prefix}zeus
║〆${prefix}caracoroa 
║〆${prefix}gay 
║〆${prefix}rankgay
║〆${prefix}rankgado
║〆${prefix}rankgostoso
║〆${prefix}putinha
║〆${prefix}resp {sua pergunta}
║〆${prefix}avalie
║〆${prefix}gado
║〆${prefix}safado
║〆${prefix}buc
║〆${prefix}gostoso
║〆${prefix}caracoroa
║〆${prefix}casal
║〆${prefix}prnhb Nome/texto
║〆${prefix}fakemsg @pessoa |msg1|resp
╚─────────────────⊀

                       「 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 」
╔────────
║〆${prefix}ftkpop
║〆${prefix}cachorrinho
║〆${prefix}play {nome da música}
║〆${prefix}ytmp4 {url yt}
║〆${prefix}ytmp3 {url yt}
╚─────────────────⊀

                       「 𝑃𝑙𝑎𝑞𝑢𝑖𝑛ℎ𝑎𝑠 」
╔────────
║〆${prefix}plaq
║〆${prefix}plaq2
╚─────────────────⊀

                       「 𝐽𝑜𝑔𝑜 𝑑𝑎 𝑣𝑒𝑙ℎ𝑎 」
╔────────
║〆${prefix}ttthelp
║〆${prefix}ttt
║〆${prefix}tttme
║〆${prefix}tttrank
║〆${prefix}jogov @adversário
╚─────────────────⊀

                       「 𝐸𝑛𝑐𝑢𝑟𝑡𝑎𝑑𝑜𝑟𝑎 」
╔────────
║〆${prefix}encurta {url}
╚─────────────────⊀

                       「 𝑆𝑡𝑎𝑙𝑘𝑒𝑎𝑟 」
╔────────
║〆${prefix}tiktokstalk {id/nome do usuário}
╚─────────────────⊀

`}
exports.levelup = (pushname, role, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
					*Parabéns, você upou de nível 🥳* 
	
╔────────
│➣ Nome: @${pushname.split('@')[0]}
│➣ Nivel: *${getLevel}* -> *${getLevelingLevel(sender)}*
│➣ Experiência:  *${getLevelingXp(sender)}*
╚─────────────────⊀`}
exports.limitend = (pushname) => {
	return`Você ja resgatou seu xp diario! Espere até amanhã para resgatar novamente!`
}

exports.limitcount = (limitCounts) => {
	return`💤` 
}

exports.satukos = () => {
	return`*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*`
}