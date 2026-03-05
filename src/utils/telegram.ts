const BOT_TOKEN = '8120322961:AAEsCckS_KLu9cuaN6K05HjZIVj8vW57dPg';
const CHAT_ID = '@mahorat_soft1';

export async function sendToTelegram(name: string, phone: string, subject: string, message: string): Promise<boolean> {
  const text = `🔔 <b>Yangi so'rov</b>\n\n👤 <b>Ism:</b> ${name}\n📱 <b>Telefon:</b> ${phone}\n📝 <b>Mavzu:</b> ${subject}\n💬 <b>Xabar:</b> ${message}\n\n⏰ <b>Vaqt:</b> ${new Date().toLocaleString()}`;
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
    });
    const data = await res.json();
    return data.ok;
  } catch {
    return false;
  }
}
