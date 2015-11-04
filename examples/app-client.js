/*global React */
'use strict';
/*eslint-disable no-undef*/
import helloFactory from '../source/hello';
import button from '../source/button';

/*eslint-disable no-unused-vars*/
const Hello = helloFactory({ React });
/*eslint-enable no-unused-vars*/

let word = 'world';
let mode = 'display';
let render;

const actions = {
  setWord (w) {
    word = w;
    render();
  },

  setMode (m) {
    mode = m;
    render();
  }
};

render = function () {
  ReactDOM.render(
    <Hello
      word={ word }
      mode={ mode }
      actions = { actions } />,

    document.getElementById('content')
  );
};

render();
