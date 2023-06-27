import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

import ApiMethods from "../../commons/ApiMethods";

import { enviroment } from "../../enviroment/enviroment.dev";

import "./List.css"; // Import the CSS file

const List: React.FC = () => {
  const { data, refetch } = ApiMethods(`${enviroment.apiEndpoint}/products`);

  if (!data) {
    return <h1>Cargando....</h1>;
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Lista Productos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((product: any) => {
            return (
              <IonCard className="Ion__Card">
                <IonCardHeader>
                  <IonCardSubtitle className="Ion__Card__Subtitle">
                    Id: {product.id}
                  </IonCardSubtitle>
                  <IonCardTitle className="Ion__Card__Title">
                    Nombre: {product.name}
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonCardTitle className="Ion__Card__Subtitle Precio">
                    Precio: {product.price}
                  </IonCardTitle>
                </IonCardContent>
              </IonCard>
            );
          })}
        </IonContent>
      </IonPage>
    );
  }
};

export default List;
