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
import { listCircleOutline,addCircleOutline,createOutline,trashOutline} from 'ionicons/icons';
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
    title: 'Crear un producto',
    url: '/pages/PostForm',
    iosIcon: addCircleOutline,
    mdIcon: addCircleOutline
  },
  {
    title: 'Editar un Producto',
    url: '/pages/PutForm',
    iosIcon: createOutline,
    mdIcon: createOutline
  },
  {
    title: 'Eliminar un Producto',
    url: '/pages/DeleteForm',
    iosIcon: trashOutline,
    mdIcon: trashOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Productos</IonListHeader>
          <IonNote>CRUD</IonNote>
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