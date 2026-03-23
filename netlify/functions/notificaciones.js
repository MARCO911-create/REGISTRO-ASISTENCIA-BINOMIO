exports.handler = async () => {
  // Asegúrate de que este sea tu ID de la captura 1000217861.jpg
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  
  // USA LA CLAVE QUE TERMINA EN "qak7a" (la de tu captura 1000217860.jpg)
  const API_KEY = "os_v2_app_hhngt7rfjfc7bdn2n7q22jfcjrlyi52hniiez6fpz7zo2azo2fc5gvwalcxnmbzrqk3pxb6dh3g23zgqojd65r4y2274zupesyqak7a";

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Basic ${API_KEY.trim()}`
  };

  const body = JSON.stringify({
    app_id: APP_ID,
    // "All" enviará a todos los que aparezcan en tu lista de "Audiencia"
    included_segments: ["All"], 
    contents: { "es": "🔔 ¡Anatulio, prueba de sistema exitosa! 🚀", "en": "System test success!" },
    headings: { "es": "Chala App", "en": "Chala App" },
    // Esto obliga a que la notificación aparezca aunque la app esté cerrada
    android_accent_color: "FF4CAF50",
    priority: 10
  });

  try {
    const response = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: headers,
      body: body
    });

    const result = await response.json();

    // Si OneSignal responde con error, aquí lo veremos detallado
    return {
      statusCode: 200,
      body: JSON.stringify({
        mensaje: "Respuesta de OneSignal",
        resultado: result,
        estado_peticion: response.status
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error de red: " + error.message
    };
  }
};
