import React, { useState } from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom";

const Form: React.FC = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const {putMethod} = ApiMethods(`${environment.apiEndpoint}/products`);
    const [message, setMessage] = useState('');
    const history = useHistory();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('Eliminado correctamente');
        putMethod(id, name, price);
        setId('');
        setName('');
        setPrice('');
    };
    const handleRedirect = () => {
        setMessage('');
        history.push('/pages/ListProducts/List');
        window.location.reload();
    };
    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft:'30px', marginRight:'30px'}}>
                    <IonItem>
                        <IonLabel position="floating">Id</IonLabel>
                        <IonInput
                            type="number" 
                            value={id} 
                            onIonInput={(e) => setId(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonItem style={{marginTop: '20px'}}>
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput
                            type="text" 
                            value={name} 
                            onIonInput={(e) => setName(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Price</IonLabel>
                        <IonInput
                            type="number" 
                            value={price} 
                            onIonInput={(e) => setPrice(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonButton style={{marginTop: '20px'}} expand='full' type="submit">Editar</IonButton>
                </form>
                <IonButton style={{marginTop: '15px', marginLeft:'30px', marginRight:'30px'}} expand='full' onClick={handleRedirect}>Regresar</IonButton>
            </IonContent>
        </IonPage >
    );
};

export default Form;