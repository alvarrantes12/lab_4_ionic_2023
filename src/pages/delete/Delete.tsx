import React, { useState } from "react";
import {
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle
} from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom";

const Delete: React.FC = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { deleteMethod } = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteMethod(id);
        setMessage('¡¡Eliminado correctamente!!');
        setId('');
    }

    const handleRedirect = () => {
        history.push('/pages/List')
        window.location.reload();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='Ion__Title'>
                        Eliminar producto
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit}
                    style={{
                        marginLeft: '20px',
                        marginRight: '10px'
                    }}>
                    <IonItem style={{ marginBottom: '10px' }}>
                        <IonLabel position='floating'>ID</IonLabel>
                        <IonInput
                            value={id} onIonChange={(e) => setId(e.detail.value!)}
                            required></IonInput>
                    </IonItem>

                    <IonButton type='submit' expand='full'>Eliminar</IonButton>
                </form>
                <IonButton onClick={handleRedirect}
                    expand='full'
                    style={{
                        marginLeft: '22px',
                        marginRight: '12px'
                    }}>Ir a la lista</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Delete;
