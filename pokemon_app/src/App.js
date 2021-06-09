import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import PokemonsContainer from './containers/PokemonsContainer';
import './App.css'

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  });

  return (
    <div>
    <ApolloProvider client={client}>
        <PokemonsContainer />
    </ApolloProvider>
    </div>
      
  );
}

export default App;
