importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// 1. Configuración de TU proyecto Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDEY...", 
  authDomain: "registro-binomio.firebaseapp.com",
  projectId: "registro-binomio",
  storageBucket: "registro-binomio.appspot.com",
  messagingSenderId: "1062947157833",
  appId: "1:1062947157833:web:..."
});

const messaging = firebase.messaging();

// 2. Este es el "Escuchador" de mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano ', payload);
  
  const notificationTitle = payload.notification.title || "Chala App 🔔";
  const notificationOptions = {
    body: payload.notification.body || "¡No olvides registrar tu asistencia!",
    icon: '/icon.png', // Opcional: si tienes un icono en la raíz
    badge: '/icon.png', // Opcional: el icono que sale en la barra arriba
    vibrate: [200, 100, 200], // Hace que el celular vibre: vibra, para, vibra
    tag: 'asistencia-notificacion', // Evita que se amontonen mil notificaciones
    renotify: true
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
