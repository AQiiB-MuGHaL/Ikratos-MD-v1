const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m) {
    if (m.fromMe && m.isBaileys) return !0
    let setting = global.db.data.settings[this.user.jid]
    if (!setting?.anticall) return

    if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
        await conn.sendButton(m.chat, 'Kamu di Blokir karena menelepon *Bot*\n', wm + '\n\n' + botdate, null, [['OK', 'ok']], m)
        await delay(1000)
        await this.updateBlockStatus(m.chat, 'block')
    }
}
