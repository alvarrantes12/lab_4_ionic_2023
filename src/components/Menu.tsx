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
import { hammer, listCircleOutline, skullOutline , construct } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Lista Principal',
    url: '/pages/List',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline
  },
  {
    title: 'Crear',
    url: '/pages/Create',
    iosIcon: hammer,
    mdIcon: hammer
  },
  {
    title: 'Editar',
    url: '/pages/Edit',
    iosIcon: construct,
    mdIcon: construct
  },
  {
    title: 'Eliminar',
    url: '/pages/Delete',
    iosIcon: skullOutline,
    mdIcon: skullOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Daniel Vargas Corella - C19452</IonListHeader>
          <IonNote>Laboratorio 4 Ionic 2023</IonNote>
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
