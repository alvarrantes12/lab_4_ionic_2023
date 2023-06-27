import React, {useState} from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/enviroment.dev";
import { useHistory } from "react-router-dom";

const CreateProduct: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    const { createProduct } = ApiMethods(`${environment.apiEndpoint}/products`);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createProduct(name, price);//función createProduct para crear el producto
        setMessage('El producto ha sido creado correctamente')
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
                
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Nombre del Producto</IonLabel>
                        <IonInput 
                            value={name} 
                            onIonChange={(e) => setName(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>

                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Precio del Producto</IonLabel>
                        <IonInput 
                            value={price} 
                            onIonChange={(e) => setPrice(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonButton type='submit' color ='light' >Crear producto</IonButton>
                </form>
                <IonButton onClick={handleRedirect} color ='secondary' >Volver a la pagina principal</IonButton>
            </IonContent>
        </IonPage>
    )

}
export default CreateProduct;