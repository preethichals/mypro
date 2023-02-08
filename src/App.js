import logo from './logo.svg';
import './App.css';
import Header from './components/Slider';
import Navbar from './components/Navbar';

import Topbar from './components/Topbar';
import ContainerBase from './components/ContainerBase';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Header />
      <ContainerBase />
      
      <ProductContainer />
      
    </>
  );
}

export default App;
