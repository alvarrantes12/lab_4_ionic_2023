import React, {useState} from "react"; 
import {IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton} from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { enviroment } from "../../enviroments/enviroment.dev"
import { useHistory } from "react-router-dom";

const FormDelete: React.FC = () => {
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    const {deleteMethod} = ApiMethods(`${enviroment.apiEndpoint}/products`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteMethod(id);
        setMessage("¡Eliminado correctamente!");
        setId("");
    }

    const handleRedirect = () => {
        history.push("/pages/List");
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1
                style={{
                    textAlign: "center",
                    fontSize: "24px",
                    marginTop: "20px",
                    marginBottom: "40px"
                }}
                >
                Eliminar Producto
                </h1>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: "50px", marginLeft: "20px", marginRight: "10px"}}>
                    <IonItem>
                        <IonLabel position="floating">ID</IonLabel>
                        <IonInput 
                        value={id} 
                        onIonChange={(e) => setId(e.detail.value!)} 
                        required></IonInput>
                    </IonItem>
                    <IonButton type="submit" expand="full">Eliminar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand="full">Ir a la lista de productos</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default FormDelete;