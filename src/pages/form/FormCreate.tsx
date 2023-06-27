import React,{useState} from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom"

const FormCreate: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const [supermarketId, setSupermarketId] = useState('');
    const history = useHistory();

    const {createMethod} = ApiMethods(`${environment.apiEndPoint}/products`)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createMethod(name, price, supermarketId);
        setMessage('Creado correctamente');
        setName('');
        setId('')
        setPrice('');
        setSupermarketId('')
    }

    const handleRedirect = () => {
        history.push('/pages/List')
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '20px'}}>

                    <IonItem>
                        <IonLabel>NAME</IonLabel>
                        <IonInput style={{marginBottom: '20px'}}
                            value={name} 
                            onIonChange={(e) => setName(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>PRICE</IonLabel>
                        <IonInput style={{marginBottom: '20px'}}
                            value={price} 
                            onIonChange={(e) => setPrice(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>ID Supermarket</IonLabel>
                        <IonInput style={{marginBottom: '20px'}}
                            value={supermarketId}  
                            onIonChange={(e) => setSupermarketId(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton type="submit" expand='full'>CREAR</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Ir a la Lista</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default FormCreate;