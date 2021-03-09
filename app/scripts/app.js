const notes = document.querySelector('.notes');

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      notes.insertAdjacentHTML('beforebegin', `<li>App Initialized </li>`);

      client.events.on('app.activated', function () {
        notes.insertAdjacentHTML('beforebegin', `<li>App Activated </li>`);
      });

      client.events.on('app.deactivated', function () {
        notes.insertAdjacentHTML('beforebegin', `<li>App Deactivated </li>`);
      });
    })
    .catch(console.error);
}
