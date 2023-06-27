import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import { environment } from '../../environments/environment.dev';
import ApiMethods from '../../commons/ApiMethods';
import { useHistory } from 'react-router-dom'

const FormCreate: React.FC = () => {
    const [name, setName] = useState(''); 
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {createMethod} = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createMethod(name, price);
        setMessage('Creado exitosamente');
        setName('');
        setPrice('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <h1 style={{textAlign: 'center'}}>Crear producto</h1>
            <IonContent>
                <h2 style={{textAlign: 'center'}}>{message}</h2>
                <form onSubmit= { handleSubmit } style={{marginTop: '50px', marginLeft: '20px', marginRight: '20px'}}>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Nombre de producto</IonLabel>
                        <IonInput value={name} onIonChange={ (e) => setName(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Precio de producto</IonLabel>
                        <IonInput value={price} onIonChange={ (e) => setPrice(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Crear</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Regresar</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default FormCreate;