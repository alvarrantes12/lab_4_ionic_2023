
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
  
  const {data} = ApiMethods(`${environment.apiEndpoint}/products`)

  if (!data) {
    return <h1>Cargando...</h1>
  } else{
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Productos 
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((product: any) => {
            console.log(product)
            return(
              <IonCard className='Ion_Card'> 
                <IonCardHeader>
                  <IonCardTitle className='Ion_Card_Title'> Nombre: {product.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion_Card_SubTitle'>Precio: {product.price}</IonCardSubtitle>
                  <IonCardSubtitle className='Ion_Card_SubTitle'>Id: {product.id}</IonCardSubtitle>
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
