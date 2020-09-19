import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';

import { Provider } from 'react-redux'
import store from './components/redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;
