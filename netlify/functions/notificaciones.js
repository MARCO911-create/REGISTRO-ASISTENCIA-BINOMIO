exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  const API_KEY = "os_v2_app_hhngt7rfjfcjrlyi52hniiez6fpz7zo2azo2fc5gvwalcxnmbzrqk3pxb6dh3g23zgqojd65r4y2274zupesyqak7a";

  try {
    const res = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + API_KEY
      },
      body: JSON.stringify({
        app_id: APP_ID,
        included_segments: ["Subscribed Users", "Total Subscriptions"],
        contents: { "en": "Prueba", "es": "Prueba" }
      })
    });
    
    // Capturamos la respuesta cruda de OneSignal
    const data = await res.json();
    
    // Imprimimos la verdad absoluta en la pantalla
    return { 
      statusCode: 200, 
      body: JSON.stringify(data) 
    };
  } catch (e) {
    return { statusCode: 500, body: "Error crítico: " + e.message };
  }
};
exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  const API_KEY = "os_v2_app_hhngt7rfjfcjrlyi52hniiez6fpz7zo2azo2fc5gvwalcxnmbzrqk3pxb6dh3g23zgqojd65r4y2274zupesyqak7a";

  try {
    const res = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + API_KEY
      },
      body: JSON.stringify({
        app_id: APP_ID,
        included_segments: ["Subscribed Users", "Total Subscriptions"],
        contents: { "en": "Prueba", "es": "Prueba" }
      })
    });
    
    // Capturamos la respuesta cruda de OneSignal
    const data = await res.json();
    
    // Imprimimos la verdad absoluta en la pantalla
    return { 
      statusCode: 200, 
      body: JSON.stringify(data) 
    };
  } catch (e) {
    return { statusCode: 500, body: "Error crítico: " + e.message };
  }
};
