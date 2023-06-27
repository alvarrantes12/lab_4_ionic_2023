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
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  createOutline,
  trashOutline,
  listOutline,
  albumsOutline,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Listar",
    url: "/pages/List",
    iosIcon: albumsOutline,
    mdIcon: albumsOutline,
  },
  {
    title: "Crear",
    url: "/pages/Create",
    iosIcon: createOutline,
    mdIcon: createOutline,
  },
  {
    title: "Editar",
    url: "/pages/Form",
    iosIcon: listOutline,
    mdIcon: listOutline,
  },
  {
    title: "Borrar",
    url: "/pages/Delete",
    iosIcon: trashOutline,
    mdIcon: trashOutline,
  },
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
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
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
