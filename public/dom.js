// eslint-disable-next-line
const containar = document.querySelector('.card');

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
  console.log('hiiii');
  const moviesList = data.items;
  moviesList.forEach((element) => {
    creatElement(element);
  });
  // console.log(data.items[0]);
  // creatElement(data.items[0]);
};
