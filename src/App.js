import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cards/>
      <Footer></Footer>
    </div>
  );
}

export default App;
