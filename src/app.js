/*

const logo = require('./logo.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess = require('./villianess.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess2 = require('./villianess2.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess3 = require('./villianess3.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');
const villianess4 = require('./villianess4.jpeg?sizes=200w+320w+420w+512w+640w+720w+800w+960w+1024w+1166w+1280w+1400w');



[logo, villianess, villianess2, villianess3, villianess4].forEach((src) => {
  const image = new Image();
  image.className = 'lazyload'
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(max-width: 1400px) 100vw, 1400px';
  image.style = 'width: 100%';
  const container = document.getElementById ("container");
  container.appendChild (image);
});

*/

function getImage(image) {
  return require('./images/' + image);
}

// loaded via srcset loader as specified in the webpack config
['logo.jpeg', 'villianess.jpeg', 'villianess2.jpeg', 'villianess3.jpeg', 'villianess4.jpeg', 'villianess5.jpeg', 'villianess6.jpeg', 'villianess7.jpeg', 'villianess8.jpeg', 'villianess9.jpeg', 'villianess10.jpeg'].map(img => getImage(img)).forEach((src) => {
  const image = new Image();
  image.className = 'lazyload'
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(max-width: 1400px) 100vw, 1400px';
  image.style = 'width: 100%';
  const container = document.getElementById ("container");
  container.appendChild(image);
});


/*
[whale, paris].forEach((src) => {
  const image = new Image();
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(min-width: 1000px) 500px, 200px';
  image.style = 'width: 100%';
  document.body.appendChild(image);
});

const normalWhale = require('../whale.jpeg');
const normalParis = require('../paris.jpeg');

[normalWhale, normalParis].forEach((src) => {
  const image = new Image();
  image.src = src;
  image.style = 'width: 100%';
  document.body.appendChild(image);
});

*******************************************************************************


import { buildSrcSet, blurPlaceholder } from 'srcset-loader/runtime';
import whale from '../whale.jpeg?sizes=200w+800w';
import paris from '../paris.jpeg?sizes=200w+800w';

function createDivWithClass(className) {
  const div = document.createElement('div');
  div.className = className;
  return div;
}

function createPlaceholder(src, placeholderOptions) {
  const wrapper = createDivWithClass('wrapper');
  const ratioPlaceholder = createDivWithClass('');
  ratioPlaceholder.style.setProperty('padding-bottom', 100 / src.placeholder.ratio + '%');

  const imageWrapper = createDivWithClass('image-wrapper');

  const placeholderImage = new Image();
  placeholderImage.className = 'image placeholder';
  if (placeholderOptions.image) {
    placeholderImage.src = src.placeholder.url;
    placeholderImage.src = blurPlaceholder(src.placeholder);
  }

  if (placeholderOptions.color) {
    placeholderImage.style.setProperty('background-color', 'rgba(' + src.placeholder.color.join(',') + ')');
  }

  const image = new Image();
  image.className = 'image fullsize';
  image.srcset = buildSrcSet(src);
  image.src = src.sources['800w'];
  image.sizes = '(min-width: 1000px) 500px, 200px';
  image.onload = function onload() {
    image.style.setProperty('visibility', 'visible');
    image.style.setProperty('opacity', '1');
    placeholderImage.style.setProperty('visibility', 'hidden');
    placeholderImage.style.setProperty('opacity', '0');
  };

  imageWrapper.appendChild(placeholderImage);
  imageWrapper.appendChild(image);

  wrapper.appendChild(ratioPlaceholder);
  wrapper.appendChild(imageWrapper);

  return wrapper;
}

[whale, paris].forEach((src) => {
  // just color
  const color = createPlaceholder(src, { color: true });
  document.querySelector('#color').appendChild(color);

  // just image
  const image = createPlaceholder(src, { image: true });
  document.querySelector('#image').appendChild(image);

  // image and color-fallback
  const fallback = createPlaceholder(src, { image: true, color: true });
  document.querySelector('#fallback').appendChild(fallback);
});

*******************************************************************************

function getImage(image) {
  return require('./images/' + image);
}

// loaded via srcset loader as specified in the webpack config
['whale.jpeg', 'paris.jpeg'].map(img => getImage(img)).forEach((src) => {
  const image = new Image();
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(min-width: 1000px) 500px, 200px';
  image.style = 'width: auto';
  document.body.appendChild(image);
});

const whale = require('../whale.jpeg');
const paris = require('../paris.jpeg');

// just normal images as they are not in `/images/`
[whale, paris].forEach((src) => {
  const image = new Image();
  image.src = src;
  image.style = 'width: 100%';
  document.body.appendChild(image);
});


*******************************************************************************

import whale from '../whale.jpeg';
import paris from '../paris.jpeg';

// loaded via srcset loader as specified in the webpack config
const whaleImage = new Image();
whaleImage.srcset = whale.srcSet;
whaleImage.src = whale.sources['800w'];
whaleImage.sizes = '(min-width: 1000px) 500px, 200px';
whaleImage.style = 'width: auto';
document.body.appendChild(whaleImage);

// loaded like a normal image
const parisImage = new Image();
parisImage.src = paris;
parisImage.style = 'width: 100%';
document.body.appendChild(parisImage);



*******************************************************************************

import whale from '../whale.jpeg?sizes=200w+800w';
import paris from '../paris.jpeg?sizes=200w+800w';

function createDivWithClass(className) {
  const div = document.createElement('div');
  div.className = className;
  return div;
}

function createPlaceholder(src, placeholderOptions) {
  const wrapper = createDivWithClass('wrapper');
  const ratioPlaceholder = createDivWithClass('');
  ratioPlaceholder.style.setProperty('padding-bottom', 100 / src.placeholder.ratio + '%');

  const imageWrapper = createDivWithClass('image-wrapper');

  const placeholderImage = new Image();
  placeholderImage.className = 'image placeholder';
  if (placeholderOptions.image) {
    placeholderImage.src = src.placeholder.url;
  }
  if (placeholderOptions.color) {
    placeholderImage.style.setProperty('background-color', 'rgba(' + src.placeholder.color.join(',') + ')');
  }

  const image = new Image();
  image.className = 'image fullsize';
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(min-width: 1000px) 500px, 200px';
  image.onload = function onload() {
    image.style.setProperty('visibility', 'visible');
    image.style.setProperty('opacity', '1');
    placeholderImage.style.setProperty('visibility', 'hidden');
    placeholderImage.style.setProperty('opacity', '0');
  };

  imageWrapper.appendChild(placeholderImage);
  imageWrapper.appendChild(image);

  wrapper.appendChild(ratioPlaceholder);
  wrapper.appendChild(imageWrapper);

  return wrapper;
}

[whale, paris].forEach((src) => {
  // just color
  const color = createPlaceholder(src, { color: true });
  document.querySelector('#color').appendChild(color);

  // just image
  const image = createPlaceholder(src, { image: true });
  document.querySelector('#image').appendChild(image);

  // image and color-fallback
  const fallback = createPlaceholder(src, { image: true, color: true });
  document.querySelector('#fallback').appendChild(fallback);
});



*******************************************************************************


import whale from '../whale.jpeg?sizes=200w+800w';

// alternative syntax
import paris from '../paris.jpeg?sizes[]=200w&sizes[]=800w';

[whale, paris].forEach((src) => {
  const image = new Image();
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(min-width: 1000px) 800px, 200px';
  image.style = 'width: 100%';
  document.body.appendChild(image);
});

*******************************************************************************


*/

//import lazysizes from 'lazysizes';
