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

const New: React.FC = () => {
    const [product_name, setProduct_name] = useState('');
    const [product_price, setProductPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { refetch } = ApiMethods(`${environment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        refetch(product_name, parseInt(product_price));
        setMessage('¡¡Creado correctamente!!');
        setProduct_name('');
        setProductPrice('');
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
                        Crear producto
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
                        <IonLabel position='floating'>Nombre</IonLabel>
                        <IonInput
                            value={product_name} onIonChange={(e) => setProduct_name(e.detail.value!)}
                            required></IonInput>
                    </IonItem>

                    <IonItem style={{ marginBottom: '10px' }}>
                        <IonLabel position='floating'>Precio</IonLabel>
                        <IonInput
                            value={product_price} onIonChange={(e) => setProductPrice(e.detail.value!)}
                            required></IonInput>
                    </IonItem>

                    <IonButton type='submit' expand='full'>Crear</IonButton>
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

export default New;
