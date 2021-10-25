import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Slide from './pages/Slide';
import SlideshowBar from './components/slideshowBar/SlideshowBar';
import './App.css';

function App() {
  const saveSlideState = (e) => {
    console.log(e);
  };

  return (
    <Router>
      <div className='App'>
        <SlideshowBar saveSlideState={saveSlideState} />
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
  );
}

export default App;
