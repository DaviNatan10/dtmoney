import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import  {createServer, Model } from 'miragejs'


createServer({

  models: {
    transaction: Model,
  },
  routes() {
    this.namespace ='api';
    this.get('/transactions', () => {
       return this.schema.all('transaction')
    })
    this.post ('/transactions', (schema, request)=> {
      const data =JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },

})

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
