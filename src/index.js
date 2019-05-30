import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

function showMyName() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('jinja');
  return element;
}

  document.body.appendChild(showMyName());
