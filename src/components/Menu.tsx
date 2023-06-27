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
    title: 'Lista Principal',
    url: '/pages/List',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Formulario para la elaboración de Productos',
    url: '/pages/FormCreate',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline
  },
  {
    title: 'Formulario Edicion de Productos',
    url: '/pages/FormEdit',
    iosIcon: listCircleOutline,
    mdIcon: listCircleOutline
  },
  {
    title: 'Formulario para eliminar Producto',
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
          <IonListHeader>Ionic 2023</IonListHeader>
          <IonNote>LAB4 IONIC</IonNote>
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