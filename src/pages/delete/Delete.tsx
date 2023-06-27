import React, {useState} from 'react';
import { IonContent,IonInput, IonItem, IonLabel, IonPage, IonButton  } from '@ionic/react';
import ApiMethods from '../../commons/ApiMethods';
import { environment } from '../../environments/environment.dev';
import { useHistory } from 'react-router-dom';

const Delete: React.FC = () => {
 const [id, setId] = useState ('');
 const [message, setMessage] = useState ('');
 const history = useHistory();
 
 const {deleteMethod} = ApiMethods(`${environment.apiEndpoint}/products`);

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    deleteMethod(id);
    setMessage('eliminado correctamente');
    setId('');
 } 
 const handleRedirect = () => {
    history.push('/pages/List');
    window.location.reload();
 }

 return (
    <IonPage>
        <IonContent>
            <h1>{message}</h1>
            <form onSubmit={handleSubmit} style = {{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>
                <IonItem style= {{marginBottom:'20px'}}>
                    <IonLabel position ='floating'>Id</IonLabel>
                    <IonInput 
                     value = {id}
                     onIonChange = {(e) => setId(e.detail.value!)}
                     required></IonInput>
                </IonItem>
                <IonButton type = 'submit'  style ={{margin: "8px", height: "35px"}}> Eliminar</IonButton>
            </form>
            <IonButton onClick ={handleRedirect}  style ={{margin: "22px", height: "35px"}}>Regresar a lista </IonButton>
        </IonContent>
    </IonPage>
 )
}

export default Delete;