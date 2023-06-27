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
import { enviroment } from '../enviroments/enviroment.dev';

import ApiMethods from '../commons/ApiMethods';

const List: React.FC = () => {

  const { data } = ApiMethods(`${enviroment.apiEndpoint}/products`);

  if (!data) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className='Ion__Title'>
              Lista de Productos
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((product: any) => (
            <IonCard className='Ion__Card' key={product.id}>
              <IonCardHeader>
                <IonCardTitle className='Ion__Card__Title'>{product.name}</IonCardTitle>
                <IonCardSubtitle className='Ion__Card_SubTitle'>Precio: {product.price}</IonCardSubtitle>
                <IonCardSubtitle className='Ion__Card_SubTitle'>ID: {product.id}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          ))}
        </IonContent>
      </IonPage>
    )
  }

};

export default List;