document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

async function renderApp() {
  let _client = await app.initialized();
  window['client'] = _client;
  client.events.on('app.activated', makeAPIcall);
  return;
}

function makeAPIcall() {
  const URL = 'https://<%= iparam.creatorDomain %>.freshdesk.com/api/v2/contacts';
  var options = {
    headers: {
      Authorization: `Basic <%= encode(iparam.api_key) %>`, // substitution happens by platform
      'Content-Type': 'application/json'
    }
  };

  client.request
    .get(URL, options)
    .then(function ({ response }) {
      let contacts = JSON.parse(response);
      document.body.insertAdjacentHTML('beforebegin', '<h2>Listing contacts</h2>');
      contacts.forEach(function renderContact({ name }) {
        return document.body.insertAdjacentHTML('afterbegin', `${name}<br>`);
      });
    })
    .catch(console.error);
}
