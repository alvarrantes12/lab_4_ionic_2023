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
  IonCardSubtitle
} from '@ionic/react';

import ApiMethods from '../commons/ApiMethods';

import { environment } from '../environments/enviroments.dev';

const List: React.FC = () => {

  const { data } = ApiMethods(`${environment.apiEndpoint}/products`);

  if (!data) {
    return <h1> Cargando...</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          { data?.map((product: any) => {
            return (
              <IonCard className='ion-card'>
                <IonCardHeader>
                  <IonCardTitle className='ion-card-title'>Producto: {product.name}</IonCardTitle>
                  <IonCardSubtitle className='ion-card-subtitle'>Precio: {product.price}</IonCardSubtitle>
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