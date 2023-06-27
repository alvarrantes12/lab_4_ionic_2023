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
  IonCardContent
} from "@ionic/react";

import ApiMethods from '../commons/ApiMethods';

import { enviroment } from '../enviroment/enviroment.dev';

const List: React.FC = () => {

  const { data } = ApiMethods(`${enviroment.apiEndpoint}/api/products`);

  if (!data) {
    return <h1>Cargando....</h1>
  } else {
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Lista de Productos
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {data?.map((product: any) => {
              return (
                  <IonCard className='Ion__Card'>
                    <IonCardHeader>
                      <IonCardTitle className='Ion__Card__Title'>Nombre: {product.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className='Ion__Card__Content'>ID: {product.id}</IonCardContent>
                    <IonCardContent className='Ion__Card__Content'>El precio es: {product.price}</IonCardContent>
                  </IonCard>
              )
            })}
          </IonContent>
        </IonPage>
    )
  }

};

export default List;