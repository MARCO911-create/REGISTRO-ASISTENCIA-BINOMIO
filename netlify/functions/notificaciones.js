const crypto = require('crypto');
const PROJECT_ID = "registro-binomio";
const CLIENT_EMAIL = "firebase-adminsdk-fbsvc@registro-binomio.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0U7Z+DJ1EKR8I\nxF24QliH1AmeMVXnHmKzEr94vetW5ZHtoEqskr/ueFv8/PB56ZdTjWPLItYaj41q\njhSsj6bsdXeVp8mV6jFb7XYgpIrmjP0ksh5YrDigja92RNSlZ/VQzyzQqzXPJFgy\n28g4/Jg9s0b0p2RwnGpmiIYm/G/suJWW+kTPdz/g4BJu7dEeLPAavJvjWrU9NW5v\n8IGdO7leSIqdpZ4dobec0KjJxUytZ+rcAXc5/EgB7hXj0h3bi4iTankLy+gir7En\n6QCmlDxGqae9gtLNT6qzDpU9Mv8aZr8N2IoP1oQS3JCrzwpPwldG1txdOIINIQBj\npouz+CghAgMBAAECggEACPLbjEtLdaG1xs1Z2kY+lvT8ijNoEClXnAva4R7Joj0P\nvhNViVVZ/XdPF1GlDGO9bPnIAUFoDxbfHXHSEFMrpTHaHpzeOdiOnQF+enW35+OI\nv2ywaVWYlM0bLzsQs2miiKFTV8KbT719u/5gpAVS98LhC0yQRS9Z718oiyA9XKmh\n6m0LVcvnYxlUtrZWZfFJx6xyTVV6DUxMiHlBxqkivgqwiNmEY61viJBcmeYaMYOK\nfGS9VOUmsQnWNMWYM/jk5eqtrMy6/RGSzq/kwAEC6ydplmZ5lDjHk5W6uzqyggzy\nMEVHhYeJPbvctpIUCRzaLVUqa6iUDPyVy24tctCMbQKBgQDppqCrb6vbN+FoPzdp\naJHf/YytQiaNa5Y7r8RVI2VoACmr93TrAUFNAsJFkzkTUPd3kjPjaVGuAnm1zRlo\n5uE9OJa/gnBNdrRS7mgQNoQP5ZhROl9RmAfkW4AceMpHeA/OALOOH1MwmWCvLOOT\IKplOZwK3A/L0ej5Yn6yBIeqpQKBgQDFk1oH+x6FbMfQu8gHTRjj/1YmapfWScCW\nKmUarFbyAq3ZWj8BxVoBFa+aHaNg7QAGqsgRv4IJdnMJobpNhPERsQN/VCdz4Zn3\n5Qbln16tf2fnt2F0cNvfbF9G7KNNQFfoHq5CYnKyKrO2pBHjwYMDnDUwpSbEUO71\nO8LPULTazQKBgHiihIAfNx8HOgUl5okw6Wg5s+FcryUDMFz+wiKnFNtegiV8rUwM\nqNeHHiDoA2b6vdppjQrUPMzYEFkSXRUxZ4fBaOvV//+u0ymiV+5PB15hz4PY3I/3\nK9P2fi21G9NMpPRanlo5yCzmc+neBl3XVsLOvMdKmYlFhsED3qAxAI7VAoGBAJDS\L34GHhsi31wrKLXhV0tYECfcniteqCHqNW3VwW1ndVMKiYCczhpZcPwAmY8kaY55\nhGkt/P0+q5f1yf+kYKfdHnkokDqqtRc181ZA+T8nUlxQ2MhnKWOdpkDwl8q6TTVB\nt+3FB9l833oSzWIqqAPvbjWX+NCRmnZ7NZKMz+RJAoGAatxxOLWnXzu/SdUCSFQN\nKK0EpLAitP34mcTvn0JoJkKdr5+4aBacpThjv60LAjBWh2QnNu6bKK0ep6KbGwtj\n/SxqcsfDOBQLWjqDBxtLEcVB2e65RJ6/oHusdeOm6SzUpJHv14oUOAkzIQ59O6PX\nrN4kpU0IZjULzoJgvoUqBh0=\n-----END PRIVATE KEY-----\n";
const TOKEN_DISPOSITIVO = "cFNDh1MwYv8PmkrJfXb-HW:APA91bEnEpApgzJUG4qF4PCo-v19ADWrtfuqKvFfDUnYT6EDXNiwLFjNmPT1fhC5X-MBeW_wwyb4ov3I8zeX9jICwOluEnnP-71TUFNE1xEvpljj_Ayl8BY";

