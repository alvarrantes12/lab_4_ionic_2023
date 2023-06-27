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
import ApiMethods from '../../commons/ApiMethods';
import { environment } from '../../environments/environment.dev';

const List: React.FC = () => {
  const { data } = ApiMethods(`${environment.apiEndpoint}/products`);;

  if (!data) {
    return (
      <div className="container">
        <h1 className="Ion__Loading">Cargando...</h1>
      </div>
    );
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Productos SuperMercado
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((product: any) => {
            return (
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__ID'>ID: {product.id}</IonCardTitle>
                  <IonCardTitle className='Ion__Card__Title'>Producto: {product.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__SubTitle'>Precio: {product.price}</IonCardSubtitle>
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
