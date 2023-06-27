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
} from "@ionic/react";
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environment.dev';

const List: React.FC = () => {
  const {data, postMethod} = ApiMethods(`${environment.apiEndpoint}/products`);
  
  if (!data){
    return <h1>Estamos cargando su información...</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ fontWeight: 'bold', textAlign: 'center'}}>
              Lista de todos los productos
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent >
          {data?.map((product: any) => {
            return (
              <IonCard >
                <IonCardHeader  style={{ fontWeight: 'bold' , textAlign: 'center' , background: '#90e0ef'}}>
                  <IonCardTitle style={{ fontWeight: 'bold', color: 'black'}}>ID: {product.id}</IonCardTitle>
                  <IonCardTitle style={{ fontWeight: 'bold', color: 'black'}}>Nombre del producto: {product.name}</IonCardTitle>
                  <IonCardTitle style={{ fontWeight: 'bold', color: 'black'}}>Precio del producto: {product.price}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            )
          })}
        </IonContent>
      </IonPage>
    );
  }

};
export default List;
