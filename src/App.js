import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './Store';
import Home from './pages/Home';
import Slide from './pages/Slide';
import SlideshowBar from './components/slideshowBar/SlideshowBar';
import './App.css';

function App() {
  return (
    <Store>
      <Router>
        <div className='App'>
          <SlideshowBar />
          <hr />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/:id'>
              <Slide />
            </Route>
          </Switch>
        </div>
      </Router>
    </Store>
  );
}

export default App;
