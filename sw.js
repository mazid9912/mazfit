self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Actif');
});

// Cette partie surveille les messages envoyés par l'app pour programmer une alerte
self.addEventListener('message', (event) => {
  if (event.data.type === 'SCHEDULE_NOTIFICATION') {
    const delay = event.data.delay;
    setTimeout(() => {
      self.registration.showNotification(event.data.title, {
        body: event.data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/10490/10490240.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/10490/10490240.png'
      });
    }, delay);
  }
});
