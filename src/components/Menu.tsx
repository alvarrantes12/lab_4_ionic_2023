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
import { heartOutline, heartSharp, listCircleOutline, flowerOutline, sparklesOutline, heartDislikeCircleOutline } from 'ionicons/icons';
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
    title: 'Formulario para crear un nuevo producto',
    url: '/pages/CreateProduct',
    iosIcon: flowerOutline,
    mdIcon: flowerOutline
  },

  {
    title: 'Formulario para editar un producto',
    url: '/pages/EditProduct',
    iosIcon: sparklesOutline ,
    mdIcon: sparklesOutline 
  },
  
  {
    title: 'Formulario para eliminar un producto',
    url: '/pages/DeleteProduct',
    iosIcon: heartDislikeCircleOutline,
    mdIcon: heartDislikeCircleOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Laboratorio 4</IonListHeader>
          <IonNote>Raquel Arias Murillo C00708</IonNote>
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
