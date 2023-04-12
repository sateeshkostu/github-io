import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './components/header/Header';
import Upcoming from './components/upcoming/Upcoming';
import Footer from './components/footer/Footer';



function App() {
  return (<>
    <Router>
      <Header />
      <Upcoming />
      <Footer />

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>

      </Switch>
    </Router></>
  )
}

export default App;
