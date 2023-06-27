import React, {useState} from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import ApiMethods from '../../commons/ApiMethods';
import { environment } from '../../environments/environmen.dev';
import { useHistory } from 'react-router';
import './Form.css'; 

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {postMethod} = ApiMethods (`${environment.apiEndpoint}/products`);

    const handleRedirect = () => {
        history.push('/pages/List')
        window.location.reload()
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postMethod(name, price);
        setMessage('Creado correctamente')
        setName('');
        setPrice('');
    }
    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} className="form-container">
                    <IonItem className="form-item">
                        <IonLabel position='floating'>Nombre</IonLabel>
                        <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} required></IonInput>
                    </IonItem>
                    <IonItem className="form-item">
                        <IonLabel position='floating'>Precio</IonLabel>
                        <IonInput value={price} onIonChange={(e) => setPrice(e.detail.value!)} required></IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Agregar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Ir a la lista</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Form