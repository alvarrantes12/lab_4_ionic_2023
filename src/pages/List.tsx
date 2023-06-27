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
            <IonCard className="Ion-Card">
              <IonCardHeader>
                <IonCardTitle className="Ion-Card-Title">Id: {product.id}</IonCardTitle>
                <IonCardTitle className="Ion-Card-Title">Nombre: {product.name}</IonCardTitle>
                <IonCardSubtitle className="Ion-Card-SubTitle">Precio: {product.price}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          )
        })}

        <IonButton className='Ion-Button' expand='block' color='danger' onClick={handleRedirect}>
          Agregar
        </IonButton>
      </IonContent>
    </IonPage>
    )
  }
};

export default List;