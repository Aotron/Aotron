const menuadm = (prefix, sender) => {
	return `
	
                                   πππ’π  β‘ 
                       γ ππππ’ ππ πππ γ
βββββββββ
βγ${prefix}listonline
βγ${prefix}promover @tagmembro
βγ${prefix}demitir @tagadmin 
βγ${prefix}ban @tagmembro 
βγ${prefix}setname _{Nome novo do gruoo}_
βγ${prefix}setdesc _{Alterar desc do grupo}_
βγ${prefix}setmarc _{MarcaΓ§Γ£o nova}_
βγ${prefix}atnivel _{on/off}_
βγ${prefix}zeusinte _{1/0}_
βγ${prefix}welcome _{1/0}
βγ${prefix}antilinkgrupo _{1/0}_
βγ${prefix}antifake _{1/0}_
βγ${prefix}gp _{open/close}_
βγ${prefix}marcar {marcaΓ§Γ£o invisΓ­vel}
βγ${prefix}marcar2 {marcaΓ§Γ£o normal}
βγ${prefix}delete / ${prefix}del {apagar mensagem do bot}
βγ${prefix}delttc (apaga sessΓ£o de jogov)
βββββββββββββββββββ

`
}

exports.menuadm = menuadm
