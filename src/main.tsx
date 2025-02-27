import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import  {createServer } from 'miragejs'


createServer({
  routes() {
    this.namespace ='api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          tittle: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  },
})

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
