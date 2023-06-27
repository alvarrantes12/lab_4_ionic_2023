import React,{useState} from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/environment.dev";
import { useHistory } from "react-router-dom"

const FormEdit: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {putMethod} = ApiMethods(`${environment.apiEndPoint}/products`)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name, price);
        setMessage('Editado correctamente');
        setName('');
        setId('')
        setPrice('');
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
                        <IonLabel position="floating">ID</IonLabel>
                        <IonInput
                            value={id} 
                            onIonChange={(e) => setId(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>NEW NAME</IonLabel>
                        <IonInput style={{marginBottom: '20px'}}
                            value={name} 
                            onIonChange={(e) => setName(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>NEW PRICE</IonLabel>
                        <IonInput style={{marginBottom: '20px'}}
                            value={price} 
                            onIonChange={(e) => setPrice(e.detail.value!)}
                            required></IonInput>
                    </IonItem>
                    <IonButton type="submit" expand='full'>EDITAR</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Ir a la Lista</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default FormEdit;