import React, { useState } from 'react';
import { IonInput, IonButton, IonLabel, IonPage, IonContent, IonItem } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { enviroment } from "../../enviroment/enviroment.dev";
import { useHistory } from 'react-router-dom';

const form: React.FC = () => {
    const [id, setId] = useState('');
    const { deleteProduct } = ApiMethods(`${enviroment.apiEndpoint}/api/products`);
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await deleteProduct(id);
        if (result.success) {
            setMessage('Se ha borrado correctamente');
            window.location.reload();
        } else {
            setMessage('Hubo un error al intentar borrar el producto');
        }
    }



    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '20px' }}>
                    <IonItem>
                        <IonLabel position="floating">ID</IonLabel>
                        <IonInput value={id}
                                  onIonChange={(e) => setId(e.detail.value!)}
                                  required></IonInput>
                    </IonItem>
                    <IonButton type="submit" expand="block" color="danger">Borrar</IonButton>
                    <IonButton onClick={handleRedirect}  expand="block" color="secondary">Regresar</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default form;