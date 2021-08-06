import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleSlider from './components/Carousel/Carousel';
import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
