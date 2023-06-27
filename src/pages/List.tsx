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
} from "@ionic/react";

import ApiMethods from '../commons/ApiMethods';

import { enviroment } from '../enviroment/enviroment.dev';

const List: React.FC = () => {

  const { data, refetch } = ApiMethods(`${enviroment.apiEndpoint}/products`);

  if (!data) {
    return <h1>Cargando....</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Tienda de David
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((product: any) => {
            return (
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Nombre del producto: {product.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Id: {product.id}</IonCardSubtitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Precio: {product.price}</IonCardSubtitle>
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
