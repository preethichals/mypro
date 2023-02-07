import logo from './logo.svg';
import './App.css';
import Header from './components/Slider';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Topbar from './components/Topbar';

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Header />
      <Product />
    </>
  );
}

export default App;
