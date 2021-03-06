import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Main from './component/Main/Main'
import ProductDetails from './component/ProductDetails/ProductDetails'
import './App.scss';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Your App Title Here</title>
      </Helmet>
      <BrowserRouter>
      <Switch>
       <Route path="/" exact component={Main}></Route>
       <Route path="/ProductDetails/:id" component={ProductDetails}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
