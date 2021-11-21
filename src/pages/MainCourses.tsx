import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MainCourses.css';

const MainCourses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Main Course</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Main Course Page" />
      </IonContent>
    </IonPage>
  );
};

export default MainCourses;
