exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  
  // ASEGÚRATE QUE ESTA SEA LA "REST API KEY" (LA LARGA)
  const REST_KEY = "os_v2_app_hhngt7rfjfc7bdn2n7q22jfcjszxdbyyt3zei3vwtyq7qj3y2cdtjuk3qa6s76r4dostqawua5uud5fhoyojs2fsc45miwg4mydtq3a"; 

  try {
    const res = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + REST_KEY.trim()
      },
      body: JSON.stringify({
        app_id: APP_ID,
        included_segments: ["All"],
        contents: { "es": "🔔 ¡Anatulio, por fin funciona! 🚀" },
        headings: { "es": "Chala App" }
      })
    });

    const data = await res.json();
    return {
      statusCode: 200,
      body: "ESTADO: " + res.status + " | RESPUESTA: " + JSON.stringify(data)
    };
  } catch (e) {
    return { statusCode: 500, body: "Error: " + e.message };
  }
};
