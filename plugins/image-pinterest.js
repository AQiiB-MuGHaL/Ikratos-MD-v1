import { pinterest } from '@bochilteam/scraper';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example use ${usedPrefix + command} minecraft`;
  const json = await pinterest(text);
  const imageUrl = json.getRandom().replace(/&amp;/g, '&');

  conn.sendFile(m.chat, imageUrl, 'pinterest.jpg', `
*Hasil pencarian*
${text}
`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(pinterest|pin)$/i;

export default handler;