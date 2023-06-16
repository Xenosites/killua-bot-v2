const kontol = "https://telegra.ph/file/499430bafa26d6c45e333.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, kontol, `
Silahkan scan barcode di atas untuk melakukan transaksi, wajin menyertakan bukti transfer
`.trim(), wm, 'Owner', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.help = ['bayar']
handler.tags = ['main', 'utama']
handler.command = /^(bayar)$/i

module.exports = handler