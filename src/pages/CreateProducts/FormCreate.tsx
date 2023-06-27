import React, { useState } from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom";

const Form: React.FC = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const { refetch } = ApiMethods(`${environment.apiEndpoint}/products`);
    const [message, setMessage] = useState('');
    const history = useHistory();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('Creado correctamente')
        refetch(name, price);
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
                <form onSubmit={handleSubmit} style={{ marginTop: '50px', marginLeft: '30px', marginRight: '30px' }}>
                    <IonItem style={{ marginTop: '20px' }}>
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput
                            type="text"
                            value={name}
                            onIonInput ={(e) => setName(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Price</IonLabel>
                        <IonInput
                            type="number"
                            value={price}
                            onIonInput ={(e) => setPrice(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton style={{ marginTop: '20px' }} expand='full' type="submit">Crear</IonButton>
                </form>
                <IonButton style={{ marginTop: '15px', marginLeft: '30px', marginRight: '30px', backgroundColor: 'red' }} expand='full' onClick={handleRedirect}>Regresar</IonButton>
            </IonContent>
        </IonPage >
    );
};

export default Form;