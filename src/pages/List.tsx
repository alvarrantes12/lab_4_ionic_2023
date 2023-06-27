import './List.css';
import { useHistory } from 'react-router-dom';
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
  IonButton,
} from "@ionic/react"

import ApiMethods from '../commons/ApiMethods';

import { environment } from '../environments/environment.dev';

const List: React.FC = () => {

  const { data } = ApiMethods(`${environment.apiEndpoint}/products`)
  
  const history = useHistory();
  const handleCrearClick = () => {
    history.push('/pages/form/FormCreate');
    window.location.reload();
  };
  

  if (!data) {
    return <h1>Cargando...</h1>
  } else {
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
            return (
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Nombre: {product.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__SubTitle'>Precio: {product.price}</IonCardSubtitle>
                  <IonCardSubtitle className='Ion__Card__SubTitle'>ID: {product.id}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            )
          })}

          <IonButton expand='block' color='danger' onClick={handleCrearClick}>
            Crear Producto
          </IonButton>
        </IonContent>
      </IonPage>
    )
  }
};

export default List;
