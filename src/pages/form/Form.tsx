import React, {useState} from 'react';
import {
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage, 
    IonButton,
    IonText
} from '@ionic/react';
import ApiMethods from '../../commons/ApiMethods';
import { environment } from '../../environments/environment.dev';
import { useHistory } from 'react-router-dom';

const Form: React.FC = () => {
    const [id, setId] = useState('');
    const [product_name, setProductName] = useState('');
    const [product_price, setProductPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {putMethod} = ApiMethods(`${environment.apiEndpoint}/products`)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, product_name, product_price);
        setMessage('Editado correctamente');
        setId('');
        setProductName('');
        setProductPrice('');
    }

    const handleRedirect = () => {
        history.push('/pages/List')
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>
                    <IonItem>
                        <IonLabel position='floating'>
                            ID
                            <IonText color="danger"> (Requerido)</IonText>
                        </IonLabel>
                        <IonInput 
                            value={id} 
                            onIonChange={(e) => setId(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='floating'>
                            Name
                            <IonText color="danger"> (Requerido)</IonText>
                        </IonLabel>
                        <IonInput 
                            value={product_name} 
                            onIonChange={(e) => setProductName(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>
                            Price
                            <IonText color="danger"> (Requerido)</IonText>
                        </IonLabel>
                        <IonInput 
                            value={product_price} 
                            onIonChange={(e) => setProductPrice(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonButton color="secondary" type='submit'>Editar</IonButton>
                </form>
                <IonButton fill="outline" onClick={handleRedirect} style={{marginTop: '10px', marginLeft: '20px', marginRight: '10px'}}>Volver</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Form;