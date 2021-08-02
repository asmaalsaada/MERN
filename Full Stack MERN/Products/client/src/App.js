import './App.css';
import { Router } from '@reach/router';
import ProductDetails from './components/ProductDetails';
import Main from './views/Main';
import ProductUpdate from './views/ProductUpdate';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <ProductDetails path="products/:id"/>
        <ProductUpdate path="products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
