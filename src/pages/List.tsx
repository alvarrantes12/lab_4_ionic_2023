import { useHistory } from 'react-router';
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
  IonButton

} from '@ionic/react'
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environmen.dev';

const List: React.FC = () => {
  const history = useHistory();
  const { data } = ApiMethods(`${environment.apiEndpoint}/products`);
  const handleRedirect = () => {
    history.push('/pages/Create')
    window.location.reload()
  }
  if(!data){
    return <h1>Cargando Informacion...</h1>
  } else{
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Productos disponibles
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        { data?.map((product: any) => {
          return(
            <IonCard>
              <IonCardHeader>
                <IonCardTitle >Id: {product.id}</IonCardTitle>
                <IonCardTitle >Nombre: {product.name}</IonCardTitle>
                <IonCardSubtitle >Precio: {product.price}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          )
        })}

        <IonButton expand='block' color='danger' onClick={handleRedirect}>
          Agregar
        </IonButton>
      </IonContent>
    </IonPage>
    )
  }
};

export default List;