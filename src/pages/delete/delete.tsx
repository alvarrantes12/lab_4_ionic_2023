import React, {useState} from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import ApiMethods from '../../commons/ApiMethods';
import { enviroment } from '../../enviroment/enviroment.dev';
import { useHistory } from 'react-router-dom';

const delte: React.FC = () => {
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { deleteProduct } = ApiMethods(`${enviroment.apiEndpoint}/products`)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteProduct(id);
        setMessage('Eliminado correctamente');
        setPrice('');
        setName('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '10px'}}>                   
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel  position="floating">Id</IonLabel>
                        <IonInput 
                        value={id} 
                        onIonChange={(e) => setId(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Elimninar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Ir a la Lista</IonButton>
            </IonContent>
        </IonPage>
    )

}

export default delte;