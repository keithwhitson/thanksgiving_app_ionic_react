import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Starters.css';

const Starters: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Starters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Starters</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Starters Page" />
      </IonContent>
    </IonPage>
  );
};

export default Starters;
