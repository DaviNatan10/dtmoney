import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import  {createServer, Model } from 'miragejs'



createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: '6000',
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'alugel',
          type: 'withdraw',
          category: 'casa',
          amount: '1500',
          createAt: new Date('2021-02-14 11:00:00')
        }
      ]
    })
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
