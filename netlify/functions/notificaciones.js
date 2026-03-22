exports.handler = async () => {
  // TUS DATOS REALES DE ONESIGNAL
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  // La API KEY la encuentras en OneSignal: Ajustes (Settings) > Keys & IDs > REST API KEY
  const API_KEY = "TU_REST_API_KEY_AQUI"; 

  const d = new Date(); d.setUTCHours(d.getUTCHours() - 4);
  const h = d.getHours();
  
  let msj = "🔔 ¡Anatulio, hora de marcar entrada! 🚀";
  if (h >= 12 && h < 14) msj = "🍔 ¡Buen provecho! Registra tu salida. 🥗";
  if (h >= 18) msj = "🌙 ¡Misión cumplida! Marca tu salida. 🎉";

  const body = {
    app_id: APP_ID,
    included_segments: ["Total Subscriptions"],
    contents: { "es": msj },
    headings: { "es": "Chala App 📲" }
  };

  try {
    const res = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Basic ${API_KEY}`
      },
      body: JSON.stringify(body)
    });
    return { statusCode: 200, body: "Notificación enviada" };
  } catch (e) {
    return { statusCode: 500, body: e.message };
  }
};
