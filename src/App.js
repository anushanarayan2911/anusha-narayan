import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages'
import React from 'react'
import Sidebar from './components/SideBar'
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact'
import ThePeriodProductSteriliser from './Pages/ThePeriodSteriliserPage';
import ReStand from './Pages/ReStandPage';
import TeddyBot from './Pages/TeddyBotPage';
import Arama from './Pages/AramaPage';
import TravelToothpaste from './Pages/TravelToothpastePage';
import HealthTrackerApp from './Pages/HealthTrackerAppPage';
import TandemBike from './Pages/TandemBikePage';
import UMe from './Pages/UMePage';
import Pulmo1 from './Pages/Pulmo1Page';
import AdobeBuild from './Pages/AdobeBuildPage';
import CV from './Pages/CVPage'
import PDFPortfolio from './Pages/PDFPortfolioPage';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route path="/Portfolio" component={Portfolio} exact/>
      <Route path="/Gallery" component={Gallery} exact/>
      <Route path="/Contact" component={Contact} exact />
      <Route exact path="/ThePeriodProductSteriliser" component={ThePeriodProductSteriliser}/>
      <Route path="/ReStand" component={ReStand} exact/>
      <Route path="/TeddyBot" component={TeddyBot} exact/>
      <Route path="/TravelToothpaste" component={TravelToothpaste} exact/>
      <Route path="/TandemBike" component={TandemBike} exact/>
      <Route path="/Arama" component={Arama} exact/>
      <Route path="/HealthTrackerApp" component={HealthTrackerApp} exact/>
      <Route path="/CV" component={CV} exact/>
      <Route path="/PDFPortfolio" component={PDFPortfolio} exact/>
      <Route path="/UMe" component={UMe} exact />
      <Route path="/Pulmo1" component={Pulmo1} exact/>
      <Route path="/AdobeBuild" component={AdobeBuild} exact/>
    </Switch>
  );
}

export default App;
