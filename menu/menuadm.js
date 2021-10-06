const menuadm = (prefix, sender) => {
	return `
	
                                   𝑍𝑒𝑢𝑠 ⚡ 
                       「 𝑀𝑒𝑛𝑢 𝑑𝑜 𝑎𝑑𝑚 」
╔────────
║〆${prefix}listonline
║〆${prefix}promover @tagmembro
║〆${prefix}demitir @tagadmin 
║〆${prefix}ban @tagmembro 
║〆${prefix}setname _{Nome novo do gruoo}_
║〆${prefix}setdesc _{Alterar desc do grupo}_
║〆${prefix}setmarc _{Marcação nova}_
║〆${prefix}atnivel _{on/off}_
║〆${prefix}zeusinte _{1/0}_
║〆${prefix}welcome _{1/0}
║〆${prefix}antilinkgrupo _{1/0}_
║〆${prefix}antifake _{1/0}_
║〆${prefix}gp _{open/close}_
║〆${prefix}marcar {marcação invisível}
║〆${prefix}marcar2 {marcação normal}
║〆${prefix}delete / ${prefix}del {apagar mensagem do bot}
║〆${prefix}delttc (apaga sessão de jogov)
╚─────────────────⊀

`
}

exports.menuadm = menuadm
