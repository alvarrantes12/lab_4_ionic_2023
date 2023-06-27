import React, {useState} from "react";
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { environment } from "../../environments/enviroment.dev";
import { useHistory } from "react-router-dom";

const DeleteProduct: React.FC = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    const { deleteMethod } = ApiMethods(`${environment.apiEndpoint}/products`);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteMethod(id); //función deleteMethod para eliminar el producto
        setMessage('El producto ha sido eliminado correctamente')
        setId('');


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
                        <IonLabel position='floating'>ID</IonLabel>
                        <IonInput 
                            value={id} 
                            onIonChange={(e) => setId(e.detail.value!)} 
                            required></IonInput>
                    </IonItem>
                    <IonButton type='submit' color= 'warning'>Eliminar producto</IonButton>
                </form>
                <IonButton onClick={handleRedirect} color ='secondary'>Volver a la pagina principal</IonButton>
            </IonContent>
        </IonPage>
    )

}
export default DeleteProduct;