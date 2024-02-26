import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useSelector } from 'react-redux';
import { store } from './configureStore/configureStore';
import SimpleBackdrop from './components/Loader/loader';

const RootComponent = () => {
  const loader = useSelector((state) => state.users.loader);

  return (
    <>
      {loader && <SimpleBackdrop />}
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

reportWebVitals();
