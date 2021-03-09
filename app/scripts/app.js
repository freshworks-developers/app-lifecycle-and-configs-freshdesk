const notes = document.querySelector('.notes');

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      appLifeCycleEvent('Initialized');

      client.events.on('app.activated', () => {
        appLifeCycleEvent('Activated');
        client.iparams
          .get()
          .then((iparams) => {
            Object.keys(iparams).forEach(function (key) {
              notes.insertAdjacentHTML('beforeend', `<li>${key}:${iparams[key]}</li>`);
            });
          })
          .catch(console.error);
      });

      client.events.on('app.deactivated', () => {
        appLifeCycleEvent('Initialized');
      });
    })
    .catch(console.error);
}

function appLifeCycleEvent(state) {
  return notes.insertAdjacentHTML('beforebegin', `<li>${state}</li>`);
}
