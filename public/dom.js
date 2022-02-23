// eslint-disable-next-line
const containar = document.querySelector('.card');
const search = document.querySelector('input');
const dataList = document.querySelector('#film');
const btn = document.querySelector('button');

const creatElement = (data) => {
  // eslint-disable-next-line
  const img = document.createElement('img');
  img.src = data.image;
  containar.appendChild(img);

  // eslint-disable-next-line
  const titleInside = document.createElement('h2');
  titleInside.textContent = data.fullTitle;
  containar.appendChild(titleInside);

  // eslint-disable-next-line
  const rate = document.createElement('h2');
  rate.textContent = data.rank;
  containar.appendChild(rate);

  // eslint-disable-next-line
  const discrption = document.createElement('p');
  containar.appendChild(discrption);
  discrption.textContent = data.crew;
};
// eslint-disable-next-line
const displayContent = (data) => {
  const moviesList = data.items;
  moviesList.forEach((element) => {
    creatElement(element);
  });
};

const optionView = (data) => {
  const opt = document.createElement('option');
  opt.textContent = data;
  dataList.appendChild(opt);
};
const filterArr = (data, val) => {
  let arr = [];
  arr = data.filter((ele) => {
    return ele.name.toLowerCase().includes(val.toLowerCase());
  });
  arr.map((e) => {
    optionView(e.name);
  });
  return arr;
};
search.addEventListener('input', () => {
  document.querySelectorAll('option').forEach((e) => {
    e.remove();
  });
  get('/search', (data) => {
    filterArr(data, search.value);
  });
});
