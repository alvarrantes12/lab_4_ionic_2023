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

const Create: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const { createMethod } = ApiMethods(`${enviroment.apiEndpoint}/products`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMethod(name, price);
    setMessage("Creado correctamente");
    setName("");
    setPrice(0);
  };

  const handleRedirect = () => {
    history.push("/pages/list");
    window.location.reload();
  };

  return (
    <IonPage>
      <IonContent>
        <form className="Create__Container" onSubmit={handleSubmit}>
          <h2 className="Create__Title">Crear Producto</h2>
          <IonItem className="Create__Input">
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              type="text"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonItem className="Create__Input">
            <IonLabel position="floating">Price</IonLabel>
            <IonInput
              type="number"
              value={price}
              onIonChange={(e) => setPrice(parseInt(e.detail.value!))}
              required
            ></IonInput>
          </IonItem>
          <IonButton className="Create__Button" type="submit" expand="full">
            Crear
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

export default Create;
