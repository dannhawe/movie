import * as signalR from '@aspnet/signalr';
import 'antd/dist/antd.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './Redux/ConfigStore';
import reportWebVitals from './reportWebVitals';
import { DOMAIN } from './util/Settings/config';

export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();


connection.start().then(() => {
  ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root')
  );
}).catch((err)=>{
  console.log(err)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
