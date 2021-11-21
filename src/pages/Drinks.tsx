import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Drinks.css';

const Drinks: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Drinks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Drinks</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Drinks Page" />
      </IonContent>
    </IonPage>
  );
};

export default Drinks;
