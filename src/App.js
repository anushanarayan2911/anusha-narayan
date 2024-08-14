import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages'
import MyWork from './Pages/MyWork';
import Sidebar from './components/SideBar'
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact'
import Classify from './Pages/ClassifyPage';
import UMe from './Pages/UMePage';
import Pulmo from './Pages/PulmoPage'
import AdobeBuild from './Pages/AdobeBuildPage';
import Blog from './Pages/BlogPage';
import Coaching from './Pages/CoachingPage';
import BringingHCDtoDigitalRealm from './Pages/BlogPage1';
import ImpactofAIonDigitalDesign from './Pages/BlogPage2';
import createHistory from "history/createBrowserHistory"
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import RoleofUXinSTEM from './Pages/BlogPage3';
import InnovationintheDigitalSpace from './Pages/BlogPage4';
import EthicalConsiderationsofTechEntrepreneurship from './Pages/BlogPage5';
import SustainableDigitalDesignPractices from './Pages/BlogPage6';
import SuccessfulUXinSTEM from './Pages/BlogPage7';
import FutureProofingYourTechStartup from './Pages/BlogPage8';
import AccessibilityinUXforSTEM from './Pages/BlogPage9';
import DesigningforComplexDataViz from './Pages/BlogPage10';



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
        <Route path="/Blog" component={Blog} exact />
        <Route path="/Coaching" component={Coaching} exact/>
        <Route path="/UMe" component={UMe} exact />
        <Route path="/Pulmo" component={Pulmo} exact/>
        <Route path="/AdobeBuild" component={AdobeBuild} exact/>
        <Route path="/Classify" component={Classify} exact/>
        <Route path="/BringingHCDtoDigitalRealm" component={BringingHCDtoDigitalRealm} exact/>
        <Route path="/ImpactofAIonDigitalDesign" component={ImpactofAIonDigitalDesign} exact/>
        <Route path="/RoleofUXinSTEM" component={RoleofUXinSTEM} exact/>
        <Route path="/InnovationintheDigitalSpace" component={InnovationintheDigitalSpace} exact/>
        <Route path="/EthicalConsiderationsofTechEntrepreneurship" component={EthicalConsiderationsofTechEntrepreneurship} exact/>
        <Route path="/SustainableDigitalDesignPractices" component={SustainableDigitalDesignPractices} exact />
        <Route path="/SuccessfulUXinSTEM" component={SuccessfulUXinSTEM} exact/>
        <Route path="/FutureProofingYourTechStartup" component={FutureProofingYourTechStartup} exact/>
        <Route path="/AccessibilityinUXforSTEM" component={AccessibilityinUXforSTEM} exact/>
        <Route path="/DesigningforComplexDataViz" component={DesigningforComplexDataViz} exact/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
