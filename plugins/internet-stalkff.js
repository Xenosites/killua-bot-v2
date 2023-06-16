import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args }) => {
	if (!args[0]) return m.reply(`Masukan ID Free Fire Mu !\n*Contoh:* ${ usedPrefix + command } 1710352698`)
	try {
	let res = await fetch(`https://saipulanuar.ga/api/stalk/epep?id=${args[0]}`)
	let result = await res.json()
	let json = result.result
	let kon = `*ID Free Fire:* ${json.id}
*Nickname:* ${json.nickname}`

m.reply(kon)
} catch (e) {
	m.reply(`ID Free Fire Salah`)
	console.log(e)
	}
}
handler.help = ['stalkff'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = /^stalkff|stalkepep$/i

handler.premium = false
handler.limit = false

export default handler