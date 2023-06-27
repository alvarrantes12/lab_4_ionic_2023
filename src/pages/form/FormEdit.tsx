import React, { useState } from 'react';
import ApiMethods from '../../commons/ApiMethods';
import { environment } from '../../environments/environment.dev';
import { useHistory } from 'react-router';
import { IonContent,
    IonInput,
    IonItem,
    IonLabel, 
    IonPage, 
    IonButton,
    IonTitle,
    IonHeader, 
    IonToolbar } from '@ionic/react';

const Create: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { putMethod } = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name, price);
        setMessage('Editado correctamente');
        setName('');
        setPrice('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Editar
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1 style={{ marginLeft: '20px' }}>{message}</h1>
                <form onSubmit={handleSubmit} style={{ marginTop: '50px', marginLeft: '20px', marginRight: '20px' }}>
                    <IonItem>
                        <IonLabel position='floating'>ID del producto</IonLabel>
                        <IonInput
                            value={id}
                            onIonChange={(e) => setId(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='floating'>Nombre</IonLabel>
                        <IonInput
                            value={name}
                            onIonChange={(e) => setName(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem style={{ marginBottom: '20px' }}>
                        <IonLabel position='floating'>Precio</IonLabel>
                        <IonInput
                            type="number"
                            value={price}
                            onIonChange={(e) => setPrice(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Editar</IonButton>
                    <IonButton onClick={handleRedirect} expand='full'>Ir a la lista</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default Create;