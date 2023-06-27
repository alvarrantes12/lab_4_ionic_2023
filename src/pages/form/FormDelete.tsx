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

const Delete: React.FC = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { deleteMethod } = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteMethod(id);
        setMessage('Editado correctamente');
        setId('');
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
                        Eliminar
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1 style={{ marginLeft: '20px' }}>{message}</h1>
                <form onSubmit={handleSubmit} style={{ marginTop: '50px', marginLeft: '20px', marginRight: '20px' }}>
                    <IonItem>
                        <IonLabel position='floating'>ID del productoo</IonLabel>
                        <IonInput
                            value={id}
                            onIonChange={(e) => setId(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Eliminar</IonButton>
                    <IonButton onClick={handleRedirect} expand='full'>Ir a la lista</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default Delete;