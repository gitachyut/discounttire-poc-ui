import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apollo/apollo';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./containers/Home/home";
import ProductDetails from './containers/Product/details'
import ProductByCategory from "./containers/Product/by-category";
export default function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/products/details/:id">
                <ProductDetails />
              </Route>
              <Route path="/categories/:id/products">
                <ProductByCategory />
              </Route>
            </Switch>
        </Router>
      </ApolloProvider>
  );
}
