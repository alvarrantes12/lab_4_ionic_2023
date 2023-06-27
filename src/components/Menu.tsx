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
import { heartOutline, heartSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Lista de productos',
    url: '/pages/List',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },

  {
    title: 'Crear producto',
    url: '/pages/form/FormCreate',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },

  {
    title: 'Editar producto',
    url: '/pages/form/FormEdit',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },

  {
    title: 'Eliminar producto',
    url: '/pages/form/FormDelete',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }

];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Productos</IonListHeader>
          <IonNote>Lab 4</IonNote>
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
