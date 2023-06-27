
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
  IonItem,
  IonLabel,
  IonSpinner,
  IonButton
} from "@ionic/react";
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/enviroment.dev';


const List: React.FC = () => {

  const {data, refetch} = ApiMethods(`${environment.apiEndpoint}/products`)

  if(!data){
    
    return <h1>
      <IonItem>
        <IonLabel>Cargando...</IonLabel>
        <IonSpinner name="circles"></IonSpinner>
      </IonItem>
    </h1>

  }else{
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Laboratorio 4 Ionic #4
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((product: any) => {
            return (
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Identificador: {product.id}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__Subtitle'>Producto: {product.name}</IonCardSubtitle>
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
