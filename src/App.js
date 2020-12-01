import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Docs from './components/Docs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/features' exact render={() => <Features />} />
          <Route path='/docs' exact render={() => <Docs />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
