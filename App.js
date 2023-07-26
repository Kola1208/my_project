import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Map from './components/Map';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '10px' }}>
            <Map />
            <Form />
            <Card />
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
