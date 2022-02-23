const containar = document.querySelector('.card');
const search = document.querySelector('input');
const dataList = document.querySelector('#film');
const btn = document.querySelector('button');

const displayContent = (data) => {
  while (containar.firstChild) {
    containar.removeChild(containar.lastChild);
  }
  const img = document.createElement('img');
  img.src = data.results[0].image;
  containar.appendChild(img);

  const titleInside = document.createElement('h2');
  titleInside.textContent = data.expression;
  containar.appendChild(titleInside);
};

const optionView = (data) => {
  const opt = document.createElement('option');
  opt.textContent = data.name;
  dataList.appendChild(opt);
};
search.addEventListener('input', () => {
  document.querySelectorAll('option').forEach((e) => {
    e.remove();
  });
  req(
    'POST',
    '/search',
    (data) => {
      data.forEach((e) => {
        optionView(e);
      });
    },
    search.value
  );
});

btn.addEventListener('click', () => {
  req(
    'POST',
    '/searchBtn',
    (data) => {
      displayContent(JSON.parse(data));
    },
    search.value
  );
});
