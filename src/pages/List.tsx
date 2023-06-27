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

import { environment } from '../environments/environment.dev';

const List: React.FC = () => {

  const {data} = ApiMethods(`${environment.apiEndpoint}/products`);

  if (!data) {
    return <h1>Cargando informacion</h1>
  } else{
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Productos Disponibles
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((product: any) => {
            return(
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Id: {product.id}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Nombre: {product.name}</IonCardSubtitle>
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

export default List;