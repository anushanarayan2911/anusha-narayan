import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages'
import React from 'react'
import Sidebar from './components/SideBar'
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact'
import UMe from './Pages/UMePage';
import Pulmo2 from './Pages/Pulmo2Page'
import AdobeBuild from './Pages/AdobeBuildPage';
import createHistory from "history/createBrowserHistory"
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import MyWork from './Pages/MyWork';


function App() {
    
  const history = createHistory()

  history.listen((location, action) => {
      window.scrollTo(0, 0)
})
  return (
    <BrowserRouter>
      <Switch history={history}>
        <Route exact path="/" component={Home}/>
        <Route path="/MyWork" component={MyWork} exact/>
        <Route path="/Gallery" component={Gallery} exact/>
        <Route path="/Contact" component={Contact} exact />
        <Route path="/UMe" component={UMe} exact />
        <Route path="/Pulmo2" component={Pulmo2} exact/>
        <Route path="/AdobeBuild" component={AdobeBuild} exact/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
