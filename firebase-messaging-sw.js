const crypto = require('crypto');

// Tus credenciales maestras de Firebase
const PROJECT_ID = "registro-binomio";
const CLIENT_EMAIL = "firebase-adminsdk-fbsvc@registro-binomio.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0U7Z+DJ1EKR8I\nxF24QliH1AmeMVXnHmKzEr94vetW5ZHtoEqskr/ueFv8/PB56ZdTjWPLItYaj41q\njhSsj6bsdXeVp8mV6jFb7XYgpIrmjP0ksh5YrDigja92RNSlZ/VQzyzQqzXPJFgy\n28g4/Jg9s0b0p2RwnGpmiIYm/G/suJWW+kTPdz/g4BJu7dEeLPAavJvjWrU9NW5v\n8IGdO7leSIqdpZ4dobec0KjJxUytZ+rcAXc5/EgB7hXj0h3bi4iTankLy+gir7En\n6QCmlDxGqae9gtLNT6qzDpU9Mv8aZr8N2IoP1oQS3JCrzwpPwldG1txdOIINIQBj\npouz+CghAgMBAAECggEACPLbjEtLdaG1xs1Z2kY+lvT8ijNoEClXnAva4R7Joj0P\nvhNViVVZ/XdPF1GlDGO9bPnIAUFoDxbfHXHSEFMrpTHaHpzeOdiOnQF+enW35+OI\nv2ywaVWYlM0bLzsQs2miiKFTV8KbT719u/5gpAVS98LhC0yQRS9Z718oiyA9XKmh\n6m0LVcvnYxlUtrZWZfFJx6xyTVV6DUxMiHlBxqkivgqwiNmEY61viJBcmeYaMYOK\nfGS9VOUmsQnWNMWYM/jk5eqtrMy6/RGSzq/kwAEC6ydplmZ5lDjHk5W6uzqyggzy\nMEVHhYeJPbvctpIUCRzaLVUqa6iUDPyVy24tctCMbQKBgQDppqCrb6vbN+FoPzdp\naJHf/YytQiaNa5Y7r8RVI2VoACmr93TrAUFNAsJFkzkTUPd3kjPjaVGuAnm1zRlo\n5uE9OJa/gnBNdrRS7mgQNoQP5ZhROl9RmAfkW4AceMpHeA/OALOOH1MwmWCvLOOT\nIKplOZwK3A/L0ej5Yn6yBIeqpQKBgQDFk1oH+x6FbMfQu8gHTRjj/1YmapfWScCW\nKmUarFbyAq3ZWj8BxVoBFa+aHaNg7QAGqsgRv4IJdnMJobpNhPERsQN/VCdz4Zn3\n5Qbln16tf2fnt2F0cNvfbF9G7KNNQFfoHq5CYnKyKrO2pBHjwYMDnDUwpSbEUO71\nO8LPULTazQKBgHiihIAfNx8HOgUl5okw6Wg5s+FcryUDMFz+wiKnFNtegiV8rUwM\nqNeHHiDoA2b6vdppjQrUPMzYEFkSXRUxZ4fBaOvV//+u0ymiV+5PB15hz4PY3I/3\nK9P2fi21G9NMpPRanlo5yCzmc+neBl3XVsLOvMdKmYlFhsED3qAxAI7VAoGBAJDS\nL34GHhsi31wrKLXhV0tYECfcniteqCHqNW3VwW1ndVMKiYCczhpZcPwAmY8kaY55\nhGkt/P0+q5f1yf+kYKfdHnkokDqqtRc181ZA+T8nUlxQ2MhnKWOdpkDwl8q6TTVB\nt+3FB9l833oSzWIqqAPvbjWX+NCRmnZ7NZKMz+RJAoGAatxxOLWnXzu/SdUCSFQN\nKK0EpLAitP34mcTvn0JoJkKdr5+4aBacpThjv60LAjBWh2QnNu6bKK0ep6KbGwtj\n/SxqcsfDOBQLWjqDBxtLEcVB2e65RJ6/oHusdeOm6SzUpJHv14oUOAkzIQ59O6PX\nrN4kpU0IZjULzoJgvoUqBh0=\n-----END PRIVATE KEY-----\n";

// Tu celular
const TOKEN_DISPOSITIVO = "cFNDh1MwYv8PmkrJfXb-HW:APA91bEnEpApgzJUG4qF4PCo-v19ADWrtfuqKvFfDUnYT6EDXNiwLFjNmPT1fhC5X-MBeW_wwyb4ov3I8zeX9jICwOluEnnP-71TUFNE1xEvpljj_Ayl8BY";

// Horarios directamente en TU HORA LOCAL
const horarios = {
  "08:45": { title: "Chala App ⏰", body: "¡Despierta campeón! Ya son las 08:45, registra tu entrada." },
  "12:45": { title: "Chala App 🍔", body: "Son las 12:45. A comer algo rico, registra tu salida." },
  "14:15": { title: "Chala App ☀️", body: "Son las 14:15. ¡Volvemos a la carga! Marca tu entrada." },
  "18:45": { title: "Chala App 🎉", body: "Son las 18:45. Misión cumplida por hoy. Registra tu salida." },
  
  "10:30": { title: "Chala App ✨", body: "¡Ey tú! Estás haciendo un gran trabajo hoy. ¡Sigue así!" },
  "11:30": { title: "Chala App 🔥", body: "¡No te rindas! Sé que a veces cansa, pero eres el mejor." },
  "16:00": { title: "Chala App 🦉", body: "Te observo... y estoy muy orgulloso de tu dedicación." },
  "17:30": { title: "Chala App 🚀", body: "¡Ya casi termina el día! Un último esfuerzo, máquina." }
};

// Función para generar la llave de acceso a Firebase
async function obtenerTokenAcceso() {
  const header = { alg: 'RS256', typ: 'JWT' };
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;
  const payload = {
    iss: CLIENT_EMAIL,
    scope: "https://www.googleapis.com/auth/firebase.messaging",
    aud: "https://oauth2.googleapis.com/token",
    exp, iat
  };

  const base64UrlEncode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(payload)}`;
  const signature = crypto.createSign('RSA-SHA256').update(unsignedToken).sign(PRIVATE_KEY, 'base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`
  });
  const data = await res.json();
  return data.access_token;
}

// NUEVA ESTRUCTURA: Función web normal
exports.handler = async (event) => {
  // Ajustamos el reloj del servidor para que coincida con tu hora (-4)
  const date = new Date();
  date.setUTCHours(date.getUTCHours() - 4);
  const horaLocal = String(date.getUTCHours()).padStart(2, '0') + ":" + String(date.getUTCMinutes()).padStart(2, '0');
  
  let mensaje = horarios[horaLocal];

  // TRUCO DE PRUEBA: Si entras al enlace manualmente, manda esta alerta sin importar la hora
  if (!mensaje) {
    mensaje = { 
      title: "¡Prueba de Servidor Exitosa! 🚀", 
      body: `El servidor funciona perfecto. Hora detectada por el sistema: ${horaLocal}` 
    };
  }

  if (mensaje) {
    try {
      const accessToken = await obtenerTokenAcceso();
      const fcmUrl = `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`;
      
      await fetch(fcmUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: {
            token: TOKEN_DISPOSITIVO,
            notification: {
              title: mensaje.title,
              body: mensaje.body
            }
          }
        })
      });
      return { statusCode: 200, body: "Notificacion enviada correctamente." };
    } catch (error) {
      return { statusCode: 500, body: "Error con Firebase: " + error.message };
    }
  }
};

