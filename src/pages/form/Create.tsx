import React, {useState} from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/enviroment.dev";
import { useHistory } from "react-router-dom";

const Create: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const { postMethod } = ApiMethods(`${environment.apiEndpoint}/products`);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postMethod( name, price);
        setMessage('El producto a sido agregado')
        setName('');
        setPrice('');
    }
    const handleRedirect = () =>{
        history.push('/pages/List');
        window.location.reload();
    }

    return(
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style= {{marginTop: '50px', marginLeft: '20px', marginRight: '10px' }}>
                    <IonItem>
                        <IonLabel position='floating'>Nombre</IonLabel>
                        <IonInput 
                            value={name} 
                            onIonChange={(e) => setName(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>

                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Precio</IonLabel>
                        <IonInput 
                            value={price} 
                            onIonChange={(e) => setPrice(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonButton type='submit' >Crear</IonButton>
                    
                </form>
                <IonButton onClick={handleRedirect} style={{marginLeft: '22px'}}>Lista</IonButton>
            </IonContent>
        </IonPage>
    )
}
export default Create;