const mensajes = {
  mañana: ["¡Buen día Anatulio! Hora de marcar entrada. 🚀", "¡A darle con todo Binomio! Registra tu ingreso. ☀️"],
  motiva1: ["Anatulio, ¡el éxito es la suma de esfuerzos diarios! 💪", "¡Eres capaz de lograr grandes cosas hoy! ✨"],
  almuerzo: ["¡Buen provecho! Registra tu salida a comer. 🍔", "Hora de recargar energías. ¡Marca tu salida! 🥗"],
  tarde: ["¡De vuelta al ruedo! Registra tu reingreso. 💼", "¡A cerrar el día con broche de oro! Marca entrada. ⚡"],
  motiva2: ["¡No te detengas, vas por excelente camino! 🔥", "La disciplina es el puente entre metas y logros. 🏆"],
  motiva3: ["¡Último esfuerzo del día! Tú puedes. 🛠️", "Mantén el enfoque, ya casi terminamos la jornada. 🎯"],
  salida: ["¡Misión cumplida! Registra tu salida y descansa. 🎉", "Buen trabajo hoy. ¡No olvides marcar tu salida! 🌙"],
  motiva4: ["¡Día superado! Disfruta tu descanso, te lo ganaste. 🏠", "Mañana será un nuevo día para brillar. ¡Buenas noches! ✨"]
};

function random(lista) { return lista[Math.floor(Math.random() * lista.length)]; }

async function obtenerTokenAcceso() {
  const header = { alg: 'RS256', typ: 'JWT' };
  const iat = Math.floor(Date.now() / 1000);
  const payload = { iss: CLIENT_EMAIL, scope: "https://www.googleapis.com/auth/firebase.messaging", aud: "https://oauth2.googleapis.com/token", exp: iat + 3600, iat };
  const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const unsigned = `${b64(header)}.${b64(payload)}`;
  const sign = crypto.createSign('RSA-SHA256').update(unsigned).sign(PRIVATE_KEY, 'base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const res = await fetch("https://oauth2.googleapis.com/token", { method: "POST", body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${unsigned}.${sign}` });
  const data = await res.json(); return data.access_token;
}

exports.handler = async () => {
  const d = new Date(); d.setUTCHours(d.getUTCHours() - 4);
  const h = d.getHours(); const m = d.getMinutes();
  let t = "Chala App 🔔", c = "¡No olvides marcar!";

  if (h < 10) c = random(mensajes.mañana);
  else if (h < 12) { t = "Impulso Mañanero ✨"; c = random(mensajes.motiva1); }
  else if (h < 14) c = random(mensajes.almuerzo);
  else if (h < 15) c = random(mensajes.tarde);
  else if (h < 16) { t = "Energía de Tarde 🔥"; c = random(mensajes.motiva2); }
  else if (h < 18) { t = "Recta Final 🏁"; c = random(mensajes.motiva3); }
  else if (h < 20) c = random(mensajes.salida);
  else { t = "Reflexión del Día 🌙"; c = random(mensajes.motiva4); }

  try {
    const token = await obtenerTokenAcceso();
    await fetch(`https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`, {
      method: 'POST', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: { token: TOKEN_DISPOSITIVO, notification: { title: t, body: c } } })
    });
    return { statusCode: 200, body: "OK: " + c };
  } catch (e) { return { statusCode: 500, body: e.message }; }
};
