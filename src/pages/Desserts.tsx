import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Desserts.css';

const Desserts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Desserts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Desserts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Desserts Page" />
      </IonContent>
    </IonPage>
  );
};

export default Desserts;
