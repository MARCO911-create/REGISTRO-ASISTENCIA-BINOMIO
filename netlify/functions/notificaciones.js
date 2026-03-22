exports.handler = async () => {
  const APP_ID = "39da69fe-2549-45f0-8dba-6fe1ad24a24c";
  const API_KEY = "os_v2_app_hhngt7rfjfc7bdn2n7q22jfcjth3b6i3736ujmm7s4wjm33dzhdpfgl7qihyrckj7xznp3oeyp2iwuchycrozabjph3mtpxiai2f67i";

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
        contents: { "en": "Prueba", "es": "Prueba" }
      })
    });
    
    // Aquí capturamos la respuesta cruda de OneSignal
    const data = await res.json();
    
    return { 
      statusCode: 200, 
      body: JSON.stringify(data) 
    };
  } catch (e) {
    return { 
      statusCode: 500, 
      body: "Error de servidor: " + e.message 
    };
  }
};
