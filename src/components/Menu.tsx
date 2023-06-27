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
import { listOutline, listSharp, createOutline, createSharp, pencilOutline, pencilSharp, trashOutline, trashSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Lista de los productos',
    url: '/pages/List',
    iosIcon: listOutline,
    mdIcon: listSharp
  },
  {
    title: 'Crear producto',
    url: '/pages/Create',
    iosIcon: createOutline,
    mdIcon: createSharp
  },
  {
    title: 'Actualizar producto',
    url: '/pages/Edit',
    iosIcon: pencilOutline,
    mdIcon: pencilSharp
  },
  {
    title: 'Eliminar producto',
    url: '/pages/Delete',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Ionic 2023</IonListHeader>
          <IonNote>Laboratorio 4</IonNote>
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
