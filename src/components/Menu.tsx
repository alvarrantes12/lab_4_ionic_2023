import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {  listCircleOutline, closeCircleOutline, addOutline, createOutline  } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Pagina Principal',
    url: '/pages/List',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline
  }, 
  {
    title: 'Crear',
    url: '/pages/New',
    iosIcon: addOutline,
    mdIcon: addOutline
  },
  {
    title: 'Editar',
    url: '/pages/Edit',
    iosIcon: createOutline,
    mdIcon: createOutline
  },
  {
    title: 'Eliminar',
    url: '/pages/Delete',
    iosIcon: closeCircleOutline,
    mdIcon: closeCircleOutline
  }

];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Ionic 2023</IonListHeader>
          <IonNote>Ionic Project</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
