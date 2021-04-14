import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apollo/apollo';

import Home from "./containers/Home/home";
export default function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <Home />
      </ApolloProvider>
  );
}
