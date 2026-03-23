exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  
  // BORRA EL TEXTO DE ABAJO Y PEGA TU LLAVE NUEVA ENTRE LAS COMILLAS
  const API_KEY = "os_v2_app_hhngt7rfjfc7bdn2n7q22jfcjsujpynd7zweph5yn3cilkp4wt2kbd7nurgenmxeujc2oix43dzstjpvznihwn4fnjgzhigzrii5nai"; 

  const notificationData = {
    app_id: APP_ID,
    included_segments: ["All", "Subscribed Users"],
    contents: { "es": "🔔 ¡Anatulio, lo logramos! Sistema activo. 🚀" },
    headings: { "es": "Chala App" }
  };

  try {
    const response = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + API_KEY.trim()
      },
      body: JSON.stringify(notificationData)
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        estado_servidor: response.status,
        respuesta_onesignal: result
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error de red: " + error.message
    };
  }
};
