import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import { environment } from '../../environments/environment.dev';
import ApiMethods from '../../commons/ApiMethods';
import { useHistory } from 'react-router-dom'

const FormEdit: React.FC = () => {
    const [id, setId] = useState('');
    const [productName, setProductName] = useState(''); 
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {putMethod} = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, productName, price);
        setMessage('Editado!');
        setId('');
        setProductName('');
        setPrice('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <h1 style={{textAlign: 'center'}}>Edite sus productos!</h1>
            <IonContent>
                <h2 style={{textAlign: 'center'}}>{message}</h2>
                <form onSubmit= { handleSubmit } style={{marginTop: '50px', marginLeft: '20px', marginRight: '20px'}}>
                    <IonItem>
                        <IonLabel position='floating'>ID del producto</IonLabel>
                        <IonInput value={id} onIonChange={ (e) => setId(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Nuevo nombre del producto</IonLabel>
                        <IonInput value={productName} onIonChange={ (e) => setProductName(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Nuevo precio del producto</IonLabel>
                        <IonInput value={price} onIonChange={ (e) => setPrice(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Editar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Regresar</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default FormEdit;