const notes = document.querySelector('.notes');

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

/** ~ playground starts ~ */
function renderApp() {
  app
    .initialized()
    .then(function onInit(_client) {
      window['client'] = _client;
      appLifeCycleEvent('Initialized');

      client.events.on('app.activated', () => {
        appLifeCycleEvent('Activated');
      });

      client.events.on('app.deactivated', () => {
        appLifeCycleEvent('Deactivated');
      });
    })
    .catch(console.error);
}

function appLifeCycleEvent(state) {
  return notes.insertAdjacentHTML('beforebegin', `<li>${state}</li>`);
}

/** ~play ground ends~ */
