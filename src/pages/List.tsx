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
} 
from '@ionic/react'
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environment.dev';

const List: React.FC = () => {
  const { data } = ApiMethods(`${environment.apiEndpoint}/products`);

  if(!data){
    return <h1>Cargando Informacion...</h1>
  } else{
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Lab 4 Ionic - Lista de Productos
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        { data?.map((product: any) => {
          return(
            <IonCard className='Ion-Card'>
              <IonCardHeader>
                <IonCardSubtitle className='Ion-Card-SubTitle-ID'>ID: {product.id}</IonCardSubtitle>
                <IonCardTitle className='Ion-Card-Title'>Nombre: {product.name}</IonCardTitle>
                <IonCardSubtitle className='Ion-Card-SubTitle'>Precio: {product.price}</IonCardSubtitle>
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
