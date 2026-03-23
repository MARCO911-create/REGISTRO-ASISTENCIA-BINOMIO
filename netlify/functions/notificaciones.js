exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  const API_KEY = "os_v2_app_hhngt7rfjfc7bdn2n7q22jfcjrj7uhoso5bebpvslqrdjrcmqocotz655uhf5tria3jmnrcxtqsgrdglbhzwbd72pt322mkxaceouci"; 

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
        contents: { "en": "Prueba de conexión", "es": "Prueba de conexión" }, 
        headings: { "en": "Chala App", "es": "Chala App" }
      })
    });
    
    // Aquí capturamos la verdad sin maquillar
    const data = await res.json();
    
    return { 
      statusCode: 200, 
      body: "RESPUESTA DE ONESIGNAL: " + JSON.stringify(data)
    };
  } catch (e) {
    return { statusCode: 500, body: "Error: " + e.message };
  }
};
