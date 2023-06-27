import './Form.css';
import React, { useState } from "react";
import {
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonButton,
    IonTitle,
    IonHeader,
    IonToolbar
} from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom";

const Form: React.FC = () => {
    const [id, setId] = useState('');
    const [editProduct_name, setEditProduct_name] = useState('');
    const [editProduct_price, setEditProductPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { putMethod } = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, editProduct_name, parseInt(editProduct_price));
        setMessage('¡¡Editado correctamente!!');
        setId('');
        setEditProduct_name('');
        setEditProductPrice('');
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
                        Editar producto
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
                    <IonItem>
                        <IonLabel position='floating'>ID</IonLabel>
                        <IonInput
                            value={id} onIonChange={(e) => setId(e.detail.value!)}
                            required></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position='floating'>Nombre</IonLabel>
                        <IonInput
                            value={editProduct_name} onIonChange={(e) => setEditProduct_name(e.detail.value!)}
                            required></IonInput>
                    </IonItem>

                    <IonItem style={{ marginBottom: '10px' }}>
                        <IonLabel position='floating'>Precio</IonLabel>
                        <IonInput
                            value={editProduct_price} onIonChange={(e) => setEditProductPrice(e.detail.value!)}
                            required></IonInput>
                    </IonItem>

                    <IonButton type='submit' expand='full'>Editar</IonButton>
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

export default Form;
