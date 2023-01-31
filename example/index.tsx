import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button}  from '../src/components/index';

const App = () => {
  return (
    <div>
      <Button
        className="button__small clear"
        type="button"
        onClick={() => console.log('CLICKC BOTON')}
        label="Ingresar"
      ></Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
