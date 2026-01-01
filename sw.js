self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('message', (event) => {
    if (event.data.type === 'SEND_NOTIF') {
        const options = {
            body: event.data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/10490/10490240.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/10490/10490240.png',
            vibrate: [200, 100, 200], // C'est ici qu'on demande la vibration
            tag: 'rappel-suivi',
            renotify: true
        };
        self.registration.showNotification(event.data.title, options);
    }
});
