import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages'
import React from 'react'
import Sidebar from './components/SideBar'
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import GalleryPage from './Pages/GalleryPage';
import ContactPage from './Pages/ContactPage'
import ThePeriodSteriliserPage from './Pages/ThePeriodSteriliserPage';
import ReStandPage from './Pages/ReStandPage';
import TeddyBotPage from './Pages/TeddyBotPage';
import AramaPage from './Pages/AramaPage';
import TravelToothpastePage from './Pages/TravelToothpastePage';
import HealthTrackerAppPage from './Pages/HealthTrackerAppPage';
import TandemBikePage from './Pages/TandemBikePage';
import UMePage from './Pages/UMePage';
import PulmoPage from './Pages/PulmoPage';
import AdobeBuildPage from './Pages/AdobeBuildPage';
import CVPage from './Pages/CVPage'
import PDFPortfolioPage from './Pages/PDFPortfolioPage';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/AboutPage" component={AboutPage}/>
      <Route path="/PortfolioPage" component={PortfolioPage} exact/>
      <Route path="/GalleryPage" component={GalleryPage} exact/>
      <Route path="/ContactPage" component={ContactPage} exact />
      <Route exact path="/ThePeriodSteriliserPage" component={ThePeriodSteriliserPage}/>
      <Route path="/ReStandPage" component={ReStandPage} exact/>
      <Route path="/TeddyBotPage" component={TeddyBotPage} exact/>
      <Route path="/AramaPage" component={AramaPage} exact/>
      <Route path="/TravelToothpastePage" component={TravelToothpastePage} exact/>
      <Route path="/HealthTrackerAppPage" component={HealthTrackerAppPage} exact/>
      <Route path="/CVPage" component={CVPage} exact/>
      <Route path="/PDFPortfolioPage" component={PDFPortfolioPage} exact/>
      <Route path="/ReStandPage" component={ReStandPage} exact/>
      <Route path="/TandemBikePage" component={TandemBikePage} exact/>
      <Route path="/UMePage" component={UMePage} exact />
      <Route path="/PulmoPage" component={PulmoPage} exact/>
      <Route path="/AdobeBuildPage" component={AdobeBuildPage} exact/>
    </Switch>
  );
}

export default App;
