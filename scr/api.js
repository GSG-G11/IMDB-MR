function req(method, url, cb, payload) {
  const xhr = new XMLHttpRequest();
  const payloadString = JSON.stringify(payload);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      } else {
        cb(true);
      }
    }
  };
  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(payload);
}
