const req = (method, url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }
    }
  };
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
};

const bringTop250 = (data) => {
  displayContent(data);
};

req('GET', `https://imdb-api.com/en/API/Top250Movies/k_f5cb9xe5`, bringTop250);
