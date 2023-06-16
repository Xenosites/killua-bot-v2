import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args }) => {
	if (!args[0]) return m.reply(`Masukan Nama Character Genshin Impact !\n*Contoh:* ${usedPrefix + command} hutao`)
	let res = await fetch(`https://saipulanuar.ga/api/info/genshin?query=${args[0]}`)
	let result = await res.json()
	let json = result.result
	let kon = `*Name:* ${json.name}
*Full Name:* ${json.fullname}
*Title:* ${json.title}
*Description:* ${json.description}
*Rarity:* ${json.rarity}
*Element:* ${json.element}
*Weapon Type:* ${json.weapontype}
*Sub Stats:* ${json.substat}
*Gender:* ${json.gender}
*Body:* ${json.body}
*Association:* ${json.association}
*Region:* ${json.region}
*Affiliation:* ${json.affiliation}
*Birthday:* ${json.birthday}
*Constellation:* ${json.constellation}

_CV_
*English:* ${json.cv.english}
*Chinese:* ${json.cv.chinese}
*Japanese:* ${json.cv.japanese}
*Korean:* ${json.cv.korean}

_Fandom_
*Url Fandom:* ${json.url.fandom}
*Version:* ${json.version}

*Author: ${author}*
*Powered by ${namebot}*`
m.reply(wait)
await conn.sendFile(m.chat, json.images.icon, 'gi.png', kon, m)
}
handler.help = ['gi', 'genshinimpact'].map(v => v + ' <character>')
handler.tags = ['internet']
handler.command = /^(gi|genshinimpact)$/i

handler.premium = false
handler.limit = false

export default handler