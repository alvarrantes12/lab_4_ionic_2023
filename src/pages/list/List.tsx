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
  IonButton
} from '@ionic/react';
import { environment } from '../../environments/environment.dev';
import ApiMethods from '../../commons/ApiMethods';

const List: React.FC = () => {
  const { data, refetch } = ApiMethods(`${environment.apiEndpoint}/products`);
  if (!data){
    return <h1> Cargando información</h1>
  } else {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            labCuatro C09317
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data?.map((product: any) => {
            return(
            <IonCard className= 'Ion__Card'>
              <IonCardHeader>
                  <IonCardTitle className= 'Ion__Card__Title'> Nombre {product.name} </IonCardTitle>
                  <IonCardSubtitle className= 'Ion__Card__SubTitle'> Precio {product.price}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
            )
        })}
        <IonButton className = 'Ion_Button' color= "danger" onClick= {refetch} style ={{margin: "15px", height: "35px"}}>
          Refrescar
        </IonButton>
      </IonContent>
    </IonPage>
    )
  }

};

export default List;
