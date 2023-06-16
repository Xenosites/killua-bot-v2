import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `*Bacaan Istighfar*

*Arab:*  أستغفرالله
*Indo:* Astaghfirullah
*Artinya:* Aku memohon ampun kepada Allah.

*Author: ${author}*
*Powered by ${namebot}*
`.trim()
  m.reply(caption)
}
handler.help = ['istighfar']
handler.tags = ['islamic']
handler.command = /^(istighfar)$/i
handler.limit = false 

export default handler