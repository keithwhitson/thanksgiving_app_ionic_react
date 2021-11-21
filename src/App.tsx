import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { MdOutlineCake, MdFoodBank } from "react-icons/md";
import { homeSharp, beerOutline } from 'ionicons/icons';
import { TiLeaf } from "react-icons/ti";
import Home from './pages/Home';
import Starters from './pages/Starters';
import Desserts from './pages/Desserts';
import MainCourses from './pages/MainCourses';
import Drinks from './pages/Drinks';
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/starters">
            <Starters />
          </Route>
          <Route path="/desserts">
            <Desserts />
          </Route>
          <Route path="/maincourse">
            <MainCourses />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="starters" href="/starters">
            <TiLeaf />
            <IonLabel>Starters</IonLabel>
          </IonTabButton>
          <IonTabButton tab="desserts" href="/desserts">
            <MdOutlineCake />
            <IonLabel>Desserts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="maincourse" href="/maincourse">
            <MdFoodBank />
            <IonLabel>Main Course</IonLabel>
          </IonTabButton>
          <IonTabButton tab="drinks" href="/drinks">
            <IonIcon icon={beerOutline} />
            <IonLabel>Drinks</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
