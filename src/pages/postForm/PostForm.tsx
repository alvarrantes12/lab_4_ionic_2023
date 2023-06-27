import React, {useState} from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom";

const PostForm: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {postMethod} = ApiMethods(`${environment.apiEndpoint}/products`)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postMethod(name, price);
        setMessage('Creado correctamente')
        setPrice('');
        setName('');
    } 

    const handleRedirect = () => {
        history.push('/pages/list');
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Nombre</IonLabel>
                        <IonInput 
                        value={name} 
                        onIonChange={(e) => setName(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Precio</IonLabel>
                        <IonInput 
                        value={price} 
                        onIonChange={(e) => setPrice(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
                    <IonButton type="submit" expand="full">Crear</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand="full" style={{marginLeft: '22px', marginRight: '12px'}}>Volver a la Lista</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default PostForm;