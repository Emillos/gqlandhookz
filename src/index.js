import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { gql } from 'apollo-boost';




const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const WithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<WithProvider />, document.getElementById('content'));
