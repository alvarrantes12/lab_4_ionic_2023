import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import { environment } from '../../environments/environment.dev';
import ApiMethods from '../../commons/ApiMethods';
import { useHistory } from 'react-router-dom'

const FormDelete: React.FC = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {deleteMethod} = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteMethod(id);
        setMessage('Borrado exitosamente');
        setId('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <h1 style={{textAlign: 'center'}}>Eliminar producto</h1>
            <IonContent>
                <h2 style={{textAlign: 'center'}}>{message}</h2>
                <form onSubmit= { handleSubmit } style={{marginTop: '50px', marginLeft: '20px', marginRight: '20px'}}>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>ID de producto</IonLabel>
                        <IonInput value={id} onIonChange={ (e) => setId(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Eliminar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Regresar</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default FormDelete;