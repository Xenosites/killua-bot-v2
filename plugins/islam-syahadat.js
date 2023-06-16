import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `*Bacaan Syahadat*

*Arab:*  أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ الل
*Indo:* Asyhadu an laa ilaha illallah, wa asyhadu anna muhammadar rasulullah
*Artinya:* Saya bersaksi bahwa tiada Tuhan yang wajib disembah kecuali Allah, dan saya bersaksi bahwa Nabi Muhammad itu utusan (Rasul) Allah.

*Author: ${author}*
*Powered by ${namebot}*
`.trim()
  m.reply(caption)
}
handler.help = ['syahadat']
handler.tags = ['islamic']
handler.command = /^(syahadat)$/i
handler.limit = false 

export default handler