let http = require('http')
let fs = require('fs')

let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
   if (!args[0]) throw 'Masukkan IP dan Port!'
   let res = `https://protection.dannnxd.repl.co?hostname=${response[0]}&port=${response[1]}`
   let proses = 'Sedang di Proses...'
   let proses2 = 'Mohon bersabar...'
   let protect = `Terkoneksi pada Hostname dan Port kamu`
   conn.sendMessage(m.chat, res, protect, { quoted: m })
   setTimeout(() => {
   m.reply(`${proses}`)
   }, 0)

   setTimeout(() => {
   m.reply(`${proses2}`)
   }, 10000)   
 }
handler.help = ['antiddos']
handler.tags = ['tools']
handler.command = /^(antiddos)$/i
handler.premium = true

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
 }
 
function clockString(ms) {
   let h = Math.floor(ms / 3600000)
   let m = Math.floor(ms / 60000) % 60
   let s = Math.floor(ms / 1000) % 60
   console.log({ms,h,m,s})
   return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
 }