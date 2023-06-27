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
import { heartOutline, heartSharp, listCircleOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Lista Productos',
    url: '/pages/List',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Formulario editar productos',
    url: '/pages/FormEdit',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline
  },
  {
    title: 'Formulario crear productos',
    url: '/pages/FormCreate',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline
  },
  {
    title: 'Formulario borrar productos',
    url: '/pages/FormDelete',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Lab 4 Ionic</IonListHeader>
          <IonNote>Isaac Villalobos Gonzalez - C18512</IonNote>
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
