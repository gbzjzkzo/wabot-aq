let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana.     [081299609670
│ • Telkomsel [6281299609670]
╰────


`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
