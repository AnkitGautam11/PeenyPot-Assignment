import './App.css';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
