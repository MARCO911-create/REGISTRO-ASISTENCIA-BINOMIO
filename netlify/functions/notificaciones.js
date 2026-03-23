exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  const API_KEY = "os_v2_app_hhngt7rfjfc7bdn2n7q22jfcjruypgtgj2weql45twmd4exzsjyqkdvtpt5gk6j6pzxo2c373e2a7jsyztcvypnh2hxs4syu7fc7bti";

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
        included_segments: ["Subscribed Users"], 
        contents: { "es": msj }, 
        headings: { "es": titulo }
      })
    });
    
    const data = await res.json();
    
    return { 
      statusCode: 200, 
      body: "Éxito. Notificación enviada a " + (data.recipients || 0) + " celular(es)."
    };
  } catch (e) {
    return { 
      statusCode: 500, 
      body: "Error de servidor: " + e.message 
    };
  }
};
