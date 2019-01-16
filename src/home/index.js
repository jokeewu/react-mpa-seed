import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorker from '@/serviceWorker';

class Test extends Component {
  render() {
    return <div>Home Test</div>
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);

ServiceWorker.unregister();