const nodemailer = require('nodemailer')

let handler = async (m, { conn, text }) => {
   if (!text) throw 'Masukkan Teks!'
    let mailOptions = {
    from = 'gentursy02@gmail.com', // Pengirim 
    to = 'danigtps@gmail.com', // Penerima 
    subject = 'Testing Nodemailer', // Judul email 
    text = `${text}` // Isi pesan 
};

 // Kirim email 
 sendMail(mailOptions, (error, info) => {

    if (error) {

        return console.log(error);

    } else {

        console.log('Email berhasil dikirim!');

        console.log('Informasi tambahan: ' + info.response);

    });
}
 
handler.help = ['unbanwa']
handler.tags = ['tools']
handler.command = /^(unbanwa)$/i

module.exports = handler