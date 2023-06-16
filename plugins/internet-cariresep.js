import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) throw `Mau nyari apa kak?\n\n*Cara Penggunaan:*\n${usedPrefix + command} masakan\n*Contoh:*\n${usedPrefix + command} rendang`
    let f = await fetch(`https://saipulanuar.ga/api/download/cariresep?query=${text}`)
        let xx = await f.json()
        let str = xx.result
    
    let listSections = []
    Object.values(str).map((v, index) => {
    let cp = `
*Judul:* ${v.judul}
*Url:* ${v.link}

*Author: ${author}*
*Powered by ${namebot}*
`
        listSections.push(["Nomer. " + ++index, [
            [`Baca Resep`, '.bacaresep ' + v.link, cp]
        ]])
    })
    return conn.sendList(m.chat, htki + " RESEP SEARCH " + htka, `Resep masakan yang kamu cari: *${text}*\n\nSilakan pilih resep yang anda mau kamu lihat.`, author, "Klik Disini", listSections, m)
}
handler.help = ['cariresep'].map(v => v + ' <masakan>')
handler.tags = ['internet']
handler.command = /^(resepsearch|cariresep)$/i
handler.limit = true

export default handler