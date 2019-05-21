import React from 'react';
import Example from './counter'
import './App.css';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const query = gql`
  {
    books {
      author
      title
    }
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Query query={query}>
          {result => {
            if (result.loading) return <p>loading...</p>;
            if (result.error) return <p>{result.error.message}</p>;
            return (
              <div>
                {result.data.books.map((book) => {
                  return (
                    <div>
                      <h6>Title: {book.title || 'no name specified'}</h6>
                      <h6>Author: {book.author || 'no email specified'}</h6>
                    </div>
                  )
                })}

              </div>
            )
          }}
        </Query>
        <img src={''} className="App-logo" alt="logo" />
        <Example />
      </header>
    </div>
  );
}

export default App;
