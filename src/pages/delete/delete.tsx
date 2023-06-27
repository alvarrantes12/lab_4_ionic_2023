import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonButton,
} from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { enviroment } from "../../enviroment/enviroment.dev";
import { useHistory } from "react-router-dom";

const Delete: React.FC = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const { deleteMethod } = ApiMethods(`${enviroment.apiEndpoint}/products`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    deleteMethod(id);
    setMessage("Eliminado correctamente");
    setId("");
  };

  const handleRedirect = () => {
    history.push("/pages/list");
    window.location.reload();
  };

  return (
    <IonPage>
      <IonContent>
        <form className="Delete__Container" onSubmit={handleSubmit}>
          <h2 className="Delete__Title">Eliminar Producto</h2>
          <IonItem className="Delete__Input">
            <IonLabel position="floating">ID</IonLabel>
            <IonInput
              type="text"
              value={id}
              onIonChange={(e) => setId(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonButton className="Delete__Button" type="submit" expand="full">
            Eliminar
          </IonButton>
        </form>
        <IonButton onClick={handleRedirect} expand="full">
          Ir a la Lista
        </IonButton>
        <h1 style={{ textAlign: "center" }}>{message}</h1>
      </IonContent>
    </IonPage>
  );
};

export default Delete;
