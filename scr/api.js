function req(method, url, payload, cb) {
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
  xhr.send(payloadString);
}

const get = function (url, cb) {
  req('GET', url, null, cb);
};
const post = function (url, payload, cb) {
  req('POST', url, payload, cb);
};

const bringTop250 = (data) => {
  displayContent(data);
};
// let value = '';
// get(`https://imdb-api.com/en/API/Search/k_f5cb9xe5/${value}`, bringTop250);
// get(`https://imdb-api.com/en/API/Top250Movies/k_5v7i5b9p`, bringTop250);
