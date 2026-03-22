exports.handler = async () => {
  // CONFIGURACIÓN DE TELEGRAM
  const TOKEN = "8610559332:AAEo25sbSRNX7smFCK8ZfOkangOcd_kpFTQ";
  const CHAT_ID = "5149244973";

  // AJUSTE DE HORA BOLIVIA (GMT-4)
  const d = new Date(); 
  d.setUTCHours(d.getUTCHours() - 4); 
  const h = d.getHours();
  
  // SELECCIÓN DE MENSAJE SEGÚN LA HORA
  let msj = "🔔 ¡Anatulio, hora de marcar entrada! 🚀";
  
  if (h >= 10 && h < 12) msj = "✨ ¡Vamos Binomio, mantén el enfoque! 💪";
  else if (h >= 12 && h < 14) msj = "🍔 ¡Buen provecho! Registra tu salida a almorzar. 🥗";
  else if (h >= 14 && h < 16) msj = "💼 ¡De vuelta al ruedo! Registra tu reingreso. ✨";
  else if (h >= 16 && h < 18) msj = "🔥 ¡No te detengas, vas por excelente camino! 🏆";
  else if (h >= 18 && h < 20) msj = "🌙 ¡Misión cumplida! Registra tu salida y descansa. 🎉";
  else if (h >= 20) msj = "🏠 ¡Día superado! Disfruta tu descanso. ✨";

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(msj)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    
    if (data.ok) {
      return { statusCode: 200, body: "Enviado a Telegram: " + msj };
    } else {
      return { statusCode: 500, body: "Error de Telegram: " + data.description };
    }
  } catch (e) {
    return { statusCode: 500, body: "Error de red: " + e.message };
  }
};
