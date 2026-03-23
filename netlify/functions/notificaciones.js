exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  const API_KEY = "os_v2_app_hhngt7rfjfcjrlyi52hniiez6fpz7zo2azo2fc5gvwalcxnmbzrqk3pxb6dh3g23zgqojd65r4y2274zupesyqak7a";

  const d = new Date(); 
  d.setUTCHours(d.getUTCHours() - 4); 
  const h = d.getHours();
  
  let titulo = "Chala App 📲";
  let msj = "🔔 ¡Anatulio, hora de marcar entrada! 🚀";
  
  if (h >= 10 && h < 12) { titulo = "Enfoque Binomio ✨"; msj = "¡La disciplina es el puente entre metas y logros! 💪"; }
  else if (h >= 12 && h < 14) { titulo = "Hora de Almuerzo 🍔"; msj = "¡Buen provecho! Registra tu salida a almorzar. 🥗"; }
  else if (h >= 14 && h < 16) { titulo = "Retorno al Turno 💼"; msj = "¡De vuelta al ruedo! Registra tu reingreso. ✨"; }
  else if (h >= 16 && h < 18) { titulo = "Energía de Tarde 🔥"; msj = "¡No te detengas, vas por excelente camino! 🏆"; }
  else if (h >= 18 && h < 20) { titulo = "Fin de Jornada 🎉"; msj = "¡Misión cumplida! Registra tu salida y descansa. 🌙"; }
  else if (h >= 20 || h < 6) { titulo = "Reflexión del Día 🌙"; msj = "¡Día superado! Disfruta tu descanso. ✨"; }

  try {
    const res = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + API_KEY
      },
      body: JSON.stringify({
        app_id: APP_ID,
        // LA RED GIGANTE: Atrapa a tu celular sin importar en qué grupo lo metió OneSignal
        included_segments: ["Subscribed Users", "Active Users", "All"], 
        contents: { "en": msj, "es": msj }, 
        headings: { "en": titulo, "es": titulo }
      })
    });
    
    const data = await res.json();
    
    // Imprimimos la respuesta completa para ver si OneSignal se está quejando de algo más
    return { 
      statusCode: 200, 
      body: "Éxito. Enviado a: " + (data.recipients || 0) + " celular(es). Detalle: " + JSON.stringify(data)
    };
  } catch (e) {
    return { statusCode: 500, body: "Error: " + e.message };
  }
};
