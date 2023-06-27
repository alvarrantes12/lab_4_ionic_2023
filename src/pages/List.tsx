
import { useParams } from 'react-router';
import './List.css';

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
  IonButton
} from "@ionic/react";


import ApiMethods from '../commons/AphiMethods';

import { environment } from '../environments/environments.dev';

const List: React.FC = () => {

  const { data } = ApiMethods(`${environment.apiEndpoint}/products`);

  if (!data) {
    return <h2>Cargando productos...</h2>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Lab 4 Ionic
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {data?.map((product: any)=>{
            return (
              <IonCard className= 'ion-card'>
                <IonCardHeader>
                  <IonCardTitle className ='ion-card-title'> Producto: {product.name}</IonCardTitle>
                  <IonCardSubtitle className ='ion-card-subtitle'> Precio: {product.price}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            )
          })}
        </IonContent>
      </IonPage>
    )


  }


};



export default List;
