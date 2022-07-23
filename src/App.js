import { Route,  Routes  } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container"></div>
      <Routes>

      
      <Route path="/" exact element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetails/>} />
            <Route path="*" element={<PageNotFound/>} />
      
      </Routes>
      <div/>
      <Footer/>
    </div>
  );
}

export default App;
