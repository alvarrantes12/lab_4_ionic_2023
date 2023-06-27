import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import ApiMethods from '../../commons/ApiMethods';
import { enviroment } from '../../enviroments/enviroment.dev';
import { useHistory } from 'react-router-dom';

const Edit: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { putMethod } = ApiMethods(`${enviroment.apiEndpoint}/products`); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name, price);
        setMessage('Editado correctamente');
        setId('');
        setName('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>ID</IonLabel>
                        <IonInput 
                        value={id} 
                        onIonChange={(e) => setId(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
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
                    <IonButton type="submit" expand="full">Editar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand="full">Volver a la Lista</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Edit;