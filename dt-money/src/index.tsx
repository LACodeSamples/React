import { createServer, Model } from 'miragejs';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({

  models: {
    transaction  : Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions :[
        {
          id: 1,
          title: "freelance de website",
          type: 'deposit',
          category: 'dev',
          value: 6000,
          createdAt: new Date('2022-02-19 09:00:00')
        },
        {
          id: 2,
          title: "aluguel",
          type: 'withdraw',
          category: 'alugueis',
          value: 3000,
          createdAt: new Date('2022-02-19 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
